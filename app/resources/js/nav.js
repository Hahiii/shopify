import {TweenLite, TimelineMax, Linear} from "gsap/all";
import Header from './header';
import cssVariables from "./utils/css-variables";


function Link(el) {
    this.subLinkContainer = el.nextElementSibling;
    this.open = this.subLinkContainer ? this.subLinkContainer.classList.contains('nav__overlay__sub-link__container--open') : false;
    this.hasSubLinks = el.dataset && el.dataset.hasOwnProperty('subLinks');
    this.el = el;
    this.subLinks = this.subLinkContainer ? this.subLinkContainer.querySelectorAll('.js__nav-sub-link') : [];
    if (this.subLinkContainer && this.subLinkContainer.classList.contains('nav__overlay__sub-link__container--open')) {
        setTimeout(() => {
            let subLinkContent = this.subLinkContainer.firstElementChild;
            this.subLinkContainer.style.height = subLinkContent.clientHeight + 'px';
        }, 500)
    }

    this.openSubLinks = function (open) {
        if (this.hasSubLinks) {
            let subLinkContent = this.subLinkContainer.firstElementChild;
            if (open) {
                this.subLinkContainer.style.height = subLinkContent.clientHeight + 'px';
            } else {
                this.subLinkContainer.style.height = '0px';
            }

            this.open = open;
        }
    }

    this.setLinkAsActive = function (active) {
        if (active) {
            el.classList.add('nav__overlay__link-primary--active');
        } else {
            el.classList.remove('nav__overlay__link-primary--active');
        }
    }

    this.setSubLinkAsActive = function (active, subLinkEl) {
        if (active && subLinkEl) {
            this.subLinks.forEach(_subLinkEl => {
                if (_subLinkEl === subLinkEl) {
                    subLinkEl.classList.add('nav__overlay__sub-link--active');
                }
            })
        } else {
            this.subLinks.forEach(_subLinkEl => {
                _subLinkEl.classList.remove('nav__overlay__sub-link--active');
            })
        }
    }
}


class Navigation {
    constructor() {
        let navBurger = document.getElementById('js__burger');
        this.navOpen = false;
        this.linkMouseLeave = false;
        this.burgerEls = navBurger.getElementsByClassName('nav__burger__el');
        this.burgerMask = navBurger.querySelector('.nav__burger__mask');
        this.navOverlay = document.getElementById('js__nav__overlay');
        this.navOverlayBg = document.getElementById('js__nav__overlay-bg');
        this.navLinks = document.querySelectorAll('.js__primary-link');
        this.navFooter = document.getElementById('js__nav-footer');
        this.navFooterBg = document.getElementById('js__footer-bg');
        this.navLinksAll = document.getElementsByClassName('js__nav__el');
        this.linksArray = [];

        this.navBurgerAnimActive = false;
        this.shouldShowBackArrow = false;
        this.callbacks = {};

        let toggleHandler = () => this.toggleNav();
        navBurger.addEventListener('click', toggleHandler);
        this.navOverlayBg.addEventListener('click', toggleHandler);

        this.setupAnimations();
        this.preloadNavLinkImages();
        this.alwaysCloseMenu();
        this.setupNavLinks();

    }

    setupNavLinks() {
        let navLinks = document.querySelectorAll('.js__nav-link-header');

        navLinks.forEach(link => {
            let linkInstance = new Link(link);
            this.linksArray.push(linkInstance);
            let linksArray = this.linksArray;

            linkInstance.el.addEventListener('click', (e) => {
                // e.preventDefault();

                linksArray.forEach(_link => {

                    if (_link === linkInstance) {
                        if (linkInstance.open) {
                            linkInstance.openSubLinks(false);
                            linkInstance.setLinkAsActive(false);
                        } else {
                            linkInstance.openSubLinks(true);
                            linkInstance.setLinkAsActive(true);
                        }
                    } else {
                        _link.openSubLinks(false);
                        _link.setLinkAsActive(false);
                    }
                })
            });

            linkInstance.subLinks.forEach(subLink => {

                subLink.addEventListener('click', function (e) {
                    linksArray.forEach(_link => {
                        _link.setSubLinkAsActive(false);
                    })

                    linkInstance.setSubLinkAsActive(true, subLink);
                })
            })
        })

        // language menu
        this.openLangSwitchButton = document.getElementById('js__nav-lang-button');
        this.openLangSwitchContainer = document.getElementById('js__nav-lang-select');
        this.openLangSwitchContent = this.openLangSwitchContainer.firstElementChild;
        this.langSwitchIsOpen = false;
        if (this.openLangSwitchButton) {
            const langSwitchHandler = (e) => this.toggleLangSwitchMenu(e)

            this.openLangSwitchButton.addEventListener('click', langSwitchHandler);
            this.navFooterBg.addEventListener('click', langSwitchHandler);
        }
    }

