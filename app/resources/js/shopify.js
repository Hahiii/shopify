import Client from 'shopify-buy';
import Cookies from 'js-cookie';
import delegate from 'delegate';
import cssVariables from "./utils/css-variables";
import EventEmitter from './utils/event-emitter';
import Header from './header';
import Nav from './nav';
import AssetResolver from './utils/asset-resolver';
import {shouldUsePrismicVariants} from "./utils/shopify-integration";
import {initializeClient, loadShopifyStorefrontProducts} from './utils/shopify-client';


let client, products, checkout, cartState = [], cartWindow, cartItemTemplate, updatingCheckout = false, cartCheckout,
    cartOpen = false, cartTotalPrice, cartContentContainer, cartItemsContainer, cartIconNumbers, cartIconPaths,
    cartMessages, shopifyPrimiscData, apiCallMade = false, updateShopifyCartApiCall, cartDeliveryContainer, deliveryThreshold = 25, enableFreeDeliveryThreshold = false,
    headerMob, interactionOccurred = false, cartBackdrop, cartEmptyContent, cartTeaserContent, cartTimeout, addToCartFired = false,
    cartTeaserMessage, cartTeaserPrice, cartTeaserImage, cartTeaserName, cartTeaserAddToCartButton,
    language = window.data.locale.split('-')[1], shopifyCheckoutDomain = window.data.shopifyCheckoutDomain, shopifyStorefrontApiToken = window.data.shopifyStorefrontApiToken;

const cartShowDuration = 4500;

function addToCart(product, variant, quantity) {
    if (checkout && product && !updatingCheckout) {

        let foundCartItem = cartState.find(cartItem => cartItem.variant.id === variant.id);

        if (foundCartItem) {
            let newQuantity = foundCartItem.quantity + quantity;
            updateCartWindow(variant, newQuantity,);
            addToShopifyCart(variant, quantity);
        } else {
            addToCartWindow(variant, product, quantity);
            addToShopifyCart(variant, quantity);
        }

        // update cart state (we need an array to easily parse through the data, the shopify SDK unfortunately gives us an object)
        if (foundCartItem) foundCartItem.quantity += quantity;
        else {
            let variantToPush = Object.assign({}, variant);
            if (!variantToPush.product) variantToPush.product = product;
            cartState.push({variant: variantToPush, quantity: quantity});
        }
        afterUpdateState(product ? product.handle : null);
        showCartWindow();
        setTimeout(() => {
            if (!interactionOccurred) {
                closeCartWindow();
            }
        }, cartShowDuration)
    }
}

function recalculateCart() {
    let cartItems = document.querySelectorAll('.cart__item');
    let cartStateShowsDiffBetweenShopifyCart = false;
    let foundCartItem = null;

    cartItems.forEach(item => {
        let variantID = item.getAttribute('variant-id');
        if (variantID) {
            // item that is used as empty state offer has no variant id
            let quantity = Number(item.querySelector('input').value);

            if (quantity === 0) {
                item.parentElement.removeChild(item);
            }

            foundCartItem = cartState.find(cartItem => cartItem.variant.id === variantID);

            if (foundCartItem && foundCartItem.quantity === quantity) return;
            else {
                if (quantity > foundCartItem.quantity && window.fbq) {
                    if (window.fbq && !addToCartFired) {
                        fbq('track', 'AddToCart', {product: foundCartItem && foundCartItem.product ? foundCartItem.product.handle : null});
                        addToCartFired = true;
                    }
                }

                if (window.dataLayer) {
                    let product = products.find(product => {
                        for (let i = 0; i < product.variants.length; i++) {
                            if (product.variants[i].id === variantID) return true
                        }
                        return false
                    });

                    if (product) {
                        if (foundCartItem.quantity < quantity) {
                            window.dataLayer.push({event: 'add_to_cart', product: product.handle, quantity: quantity - foundCartItem.quantity})
                        } else {
                            window.dataLayer.push({event: 'remove_from_cart', product: product.handle, quantity: foundCartItem.quantity - quantity})
                        }
                    }
                }

                foundCartItem.quantity = quantity;
                cartStateShowsDiffBetweenShopifyCart = true;
            }
        }
    });

    if (cartStateShowsDiffBetweenShopifyCart) {
        updateShopifyCart();
        if (foundCartItem) afterUpdateState(foundCartItem.variant.product ? foundCartItem.variant.product.handle : null);
    }
}


