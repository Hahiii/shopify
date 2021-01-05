import shopifyScript from "./shopify";
import cssVariables from "./utils/css-variables";
import Header from './header';
import delegate from 'delegate';
import {subscribeProducts, unsubscribeProducts} from './utils/shopify-client';


let products, language = window.data.locale.split('-')[1], destroyListeners = [], initialized;


function setPrice(el, variant) {
    if (el) {
        let formattedPrice = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: variant.priceV2.currencyCode
        }).format(variant.priceV2.amount);
        el.innerHTML = formattedPrice;
    }
}

function initializeWithShopifyProducts() {
    let prices = document.querySelectorAll('.js__store-card-price');
    prices.forEach(price => {
        let foundProduct = products.find(product => product.handle === price.dataset.shopify);
        if (foundProduct) setPrice(price, foundProduct.variants[0]);
    })
}

export default {
    init: function (pageName) {
        let isProductOverviewPage = pageName === 'store';
        if (isProductOverviewPage) {
            let header = Header.get();
            initialized = true

            header.toggleMobileGreyHeader(true);

            subscribeProducts(res => {
                products = res;
                initializeWithShopifyProducts();
            });

            let sections = document.querySelectorAll('.js__store-section');

            if (window.innerWidth < cssVariables.tabletBreakpoint) {
                let sectionToHide = document.querySelectorAll('.js__store-section-hidden-mob');
                sectionToHide.forEach(section => {
                    section.classList.add('store__section--hide');
                })

                let header = Header.get();
                header.setPreventHeaderHide(true);

                sections.forEach(section => section.dataset.index > 0 && section.classList.add('store__section--hide'));
            }

            let tabs = document.querySelectorAll('.js__store-tab');
            let tabListener = delegate('.js__store-tab', 'click', function (e) {
                let indexToShow = e.delegateTarget.dataset.index;
                tabs.forEach(tab => tab.dataset.index === indexToShow ? tab.classList.add('store__tab--active') : tab.classList.remove('store__tab--active'));
                sections.forEach(section => section.dataset.index === indexToShow ? section.classList.remove('store__section--hide') : section.classList.add('store__section--hide'));
            });
            destroyListeners.push(() => tabListener.destroy());

            function onResize() {
                if (window.innerWidth > cssVariables.tabletBreakpoint) {
                    sections.forEach(section => section.classList.remove('store__section--hide'));
                    tabs.forEach(tab => tab.dataset.index === '0' ? tab.classList.add('store__tab--active') : tab.classList.remove('store__tab--active'));
                }
            }

            window.addEventListener('resize', onResize);
            destroyListeners.push(() => window.removeEventListener('resize', onResize));

        }
    },
    destroy: function () {
        if (initialized) {
            let header = Header.get();
            header.setPreventHeaderHide(false);
            header.toggleMobileGreyHeader(false);
            unsubscribeProducts();

            destroyListeners.forEach(func => func());
            destroyListeners = [];
            initialized = false;
        }

    }
}