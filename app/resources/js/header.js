import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import cssVariables from "./utils/css-variables";
import isTouchDevice from './utils/is-touch-device';
import delegate from 'delegate';

class Header {
    constructor() {
        this.desktopHeader = document.querySelector('.nav');
        this.scrollOffset = 0;
        this.scrollDirection = 'down';
        this.preventAnimation = false;
        this.init();
        this.callbacks = {};
        this.isShown = true;
        this.preventHeaderHide = false;
        this.backArrows = [];
        this.navLogos = document.querySelectorAll('.js__nav-logo');
        this.backArrowShown = false;
        this.desktopHeaderShow = true;
        this.hasGreyHeader = this.desktopHeader.classList.contains('nav__header--grey');
        this.currentPage = null;
        this.preventBgClass = false;
    }

    onPageChange(pageName) {
        this.currentPage = pageName;
    }

    init(pageName) {
        document.addEventListener('scroll', throttle(() => {
                if (this.preventAnimation) return;
                let currentScrollValue = window.pageYOffset;
                this.scrollDirection = currentScrollValue < this.scrollOffset ? 'up' : 'down';
                this.scrollOffset = currentScrollValue;
                let windowHeight = window.innerHeight;

                // this.isHomePage = document.getElementById("js__home-wrapper");
                if (this.scrollOffset > windowHeight / 2 && this.currentPage !== 'home') {
                    if (!this.desktopHeader.classList.contains('nav--bg') && !this.preventBgClass) this.desktopHeader.classList.add('nav--bg');
                } else if (this.scrollOffset > windowHeight * 2 && this.currentPage == 'home') {
                    if (!this.desktopHeader.classList.contains('nav--bg') && !this.preventBgClass) this.desktopHeader.classList.add('nav--bg');
                } else if (!(this.currentPage === 'store' && window.innerWidth <= cssVariables.tabletBreakpoint)) {
                    if (this.desktopHeader.classList.contains('nav--bg')) this.desktopHeader.classList.remove('nav--bg');
                }


                if (this.scrollDirection === 'down' && this.scrollOffset > (cssVariables.headerHeightMobile + cssVariables.globalNotificationHeight)) {
                    this.hideHeader();
                } else if (this.scrollDirection === 'up') {
                    this.showHeader();
                }
            }, isTouchDevice() ? 200 : 80), {passive: true}
        )

        let resizeHandler = debounce(() => {
            if (!isTouchDevice()) {
                this.desktopHeader.classList.remove('nav--hide');
            }

            this.desktopHeader.style.height = null;

            this.desktopHeader.style.height = this.desktopHeader.clientHeight + 'px';
        }, 120);
        window.addEventListener('resize', resizeHandler);

        delegate([this.desktopHeader], '.js__back-arrow', 'click', function (e) {
            window.history.back();
        });
    }

    removeBgClass() {
        this.desktopHeader.classList.remove('nav--bg');
    }

    showHeader() {
        if (!this.preventHeaderHide && !this.isShown) {
            if (this.callbacks['show-start']) this.callbacks['show-start'].forEach(func => func());
            this.desktopHeader.classList.remove('nav--hide');
            this.desktopHeaderShow = true;

            this.isShown = true;
            if (this.callbacks['show']) this.callbacks['show'].forEach(func => func());
        }
    }

    hideMobileBottomNav() {
        this.desktopHeader.style.display = "none";
    }

    showMobileBottomNav() {
        this.desktopHeader.style.display = null;
    }


    hideHeader(override) {
        if ((!this.preventHeaderHide || override) && this.isShown) {
            if (this.callbacks['hide-start']) this.callbacks['hide-start'].forEach(func => func());
            this.desktopHeader.classList.add('nav--hide');
            this.desktopHeaderShow = false;

            this.isShown = false;

            setTimeout(() => {
                if (this.callbacks['hide'] && !this.isShown) this.callbacks['hide'].forEach(func => func());
            }, cssVariables.headerAnimationDelay)
        }
    }

    setPreventHeaderHide(value) {
        this.preventHeaderHide = value;
    }

    showBackArrow() {
        this.backArrows = document.querySelectorAll('.js__back-arrow');
        this.desktopHeader.style.height = this.desktopHeader.clientHeight + 'px';
        this.backArrows.forEach(arrow => {
            arrow.classList.add('nav__back-arrow--show');
            arrow.style.top = this.desktopHeader.clientHeight / 2;
        })

        this.navLogos.forEach(logo => {
            logo.classList.add('nav__logo__container--hide');
        });

        this.backArrowShown = true;
    }

    hideBackArrow() {
        this.backArrows.forEach(arrow => {
            arrow.classList.remove('nav__back-arrow--show');
        })

        this.navLogos.forEach(logo => {
            logo.classList.remove('nav__logo__container--hide');
        });

        this.backArrowShown = false;
    }

    getBackArrowShown() {
        return this.backArrowShown;
    }

    addListener(eventName, callback) {
        if (this.callbacks[eventName]) this.callbacks[eventName].push(callback);
        else this.callbacks[eventName] = [callback];
    }

    removeListener(eventName, callback) {
        let foundIndex = this.callbacks[eventName].findIndex(_callback => _callback === callback);
        if (foundIndex) this.callbacks[eventName].splice(foundIndex, 1);
    }


    toggleMobileGreyHeader(value) {
        if (value) this.preventBgClass = true;
        else this.preventBgClass = false;
        this.removeBgClass();
        // this.desktopHeader.classList.remove('nav--grey');
        // if (value) this.desktopHeader.classList.add('nav--grey');
        // else this.desktopHeader.classList.remove('nav--grey');
    }
}

let headerInstance = null;
export default {
    init: function () {

        if (!headerInstance) {
            // only need a singleton, but I think it's better to have the init option available on the top level
            headerInstance = new Header();

            return headerInstance;
        }

        return headerInstance;
    },

    get: function () {
        return headerInstance;
    }
}

