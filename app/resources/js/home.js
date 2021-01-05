import debounce from 'lodash/debounce';
import threeJsBar from './three-crossbars';
import Swup from 'swup';
import throttle from 'lodash/throttle';
import siteLoader from "./loader";
import getDeviceType from "./utils/get-device-type";
import wheelEvents from './utils/wheel-events';
import swipeEvents from './utils/touch-events';
import isTouchDevice from './utils/is-touch-device';
import Swiper from 'swiper';
import {TweenLite} from "gsap/all";
import axios from 'axios';
import cssVariables from "./utils/css-variables";
import Header from './header';
import Nav from './nav';
import NeohSlider from './components/neoh-slider';
import {subscribeProducts, unsubscribeProducts} from './utils/shopify-client';

function Home(contentReplacedCallBack) {
    this.contentReplacedCallBack = contentReplacedCallBack;

    this.init = function (pageName) {
        this.swupInitialized = false;
        this.swup = null;
        this.homeWrapper = null;
        this.swiperInitialized = false;
        this.recommendedSwiperInitialized = false;
        this.recommendedSwiper;

        let isHomePage = pageName === 'home'
        if (isHomePage) {
            this.navCTA = document.querySelector('.js__nav-cta');
            this.homeWrapper = document.getElementById('js__home-wrapper');
            this.initialized = false;
            this.overflowHiddenSet = true;
            this.scrollState = 'free'; // free, animating, free
            // this.endSectionEl = document.getElementById('js__home-end');
            this.midSectionEl = document.getElementById('js__home-mid-section');
            this.homeHeroEl = document.getElementById('js__home-hero');
            this.lastIndexEl = null;
            this.scrollDirection = null;
            this.observer = null;
            this.observer2 = null;
            this.animationTime = window.innerWidth > 500 ? 0.6 : 0.3;
            this.windowHeight = window.innerHeight;
            this.neohBar = threeJsBar();
            this.barAnimationTime = this.neohBar.getHomeAnimationTime();
            this.scrollToCurrentValue = 'home';
            this.firstScroll = true;
            this.scrollUptToHomeAvailable = false;
            this.scrollToMidAvailable = false;
            this.allowOverflowToChange = false;
            this.waitingAnimation = null;
            this.touchInProgress = false;
            this.currentTween = null;
            this.isTouchDevice = isTouchDevice();
            this.currentScrollValue = 0;
            this.debounce = false;
            this.scrollValues = [];
            this.isIpad = /iPad/.test(navigator.platform);
            this.allowDocumentScroll = false;
            this.eventHandlerDebounce = false;
            this.mobileStaticBars = document.querySelectorAll('.js__bar-static-flavor');
            this.carts = document.querySelectorAll('.js__cart-path');
            wheelEvents.init();

            this.fetchIGPosts();
            this.setupRecommendedSwiper();

            NeohSlider.init(true);
            const deviceType = getDeviceType();
            const shouldInitializeTouchDevice = this.isTouchDevice && window.innerWidth <= (cssVariables.desktopBreakpoint - 1) || deviceType === 'tablet' || deviceType === 'mobile'
            if (shouldInitializeTouchDevice) {
                this.setupTouchDevice()
            } else {
                this.setupDesktopScroll();
                this.setupDetailPageTransitions();
            }
            this.initialized = true;

        }
    }

    this.fetchIGPosts = function () {
        axios.get("https://www.instagram.com/neoh/?__a=1")
            .then((data) => {
                    let imageArray = data.data.graphql.user.edge_owner_to_timeline_media.edges;
                    let i;
                    for (i = 0; i < 12; i++) {
                        let node = document.getElementById("neohInstagram");
                        let divNode = document.createElement("div");
                        divNode.setAttribute('class', 'swiper-slide');
                        let imageNode = document.createElement("img");
                        imageNode.setAttribute('data-src', imageArray[i].node.display_url);
                        imageNode.setAttribute('alt', 'Follow NEOH on Instagram');
                        imageNode.setAttribute('class', 'lazyload');
                        node.appendChild(divNode);
                        divNode.appendChild(imageNode);
                    }
                }
            ).then(() => {
            this.setupSwiper();

        }).catch((error) => {
            document.getElementById("neohInstagram").parentNode.parentNode.style.display = 'none';
        })
    }

    this.setupSwiper = function () {
        let observedElInstagram = document.getElementById('instagram-swiper');
        if (observedElInstagram) {
            this.swiper = new Swiper('#instagram-swiper', {
                direction: 'horizontal',
                speed: 500,
                autoplay: {
                    delay: 3099,
                    disableOnInteraction: false
                },
                loop: true,
                loopPreventsSlide: true,
                slidesPerView: 1,
                breakpoints: {
                    1000: {
                        slidesPerView: 2
                    },
                    1440: {
                        slidesPerView: 3
                    }
                }
            });
        }

        let observerInstagram = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    if (this.swiper && !this.swiper.autoplay.running) {
                        this.swiper.autoplay.start();
                    }
                }
            });
        }, {threshold: 0.1});


        observerInstagram.observe(observedElInstagram);

        this.destroyObserverListeners = () => {
            if (observerInstagram) observerInstagram.unobserve(observedElInstagram);
            if (this.swiper) this.swiper.destroy(true, true)
        }
    }

    this.setupRecommendedSwiper = function () {
        let observerRecommended;
        let observedElRecommended = document.getElementById('js__store-recommended');
        if (observedElRecommended) {
            this.recommendedSwiper = new Swiper('#js__store-recommended', {
                direction: 'horizontal',
                speed: 500,
                slidesPerView: 1.12,
                spaceBetween: 24,
                loopFillGroupWithBlank: true,
                breakpoints: {
                    768: {
                        slidesPerView: 2.12,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 2
                    }
                }
            });

            function setCardPrices(products) {
                let cardsPrices = document.querySelectorAll('.js__store-card-price');
                cardsPrices.forEach(priceDiv => {
                    let associatedShopifyProduct = products.find(product => product.handle === priceDiv.dataset.shopify);
                    if (associatedShopifyProduct) {
                        let variant = associatedShopifyProduct.variants[0];
                        let formattedPrice = new Intl.NumberFormat(window.data.locale.split('-')[1], {
                            style: 'currency',
                            currency: variant.priceV2.currencyCode
                        }).format(variant.priceV2.amount);
                        priceDiv.innerHTML = formattedPrice;
                    }
                })
            }

            subscribeProducts(res => {
                setCardPrices(res);
            })


        }
        this.destroyObserverListeners = () => {
            if (observerRecommended) observerRecommended.unobserve(observedElRecommended);
            if (this.recommendedSwiper) this.recommendedSwiper.destroy(true, true);
        }
    }

    this.setupTouchDevice = function () {
        this.homeCTA = document.getElementById('js__cta-home');
        this.midCTA = document.getElementById('js__cta-mid-fixed');
        this.midHeadline = document.getElementById('js__home-mid__headline-fixed');
        this.midText = document.getElementById('js__home__mid-section__text-fixed');

        let midsection = document.getElementById('js__home-mid-section-wrapper');
        if (midsection) midsection.classList.add('home__mid-section--transparent');
        this.midHeadline.classList.add('home__mid-section__headline--hide');
        this.midText.classList.add('home__mid-section__text--hide');

        this.homeCTA.classList.remove('bars__data__container--hide');

        let prevScrollValue = 0;

        let detectScrollTop = throttle(() => {
            let pageYOffset = window.pageYOffset;
            if (Math.abs(pageYOffset - prevScrollValue) > this.windowHeight / 2.1) return;

            if (prevScrollValue > pageYOffset) this.scrollDirection = 'up';
            else if (prevScrollValue < pageYOffset) this.scrollDirection = 'down';
            prevScrollValue = pageYOffset;

            this.checkScrollAnimationLogic(pageYOffset, this.windowHeight);
        }, 50);


        let detectScrollTopDebounce = debounce(() => {
            this.checkScrollAnimationLogic(window.pageYOffset, this.windowHeight);
        }, 80);

        document.addEventListener('scroll', detectScrollTop, false);

        document.addEventListener('scroll', detectScrollTopDebounce, false);

        this.removeScrollListeners = () => {
            document.removeEventListener('scroll', detectScrollTop, false);
            document.removeEventListener('scroll', detectScrollTopDebounce, false);
        }

        this.setupDetailPageTransitionsTouch();
    }

    this.checkScrollAnimationLogic = function (pageYOffset, windowHeight) {
        if (pageYOffset > windowHeight * 0.44) {
            if (pageYOffset < windowHeight * 1.64 && this.scrollDirection === 'down') this.animateNeohBarFlavoursTouchDevice();
            else if (pageYOffset < windowHeight * 1.84 && this.scrollDirection === 'up') this.animateNeohBarFlavoursTouchDevice();
            else this.animateNeohBarHiddenTouchDevice();
        } else {
            this.animateHeroAreaTouchDevice();
        }
    }

    this.animateNeohBarHiddenTouchDevice = function () {
        this.homeCTA.classList.add('bars__data__container--hide');
        this.midCTA.classList.add('bars__data__container--hide');
        this.midHeadline.classList.add('home__mid-section__headline--hide');
        this.midText.classList.add('home__mid-section__text--hide');
        this.navCTA.classList.remove('btn__cta--white');
        // this.endSectionEl.style.opacity = 1;
        this.cartBgChangeToRed();

        this.mobileStaticBars.forEach(bar => {
            bar.classList.remove('home__mid-section__bars-static__bar--show');
        });

        let midSectionMobile = document.getElementById('js__home-mid-section-mobile');
        if (midSectionMobile) midSectionMobile.classList.add('home__mid-section__content--black');
    }

    this.animateNeohBarFlavoursTouchDevice = function () {
        this.homeCTA.classList.add('bars__data__container--hide');

        setTimeout(() => {
            this.homeHeroEl.style.opacity = 0;
            // this.endSectionEl.style.opacity = 0;
            let midSectionMobile = document.getElementById('js__home-mid-section-mobile');
            if (midSectionMobile) midSectionMobile.classList.remove('home__mid-section__content--black');
            this.midCTA.classList.remove('bars__data__container--hide');
            this.midHeadline.classList.remove('home__mid-section__headline--hide');
            this.midText.classList.remove('home__mid-section__text--hide');
            this.navCTA.classList.add('btn__cta--white');
            this.cartBgChangeToBlack();

            this.mobileStaticBars.forEach(bar => {
                bar.classList.add('home__mid-section__bars-static__bar--show');
            })
        }, 100); // wait a bit before showing text
    }

    this.animateHeroAreaTouchDevice = function () {
        this.homeCTA.classList.remove('bars__data__container--hide');

        setTimeout(() => {
            this.homeHeroEl.style.opacity = 1;
            // this.endSectionEl.style.opacity = 0;
            let midSectionMobile = document.getElementById('js__home-mid-section-mobile');
            if (midSectionMobile) midSectionMobile.classList.remove('home__mid-section__content--black');
            this.midCTA.classList.add('bars__data__container--hide');
            this.midHeadline.classList.add('home__mid-section__headline--hide');
            this.midText.classList.add('home__mid-section__text--hide');
            this.navCTA.classList.remove('btn__cta--white');

            this.cartBgChangeToRed();
            this.mobileStaticBars.forEach(bar => {
                bar.classList.remove('home__mid-section__bars-static__bar--show');
            })
        }, 100); // wait a bit before showing text
    }


    this.setupDesktopScroll = function () {
        document.body.style.overflow = 'hidden';

        this.homeCTA = document.getElementById('js__cta-home');
        this.midCTA = document.getElementById('js__cta-mid');
        this.midHeadline = document.getElementById('js__home-mid__headline');
        this.midText = document.getElementById('js__home__mid-section__text');

        // this.homeCTA.style.position = 'absolute';

        let homeMidSectionMobile = document.getElementById('js__home-mid-section-mobile');
        if (homeMidSectionMobile) homeMidSectionMobile.remove();


        if (!siteLoader().getLoaderRemoved()) {
            let loaderRemovedHandler = () => {
                if (this.homeWrapper) {
                    scrollTo(0, 0);
                    this.homeCTA.classList.remove('bars__data__container--hide');

                    document.body.style.overflow = 'hidden'; // hijacking the first scroll...
                    this.allowDocumentScroll = true;
                }
                document.removeEventListener('loaderRemoved', loaderRemovedHandler);
            };

            document.addEventListener('loaderRemoved', loaderRemovedHandler);
        } else {
            this.homeCTA.classList.remove('bars__data__container--hide');
            document.body.style.overflow = 'hidden'; // hijacking the first scroll...
            this.allowDocumentScroll = true;
        }

        this.setupScrollAnimations();

        // this.observer2 = new IntersectionObserver((entries, observer) => {
        //     entries.forEach(entry => {
        //         setTimeout(() => {
        //             if (entry.isIntersecting) {
        //
        //                 if (this.scrollDirection === 'up' && this.scrollState !== 'animating' && this.scrollToCurrentValue !== 'home') {
        //                     if (this.touchInProgress && this.isIpad) this.waitingAnimation = this.scrollToHome;
        //                     else if (!this.isIpad) this.scrollToHome();
        //                 }
        //             }
        //         }, 40);
        //     })
        // }, {
        //     root: null,
        //     rootMargin: "0px",
        //     threshold: [0, 0.25, 0.5, 1]
        // });
        //
        // if (this.homeHeroEl) this.observer2.observe(this.homeHeroEl);


        this.destroyObservers = () => {
            // this.observer2.unobserve(this.homeHeroEl);
            // this.observer = null;
            // this.observer2 = null;
        }

        let resizeEventHandler = debounce(() => {
            if (this.isTouchDevice || window.innerWidth <= cssVariables) return;

            this.animationTime = window.innerWidth > 500 ? 0.6 : 0.3;

            if (this.scrollToCurrentValue === 'home') {
                this.scrollToHome();
            } else if (this.scrollToCurrentValue === 'mid') {
                this.scrollFromHomeToMid();
            }
        }, 200);
        window.addEventListener('resize', resizeEventHandler);

        this.removeResizeEventListeners = () => {
            window.removeEventListener('resize', resizeEventHandler);
        }
    }

    // DESKTOP SCROLL ANIMATIONS
    this.scrollFromHomeToMid = function (byPass) {
        if (this.scrollState === 'animating' && !byPass) return;
        this.homeCTA.classList.add('bars__data__container--hide');
        this.scrollState = 'animating';
        this.overflowHiddenSet = true;
        document.body.style.overflow = 'hidden';
        this.neohBar.setEnableAnimations();
        this.neohBar.animateToFlavours();
        this.midHeadline.classList.remove('home__mid-section__headline--hide');
        this.midText.classList.remove('home__mid-section__text--hide');
        if (!Nav.get().getNavOpen()) {
            Header.get().hideHeader();
            Header.get().setPreventHeaderHide(true);
        }

        setTimeout(() => {
            this.currentTween = TweenLite.to(window, this.animationTime, {
                scrollTo: '#js__home-mid-section', onComplete: () => {

                    if (this.midSectionEl && this.midSectionEl.getBoundingClientRect().top < -50 || this.midSectionEl.getBoundingClientRect().top > 50) {

                        // return setTimeout(() => {
                        //     this.scrollFromHomeToMid(true);
                        // }, 240);
                    } else {
                        setTimeout(() => {
                            if (!Nav.get().getNavOpen()) {
                                Header.get().hideHeader();
                                Header.get().setPreventHeaderHide(false);

                            }
                        }, 400);
                    }
                    this.scrollToCurrentValue = 'mid';
                    this.currentTween = null;
                    this.waitingAnimation = null;

                    this.midCTA.classList.remove('bars__data__container--hide');
                    this.scrollState = 'free';
                    this.scrollUptToHomeAvailable = true;
                    this.allowOverflowToChange = true;
                    this.scrollToMidAvailable = false; // only becomes available upon scroll down
                    this.firstScroll = false;
                }
            });


        }, 60);
    }

    this.scrollFromEndToMid = function (customAnimationTime, byPass) {
        Header.get().setPreventHeaderHide(true);
        this.midCTA.classList.remove('bars__data__container--hide');
        if (this.scrollState === 'animating' && !byPass) return;
        this.scrollState = 'animating';
        this.overflowHiddenSet = true;
        document.body.style.overflow = 'hidden';
        this.midHeadline.classList.remove('home__mid-section__headline--hide');
        this.midText.classList.remove('home__mid-section__text--hide');
        this.neohBar.hide(false);

        setTimeout(() => {
            // this.neohBar.setEnableAnimations();
            // this.neohBar.animateToFlavours();
            this.currentTween = TweenLite.to(window, customAnimationTime ? customAnimationTime : this.animationTime, {
                scrollTo: '#js__home-mid-section', onComplete: () => {

                    if (this.midSectionEl && this.midSectionEl.getBoundingClientRect().top < -50 || this.midSectionEl.getBoundingClientRect().top > 50) {
                        // return setTimeout(() => {
                        //     this.scrollFromEndToMid(null, true);
                        // }, 120);
                    } else {
                        setTimeout(() => {
                            if (!Nav.get().getNavOpen()) {
                                Header.get().hideHeader(true);
                                Header.get().setPreventHeaderHide(false);
                            }
                        }, 200);
                    }
                    this.scrollToCurrentValue = 'mid';
                    this.scrollUptToHomeAvailable = true;
                    this.scrollState = 'free';
                    this.allowOverflowToChange = true;
                    this.neohBar.hide(false);

                    this.currentTween = null;
                    this.waitingAnimation = null;
                    this.scrollToMidAvailable = false; // only becomes available upon scroll down
                }
            });

        }, 60);
    }

    this.scrollToHome = function (byPass) {
        if (this.scrollState === 'animating' && !byPass) return;
        this.scrollState = 'animating';
        this.overflowHiddenSet = true;
        document.body.style.overflow = 'hidden';
        // this.neohBar.setEnableAnimations();
        this.midCTA.classList.add('bars__data__container--hide');
        this.neohBar.animateToHomeDefault();
        this.cartBgChangeToRed();
        this.navCTA.classList.remove('btn__cta--white');
        this.midHeadline.classList.add('home__mid-section__headline--hide');
        this.midText.classList.add('home__mid-section__text--hide');
        this.neohBar.hide(false);

        setTimeout(() => {
            this.currentTween = TweenLite.to(window, this.animationTime, {
                scrollTo: {y: 0}, onComplete: () => {
                    if (window.scrollY > 50) {

                        return setTimeout(() => {
                            this.scrollToHome(true);
                        }, 120);
                    }

                    this.scrollToCurrentValue = 'home';
                    this.scrollDirection = 'down';
                    this.currentTween = null;
                    this.waitingAnimation = null;
                    this.overflowHiddenSet = true;
                    document.body.style.overflow = 'hidden';


                    setTimeout(() => {
                        this.scrollState = 'free';
                        this.homeCTA.classList.remove('bars__data__container--hide');
                        this.firstScroll = true;
                        this.allowOverflowToChange = false;

                    }, 200); // wait for bar animation before allowing scroll

                }
            });
        }, 60);
    }

    this.createOnceEventHandler = function (direction) {
        return (event) => {
            if (!Nav.get().getNavOpen()) {

                if (!this.allowDocumentScroll || this.eventHandlerDebounce) return;

                this.eventHandlerDebounce = true;
                setTimeout(() => {
                    this.eventHandlerDebounce = false;
                }, 120)

                if (direction) {
                    this.scrollDirection = direction;
                } else {
                    this.scrollDirection = event.detail ? event.detail.direction : null;
                }

                if (this.scrollState === "animating") return;

                if (this.overflowHiddenSet && this.allowOverflowToChange) {
                    document.body.style.overflow = '';
                    this.overflowHiddenSet = false;
                    this.allowOverflowToChange = false;
                }

                if (this.scrollDirection === 'down' && this.scrollToCurrentValue === 'mid') {
                    this.scrollToMidAvailable = true;
                }

                if (this.firstScroll && this.scrollDirection === 'down') {
                    // scroll to mid is only triggered by the scroll once handler, in order to reduce bugs
                    this.scrollFromHomeToMid();
                    this.firstScroll = false;
                } else if (this.scrollDirection === 'up' && this.scrollToCurrentValue === 'mid' && !this.scrollToMidAvailable) {
                    this.scrollToHome();
                } else if (this.scrollUptToHomeAvailable && this.scrollDirection === 'up') {
                    this.scrollToHome();
                    this.scrollUptToHomeAvailable = false;
                } else if (this.scrollToMidAvailable && this.scrollDirection === 'up' && this.scrollToCurrentValue !== 'home') {
                    this.scrollFromEndToMid();
                } else {
                    this.scrollUptToHomeAvailable = false;
                }
            }

        }
    }


    this.setupScrollAnimations = function () {

        let eventHandler = this.createOnceEventHandler();
        document.addEventListener('wheelonce', eventHandler);

        this.removeSwipeWheelEventListeners = () => {
            document.removeEventListener('wheelonce', eventHandler);
        }

        let prevScrollValue = 0

        let detectScrollTop = throttle((e) => {
            if (this.scrollState === 'animating' && !Nav.get().getNavOpen()) e.preventDefault();
            let offset = window.pageYOffset
            if (offset < 60) {
                if (this.scrollDirection === 'up') {
                    this.scrollToCurrentValue = 'home';
                    if (this.scrollState !== 'animating') {
                        this.scrollToHome();
                    }
                    this.scrollState = 'free'
                    this.scrollToCurrentValue = 'home';
                }
                this.scrollDirection = 'down';
                this.firstScroll = true;
            } else {
                const scrollFromLastEl = this.lastIndexEl.getBoundingClientRect().top
                if (scrollFromLastEl < 0) {
                    this.scrollToCurrentValue = 'end';
                    this.scrollToMidAvailable = false;
                    this.scrollUptToHomeAvailable = false;
                    this.neohBar.hide(true);
                    this.cartBgChangeToRed();
                } else if (scrollFromLastEl > 50 && prevScrollValue - offset < 500 && this.scrollDirection === 'up') {
                    this.scrollFromEndToMid()
                } else if (this.midSectionEl && this.midSectionEl.getBoundingClientRect().top < -50) {
                    this.scrollToCurrentValue = 'mid';
                    this.scrollToMidAvailable = true;
                    this.scrollUptToHomeAvailable = false;
                }
            }
            prevScrollValue = offset
        }, 50);


        document.addEventListener('scroll', detectScrollTop, false);


        this.removeScrollListeners = () => {
            // document.removeEventListener('wheel', wheelHandler, {passive: false});
            // document.removeEventListener('DOMMouseScroll', wheelHandler, false);
            document.removeEventListener('scroll', detectScrollTop, false);
        }
    }

    this.setupDetailPageTransitionsTouch = function () {
        let circles = document.querySelectorAll('.js__bars__data');
        let destroyListeners = [];

        circles.forEach(circle => {
            let barCircleClickHandler = (event) => {
                event.preventDefault();
                this.swup.loadPage({
                    url: circle.href,
                    method: 'GET'
                });

                this.destroy();
            };
            circle.addEventListener('click', barCircleClickHandler);
            destroyListeners.push(() => circle.removeEventListener('click', barCircleClickHandler))
        });

        this.removeCircleClickListeners = () => {
            destroyListeners.forEach(destroyFunc => destroyFunc());
        };

        if (!this.swup && !this.swupInitialized) {
            this.swup = new Swup({
                linkSelector: null,
            });
            this.swupInitialized = true;
            let swupHandler = (event) => {
                scrollTo(0, 0);

                let content = document.querySelector('#swup');
                TweenLite.fromTo(content, .24, {opacity: 0}, {
                    opacity: 1
                });

                if (this.swup) {
                    this.contentReplacedCallBack(this.swup);
                    this.swupInitialized = false;
                    this.swup = null;
                }
            }

            this.swup.on('contentReplaced', swupHandler);
        }
    }

    this.setupDetailPageTransitions = function () {
        this.lastIndexEl = document.getElementById('js__home-end-content');

        let fadeOutHomeElements = () => {
            let heroHeadline = document.getElementById('js__hero-headline');
            if (heroHeadline) TweenLite.to(heroHeadline, .5, {opacity: 0});
            let heroTag = document.getElementById('js__home__hero__tag');
            if (heroTag) TweenLite.to(heroTag, .5, {opacity: 0});
            this.homeCTA.classList.add('bars__data__container--hide');
        };

        let barCircleClickHandler = (event) => {
            if (this.scrollState === 'animating' || this.debounce) return;
            this.debounce = true;
            setTimeout(() => {
                this.debounce = false;
            }, 100);

            if (this.isTouchDevice) {
                this.scrollState = 'animating';

                if (this.scrollToCurrentValue === 'home') fadeOutHomeElements();
                else {
                    this.midCTA.classList.add('bars__data__container--hide');
                    this.midHeadline.classList.add('home__mid-section__headline--hide');
                    this.midText.classList.add('home__mid-section__text--hide');

                    let midSectionMobile = document.getElementById('js__home-mid-section-mobile');
                    midSectionMobile.classList.add('home__mid-section__content--black')
                }

                this.neohBar.animateToDetail(event.detail.bar);
                setTimeout(() => {
                    this.scrollState = 'free';
                    this.swup.loadPage({
                        url: event.detail.href,
                        method: 'GET'
                    });
                    this.destroy();
                }, 500);
            } else {

                if (this.scrollToCurrentValue === 'home') {

                    fadeOutHomeElements();

                    this.neohBar.animateToDetail(event.detail.bar);
                    this.scrollState = 'animating';
                    setTimeout(() => {
                        // if (this.currentTween) this.currentTween.pause();
                        this.scrollState = 'free';
                        this.swup.loadPage({
                            url: event.detail.href,
                            method: 'GET'
                        });

                        this.destroy();
                    }, 500);

                } else if (this.scrollToCurrentValue === 'mid' || this.scrollToCurrentValue === 'end') {
                    this.lastIndexEl.style.visibility = 'hidden';
                    let marquee = document.getElementById('js__home-marquee');
                    if (marquee) marquee.classList.add('marquee--hide');

                    this.neohBar.animateToDetail(event.detail.bar);
                    // if (this.currentTween) this.currentTween.pause();
                    // this.scrollState = 'animating';
                    // this.overflowHiddenSet = true;
                    // document.body.style.overflow = 'hidden';

                    this.scrollState = 'free';
                    this.overflowHiddenSet = false;
                    document.body.style.overflow = '';
                    this.midSectionEl.parentElement.classList.add('home__mid-section__content--black');
                    this.midHeadline.classList.add('home__mid-section__headline--hide');
                    this.midText.classList.add('home__mid-section__text--hide');

                    this.swup.loadPage({
                        url: event.detail.href,
                        method: 'GET'
                    });

                    this.destroy();


                    // setTimeout(() => {
                    //     TweenLite.to(window, .6, {
                    //         scrollTo: this.lastIndexEl, onComplete: () => {
                    //             this.scrollState = 'free';
                    //             this.overflowHiddenSet = false;
                    //             document.body.style.overflow = '';
                    //
                    //
                    //             this.swup.loadPage({
                    //                 url: event.detail.href,
                    //                 method: 'GET'
                    //             });
                    //
                    //             this.destroy();
                    //         }
                    //     })
                    // }, 60);
                }
            }


        };

        document.addEventListener('barClick', barCircleClickHandler);
        this.removeCircleClickListeners = () => {
            document.removeEventListener('barClick', barCircleClickHandler);
        };


        if (!this.swup && !this.swupInitialized) {
            this.swup = new Swup({
                linkSelector: null,
            });
            this.swupInitialized = true;
            let swupHandler = (event) => {
                scrollTo(0, 0);

                let content = document.querySelector('#swup');
                TweenLite.fromTo(content, .24, {opacity: 0}, {
                    opacity: 1
                });

                if (this.swup) {
                    this.contentReplacedCallBack(this.swup);
                    this.swupInitialized = false;
                    this.swup = null;
                }
            }

            this.swup.on('contentReplaced', swupHandler);
        }
    }

    this.cartBgChangeToRed = function () {
        this.carts.forEach(cart => {
            if (cart.classList.contains('cart__path--on-red')) {
                cart.classList.remove('cart__path--on-red');
                cart.parentElement.classList.remove('cart--on-red');
            }
        });
        // nav.style.transform = null;
        // nav.style.transitionDelay = null;
    }

    this.cartBgChangeToBlack = function () {
        this.carts.forEach(cart => {
            cart.classList.add('cart__path--on-red');
            cart.parentElement.classList.add('cart--on-red');
        });
    }

    this.destroy = function () {
        if (this.initialized) {
            this.scrollState = 'free';
            document.body.style.overflow = '';
            this.cartBgChangeToRed();

            if (this.swup && this.swupInitialized) this.swup.destroy.bind(this);

            wheelEvents.destroy();

            NeohSlider.destroy();

            unsubscribeProducts();

            [this.removeScrollListeners, this.removeResizeEventListeners, this.removeCircleClickListeners, this.removeSwipeWheelEventListeners, this.destroyObservers, this.destroyObserverListeners]
                .forEach(destroyFunction => {
                    if (destroyFunction) {
                        destroyFunction();
                    }
                    destroyFunction = null;
                });


            this.homeWrapper = null;
            this.swiperInitialized = false;
            this.recommendedSwiperInitialized = false;
            this.recommendedSwiper = null;

            this.navCTA = null;
            this.homeWrapper = null;
            this.initialized = false;
            this.overflowHiddenSet = true;
            // this.endSectionEl = document.getElementById('js__home-end');
            this.midSectionEl = null;
            this.homeHeroEl = null;
            this.lastIndexEl = null;
            this.scrollDirection = null;
            this.observer = null;
            this.observer2 = null;
            this.scrollToCurrentValue = 'home';
            this.firstScroll = true;
            this.scrollUptToHomeAvailable = false;
            this.scrollToMidAvailable = false;
            this.allowOverflowToChange = false;
            this.waitingAnimation = null;
            this.touchInProgress = false;
            this.currentTween = null;
            this.currentScrollValue = 0;
            this.debounce = false;
            this.scrollValues = [];
            this.allowDocumentScroll = false;
            this.eventHandlerDebounce = false;
            this.mobileStaticBars = null;
            this.carts = null;

            this.initialized = false;
        }
    }
}


let script = null;
export default function (contentReplacedCallBack) {
    if (!script) script = new Home(contentReplacedCallBack);
    return script;
}