function addToShopifyCart(variant, quantity) {
    const lineItemsToAdd = [
        {
            variantId: variant.id,
            quantity: quantity,
        }
    ];
    updatingCheckout = true;
    return client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((newCheckout) => afterCheckoutUpdates(newCheckout));
}


function updateShopifyCart() {
    const lineItemsToUpdate = [];

    cartState.forEach(cartItem => {
        for (const itemKey in checkout.lineItems) {
            if (checkout.lineItems[itemKey].variant && checkout.lineItems[itemKey].variant.id === cartItem.variant.id) {
                lineItemsToUpdate.push({
                    id: checkout.lineItems[itemKey].id,
                    quantity: cartItem.quantity
                })
            }
        }
    })


    updatingCheckout = true;

    if (apiCallMade) {
        return updateShopifyCartApiCall;
    } else {
        apiCallMade = true;
        updateShopifyCartApiCall = client.checkout.updateLineItems(checkout.id, lineItemsToUpdate).then((newCheckout) => {
            afterCheckoutUpdates(newCheckout)
            apiCallMade = false;
        });
        return updateShopifyCartApiCall
    }
}


function afterCheckoutUpdates(newCheckout) {
    checkout = newCheckout;
    updateCheckoutHref(checkout.webUrl);
    updatingCheckout = false;
    Cookies.set('shopify_checkout-' + window.data.locale, newCheckout.id);
    return newCheckout;
}

function afterUpdateState(productHandle) {
    updateCartTotal();

    if (productHandle) {
        let totalPrice = getCartTotalPrice();
        if (totalPrice < deliveryThreshold && enableFreeDeliveryThreshold && cartState.length > 0) {
            try {
                let prismicAssociatedPost = shopifyPrimiscData.find(post => post.data.shopify_product_handle === productHandle);

                if (prismicAssociatedPost.data.teaser_product_handle) {
                    let teaserProductDoc = shopifyPrimiscData.find(post => post.data.shopify_product_handle === prismicAssociatedPost.data.teaser_product_handle);

                    let teaserProduct = products.find(_product => _product.handle === teaserProductDoc.data.shopify_product_handle);

                    cartTeaserContent.classList.add('cart__teaser--show');
                    cartTeaserMessage.textContent = prismicAssociatedPost.data.teaser_message;
                    cartTeaserImage.src = teaserProductDoc.data.product_icon.url;
                    cartTeaserName.textContent = teaserProduct.title;
                    cartTeaserAddToCartButton.dataset.shopify = teaserProduct.handle;

                    let formattedPrice = new Intl.NumberFormat(language, {
                        style: 'currency',
                        currency: teaserProduct.variants[0].priceV2.currencyCode
                    }).format(teaserProduct.variants[0].priceV2.amount);
                    cartTeaserPrice.textContent = formattedPrice;
                } else {
                    cartTeaserContent.classList.remove('cart__teaser--show');
                }
            } catch (error) {
                cartTeaserContent.classList.remove('cart__teaser--show');
            }

        } else {
            cartTeaserContent.classList.remove('cart__teaser--show');
        }
    } else {
        cartTeaserContent.classList.remove('cart__teaser--show');
    }
}

function showCartWindow() {
    cartWindow.classList.add('cart__window--open');
    cartBackdrop.classList.add('cart__window__backdrop--show');
    cartOpen = true;
    Header.get().setPreventHeaderHide(true);
}

function closeCartWindow() {
    cartWindow.classList.remove('cart__window--open');
    cartBackdrop.classList.remove('cart__window__backdrop--show');

    cartOpen = false;

    Header.get().setPreventHeaderHide(false);
}

function updateCartWindow(variant, quantity) {
    let itemToUpdate = cartWindow.querySelector(`[variant-id="${variant.id}"]`);

    if (itemToUpdate) {
        let input = itemToUpdate.querySelector('input');
        input.value = Number(quantity);
    }
}