    toggleLangSwitchMenu(e) {
        e && e.preventDefault();
        if (this.langSwitchIsOpen) {
            this.openLangSwitchContainer.style.height = null;
            this.openLangSwitchButton.classList.add('btn__cta--white');
            this.openLangSwitchButton.classList.remove('btn__cta--red');
            TweenLite.to(this.navFooterBg, 10, {opacity: 0, useFrames: true});
            this.navFooterBg.classList.remove('nav__overlay__footer-bg--show');
        } else {
            this.openLangSwitchContainer.style.height = this.openLangSwitchContent.clientHeight + 'px';
            this.openLangSwitchButton.classList.add('btn__cta--red');
            this.openLangSwitchButton.classList.remove('btn__cta--white');
            this.navFooterBg.classList.add('nav__overlay__footer-bg--show');
            TweenLite.to(this.navFooterBg, 10, {opacity: 1, useFrames: true});
        }

        this.langSwitchIsOpen = !this.langSwitchIsOpen;
    }


    toggleNav(onCompleteCallback) {
        if (this.navBurgerAnimActive) return;
        this.navOpen = !this.navOpen;
        this.preventAnimations = false;
        this.navBurgerAnimActive = true;

        if (this.navOpen) {
            this.navBurgerAnimationTo.restart(false);
            // this.navOverlayAnimation.restart(false);
            this.setupOverlayAnimation();
            this.navOverlayAnimation.play();

            Header.get().showHeader();
            Header.get().setPreventHeaderHide(true);
            Header.get().removeBgClass();

            this.shouldShowBackArrow = Header.get().getBackArrowShown();
            if (this.shouldShowBackArrow) Header.get().hideBackArrow();
            if (this.callbacks['open']) this.callbacks['open'].forEach(func => func());

            if (this.langSwitchIsOpen) this.toggleLangSwitchMenu();


            setTimeout(() => {
                let hasActiveLinks = false;
                for (let i = 0; i < this.navLinksAll.length; i++) {
                    if (this.navLinksAll[i].classList.contains(this.navLinksAll[i].dataset.activeClass)) {
                        hasActiveLinks = true;
                        break;
                    }
                }

                if (!hasActiveLinks) {
                    for (let i = 0; i < this.navLinksAll.length; i++) {
                        if (this.navLinksAll[i].classList.contains('nav__overlay__link-primary--header')) {
                            this.navLinksAll[i].classList.add(this.navLinksAll[i].dataset.activeClass);
                            let subLinkContainer = this.navLinksAll[i].nextElementSibling;
                            let subLinkContent = subLinkContainer.firstElementChild;
                            subLinkContainer.style.height = subLinkContent.clientHeight + 'px';
                            this.linksArray.forEach(link => {
                                if (link.el === this.navLinksAll[i]) {
                                    link.openSubLinks(true);
                                    link.setLinkAsActive(true);
                                }
                            })

                            break;
                        }
                    }
                }
            }, 650);

        } else {
            this.navBurgerAnimationReverse.restart(true);
            this.setupOverlayAnimationReverse();
            this.navOverlayAnimationReverse.play();
            if (this.shouldShowBackArrow) Header.get().showBackArrow();
            if (this.callbacks['close']) this.callbacks['close'].forEach(func => func());
            Header.get().setPreventHeaderHide(false);


            setTimeout(() => {
                if (onCompleteCallback) onCompleteCallback();
            }, 350); // the total time of the nav animation (roughly)
        }

        // prevent body scroll
        if (this.navOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'visible';
    }

    getNavOpen() {
        return this.navOpen;
    }

    setupOverlayAnimation() {
        this.navOverlayAnimation = new TimelineMax({useFrames: true, paused: true, delay: 12});
        this.navOverlayAnimation
            .addCallback(() => {
                // if (this.defaultImage !== this.newDefaultImage) this.defaultImage = this.newDefaultImage;
                if (this.navOpen) {
                    this.navOverlay.classList.add('nav__overlay--open');
                    this.navFooter.classList.add('nav__footer--open');
                    this.navOverlayBg.classList.add('nav__overlay__bg--show');
                } else {
                    this.navOverlay.classList.remove('nav__overlay--open');
                    this.navFooter.classList.remove('nav__footer--open');
                    this.navOverlayBg.classList.remove('nav__overlay__bg--show');
                }
            }, null)
            .to(this.navOverlayBg, 7, {opacity: 1, x: '0%'})
            .to(this.navOverlay, 5, {opacity: 1, x: '0%'}, '-=3')
            .add(TweenLite.fromTo(this.navFooter, 4, {opacity: 0}, {opacity: 1}), '+=10')
            .addCallback(() => {
                this.navBurgerAnimActive = false;
            }, null);
    }

    setupOverlayAnimationReverse() {
        this.navOverlayAnimationReverse = new TimelineMax({useFrames: true, paused: true});
        this.navOverlayAnimationReverse
            .add(TweenLite.fromTo(this.navFooter, 4, {opacity: 1}, {opacity: 0}), 0)
            .to(this.navOverlay, 5, {opacity: 0, x: '100%', ease: Linear}, '+=5')
            .to(this.navOverlayBg, 8, {opacity: 0, x: 80, ease: Linear}, '-=3')
            .addCallback(() => {
                if (this.navOpen) {
                    this.navOverlay.classList.add('nav__overlay--open');
                    this.navFooter.classList.add('nav__footer--open');
                    this.navOverlayBg.classList.add('nav__overlay__bg--show');
                } else {
                    this.navOverlay.classList.remove('nav__overlay--open');
                    this.navFooter.classList.remove('nav__footer--open');
                    this.navOverlayBg.classList.remove('nav__overlay__bg--show');
                }

                this.navBurgerAnimActive = false;
            }, '+=12')
    }

    setupAnimations() {
        // setup animations
        this.navBurgerAnimationTo = new TimelineMax({useFrames: true, paused: true});
        this.navBurgerAnimationTo
            .staggerTo(this.burgerEls, 10, {opacity: 0}, -1, '+=1')

        if (window.innerWidth > cssVariables.tabletBreakpoint) {
            this.navBurgerAnimationTo.staggerTo(this.navLinks, 1, {opacity: 0}, 5, 0)
        }

        this.navBurgerAnimationTo
            .to(this.burgerEls[0], 0, {transform: 'translateY(8px) rotate(-45deg)'})
            .to(this.burgerEls[2], 0, {transform: 'translateY(-6px) rotate(45deg)'})
            .to(this.burgerMask, 0, {maxHeight: '100%'})
            .to([this.burgerEls[0], this.burgerEls[2]], 0, {opacity: 1})
            .to(this.burgerMask, 10, {maxHeight: '0%'})

        this.navBurgerAnimationReverse = new TimelineMax({useFrames: true, paused: true});
        this.navBurgerAnimationReverse.to(this.burgerMask, 10, {maxHeight: '100%'}, '+=3')
            .to(this.burgerEls, 0, {opacity: 0},)
            .to(this.burgerEls[2], 0, {transform: 'unset'})
            .to(this.burgerEls[0], 0, {transform: 'unset'})
            // .to(burgerEls, 0, {backgroundColor: '#e8dac0'})
            .to(this.burgerMask, 0, {maxHeight: '0%'})
            .staggerTo(this.burgerEls, 10, {opacity: 1}, 1, '+=2')
            .staggerTo(this.navLinks, 4, {opacity: 1}, -4)
    }

    preloadNavLinkImages() {
        if (this.navOpen) {
            this.navLinks.forEach(link => {
                let imgEl = new Image();
                imgEl.src = link.dataset.image;
            })
        }
    }

    alwaysCloseMenu() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                    this.nav = false;
                }
            );
        })
    }

    addListener(eventName, callback) {
        if (this.callbacks[eventName]) this.callbacks[eventName].push(callback);
        else this.callbacks[eventName] = [callback];
    }

    removeListener(eventName, callback) {
        let foundIndex = this.callbacks[eventName].findIndex(_callback => _callback === callback);
        if (foundIndex) this.callbacks[eventName].splice(foundIndex, 1);
    }
}

let navInstance = null;
export default {
    init: function (options) {

        if (!navInstance) {
            // only need a singleton, but I think it's better to have the init option available on the top level
            navInstance = new Navigation(options);

            return navInstance;
        }

        return navInstance;
    },

    get: function () {
        return navInstance;
    }

}

