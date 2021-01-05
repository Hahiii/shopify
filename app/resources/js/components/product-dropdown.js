import dropdownFactory from "../components/dropdown";
import normalizeShopifyVariants from '../utils/normalized-shopify-data'
import Asset from '../utils/asset-resolver'

const language = window.data.locale.split('-')[1];

// this rather long function sets up the templating for our product dropdowns. It draws on shopify and prismic data, so it gets rather complex..
// usePrismicVariants refers to whether we have 3 shopify products of the same type, or 1 product with 3 different types ("variants", e.g. clothing sizes )
// our function normalizeShopifyVariants is used to smooth out these differences
// ...so that dropdownData.variants gives us an array of the different types regardless of the usePrismicVariants attribute
export function setupProductDropdownTemplate(productDropdown, products, options = {usePrismicVariants: true, fallbackShopifyHandle: false, useDropdownIconForTaster: false}) {
    let productToLoad = productDropdown.dataset.product;

    const dropdownData = normalizeShopifyVariants(productToLoad, products, options.usePrismicVariants);
    if (productDropdown) {
        let dropdownItemTemplate = productDropdown.querySelector('.js__dropdown-item-template');
        let dropdownMenu = productDropdown.querySelector('.js__dropdown-menu');

        if (dropdownItemTemplate) {
            dropdownData.variants.forEach(variant => {
                try {
                    let clonedListItem = dropdownItemTemplate.content.cloneNode(true).firstElementChild;
                    clonedListItem.setAttribute('data-shopify-variant', options.usePrismicVariants ? '' : variant.data.variant_id);
                    clonedListItem.setAttribute('data-shopify', variant.data.shopify_product_handle);
                    clonedListItem.setAttribute('data-amazon', variant.data.amazon_button_url ? variant.data.amazon_button_url.url : null);
                    clonedListItem.setAttribute('data-uid', variant.uid);

                    let listImage = clonedListItem.querySelector('img');
                    if (variant.data.product_icon && variant.data.product_icon.url && !options.useDropdownIconForTaster) {
                        listImage.src = Asset.resolve(variant.data.product_icon.url);
                        listImage.dataset.src = Asset.resolve(variant.data.product_icon.url);
                        listImage.classList.remove('dropdown__image--hide');
                    }

                    let listTitle = clonedListItem.querySelector('.js__product-title');
                    listTitle.textContent = variant.data.variant_title;
                    let listText = clonedListItem.querySelector('.js__product-text');
                    listText.textContent = variant.data.variant_name ? variant.data.variant_name : variant.data.product_card_title;

                    let price = clonedListItem.querySelector('.js__product-price');
                    let formattedPrice = new Intl.NumberFormat(language, {
                        style: 'currency',
                        currency: variant.priceV2.currencyCode
                    }).format(variant.priceV2.amount);

                    price.textContent = formattedPrice;

                    dropdownMenu.appendChild(clonedListItem);
                } catch (error) {
                    console.log(error)
                }
            });

            dropdownMenu.removeChild(dropdownItemTemplate);
        }

        let dropdownItems = productDropdown.querySelectorAll('.js__dropdown-item');
        let dropdownSelected = productDropdown.querySelector('.js__dropdown-selected');
        let selectedDropdownItem = dropdownItems[0];
        let addToCartButton = document.querySelectorAll(`.js__add-to-cart[data-dropdown="${productDropdown.dataset.dropdown}"]`);


        let lastSegment = location.href.split('/').pop();
        if (dropdownItems.length) {
            dropdownItems.forEach((li, index) => {
                products.forEach(_product => {
                    if (_product.handle === li.dataset.shopify) {
                        if (_product.images && _product.images[0]) li.setAttribute('data-product-image', _product.images[0].src);

                        if (options.usePrismicVariants) {
                            let variant = _product.variants[0];
                            setPricesOnDropdown(li, variant);

                            li.setAttribute('data-available', variant.available);

                            if (li.dataset.shopify === lastSegment) {
                                selectedDropdownItem = li;
                                li.classList.add('dropdown__item--active');
                                dropdownSelected.setAttribute('data-available', variant.available);
                            }
                        } else {
                            _product.variants.forEach((variant) => {
                                if (variant.title === li.dataset.shopifyVariant) {
                                    setPricesOnDropdown(li, variant);
                                    li.setAttribute('data-available', variant.available);
                                    if (index === 0) {
                                        li.classList.add('dropdown__item--active');
                                        dropdownSelected.setAttribute('data-available', variant.available);
                                    }


                                }
                            });
                        }


                    }


                });
            });
        } else {
            // in the case of the mixed package (uses prismic variants but doesn't have a dropdown
            products.forEach(_product => {
                if (_product.handle === dropdownSelected.dataset.shopify) {
                    if (options.usePrismicVariants) {
                        let variant = _product.variants[0];
                        setPricesOnDropdown(dropdownSelected, variant);

                        dropdownSelected.setAttribute('data-available', variant.available);

                    }
                }

                if (dropdownItems[0]) {
                    selectedDropdownItem = dropdownItems[0];
                }
            });
        }

        if (selectedDropdownItem) changeAddToCartButtons(addToCartButton, selectedDropdownItem.dataset.shopify, selectedDropdownItem.dataset.shopifyVariant);

        if (dropdownSelected && selectedDropdownItem) {
            dropdownSelected.querySelector('.js__product-title').textContent = selectedDropdownItem.querySelector('.js__product-title').textContent;
            dropdownSelected.querySelector('.js__product-text').textContent = selectedDropdownItem.querySelector('.js__product-text').textContent;
            dropdownSelected.querySelector('.js__product-price').textContent = selectedDropdownItem.querySelector('.js__product-price').textContent;

            let dropdownItemImage = selectedDropdownItem.querySelector('img');
            let selectedImage = dropdownSelected.querySelector('img');
            if (dropdownItemImage.dataset.src) {
                selectedImage.src = dropdownItemImage.dataset.src;
                selectedImage.classList.remove('dropdown__image--hide');
            } else if (options.useDropdownIconForTaster) {
                selectedImage.classList.remove('dropdown__image--hide');
            }
            if (selectedDropdownItem.dataset.available === 'false') {
                disableButtons(productDropdown.dataset.dropdown, selectedDropdownItem.dataset.shopify, selectedDropdownItem.dataset.shopifyVariant)
            }
        }

    } else {
        let addToCartButton = document.querySelectorAll(`.js__add-to-cart[data-dropdown="${productDropdown.dataset.dropdown}"]`);

        changeAddToCartButtons(addToCartButton, options.fallbackShopifyHandle);
    }

    function changeAddToCartButtons(addToCartButton, shopifyHandle, variantName) {
        // if our selected item doesn't use prismic variants (i.e. different sizes of t-shirt),
        // we give it the dataset.shopifyVariant property on initialization
        addToCartButton.forEach(button => {
            button.setAttribute('data-shopify', shopifyHandle)
            variantName && button.setAttribute('data-shopify-variant', variantName)
        });
    }

    function setPricesOnDropdown(li, variant) {
        let intlInstance = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: variant.priceV2.currencyCode
        });
        let formattedPrice = intlInstance.format(variant.priceV2.amount);
        li.querySelector('.js__product-price').textContent = formattedPrice;

        if (variant.weight) {
            // let weightPrice = variant.priceV2.amount / variant.weight;
            // let formattedWeightPrice = intlInstance.format(weightPrice);
            // let weightPriceEl = li.querySelector('.js__product-weight-price');
            // li.querySelector('.js__product-weight-price').textContent = weightPriceEl.dataset.text.replace('PRICE_HERE', formattedWeightPrice);
        }
    }
}