function addToCartWindow(variant, product, quantity) {
    if (cartItemTemplate) {
        let templateClone = cartItemTemplate.content.cloneNode(true);
        let productEl = templateClone.querySelector('.cart__item__name');
        let prismicAssociatedPost = shopifyPrimiscData.find(post => post.data.shopify_product_handle === product.handle);
        let usePrismicVariants = shouldUsePrismicVariants(prismicAssociatedPost);

        if (usePrismicVariants) {
            productEl.textContent = prismicAssociatedPost.data.variant_name ?
                `${product.productType} - ${prismicAssociatedPost.data.variant_name}`
                : product.title;
        } else {
            productEl.textContent = product.variants.length > 1 ? `${product.title} - ${variant.title}` : product.title;
        }
        let priceEl = templateClone.querySelector('.cart__item__price');
        let formattedPrice = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: variant.priceV2.currencyCode
        }).format(variant.priceV2.amount);
        priceEl.textContent = formattedPrice;
        let input = templateClone.querySelector('input');
        input.value = quantity;

        templateClone.firstElementChild.setAttribute('variant-id', variant.id);

        let closeButton = templateClone.querySelector('.cart__item__close');
        closeButton.setAttribute('variant-id', variant.id);

        let img = templateClone.querySelector('img');
        let imgPlaceholder = templateClone.querySelector('.cart__item__image-placeholder');

        if (prismicAssociatedPost) {
            if (prismicAssociatedPost.data.product_icon && prismicAssociatedPost.data.product_icon.url) {
                let newSrc = AssetResolver.resolve(prismicAssociatedPost.data.product_icon.url);
                img.setAttribute('src', newSrc);
            } else {
                img.classList.add('cart__item__image--hide');
                imgPlaceholder.classList.add('cart__item__image-placeholder--show');
            }
        }
        cartItemsContainer.appendChild(templateClone);
    }
}

function removeFromCartWindow(variantId) {
    let elementToRemove = cartWindow.querySelector(`[variant-id="${variantId}"]`);
    if (elementToRemove) {
        cartItemsContainer.removeChild(elementToRemove);
    }
}

function updateCheckoutHref(href) {
    cartCheckout.setAttribute('href', href);
}


function getCartTotalPrice() {
    return cartState.reduce((accumulator, currentItem) => {
        return accumulator + (Number(currentItem.variant.price * currentItem.quantity))
    }, 0);
}

function updateCartTotal() {
    let totalPrice = getCartTotalPrice();
    let formattedTotal = new Intl.NumberFormat(language, {
        style: 'currency',
        currency: checkout.currencyCode
    }).format(totalPrice);
    cartTotalPrice.textContent = formattedTotal;


    if (totalPrice > deliveryThreshold && enableFreeDeliveryThreshold) {
        cartDeliveryContainer.classList.remove('cart__total__inner--hidden');
    } else {
        cartDeliveryContainer.classList.add('cart__total__inner--hidden');
    }

    let totalQuantity = cartState.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

    if (totalQuantity > 0) {
        cartIconPaths.forEach(path => {
            path.style.fill = cssVariables.colorPrimary;
        });
        cartIconNumbers.forEach(el => {
            el.textContent = totalQuantity;
        })
        cartMessages.textContent = null;
        cartContentContainer.classList.remove('cart__content--hide');
        cartEmptyContent.classList.remove('cart__empty--show');

    } else {
        cartIconPaths.forEach(path => {
            path.style.fill = 'none';
        });
        cartIconNumbers.forEach(el => {
            el.textContent = null;
        });

        cartMessages.textContent = cartMessages.dataset.emptyCart;
        cartContentContainer.classList.add('cart__content--hide')
        cartEmptyContent.classList.add('cart__empty--show');
    }
}

