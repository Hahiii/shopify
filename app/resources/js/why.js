import Swiper from 'swiper';

class whyPage {

    constructor() {
        this.swiper = null;
        this.initialized = false;
    }

    setupSwiper() {
        this.swiper = new Swiper('.image-swiper', {
            direction: 'horizontal',
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                769: {
                    autoplay: false,
                    loop: false,
                    slidesPerView: 3,
                    spaceBetween: 24,
                    allowSlidePrev: false,
                    allowSlideNext: false
                },
                1001: {
                    autoplay: false,
                    loop: false,
                    slidesPerView: 3,
                    spaceBetween: 32,
                    allowSlidePrev: false,
                    allowSlideNext: false
                }
            }
        });
    }

    destroy() {
        if (this.initialized) {
            this.swiper.destroy(true, true);
            this.swiper = null;
            this.initialized = false;
        }
    }

    init(pageName) {
        let isWhyPage = pageName === 'why';
        if (isWhyPage && !this.initialized) {
            this.setupSwiper();
            this.initialized = true;
        }
    }
}

let whyPageScript = null;
export default function () {
    if (!whyPageScript) whyPageScript = new whyPage();
    return whyPageScript;
}

