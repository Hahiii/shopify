import Header from './header';
import Nav from './nav';
import dropdownFactory from './components/dropdown';
import {shouldUsePrismicVariants} from "./utils/shopify-integration";
import {setupProductDropdownTemplate, initializeProductDropdown} from "./components/product-dropdown";
import delegate from 'delegate';
import Swiper from 'swiper';
import cssVariables from "./utils/css-variables";
import NeohSlider from './components/neoh-slider';
import {subscribeProducts, unsubscribeProducts} from './utils/shopify-client';

let productDropdown, dropdownSelected, productDescriptionContainer, addToCartButton, amazonButtons, initialized = false,
    productInfoTemplates, productInfoContainer, products, dropdown, productBgTemplates, productBgContainer,
    lastSegment, destroyListeners = [], language = window.data.locale.split('-')[1], swiper, recommendedSwiperInitialized = false, recommendedSwiper = null;

let usePrismicVariants;

function initializedWithShopifyProduct(initializedPrismicDoc, initializedShopifyProduct) {
    if (products.length > 0 && initializedShopifyProduct) {
        let productVariantIndex = 0; // this is the index of product.variants
        // if we use shopify variants (all initializedPrismicDocs are the same document)

        // set the button data
        amazonButtons.forEach(button => {
            if (initializedPrismicDoc.data.amazon_button_url.url) {
                button.setAttribute('href', initializedPrismicDoc.data.amazon_button_url.url);
            } else {
                button.classList.add('btn--hide');
            }
        });
        // set the product price
        setPrice(initializedShopifyProduct.variants[productVariantIndex])

        // setup for our product dropdown such as setting the shopify handles, and the price for each in the html
        setupProductDropdownTemplate(productDropdown, products, {usePrismicVariants: usePrismicVariants, fallbackShopifyHandle: initializedPrismicDoc.data.shopify_product_handle})

        initProductDropdowns();

        insertProductInfoTemplate(initializedShopifyProduct.handle, initializedShopifyProduct.variants[productVariantIndex].title);


        let cardsPrices = document.querySelectorAll('.js__store-card-price');
        cardsPrices.forEach(priceDiv => {
            let associatedShopifyProduct = products.find(product => product.handle === priceDiv.dataset.shopify);
            if (associatedShopifyProduct) {
                let variant = associatedShopifyProduct.variants[0];
                let formattedPrice = new Intl.NumberFormat(language, {
                    style: 'currency',
                    currency: variant.priceV2.currencyCode
                }).format(variant.priceV2.amount);
                priceDiv.innerHTML = formattedPrice;
            }
        })
    }
}

function initImageGallery() {
    function selectGalleryImage(e) {
        swiper.slideTo(e.delegateTarget.dataset.index, 0);
    }

    let delegateMouseOver = delegate('.js__store-gallery-image', 'mouseover', selectGalleryImage, false);
    destroyListeners.push(() => delegateMouseOver.destroy());

    let clickListener = delegate('.js__store-gallery-image', 'click', selectGalleryImage, false);
    destroyListeners.push(() => clickListener.destroy());

    initImageGalleryTemplate();
}

function initImageGalleryTemplate() {
    try {
        let galleryImages = document.querySelectorAll('.js__item-image');
        let counter = 0;
        const onLoadImages = () => {
            counter++;
            if (counter === galleryImages.length && galleryImages.length > 1) {
                setTimeout(() => {
                    // swiper messes up sometimes when the images aren't fully rendered yet
                    swiper = new Swiper('.js__item-gallery', {
                        direction: 'horizontal',
                        slidesPerView: 1,
                        on: {
                            slideChange: function () {
                                let imageContainers = document.querySelectorAll('.js__store-gallery-image');
                                imageContainers.forEach(container => container.classList.remove('store__item-thumbnail__inner--selected'));
                                imageContainers[this.activeIndex].classList.add('store__item-thumbnail__inner--selected');
                            }
                        }
                    });
                }, 750);
            }
        }


        galleryImages.forEach(image => {

            if (image.complete) onLoadImages();
            else image.onload = onLoadImages();

        })
    } catch (error) {
        console.log(error)
    }

}

function changeUrl(newLastSegment) {
    let urlSplit = location.href.split('/');
    let lastSegment = location.href.split('/').pop().split('?')[0];

    if (lastSegment !== newLastSegment) {
        urlSplit.pop();
        window.history.pushState({}, '', `${urlSplit.join('/')}/${newLastSegment}`);
    }
}

