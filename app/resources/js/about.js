class AboutPage {

    constructor() {
        this.initialized = false;
    }

    destroy() {
        if (this.initialized) {
            this.initialized = false;
            this.obsFunction();
        }
    }

    init(pageName) {
        let isAboutPage = pageName === 'about'
        if (isAboutPage && !this.initialized) {
            this.initialized = true;
            this.obsFunction();
        }
    }

    obsFunction() {
        const threshold = document.querySelector('.about__container__mask-top');
        const titles = document.querySelectorAll('.about__mid-hero__text');
        const bgImg = document.querySelector('.about__mid-hero');
        const config = {
            rootMargin: '20%',
        };

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    titles.forEach(title => {
                        title.classList.add('about__mid-hero__text--show');
                        bgImg.classList.add('about__mid-hero--scale')
                    })
                } else {
                    // observer.unobserve(entry.target);
                }
            });
        }, config);

        observer.observe(threshold);
    }
}

let aboutPageScript = null;

export default function () {
    if (!aboutPageScript) aboutPageScript = new AboutPage();
    return aboutPageScript;
}