function createCheckout(config) {
    let existingCheckout = Cookies.get('shopify_checkout-' + window.data.locale);
    if (existingCheckout) {
        return client.checkout.fetch(existingCheckout)
            .then(checkoutRes => {

                if (!checkoutRes.completedAt) {
                    return client.checkout.create({
                        ...config,
                        lineItems: checkoutRes.lineItems.map(item => ({
                            variantId: item.variant.id,
                            quantity: item.quantity
                        }))
                    })
                        .then(checkoutRes => {

                            checkout = checkoutRes;

                            for (const itemKey in checkoutRes.lineItems) {
                                if (checkoutRes.lineItems[itemKey].variant) {
                                    let product = products.find(product => {
                                        return product.id === checkoutRes.lineItems[itemKey].variant.product.id;
                                    });

                                    let variant = checkoutRes.lineItems[itemKey].variant;

                                    cartState.push({
                                        variant: variant,
                                        quantity: checkoutRes.lineItems[itemKey].quantity
                                    });
                                    addToCartWindow(variant, product, checkoutRes.lineItems[itemKey].quantity);
                                }
                            }

                            return checkoutRes;
                        });

                } else {
                    // if our checkout has already gone through, create a new one
                    Cookies.remove('shopify_checkout-' + window.data.locale);
                    return createCheckout(config);
                }

            })
            .catch(e => {
                Cookies.remove('shopify_checkout-' + window.data.locale);
                return createCheckout(config);
            });
    } else {
        return client.checkout.create(config);
    }
}