function insertProductInfoTemplate(productHandle) {
    if (productHandle) {
        if (productInfoTemplates) {
            let associatedProductInfoTemplate;
            let associatedBgTemplate;

            productInfoTemplates.forEach(template => {
                if (template.dataset.shopify === productHandle) associatedProductInfoTemplate = template;
            });

            if (!associatedProductInfoTemplate) {
                productInfoTemplates.forEach(template => {
                    if (template.dataset.shopify === products[0].handle) associatedProductInfoTemplate = template;
                });
            }

            if (associatedProductInfoTemplate) {
                let content = associatedProductInfoTemplate.content.cloneNode(true);

                // remove any existing product info
                if (productInfoContainer.firstElementChild) {
                    productInfoContainer.style.height = productInfoContainer.clientHeight + 'px';
                    productInfoContainer.removeChild(productInfoContainer.firstElementChild);
                }

                productInfoContainer.appendChild(content.firstElementChild);
                // open the first expander el
                // if (expanders[0]) expanders[0].open();
                setTimeout(() => {
                    productInfoContainer.style.height = null;
                }, 400);
            }


            productBgTemplates.forEach(template => {
                if (template.dataset.shopify === productHandle) associatedBgTemplate = template;
            });

            if (associatedBgTemplate) {
                let content = associatedBgTemplate.content.cloneNode(true);

                // remove any existing bg
                if (productBgContainer.firstElementChild) {
                    productBgContainer.removeChild(productBgContainer.firstElementChild);
                }
                productBgContainer.appendChild(content.firstElementChild);
            }
        }
    }
}

function changeProductDescription(shopifyHandle) {
    let descriptionTemplate = document.querySelector(`.js__product-description-template[data-shopify="${shopifyHandle}"]`);
    if (descriptionTemplate) {
        let templateContent = descriptionTemplate.content.cloneNode(true);
        productDescriptionContainer.innerHTML = templateContent.firstElementChild.innerHTML;
    }
}

// function changeNeohSlider(shopifyHandle) {
//     let template = document.querySelector(`.js__product-neoh-slider-template[data-shopify="${shopifyHandle}"]`);
//     if (template) {
//         let templateContent = template.content.cloneNode(true);
//         NeohSlider.destroy()
//         let neohSliderEl = document.querySelector('.js__product-neoh-slider');
//
//         while (neohSliderEl.firstElementChild) {
//             neohSliderEl.removeChild(neohSliderEl.firstElementChild);
//             neohSliderEl.appendChild(templateContent);
//         }
//     }
// }

function setPrice(variant) {
    // sets the price on the sticker
    let productPrice = document.getElementById('js__product-price');
    if (productPrice) {
        let formattedPrice = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: variant.priceV2.currencyCode
        }).format(variant.priceV2.amount);
        productPrice.innerHTML = formattedPrice;
    }
}


function containerUp() {
    if (dropdown && window.innerWidth <= cssVariables.tabletBreakpoint) {
        dropdown.classList.add('store__product-dropdown__container--translate');
    }
}

function containerDown() {
    if (dropdown) {
        dropdown.classList.remove('store__product-dropdown__container--translate');
    }
}

const addGreyHeaderHandler = () => Header.get().toggleMobileGreyHeader(true);
const removeGreyHeaderHandler = () => Header.get().toggleMobileGreyHeader(false);


function insertImageGalleryTemplate(shopifyHandle) {
    let foundTemplate = document.querySelector(`.js__item-gallery-template[data-shopify="${shopifyHandle}"]`);
    swiper && swiper.destroy(true, true);

    if (foundTemplate) {
        let templateContent = foundTemplate.content.cloneNode(true);
        let gallery = document.getElementById('js__item-gallery');
        while (gallery.firstElementChild) {
            gallery.removeChild(gallery.firstElementChild);
        }

        let galleryDiv = templateContent.querySelector('.js__item-gallery');
        gallery.appendChild(galleryDiv);
        let thumbNailDiv = templateContent.querySelector('.js__thumbnails');
        gallery.appendChild(thumbNailDiv);

        initImageGalleryTemplate();

        let product = products.find(product => product.handle === shopifyHandle);

        if (usePrismicVariants) {
            if (product.variants && product.variants[0]) {
                setPrice(product.variants[0]);
            }
        } else {
            let variant = product.variants.find(variant => variant.title === variantName);
            if (variant) setPrice(variant);
        }
    }
}

