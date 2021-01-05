import throttle from 'lodash/throttle';
import threeJsBar from './three-crossbars';
import Swiper from 'swiper';
import {TweenLite} from "gsap/all";
import NeohSlider from './components/neoh-slider'


class crossbarsPage {

    constructor() {
        this.swiper = null;
        this.swiperPagination = null;
        this.initialized = false;
        this.isDetailPage = false;
        this.currentContainer = null;
        this.chartObserver = null;
        this.contentContainers = [];
        this.popStateListener = null;
        this.lastIndexPushed = null;
        this.lastPoppedState = null;
        this.firstUrl = null;
    }

    setupSwiper() {
        this.swiper = new Swiper('.crossbar__swiper', {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.crossbar__button--next',
                prevEl: '.crossbar__button--prev',
            }
        });

        this.contentContainers = document.querySelectorAll('[data-id]');

        this.contentContainers.forEach((el) => {
            el.style.display = "none";
        });

        // let that = this;
        if (this.contentContainers && this.contentContainers[0]) {
            this.currentContainer = this.contentContainers[0];
            this.contentContainers[0].style.display = "block";
        }


        // swiper nav positioning
        this.swiperPagination = document.getElementById('js__swiper-navigation');
        let setSwiperNavPosition = (index) => {
            let innerDiv = document.querySelector(`.crossbar__hero__inner[data-bar="${index}"]`);
            let parentDiv = document.querySelector(`.crossbar__hero[data-bar="${index}"]`);

            if (innerDiv && parentDiv && window.innerWidth > 500) {
                let positionBot = parentDiv.clientHeight - innerDiv.clientHeight;
                this.swiperPagination.style.bottom = Math.max(positionBot / 2, 10) + 'px';
            } else {
                this.swiperPagination.style.bottom = '';
            }
        }

        let prevActiveIndex = 0;

        this.swiper.on('slideChange', () => {

            NeohSlider.destroy();

            this.contentContainers.forEach((el) => {
                // hide all containers and remove marquee class ( fixes resize bug)
                let activeMarquee = el.querySelector('.js_marquee3k');
                if (activeMarquee) activeMarquee.classList.remove('js_marquee3k__active');
                el.style.display = "none";
            });

            // change cta button colour...
            let ctaButtons = document.querySelectorAll('.js__nav-cta');
            ctaButtons.forEach((btn, index) => {
                btn.classList.remove(this.contentContainers[prevActiveIndex].dataset.ctaClass);
                btn.classList.add(this.contentContainers[this.swiper.activeIndex].dataset.ctaClass);
                // let crossbarButton = document.querySelector(`.js__lead-to-store[data-shopify="${this.contentContainers[this.swiper.activeIndex].dataset.shopifyHandle}"]`);
                // if (crossbarButton) btn.href = crossbarButton.href;
            });

            // get prev container
            this.currentContainer.dataset.ctaClass;

            this.currentContainer = this.contentContainers[this.swiper.activeIndex];

            this.currentContainer.style.display = "block";
            this.setupMarquee();

            let newUrl = this.contentContainers[this.swiper.activeIndex].getAttribute('data-url');

            this.chartDestroyEventListeners.forEach(listenerDestroyFunc => {
                listenerDestroyFunc();
            });

            this.setupCharts(this.swiper.activeIndex);

            let threeBar = threeJsBar();
            if (!threeBar.usesMobileVersion) {
                threeBar.changeBar(newUrl);
            }
            if (!window.location.href.includes('preview')) {
                window.history.replaceState(null, null, newUrl);
            }

            prevActiveIndex = this.swiper.activeIndex;

            setSwiperNavPosition(this.swiper.activeIndex);

            NeohSlider.init();
        });

        setSwiperNavPosition(0);

        let resizeHandler = throttle(() => {
            setSwiperNavPosition(this.swiper.activeIndex);
        }, 80);
        window.addEventListener('resize', resizeHandler);

        this.destroySwiperResizeListener = () => {
            window.removeEventListener('resize', resizeHandler);
        }

