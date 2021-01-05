import NeohSlider from './components/neoh-slider';
import {setupProductDropdownTemplate, initializeProductDropdown} from "./components/product-dropdown";
import {subscribeProducts, unsubscribeProducts} from './utils/shopify-client';

let initialized = false, observer = null;

export default {
    init: function (scriptName) {
        if (scriptName === 'teaser' && !initialized) {
            NeohSlider.init(true)

            let productDropdowns = document.querySelectorAll('.js__product-dropdown');

            subscribeProducts(products => {
                productDropdowns.forEach(productDropdown => {
                    let tasterHandle = productDropdown.dataset.product;
                    setupProductDropdownTemplate(productDropdown, products, {usePrismicVariants: true, fallbackShopifyHandle: tasterHandle, useDropdownIconForTaster: true});

                    initializeProductDropdown(productDropdown)
                });
            })


            let observeEls = document.querySelectorAll('[data-observer-class]');

            let observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!entry.target.dataset.intersectionRatio || entry.intersectionRatio > entry.target.dataset.intersectionRatio) {
                            if (!entry.target.classList.contains(entry.target.dataset.observerClass)) {
                                entry.target.classList.add(entry.target.dataset.observerClass);
                            }
                        }
                    }
                });
            };

            observer = new IntersectionObserver(observerCallback, {
                threshold: [0.15, 0.3, 0.45, 0.6, 0.75, 1],
            });

            observeEls.forEach(el => {
                observer.observe(el);
            });

            let heroImage = document.querySelector('.js__hero-image');
            heroImage.classList.add('hero__image--show');

            initialized = true;
        }
    },
    destroy: function () {
        if (initialized) {
            unsubscribeProducts();
            NeohSlider.destroy();

            if (observer) {
                observer.disconnect();
                observer = null;
            }
            initialized = false;
        }
    }
}