function initRecommendedProducts() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!recommendedSwiperInitialized) {
                    if (document.querySelectorAll('.js__recommended-card').length > 1) {
                        recommendedSwiper = new Swiper('#js__store-recommended', {
                            direction: 'horizontal',
                            speed: 500,
                            preloadImages: true,
                            watchSlidesVisibility: true,
                            autoplay: {
                                delay: 1800,
                                disableOnInteraction: false
                            },
                            loop: true,
                            loopFillGroupWithBlank: true,
                            slidesPerView: 1.12,
                            spaceBetween: 24,
                            breakpoints: {
                                768: {
                                    slidesPerView: 2.12,
                                },
                                1000: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    autoplay: false
                                },
                                1440: {
                                    slidesPerView: 2
                                }
                            }
                        });
                    }
                    recommendedSwiperInitialized = true;
                }
            }
        })
    }, {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 1]
    });
    let observedEl = document.getElementById('js__store-recommended');
    if (observedEl) observer.observe(observedEl);

    destroyListeners.push(() => {
        if (recommendedSwiper) {
            recommendedSwiper.destroy(true, true);
            recommendedSwiperInitialized = false;
        }
    })
}

function initProductDropdowns() {
    dropdown = document.querySelector('.store__product-dropdown__container');

    let dropdownEl = document.querySelector('.js__dropdown');
    let dropdownItems = dropdownEl.querySelectorAll('.js__dropdown-item');
    let dropdownAbove = document.querySelector('.js__product-above');
    if (dropdownItems.length <= 1) {
        dropdownAbove.classList.add('store__product-dropdown-above--hide');
    }

    const callback = (selectedEl) => {
        try {
            if (usePrismicVariants) {
                changeUrl(selectedEl.dataset.shopify)
                insertProductInfoTemplate(selectedEl.dataset.shopify, selectedEl.dataset.shopifyVariant);
                insertImageGalleryTemplate(selectedEl.dataset.shopify, selectedEl.dataset.shopifyVariant);
                changeProductDescription(selectedEl.dataset.shopify)
            }
        } catch (error) {
            console.log(error)
        }
    }

    initializeProductDropdown(dropdownEl, callback)
}

export default {
    init: function (pageName) {
        let isProductDetailPage = pageName === 'product-detail';

        if (isProductDetailPage) {
            initialized = true;
            let header = Header.get();

            header.toggleMobileGreyHeader(true);
            // hide header CTA button


            header.addListener('hide-start', containerUp);
            header.addListener('show-start', containerDown);
            let nav = Nav.get();
            nav.addListener('open', removeGreyHeaderHandler);
            nav.addListener('close', addGreyHeaderHandler);

            productDropdown = document.querySelector('.js__product-dropdown');
            // dropdownSelected = document.querySelector('.js__dropdown-selected');
            // addToCartButton = document.querySelectorAll('.store__add-to-cart.js__add-to-cart');
            amazonButtons = document.querySelectorAll('.js__buy-amazon');
            productInfoTemplates = document.querySelectorAll('.js__store-product-info');
            productInfoContainer = document.getElementById('js__store-product-info-container');
            productDescriptionContainer = document.getElementById('js__product-description');
            productBgTemplates = document.querySelectorAll('.js__product-bg');
            productBgContainer = document.querySelector('.js__product-bg-container');


            // our product for the page is found by comparing the url slug to the shopify handles
            // url slug => prismic doc => shopify product
            lastSegment = location.href.split('/').pop().split('?')[0];
            let initializedPrismicDoc = window.data.prismicProducts.find(product => product.uid === lastSegment);
            initializedPrismicDoc = initializedPrismicDoc ? initializedPrismicDoc : window.data.prismicProducts[0];

            usePrismicVariants = shouldUsePrismicVariants(initializedPrismicDoc);

            // some of our initialization requires the shopify products first:
            subscribeProducts(res => {
                products = res;
                let initializedShopifyProduct = products.find(product => product.handle === initializedPrismicDoc.data.shopify_product_handle);
                // perform the initial setup for the page now that we have found the right product that we are using
                initializedWithShopifyProduct(initializedPrismicDoc, initializedShopifyProduct);
            });

            // ... other initialization doesn't require the shopify products
            initImageGallery();
            initRecommendedProducts();
            NeohSlider.init(true);
        }
    },
    destroy: function () {
        if (initialized) {
            dropdownFactory.destroy();
            NeohSlider.destroy();

            initialized = false;

            destroyListeners.forEach(func => func());
            destroyListeners = [];
            unsubscribeProducts();

            let header = Header.get();
            header.removeListener('hide-start', containerUp);
            header.removeListener('show-start', containerDown);
            header.toggleMobileGreyHeader(false);

            let nav = Nav.get();
            nav.removeListener('open', removeGreyHeaderHandler);
            nav.removeListener('close', addGreyHeaderHandler);
        }
    }
}