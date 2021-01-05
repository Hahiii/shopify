import Swiper from 'swiper';

class NeohpediaPage {

    constructor() {
        this.swiper = null;
        this.initialized = false;
        this.buttons = [];
    }

    setupSwiper() {
        this.swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 16,
            slidesOffsetAfter: 48
        });

        this.swiperNav();
    }

    swiperNav() {
        for (let contentblock of document.querySelectorAll('[data-id]')) contentblock.classList.remove("neohpedia__article-content--active");
        for (let btn of document.querySelectorAll('[data-id-button]')) btn.classList.remove("btn-text--active");

        let contentblockActive = document.querySelectorAll('[data-id]')[this.swiper.realIndex];
        contentblockActive.classList.add("neohpedia__article-content--active");
        let btnActive = document.querySelectorAll('[data-id-button]')[this.swiper.realIndex];
        btnActive.classList.add("btn-text--active");

        this.buttons = document.querySelectorAll('[data-id-button]');
        if (this.buttons.length > 0) {
            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].addEventListener("click", this.buttonAction);
            }
            this.initialized = true;
        }
    }

    buttonAction() {
        let allButtons = document.querySelectorAll('[data-id-button]');
        let allContent = document.querySelectorAll('[data-id]');
        let currentID = this.dataset.idButton;
        for (let i = 0; i < allButtons.length; i++) {
            if (allButtons[i].classList.contains("btn-text--active")) {
                allButtons[i].classList.remove("btn-text--active");
            }
            if (allContent[i].classList.contains("neohpedia__article-content--active")) {
                allContent[i].classList.remove("neohpedia__article-content--active");
            }
            allButtons[currentID - 1].classList.add("btn-text--active");
            allContent[currentID - 1].classList.add("neohpedia__article-content--active");
        }
    }

    init(pageName) {
        let isNeohpediaPage = pageName === 'neohpedia';
        if (isNeohpediaPage) {
            this.setupSwiper();
            this.initialized = true;
        }
    }

    destroy() {
        if (this.initialized) {
            this.swiper.destroy(true, true);
            this.swiper = null;
            this.initialized = false;
        }
    }
}

let neohpediaPageScript = null;
export default function () {
    if (!neohpediaPageScript) neohpediaPageScript = new NeohpediaPage();
    return neohpediaPageScript;
}