export default {
    initShopify: function () {
        cartIconNumbers = document.querySelectorAll('.js__cart-number');
        cartIconPaths = document.querySelectorAll('.js__cart-path');
        cartWindow = document.querySelector('#js__cart-window');
        cartCheckout = cartWindow.querySelector('#js__cart-checkout');
        cartItemsContainer = cartWindow.querySelector('#js__cart-items');
        cartItemTemplate = cartWindow.querySelector('#js__cart-item-template');
        cartTotalPrice = cartWindow.querySelector('#js__cart-total');
        // cartContentContainer = cartWindow.querySelector('#js__cart-total-container');
        cartContentContainer = cartWindow.querySelector('#js__cart-content');
        cartMessages = cartWindow.querySelector('.js__cart-messages');
        headerMob = document.getElementById('js__header-mob');
        cartBackdrop = document.getElementById('js__cart-backdrop');
        cartEmptyContent = document.getElementById('js__cart-empty');
        cartTeaserContent = document.getElementById('js__cart-teaser');
        cartDeliveryContainer = cartWindow.querySelector('#js__cart-delivery');
        if (cartDeliveryContainer) {
            deliveryThreshold = cartDeliveryContainer.dataset.freeDeliveryThreshold;
            enableFreeDeliveryThreshold = cartDeliveryContainer.dataset.enableFreeDeliveryThreshold
        }

        shopifyPrimiscData = window.data.prismicProducts;

        client = initializeClient();

        loadShopifyStorefrontProducts(client).then((res) => {
            products = res;
            const checkoutConfig = {
                // presentmentCurrencyCode: 'USD',
            };

            //preload images
            // products.forEach(product => {
            //     if (product.images && product.images[0]) {
            //         let img = new Image();
            //         img.src = product.images[0].src;
            //     }
            // });

            // initialize our shopping cart
            createCheckout(checkoutConfig).then((res) => {
                afterCheckoutUpdates(res);
                let teaserProduct = cartState[0] ? cartState[0].variant.product : null;
                afterUpdateState(teaserProduct ? teaserProduct.handle : null);
            });


            // Setup our cart's empty state
            let emptyCartOfferName = cartEmptyContent.querySelector('.js__cart-name');
            let emptyCartOfferPrice = cartEmptyContent.querySelector('.js__cart-price');
            let emptyCartButton = cartEmptyContent.querySelector('#js__empty-cart-checkout');
            let productOffer = products.find(product => {
                return product.handle === emptyCartButton.dataset.shopify;
            });

            if (cartTeaserContent) {
                cartTeaserMessage = cartTeaserContent.querySelector('#js__cart-teaser-message');
                cartTeaserPrice = cartTeaserContent.querySelector('.js__cart-price');
                cartTeaserImage = cartTeaserContent.querySelector('#js__cart-teaser-image');
                cartTeaserName = cartTeaserContent.querySelector('.js__cart-name');
                cartTeaserAddToCartButton = cartTeaserContent.querySelector('.js__add-to-cart');
            }

            if (!productOffer) {
                productOffer = products[0];
                emptyCartButton.dataset.shopify = productOffer.handle;
                let emptyCartImage = document.getElementById('js__cart-empty-image');
                let emptyCartProduct = shopifyPrimiscData.find(prismicProduct => prismicProduct.data.shopify_product_handle === productOffer.handle);
                emptyCartImage.src = emptyCartProduct.data.product_icon.url;
            }

            if (productOffer) {
                emptyCartOfferName.textContent = productOffer.title;
                let formattedPrice = new Intl.NumberFormat(language, {
                    style: 'currency',
                    currency: productOffer.variants[0].priceV2.currencyCode
                }).format(productOffer.variants[0].priceV2.amount);
                emptyCartOfferPrice.textContent = formattedPrice;
            }

            // close cart when header hides
            Header.get().addListener('hide', closeCartWindow);
        });

        // Detect click on cart icon, which opens the cart window
        delegate('.js__cart', 'click', function () {
            if (cartOpen) closeCartWindow();
            else {
                showCartWindow();
                Header.get().showHeader();
                if (Nav.get().getNavOpen()) Nav.get().toggleNav();
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'open_cart'
                    })
                }
            }
        });

        // detect click on link within rich text, which takes us away from the cart
        let cartRichText = document.getElementById('js__cart-rich-text');
        if (cartRichText) {
            cartRichText.addEventListener('click', function (e) {
                if (e.target.tagName.toLowerCase() === 'a' && cartOpen) closeCartWindow();
            })
        }

        // Detect click away from cart
        document.addEventListener('click', function (e) {
            if (!cartWindow.contains(e.target) && !e.target.classList.contains('js__add-to-cart')) {
                if (cartOpen && !e.target.classList.contains('js__cart-number')) {
                    closeCartWindow();
                    interactionOccurred = true;
                }
            } else {
                interactionOccurred = true;

                Header.get().showHeader();

                if (cartTimeout) clearTimeout(cartTimeout);
                cartTimeout = setTimeout(() => interactionOccurred = false, cartShowDuration);
            }
        });


        // Detect click on add to cart button, which increments cart value by 1
        delegate('.js__add-to-cart', 'click', function (e) {
            if (e.delegateTarget.dataset.shopify) {

                let product = products.find(product => {
                    return product.handle === e.delegateTarget.dataset.shopify;
                });

                let productVariant;
                if (e.delegateTarget.dataset.shopifyVariant) {
                    productVariant = product.variants.find(_variant => _variant.title === e.delegateTarget.dataset.shopifyVariant);
                } else {
                    productVariant = product.variants[0];
                }

                if (e.delegateTarget.dataset.shopifyVariant) {
                    addToCart(product, productVariant, 1, e.delegateTarget.dataset.shopifyVariant);
                } else {
                    addToCart(product, productVariant, 1);
                }

                if (window.fbq && !addToCartFired) {
                    fbq('track', 'AddToCart', {product: product.handle});
                    addToCartFired = true;
                }

                if (window.dataLayer) {
                    window.dataLayer.push({event: 'add_to_cart', product: product.handle, quantity: 1})
                }
            }
        });

        // On click of checkout button, we need to check if there is a difference between the input values (quantities) and our cart state
        delegate('#js__cart-checkout', 'click', function (e) {
            e.preventDefault();
            let cartItems = document.querySelectorAll('.cart__item');
            let cartStateShowsDiffBetweenShopifyCart = false;
            let foundCartItem = null;

            cartItems.forEach(item => {
                let variantID = item.getAttribute('variant-id');
                if (variantID) {
                    // item that is used as empty state offer has no variant id
                    let quantity = Number(item.querySelector('input').value);


                    foundCartItem = cartState.find(cartItem => cartItem.variant.id === variantID);

                    if (foundCartItem && foundCartItem.quantity === quantity) return;
                    else {
                        foundCartItem.quantity = quantity;
                        cartStateShowsDiffBetweenShopifyCart = true;
                    }
                }
            });

            if (cartStateShowsDiffBetweenShopifyCart) {
                updateShopifyCart().then(res => location.href = res.webUrl);
            } else {
                location.href = e.delegateTarget.href;
            }

        });

        // Remove an item from the cart
        delegate('.js__cart-remove', 'click', function (e) {
            let variantId = e.delegateTarget.getAttribute('variant-id');
            if (variantId) {
                // find product using the variant id
                let foundIndex = cartState.findIndex(item => item.variant.id === variantId);
                let quantity;

                if (foundIndex > -1) {
                    let idToRemove;
                    for (const itemKey in checkout.lineItems) {
                        if (checkout.lineItems[itemKey].variant && checkout.lineItems[itemKey].variant.id === variantId) {
                            idToRemove = checkout.lineItems[itemKey].id;
                            quantity = checkout.lineItems[itemKey].quantity;
                        }
                    }

                    // remove the product form our shopify cart
                    if (idToRemove) {
                        updatingCheckout = true;
                        client.checkout.removeLineItems(checkout.id, [idToRemove]).then(newCheckout => {
                            checkout = newCheckout;
                            // remove el from cart window

                            afterCheckoutUpdates(newCheckout);
                        })
                        cartState.splice(foundIndex, 1);
                        removeFromCartWindow(variantId);

                        let removedProduct;
                        if (cartState[0]) {
                            products.forEach(_product => {
                                _product.variants.forEach(variant => {
                                    if (variant.id === cartState[0].variant.id) {
                                        removedProduct = _product;
                                    }
                                })
                            });
                        }
                        afterUpdateState(removedProduct ? removedProduct.handle : null);


                        if (window.dataLayer) {
                            let product = products.find(product => {
                                for (let i = 0; i < product.variants.length; i++) {
                                    if (product.variants[i].id === variantId) return true
                                }
                                return false
                            });

                            window.dataLayer.push({event: 'remove_from_cart', product: product.handle, quantity: quantity})
                        }
                    }
                }

            }
        });

        // when the user changes input value of a product in our cart:
        delegate('.js__cart-number', 'focusout', function (e) {
            recalculateCart();
        });

        delegate('.js__cart-number', 'keyup', function (e) {
            if (e.code === 'Enter' || e.keyCode === 13) {
                if (e.delegateTarget.blur) e.delegateTarget.blur();
            }
        });


        delegate('.js__buy-amazon', 'click', function () {
            if (window.fbq) {
                if (!addToCartFired) {
                    fbq('track', 'AddToCart', {amazon: true});
                    addToCartFired = true;
                }
                fbq('track', 'InitiateCheckout', {amazon: true});
            }
        });

        delegate('.js__lead-to-store', 'click', function () {
            if (window.fbq) fbq('track', 'Lead');
        });

        delegate('.js__dropdown-item', 'click', function (e) {
            console.log(e)
            e.stopPropagation();
        });


        // button for immediate add to cart and checkout
        delegate('.js__immediate-checkout', 'click', function (e) {
            let product = products.find(product => {
                return product.handle === e.delegateTarget.dataset.shopify;
            });
            let button = e.delegateTarget

            let productVariant = product.variants[0];
            let savedText = button.textContent
            if (button.dataset.waitingText) {
                button.textContent = button.dataset.waitingText
            }

            const immediateCheckoutWithRetry = (counter) => {
                if (checkout) {
                    const foundCartItem = cartState.find(cartItem => cartItem.variant.id === productVariant.id);
                    if (!foundCartItem) {
                        addToShopifyCart(productVariant, 1)
                            .then(res => {
                                location.href = res.webUrl;
                            })
                    } else {
                        location.href = checkout.webUrl
                    }
                } else {
                    if (counter > 0) {
                        setTimeout(() => {
                            immediateCheckoutWithRetry(--counter)
                        }, 500)
                    } else {
                        button.textContent = savedText
                    }
                }
            }

            immediateCheckoutWithRetry(6);
        })

        return this;
    },

    getProducts: function () {
        return products;
    }
};