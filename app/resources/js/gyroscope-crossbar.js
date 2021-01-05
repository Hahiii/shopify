import siteLoader from "./loader";

let initialOrientationX, initialOrientationY, mainImage, detailPageImages = [], heroHeadline;

let translateBase1 = {
    x: -16,
    y: 16,
};
let rotateBase1 = {
    x: -.75,
    y: .88,
    z: -.874,
    a: -.04
};
let skewBase1 = {
    y: -6,
    x: -1
};

// let translateBase2 = {
//     x: -16,
//     y: 16,
// };
let rotateBase2 = {
    x: .68,
    y: .42,
    z: -.874,
    a: .032
};
let skewBase2 = {
    y: -6,
    x: -0
};

let rotateBase3 = {
    x: .4,
    a: 3
};
let translateBase3 = {
    x: 8,
    y: 8,
};
let skewBase3 = {
    x: 1
};


let destroyFuncs = [];

function transformImageHome(beta, gamma) {
    // Because we don't want to have the device upside down
    // We constrain the x value to the range [0,90]
    if (beta < 0) {
        beta = 0;
    }

    if (beta > 90) {
        beta = 90;
    }

    // x has a range of 0-90, y has a range of 0-180
    // gamma += 90;


    let gammaNorm = gamma / 90;
    let betaNorm = Math.abs((beta / 90) - 1);
    gammaNorm = Math.min(Math.max(gammaNorm, -1), 1);
    betaNorm = Math.min(Math.max(betaNorm, -1), 1);
    if (gammaNorm >= 0) {
        mainImage.style.transform = `perspective(300px) translate3d(${gammaNorm * translateBase1.x}px, ${betaNorm * translateBase1.y}px, 0px) rotate3d(${betaNorm * rotateBase1.x}, ${rotateBase1.y}, ${gammaNorm * rotateBase1.z}, ${gammaNorm * rotateBase1.a}turn) skewY(${gammaNorm * skewBase1.y}deg) skewX(${gammaNorm * skewBase1.x}deg)`;
        mainImage.style.webkitTransform = `perspective(300px) translate3d(${gammaNorm * translateBase1.x}px, ${betaNorm * translateBase1.y}px, 0px) rotate3d(${betaNorm * rotateBase1.x}, ${rotateBase1.y}, ${gammaNorm * rotateBase1.z}, ${gammaNorm * rotateBase1.a}turn) skewY(${gammaNorm * skewBase1.y}deg) skewX(${gammaNorm * skewBase1.x}deg)`;
        heroHeadline.style.transform = `translateX(${gammaNorm * 10}px) translateY(${betaNorm * 10}px)`
        heroHeadline.style.webkitTransform = `translateX(${gammaNorm * 10}px) translateY(${betaNorm * 10}px)`
    } else {
        gammaNorm = Math.abs(gammaNorm);
        mainImage.style.transform = `perspective(300px) translate3d(${gammaNorm * translateBase1.x}px, ${betaNorm * translateBase1.y}px, 0px) rotate3d(${betaNorm * rotateBase1.x}, ${rotateBase2.y}, ${gammaNorm * rotateBase2.z}, ${gammaNorm * rotateBase2.a}turn) skewY(${gammaNorm * skewBase2.y}deg) skewX(${gammaNorm * skewBase2.x}deg)`;
        mainImage.style.webkitTransform = `perspective(300px) translate3d(${gammaNorm * translateBase1.x}px, ${betaNorm * translateBase1.y}px, 0px) rotate3d(${betaNorm * rotateBase2.x}, ${rotateBase2.y}, ${gammaNorm * rotateBase2.z}, ${gammaNorm * rotateBase2.a}turn) skewY(${gammaNorm * skewBase2.y}deg) skewX(${gammaNorm * skewBase2.x}deg)`;
        heroHeadline.style.transform = `translateX(${gammaNorm * -10}px) translateY(${betaNorm * -10}px)`
        heroHeadline.style.webkitTransform = `translateX(${gammaNorm * -10}px) translateY(${betaNorm * -10}px)`
    }

}

function transformImageDetail(beta, gamma) {
    let gammaNorm = gamma / 90;
    let betaNorm = beta / 90;

    let initialTransformStateDetail = 'translateX(6vw) rotateZ(-90deg) translateX(-100%)';

    detailPageImages.forEach(image => {
        image.style.transform = initialTransformStateDetail + ` translate3d(${betaNorm * translateBase3.x}px, ${gammaNorm * translateBase3.y}px, 0px) skewX(${gammaNorm * skewBase3.x}deg)`;
        image.style.webkitTransform = initialTransformStateDetail + ` translate3d(${betaNorm * translateBase3.x}px, ${gammaNorm * translateBase3.y}px, 0px) skewX(${gammaNorm * skewBase3.x}deg)`;
    });
}


