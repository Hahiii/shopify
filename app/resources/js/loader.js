function loaderAnimations() {
    let currentIndex = 0,
        headlines,
        sceneContainer,
        lastIndex,
        headlineInterval,
        animationDelay = 750,
        clearLoaderInterval,
        firstLoop = true,
        loaderRemoved = false,
        isHomePage,
        isDetailPage;

    let loaderAnim = document.getElementById('js-loader');

    function init(pageName) {
        setTimeout(() => {
            loaderAnim = document.getElementById('js-loader');
            if (!loaderRemoved && loaderAnim) {
                isHomePage = pageName === 'home';
                isDetailPage = pageName === 'crossbar-detail';
                if (isHomePage || isDetailPage) {
                    loaderAnim.classList.remove('loader--hide');
                    // headline animations
                    document.body.style.overflow = 'hidden';
                    headlines = document.getElementsByClassName('js__home-headline');
                    sceneContainer = document.getElementById('scene-container');
                    lastIndex = headlines.length;
                    if (headlines.length > 0) {
                        gsapAnimateHeadline();
                        headlineInterval = setInterval(() => {
                            gsapAnimateHeadline();
                        }, animationDelay);
                    } else {
                        loaderAnim.classList.add('loader--hide');
                        loaderAnim.remove();
                    }
                }

            } else {
                loaderAnim = document.getElementById('js-loader');
                if (loaderAnim) {
                    loaderAnim.classList.add('loader--hide');
                    loaderAnim.remove();
                } else {

                }
            }
        }, 30);
    }

    function gsapAnimateHeadline() {
        lastIndex = headlines.length - 1;
        let headline = headlines[currentIndex];
        let oldHeadline = currentIndex - 1 >= 0 ? headlines[currentIndex - 1] : headlines[lastIndex];

        if (oldHeadline) oldHeadline.classList.remove('loader__headline--show');

        if (headline) {
            headline.classList.add('loader__headline--show');
        }

        if (currentIndex === lastIndex) {
            currentIndex = -1;
        }

        currentIndex += 1;

        if (clearLoaderInterval && (currentIndex === 1 || currentIndex > 1)) {
            if (!firstLoop) {
                if (headline) headline.classList.remove('loader__headline--show');
                clearInterval(headlineInterval);
                if (loaderAnim) loaderAnim.classList.add('loader--gone');
                document.body.style.overflow = '';
                if (sceneContainer) sceneContainer.classList.remove('home__scene--hidden');
                let customEvent = new CustomEvent('loaderRemoved');
                document.dispatchEvent(customEvent);

                loaderRemoved = true;
            }
        }

        firstLoop = false;
    }

    function removeLoader() {
        clearLoaderInterval = true;
    }

    function getLoaderRemoved() {
        return loaderRemoved;
    }

    function destroy() {
        if (isHomePage || isDetailPage) {
            loaderAnim = document.getElementById('js-loader');
            if (loaderAnim) {
                loaderAnim.classList.add('loader--hide');
                loaderAnim.remove();
                sceneContainer.classList.remove('home__scene--hidden');
            }
            loaderRemoved = true;
        }
    }

    return {
        init: init,
        removeLoader: removeLoader,
        getLoaderRemoved: getLoaderRemoved,
        destroy: destroy
    }
}

let loaderScript = null;
export default function () {
    if (!loaderScript) loaderScript = loaderAnimations();
    return loaderScript;
}