        // initial setup for buttons, especially when going from home to detail page
        let ctaButtons = document.querySelectorAll('.js__nav-cta');
        ctaButtons.forEach((btn, index) => {
            if (this.currentContainer) {
                btn.classList.add(this.currentContainer.dataset.ctaClass);
                // let crossbarButton = document.querySelector(`.js__lead-to-store[data-shopify="${this.currentContainer.dataset.shopifyHandle}"]`);
                // if (crossbarButton) btn.href = crossbarButton.href;
            }
        });
    }

    heroNavigation() {
        this.popStateListener = window.addEventListener('popstate', (item) => {
            let pathname = item.target.location.pathname;
            let barFlavors = pathname ? pathname.split('/') : null;

            if (this.isDetailPage) {
                let barFlavor = barFlavors && barFlavors.length > 0 ? barFlavors[barFlavors.length - 1] : null;
                let document = barFlavor ? window.document.querySelectorAll("[data-bar-slide-name='" + barFlavor + "']") : null;
                if (document && document.length > 0) {
                    let swiperIndex = parseInt(document[0].getAttribute('data-bar-slide-index'));
                    let barUrl = document[0].getAttribute('data-bar-url');

                    if (barUrl && this.swiper) {
                        this.swiper.slideTo(swiperIndex);
                    }
                } else {
                    // Just reload the page in this case, as we don't have the html content.
                    window.location.href = item.target.location.href;
                }
            } else {
                // For some reason it can still be the detail page... If so, just reload it.
                if (barFlavors.length === 4) {
                    window.location.href = item.target.location.href;
                }
            }
        });
    }

    hideHomeButtons() {
        let homeCTA = document.getElementById('js__cta-home');
        let midCTA = document.getElementById('js__cta-mid');

        if (homeCTA) {
            homeCTA.classList.add('bars__data__container--hide');
        }

        if (midCTA) {
            midCTA.classList.add('bars__data__container--hide');
        }
    }


    setupMarquee() {
        setTimeout(() => {
            let newMarquee = this.currentContainer.querySelector('.js_marquee3k');
            if (newMarquee) newMarquee.classList.add('js_marquee3k__active');
        }, 10); // add to end of event loop
    }

    setupCharts(barIndex) {
        let chartButtons = document.querySelectorAll(`.chart__buttons .btn[data-bar="${barIndex}"]`);
        let charts = document.querySelectorAll(`.chart__graph[data-bar="${barIndex}"]`);
        this.chartDestroyEventListeners = [];

        function animateGraph(chartButton) {
            let selectedChart = null;
            for (let chart of charts) {
                let chartIndex = chartButton.dataset.chart;
                if (chart.dataset.chart === chartIndex) {
                    selectedChart = chart;
                    selectedChart.classList.add('chart__graph--show');
                    let chartBars = selectedChart.querySelectorAll('.chart__graph__bar__inner');
                    let largestVal = selectedChart.dataset.largest;
                    for (let bar of chartBars) {
                        let value = Math.round(bar.dataset.value / largestVal * 100);
                        TweenLite.fromTo(bar, .5, {
                            height: '0%'
                        }, {
                            height: value + '%', delay: .2,
                        })
                    }

                } else {
                    chart.classList.remove('chart__graph--show');
                }
            }

            for (let button of chartButtons) {
                if (button !== chartButton) {
                    button.style.border = '';
                    button.style.color = '';
                } else {
                    let colour = button.dataset.colour;
                    button.style.border = `1px solid ${colour}`;
                    button.style.color = colour;
                }
            }
        }

        chartButtons.forEach(button => {

            let chartButtonClickHandler = () => {
                animateGraph(button);
            };

            button.addEventListener('click', chartButtonClickHandler);

            this.chartDestroyEventListeners.push(() => {
                button.removeEventListener('click', chartButtonClickHandler);
            });
        });

        this.setupChartScroll(chartButtons, animateGraph);
    }

    setButtonStyleActive(button) {
        let colour = button.dataset.colour;
        button.style.border = `1px solid ${colour}`;
        button.style.color = colour;
    }

    setupChartScroll(chartButtons, animateGraph) {

        let observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateGraph(chartButtons[0]);
                    let colour = chartButtons[0].dataset.colour;
                    chartButtons[0].style.border = `1px solid ${colour}`;
                    chartButtons[0].style.color = colour;
                    this.chartObserver.unobserve(chartButtons[0]);
                }
            });
        };

        this.chartObserver = new IntersectionObserver(observerCallback, {
            threshold: 0.2,
        });

        if (chartButtons[0]) {
            this.chartObserver.observe(chartButtons[0]);

            this.destroyObservers = () => {
                this.chartObserver.unobserve(chartButtons[0]);
            }
        }
    }

    destroy() {
        if (this.initialized) {
            this.swiper.destroy(true, true);
            this.swiper = null;
            this.initialized = false;

            this.chartDestroyEventListeners.forEach(listenerDestroyFunc => {
                listenerDestroyFunc();
            });

            NeohSlider.destroy();

            [this.destroyObservers, this.destroySwiperResizeListener].forEach(destroyFunc => {
                if (destroyFunc) destroyFunc();
                destroyFunc = null;
            });

            window.removeEventListener('popstate', this.popStateListener);

            document.body.style.overflow = '';

            if (this.destroySwiperResizeListener) {
                this.destroySwiperResizeListener();
                this.destroySwiperResizeListener = null;
            }

            this.chartObserver = null;
        }
    }

    init(pageName) {
        this.isDetailPage = pageName === 'crossbar-detail';
        this.destroy();
        if (this.isDetailPage && !this.initialized) {
            this.hideHomeButtons();
            setTimeout(() => {
                this.setupSwiper();
                this.setupMarquee();
                this.heroNavigation();
                this.setupCharts(0);
                NeohSlider.init();
                this.initialized = true;
            }, 10); // add to end of event loop
        }
    }
}

let crossbarsPageScript = null;
export default function () {
    if (!crossbarsPageScript) crossbarsPageScript = new crossbarsPage();
    return crossbarsPageScript;
}