function toggleDisableButton(button, disable) {
    if (disable) {
        if (button.dataset.notAvailableText) {
            button.textContent = button.dataset.notAvailableText;
        }
        button.classList.add('btn--disabled');
        button.disabled = true;
    } else {
        if (button.dataset.text) {
            button.textContent = button.dataset.text;
        }
        button.classList.remove('btn--disabled');
        button.disabled = false;
    }
}

export const disableButtons = (dropdownID, shopifyHandle, variantName) => {
    try {
        const addToCartButtons = document.querySelectorAll(`.js__add-to-cart[data-dropdown="${dropdownID}"]`);
        const immediateCheckoutButtons = document.querySelectorAll(`.js__immediate-checkout[data-shopify="${shopifyHandle}"]`);

        const forEachButtonCallback = (button) => {
            if (variantName && variantName === button.dataset.shopifyVariant) {
                toggleDisableButton(button, true);
            } else if (!variantName) {
                toggleDisableButton(button, true);
            }
        }

        addToCartButtons.forEach(forEachButtonCallback);
        immediateCheckoutButtons.forEach(forEachButtonCallback);
    } catch (error) {
        console.log(error)
    }
}

// once the template of the dropdown is in place, initializeProductDropdown enables the actual dropdown functionality
export function initializeProductDropdown(dropdownEl, onSelect) {
    const dropdownSelected = document.querySelector('.js__dropdown-selected');
    const addToCartButton = document.querySelectorAll(`.js__add-to-cart[data-dropdown="${dropdownEl.dataset.dropdown}"]`);
    const amazonButtons = document.querySelectorAll('.js__buy-amazon');

    if (dropdownEl) {
        let dropdowns = dropdownFactory.init([{
            el: dropdownEl,
            options: {
                onSelect: (e) => {

                    if (dropdownSelected) {
                        const selectedEl = e.target;
                        dropdownSelected.querySelector('.js__product-text').textContent = selectedEl.querySelector('.js__product-text').textContent;
                        dropdownSelected.querySelector('.js__product-price').textContent = selectedEl.querySelector('.js__product-price').textContent;
                        const img = dropdownSelected.querySelector('img');
                        const liImg = selectedEl.querySelector('img')
                        if (img && liImg) img.src = liImg.src;

                        addToCartButton.forEach(button => {
                            button.setAttribute('data-shopify', selectedEl.dataset.shopify)
                            selectedEl.dataset.shopifyVariant && button.setAttribute('data-shopify-variant', selectedEl.dataset.shopifyVariant);

                            if (selectedEl.dataset.available === 'false') {
                                toggleDisableButton(button, true)
                            } else {
                                toggleDisableButton(button, false)
                            }
                        });

                        amazonButtons.forEach(button => {
                            button.setAttribute('data-shopify', selectedEl.dataset.shopify);
                            if (!selectedEl.dataset.amazon) button.classList.add('btn--hide');
                            else {
                                button.setAttribute('href', selectedEl.dataset.amazon);
                                button.classList.remove('btn--hide');
                            }
                        });


                        onSelect && onSelect(selectedEl)
                    }
                }
            }
        }]);

        return dropdowns;
    }

}



