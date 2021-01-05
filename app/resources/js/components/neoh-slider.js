import Swiper from "swiper";
import CssVariables from '../utils/css-variables'

const SWIPER_SELECTOR = '.js__neohslider';

let initialized = false, swiperInitialized = false, swiperObserver, swiperInstance, swiperEl;

function startNeohSwiper() {
    if (!swiperInitialized) {
        let navigationPrev = document.querySelector('.neohslider__navigation--prev');
        if (navigationPrev) {
            navigationPrev.classList.add('neohslider__navigation--hide');
        }

        swiperInstance = new Swiper(SWIPER_SELECTOR, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1.4,
            spaceBetween: CssVariables.innerGutterMobile,
            centeredSlides: true,
            centerInsufficientSlides: true,
            breakpoints: {
                560: {
                    slidesPerView: 1.6,
                    centeredSlides: true,
                },
                [CssVariables.tabletBreakpoint]: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: CssVariables.innerGutterTablet,
                    centeredSlides: false,
                    centeredSlidesBounds: true,
                },
                [CssVariables.desktopBreakpoint]: {
                    slidesPerView: 3,
                    spaceBetween: CssVariables.innerGutterDesktop,
                    centeredSlidesBounds: true,
                    centeredSlides: false,
                },
                1800: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                    spaceBetween: CssVariables.innerGutterDesktopWide,
                    centeredSlidesBounds: true,
                    centeredSlides: false,
                }
            },

            navigation: {
                nextEl: '.neohslider__navigation--next',
                prevEl: '.neohslider__navigation--prev',
            },

            on: {
                slideChange: function () {
                    if (navigationPrev) navigationPrev.classList.remove('neohslider__navigation--hide')
                }
            }
        });


        setTimeout(() => {
            if (Array.isArray(swiperInstance)) {
                swiperInstance.forEach(swiper => swiper.autoplay.start())
            } else {
                swiperInstance.autoplay.start()
            }
        }, 500)

        swiperInitialized = true;
    }
}


export default {
    init(useObserver) {
        swiperEl = document.querySelector(SWIPER_SELECTOR);
        let swiperSlides = swiperEl ? swiperEl.querySelectorAll('.swiper-slide') : [];
        if (swiperEl && swiperSlides.length > 1) {

            if (useObserver) {
                swiperObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            startNeohSwiper()
                        }
                    })
                }, {
                    root: null,
                    rootMargin: "100px",
                    threshold: [0, 0.25, 0.5, 1]
                });

                swiperObserver.observe(swiperEl);
            } else {
                startNeohSwiper();
            }
            initialized = true;
        } else {
            if (swiperEl) {
                let swiperWrapper = swiperEl.querySelector('.swiper-wrapper');
                swiperWrapper.classList.add('neohslider__swiper-wrapper--centered');

                let navigation = swiperEl.querySelectorAll('.neohslider__navigation');
                navigation.forEach(el => el.classList.add('neohslider__navigation--hide'));

                swiperSlides.forEach(el => el.classList.add('neohslider__card--width'));
            }
        }
    },
    destroy() {
        if (initialized) {
            if (swiperObserver) swiperObserver.disconnect();

            if (swiperInstance) {
                if (Array.isArray(swiperInstance)) {
                    swiperInstance.forEach(swiper => swiper.destroy(true, true))
                } else {
                    swiperInstance.destroy(true, true);
                }
                swiperInstance = null;
            }
            initialized = false;
            swiperInitialized = false;
        }
    }
}