// perspective(400px) translate3d(16px, 12px, -10px) rotate3d(-0.1069, 0.42, -0.874615, -0.038turn) skewY(-4deg)

export default {
    initHome: function () {
        mainImage = document.getElementById('js__hero-mobile-bar');
        mainImage.onload = function () {
            siteLoader().removeLoader();
        }
        mainImage.src = mainImage.dataset.src;

        heroHeadline = document.getElementById('js__hero-headline');
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        // firefox implementation of the deviceorientation doesn't work well
        if (!isFirefox) {

            if (window.DeviceOrientationEvent || 'ondeviceorientation' in window) {
                // gyro exists

                if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                    DeviceOrientationEvent.requestPermission()
                        .then(response => {
                            if (response == 'granted') {
                                attachDeviceOrientationListeners()
                            }
                        })
                        .catch(console.error)
                } else {
                    attachDeviceOrientationListeners()
                }

                function attachDeviceOrientationListeners() {
                    let handleOrientation = function (event) {
                        var x = event.beta;  // In degree in the range [-180,180]
                        var y = event.gamma; // In degree in the range [-90,90]

                        transformImageHome(x, y);
                    };
                    // mainImage.classList.add('home__hero__mobile-bar__animation');
                    window.addEventListener('deviceorientation', handleOrientation);
                    destroyFuncs.push(() => window.removeEventListener('deviceorientation', handleOrientation))
                }

            } else if (window.DeviceMotionEvent || 'ondevicemotion' in window) {
                if (typeof DeviceMotionEvent.requestPermission === 'function') {
                    // iOS 13+
                    DeviceMotionEvent.requestPermission()
                        .then(response => {
                            if (response == 'granted') {
                                attachDeviceMotionListeners()
                            }
                        })
                        .catch(console.error)
                } else {
                    attachDeviceMotionListeners()
                }

                function attachDeviceMotionListeners() {
                    let handleDeviceMotion = function (event) {
                        var x = event.rotationRate.beta;  // In degree in the range [-180,180]
                        var y = event.rotationRate.gamma; // In degree in the range [-90,90]
                        transformImageHome(x, y);
                    }
                    window.addEventListener('devicemotion', handleDeviceMotion);
                    destroyFuncs.push(() => window.removeEventListener('devicemotion', handleDeviceMotion))
                }
            }

        }
    },

    initDetail: function (data) {

        // chocolate is bar_1, raspberry is bar_2, cocos is bar_3
        detailPageImages = document.querySelectorAll('.crossbar__bars-static__bar');
        let counter = 0;
        detailPageImages.forEach(image => {
            if (image.complete) {
                counter++;
                if (counter >= detailPageImages.length) siteLoader().removeLoader();
            } else {
                image.onload = function () {
                    counter++;
                    if (counter >= detailPageImages.length) siteLoader().removeLoader();
                }
            }

            image.classList.add('crossbar__bars-static__bar--show');
        });

        if (window.DeviceOrientationEvent || !('ondeviceorientation' in window)) {
            // gyro exist
            let handleOrientation = function (event) {
                var x = event.beta;  // In degree in the range [-180,180]
                var y = event.gamma; // In degree in the range [-90,90]

                transformImageDetail(x, y);
            };
            // mainImage.classList.add('home__hero__mobile-bar__animation');
            window.addEventListener('deviceorientation', handleOrientation);
            destroyFuncs.push(() => window.removeEventListener('deviceorientation', handleOrientation))
        } else if (!('ondevicemotion' in window)) {
            let handleDeviceMotion = function (event) {
                var x = event.rotationRate.beta;  // In degree in the range [-180,180]
                var y = event.rotationRate.gamma; // In degree in the range [-90,90]
                transformImageDetail(x, y);
            }
            window.addEventListener('devicemotion', handleDeviceMotion);
            destroyFuncs.push(() => window.removeEventListener('devicemotion', handleDeviceMotion))
        }
    },

    disableHome: function () {
        let mainHeroBar = document.getElementById('js__hero-mobile-bar-container');
        if (mainHeroBar) mainHeroBar.classList.add('home__hero__mobile-bar--hide')
    },
    destroy: function () {
        destroyFuncs.forEach(func => func());
        destroyFuncs = [];
    }
}
