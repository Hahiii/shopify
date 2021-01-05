import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import siteLoader from './loader';
import cssVariables from "./utils/css-variables";
import isTouchDevice from './utils/is-touch-device';
import getDeviceType from './utils/get-device-type';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import TWEEN from '@tweenjs/tween.js';
import crossbarGyroscope from './gyroscope-crossbar';
import AssetResolver from './utils/asset-resolver';


function threeCrossbars() {
    let initialized = false, mobileInit = false;

    // Set all Basic Variables and Constants needed for Scene
    let camera,
        renderer,
        scene,
        modelChocolateBar,
        modelCocosBar,
        modelRaspberryBar,
        // stats,
        data = [],
        preventAnimations = false,
        preventSetBarPositionOnDetail = false,
        destroyBarClickListeners = null,
        windowResizeListenerCreated = false,
        isHidden = false;

    let debouncedPreventAnimations = debounce(function () {
        preventAnimations = false;
        renderer.setAnimationLoop(() => {
            update();
        });
    }, 200);

    let container,
        isHomePage,
        isDetailPage,
        prevPage = null,
        lastMousePosition

    // Animations
    let homePageAnimationTime = isTouchDevice() ? 600 : 800,
        speedX = 0,
        speedY = 0,
        animate_activate,
        positionChocolate = {x: 0, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
        positionCocos = {x: 40, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
        positionRaspberry = {x: 40, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
        targetPositionFlavorsChocolate = {x: -9, y: -4, z: 3, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 4},
        targetPositionFlavorsCocos = {x: -14.5, y: -2, z: -3, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2.5},
        targetPositionFlavorsRaspberry = {x: -12, y: -3, z: 0, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 3.25},
        targetPositionDetail = {x: -8, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
        targetPositionDefault = {x: 0, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
        targetPositionDefaultHidden = {x: 40, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12};

    let windowWidth = window.innerWidth;

    // let statsContainer = document.getElementById('stats');
    // statsContainer.append(windowWidth + ' ' + windowHeight);


    let animateToFlavorsChocolate,
        animateToFlavorsCocos,
        animateToFlavorsRaspberry,
        animateToDetailPageChocolate,
        animateToDetailPageChocolateCocos,
        animateToDetailPageChocolateRaspberry,
        animateToDetailPageRaspberry,
        animateToDetailPageRaspberryChocolate,
        animateToDetailPageRaspberryCocos,
        animateToDetailPageCocos,
        animateToDetailPageCocosChocolate,
        animateToDetailPageCocosRaspberry,
        animateResetChocolate,
        animateResetCocos,
        animateResetRaspberry,
        animateInDetailPageCocos,
        animateInDetailPageCocosHide,
        animateInDetailPageChocolate,
        animateInDetailPageChocolateHide,
        animateInDetailPageRaspberry,
        animateInDetailPageRaspberryHide,
        animateToHiddenChocolate,
        animateToHiddenRaspberry,
        animateToHiddenCocos,
        flavorsAnimating = false,
        homeDefaultAnimating = false;

    let onWindowResize = throttle(() => {
            windowWidth = window.innerWidth;
            setTimeout(() => {
                    if (!mobileInit && (isHomePage || isDetailPage)) {
                        if (initialized) {
                            setAnimationPositions();
                            setSceneSize();
                            container.style.display = null;
                        } else {
                            init();
                        }
                    }
                }, 100
            )
        }

        ,
        60
        )
    ;


    function destroy() {
        if (initialized) {
            if (typeof destroyBarClickListeners === 'function') {
                destroyBarClickListeners();
            }
        }
    }


    function setAnimationPositions() {
        if (windowWidth < 420) {
            targetPositionDetail = {x: -5, y: 1.4, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
                targetPositionFlavorsCocos = {x: -5.6, y: 2, z: -9, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2},
                targetPositionFlavorsChocolate = {
                    x: -7.1,
                    y: -1.5,
                    z: -1,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 2
                },
                targetPositionFlavorsRaspberry = {x: -6.6, y: 0.5, z: -5, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2}
        } else if (windowWidth < 501) {
            targetPositionDetail = {x: -3.8, y: 1.2, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
                targetPositionDefaultHidden = {x: -20, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
                positionChocolate = {x: -20, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
                positionRaspberry = {x: -20, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
                targetPositionDetail = {x: -3.8, y: 1.2, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
                targetPositionFlavorsCocos = {x: -5.6, y: 2, z: -4, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2},
                targetPositionFlavorsChocolate = {
                    x: -7.1,
                    y: -1.5,
                    z: 0,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 2
                },
                targetPositionFlavorsRaspberry = {x: -6.6, y: 0.5, z: -2, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2}
        } else if (windowWidth < 650) {
            targetPositionDetail = {x: -3.9, y: 0.5, z: -5, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
                targetPositionFlavorsChocolate = {
                    x: -8,
                    y: -5.6,
                    z: 0,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 4.5
                },
                targetPositionFlavorsCocos = {x: -8.5, y: -0.5, z: -6, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 3},
                targetPositionFlavorsRaspberry = {
                    x: -7.75,
                    y: -3.5,
                    z: -3,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 3.5
                }
        } else if (windowWidth < 769) {
            targetPositionDetail = {x: -4.5, y: -0.4, z: -3, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
                targetPositionFlavorsChocolate = {
                    x: -8,
                    y: -5.6,
                    z: 0,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 4.5
                },
                targetPositionFlavorsCocos = {x: -8.5, y: -0.5, z: -6, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 3},
                targetPositionFlavorsRaspberry = {
                    x: -7.75,
                    y: -3.5,
                    z: -3,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 3.5
                }
        } else if (windowWidth < 1001) {
            targetPositionDetail = {x: -4.4, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2},
                targetPositionFlavorsChocolate = {x: -8, y: -2.5, z: 0, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 4},
                targetPositionFlavorsCocos = {x: -12, y: -0.5, z: -6, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2.5},
                targetPositionFlavorsRaspberry = {
                    x: -10,
                    y: -1.5,
                    z: -3,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 3.25
                }
        } else if (windowWidth < 1400) {
            targetPositionDetail = {x: -5, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2};
            targetPositionFlavorsChocolate = {x: -11, y: -6.5, z: 0, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 4},
                targetPositionFlavorsCocos = {x: -17.5, y: -4, z: -8, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2.6},
                targetPositionFlavorsRaspberry = {
                    x: -14,
                    y: -5,
                    z: -4,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 3.25
                }
        } else {
            targetPositionDetail = {x: -6, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2};
            targetPositionFlavorsChocolate = {x: -11, y: -6.5, z: 0, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 4},
                targetPositionFlavorsCocos = {x: -17.5, y: -4, z: -8, rotX: 0, rotY: Math.PI * 2, rotZ: Math.PI / 2.6},
                targetPositionFlavorsRaspberry = {
                    x: -14,
                    y: -5,
                    z: -4,
                    rotX: 0,
                    rotY: Math.PI * 2,
                    rotZ: Math.PI / 3.25
                }
        }
    }

    function setupAnimations() {
        animateToFlavorsChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionFlavorsChocolate, homePageAnimationTime).easing(TWEEN.Easing.Quadratic.InOut),
            animateToFlavorsCocos = new TWEEN.Tween(positionCocos).to(targetPositionFlavorsCocos, homePageAnimationTime).easing(TWEEN.Easing.Quadratic.InOut),
            animateToFlavorsRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionFlavorsRaspberry, homePageAnimationTime).easing(TWEEN.Easing.Quadratic.InOut);

        animateResetChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionDefault, homePageAnimationTime).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateResetCocos = new TWEEN.Tween(positionCocos).to(targetPositionDefaultHidden, homePageAnimationTime).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateResetRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionDefaultHidden, homePageAnimationTime).easing(TWEEN.Easing.Sinusoidal.InOut);

        animateToFlavorsChocolate.onStart(function () {
            animate_activate = true;
        });

        animateToFlavorsChocolate.onUpdate(function () {
            modelChocolateBar.position.x = positionChocolate.x;
            modelChocolateBar.position.y = positionChocolate.y;
            modelChocolateBar.position.z = positionChocolate.z;
            // modelChocolateBar.rotation.x = positionChocolate.rotX;
            modelChocolateBar.rotation.y = positionChocolate.rotY;
            modelChocolateBar.rotation.z = positionChocolate.rotZ;
        });

        animateToFlavorsChocolate.onComplete(function () {
            animate_activate = false;
            flavorsAnimating = false;
            homeDefaultAnimating = false;
        });

        animateToFlavorsCocos.delay(200);

        animateToFlavorsCocos.onUpdate(function () {
            modelCocosBar.position.x = positionCocos.x;
            modelCocosBar.position.y = positionCocos.y;
            modelCocosBar.position.z = positionCocos.z;
            // modelCocosBar.rotation.x = positionCocos.rotX;
            modelCocosBar.rotation.y = positionCocos.rotY;
            modelCocosBar.rotation.z = positionCocos.rotZ;
        });

        animateToFlavorsRaspberry.onUpdate(function () {
            modelRaspberryBar.position.x = positionRaspberry.x;
            modelRaspberryBar.position.y = positionRaspberry.y;
            modelRaspberryBar.position.z = positionRaspberry.z;
            // modelRaspberryBar.rotation.x = positionRaspberry.rotX;
            modelRaspberryBar.rotation.y = positionRaspberry.rotY;
            modelRaspberryBar.rotation.z = positionRaspberry.rotZ;
        });


        animateResetChocolate.onStart(function () {
            animate_activate = true;
        });


        animateResetChocolate.delay(200);

        animateResetChocolate.onUpdate(function () {
            modelChocolateBar.position.x = positionChocolate.x;
            modelChocolateBar.position.y = positionChocolate.y;
            modelChocolateBar.position.z = positionChocolate.z;
            // modelChocolateBar.rotation.x = positionChocolate.rotX;
            modelChocolateBar.rotation.y = positionChocolate.rotY;
            modelChocolateBar.rotation.z = positionChocolate.rotZ;

        });

        animateResetCocos.onUpdate(function () {
            modelCocosBar.position.x = positionCocos.x;
            modelCocosBar.position.y = positionCocos.y;
            modelCocosBar.position.z = positionCocos.z;
            // modelCocosBar.rotation.x = positionCocos.rotX;
            modelCocosBar.rotation.y = positionCocos.rotY;
            modelCocosBar.rotation.z = positionCocos.rotZ;
        });

        animateResetRaspberry.delay(100);

        animateResetRaspberry.onUpdate(function () {
            modelRaspberryBar.position.x = positionRaspberry.x;
            modelRaspberryBar.position.y = positionRaspberry.y;
            modelRaspberryBar.position.z = positionRaspberry.z;
            // modelRaspberryBar.rotation.x = positionRaspberry.rotX;
            modelRaspberryBar.rotation.y = positionRaspberry.rotY;
            modelRaspberryBar.rotation.z = positionRaspberry.rotZ;
        });

        animateResetChocolate.onComplete(function () {
            animate_activate = false;
            flavorsAnimating = false;
            homeDefaultAnimating = false;
        });
    }

    function setupHomeToDetailAnimations(barName) {
        if (barName === 'chocolate' || !barName) {
            animateToDetailPageChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionDetail, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
            animateToDetailPageChocolateCocos = new TWEEN.Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
            animateToDetailPageChocolateRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);

            animateToDetailPageChocolate.onUpdate(function () {
                modelChocolateBar.position.x = positionChocolate.x;
                modelChocolateBar.position.y = positionChocolate.y;
                modelChocolateBar.position.z = positionChocolate.z;
                modelChocolateBar.rotation.x = positionChocolate.rotX;
                modelChocolateBar.rotation.y = positionChocolate.rotY;
                modelChocolateBar.rotation.z = positionChocolate.rotZ;
            });

            animateToDetailPageChocolateCocos.onUpdate(function () {
                modelCocosBar.position.x = positionCocos.x;
                modelCocosBar.position.y = positionCocos.y;
                modelCocosBar.position.z = positionCocos.z;
                modelCocosBar.rotation.x = positionCocos.rotX;
                modelCocosBar.rotation.y = positionCocos.rotY;
                modelCocosBar.rotation.z = positionCocos.rotZ;
            });
            animateToDetailPageChocolateRaspberry.onUpdate(function () {
                modelRaspberryBar.position.x = positionRaspberry.x;
                modelRaspberryBar.position.y = positionRaspberry.y;
                modelRaspberryBar.position.z = positionRaspberry.z;
                modelRaspberryBar.rotation.x = positionRaspberry.rotX;
                modelRaspberryBar.rotation.y = positionRaspberry.rotY;
                modelRaspberryBar.rotation.z = positionRaspberry.rotZ;
            });
        }
        if (barName === 'raspberry' || !barName) {
            animateToDetailPageRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionDetail, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
            animateToDetailPageRaspberryChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
            animateToDetailPageRaspberryCocos = new TWEEN.Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);

            animateToDetailPageRaspberry.onUpdate(function () {
                modelRaspberryBar.position.x = positionRaspberry.x;
                modelRaspberryBar.position.y = positionRaspberry.y;
                modelRaspberryBar.position.z = positionRaspberry.z;
                modelRaspberryBar.rotation.x = positionRaspberry.rotX;
                modelRaspberryBar.rotation.y = positionRaspberry.rotY;
                modelRaspberryBar.rotation.z = positionRaspberry.rotZ;
            });

            animateToDetailPageRaspberryCocos.onUpdate(function () {
                modelCocosBar.position.x = positionCocos.x;
                modelCocosBar.position.y = positionCocos.y;
                modelCocosBar.position.z = positionCocos.z;
                modelCocosBar.rotation.x = positionCocos.rotX;
                modelCocosBar.rotation.y = positionCocos.rotY;
                modelCocosBar.rotation.z = positionCocos.rotZ;
            });
            animateToDetailPageRaspberryChocolate.onUpdate(function () {
                modelChocolateBar.position.x = positionChocolate.x;
                modelChocolateBar.position.y = positionChocolate.y;
                modelChocolateBar.position.z = positionChocolate.z;
                modelChocolateBar.rotation.x = positionChocolate.rotX;
                modelChocolateBar.rotation.y = positionChocolate.rotY;
                modelChocolateBar.rotation.z = positionChocolate.rotZ;
            });

        }
        if (barName === 'cocos' || !barName) {
            animateToDetailPageCocos = new TWEEN.Tween(positionCocos).to(targetPositionDetail, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
            animateToDetailPageCocosChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
            animateToDetailPageCocosRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);

            animateToDetailPageCocos.onUpdate(function () {
                modelCocosBar.position.x = positionCocos.x;
                modelCocosBar.position.y = positionCocos.y;
                modelCocosBar.position.z = positionCocos.z;
                modelCocosBar.rotation.x = positionCocos.rotX;
                modelCocosBar.rotation.y = positionCocos.rotY;
                modelCocosBar.rotation.z = positionCocos.rotZ;
            });

            animateToDetailPageCocosChocolate.onUpdate(function () {
                modelChocolateBar.position.x = positionChocolate.x;
                modelChocolateBar.position.y = positionChocolate.y;
                modelChocolateBar.position.z = positionChocolate.z;
                modelChocolateBar.rotation.x = positionChocolate.rotX;
                modelChocolateBar.rotation.y = positionChocolate.rotY;
                modelChocolateBar.rotation.z = positionChocolate.rotZ;
            });

            animateToDetailPageCocosRaspberry.onUpdate(function () {
                modelRaspberryBar.position.x = positionRaspberry.x;
                modelRaspberryBar.position.y = positionRaspberry.y;
                modelRaspberryBar.position.z = positionRaspberry.z;
                modelRaspberryBar.rotation.x = positionRaspberry.rotX;
                modelRaspberryBar.rotation.y = positionRaspberry.rotY;
                modelRaspberryBar.rotation.z = positionRaspberry.rotZ;
            });
        }
    }

    function setupHideBarAnimations() {
        animateToHiddenChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
        animateToHiddenRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
        animateToHiddenCocos = new TWEEN.Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);

        animateToHiddenChocolate.onUpdate(function () {
            modelChocolateBar.position.x = positionChocolate.x;
            modelChocolateBar.position.y = positionChocolate.y;
            modelChocolateBar.position.z = positionChocolate.z;
            modelChocolateBar.rotation.x = positionChocolate.rotX;
            modelChocolateBar.rotation.y = positionChocolate.rotY;
            modelChocolateBar.rotation.z = positionChocolate.rotZ;
        });

        animateToHiddenRaspberry.onUpdate(function () {
            modelRaspberryBar.position.x = positionRaspberry.x;
            modelRaspberryBar.position.y = positionRaspberry.y;
            modelRaspberryBar.position.z = positionRaspberry.z;
            modelRaspberryBar.rotation.x = positionRaspberry.rotX;
            modelRaspberryBar.rotation.y = positionRaspberry.rotY;
            modelRaspberryBar.rotation.z = positionRaspberry.rotZ;
        });

        animateToHiddenCocos.onUpdate(function () {
            modelCocosBar.position.x = positionCocos.x;
            modelCocosBar.position.y = positionCocos.y;
            modelCocosBar.position.z = positionCocos.z;
            modelCocosBar.rotation.x = positionCocos.rotX;
            modelCocosBar.rotation.y = positionCocos.rotY;
            modelCocosBar.rotation.z = positionCocos.rotZ;
        });
    }

    function init(pageName) {
        container = document.getElementById('scene-container');
        isHomePage = pageName === 'home';
        isDetailPage = pageName === 'crossbar-detail';
        const deviceType = getDeviceType();
        const shouldInitializeTouchDevice = isTouchDevice() && window.innerWidth <= (cssVariables.desktopBreakpoint - 1) || deviceType === 'tablet' || deviceType === 'mobile'
        if (shouldInitializeTouchDevice) {
            container.style.display = "none";
            setupBarData();
            if (isHomePage) {
                crossbarGyroscope.initHome();
                mobileInit = true;
                initialized = true;
            } else if (isDetailPage) {
                crossbarGyroscope.initDetail(data);
            }
        } else if (!mobileInit) {
            // hide mobile bars
            crossbarGyroscope.disableHome();
            if (!initialized && (isHomePage || isDetailPage)) {

                setupBarData();
                setupCircleClicks();
                setAnimationPositions();
                setupAnimations();
                setupHomeToDetailAnimations();

                // Create Camera, Lights, Models, Renderer, Render and Update Functions
                function createCamera() {
                    camera = new THREE.PerspectiveCamera(36, container.clientWidth / container.clientHeight, 1, 100);
                    setCameraPosition();
                    camera.lookAt(0, 0, 0);
                }

                function createLights() {
                    let ambientLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.6);
                    let directionalLightLeft = new THREE.DirectionalLight(0xffffff, 4);
                    directionalLightLeft.shadow = true;
                    directionalLightLeft.position.set(6, -18, 20);
                    scene.add(directionalLightLeft, ambientLight);
                }

                const loadModels = () => {
                    const loader = new GLTFLoader();

                    function onLoadBars() {

                        if (isHomePage) {
                            modelChocolateBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
                            modelRaspberryBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
                            modelCocosBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);

                            modelChocolateBar.position.set(targetPositionDefault.x, targetPositionDefault.y, targetPositionDefault.z);
                            modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);

                            createRenderer();
                            scene.add(modelRaspberryBar, modelChocolateBar, modelCocosBar);

                            // setTimeout(() => {
                            //     modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            //     modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            // }, 200);
                        } else {
                            for (let barName in data) {
                                if (window.location.href.includes(data[barName].url) || window.location.href.includes('preview')) {
                                    if (barName === 'chocolate') {
                                        positionCocos = {
                                            x: targetPositionDefaultHidden.x,
                                            y: targetPositionDefaultHidden.y,
                                            z: targetPositionDefaultHidden.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };
                                        positionRaspberry = {
                                            x: targetPositionDefaultHidden.x,
                                            y: targetPositionDefaultHidden.y,
                                            z: targetPositionDefaultHidden.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };
                                        positionChocolate = {
                                            x: targetPositionDetail.x,
                                            y: targetPositionDetail.y,
                                            z: targetPositionDetail.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };

                                        modelChocolateBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                                        modelRaspberryBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                                        modelCocosBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);

                                        modelChocolateBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
                                        modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                                        modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);

                                    } else if (barName === 'raspberry') {
                                        positionCocos = {
                                            x: targetPositionDefaultHidden.x,
                                            y: targetPositionDefaultHidden.y,
                                            z: targetPositionDefaultHidden.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };
                                        positionChocolate = {
                                            x: targetPositionDefaultHidden.x,
                                            y: targetPositionDefaultHidden.y,
                                            z: targetPositionDefaultHidden.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };
                                        positionRaspberry = {
                                            x: targetPositionDetail.x,
                                            y: targetPositionDetail.y,
                                            z: targetPositionDetail.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };

                                        modelRaspberryBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                                        modelChocolateBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                                        modelCocosBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);

                                        modelRaspberryBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
                                        modelChocolateBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                                        modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);


                                    } else if (barName === 'cocos') {

                                        positionRaspberry = {
                                            x: targetPositionDefaultHidden.x,
                                            y: targetPositionDefaultHidden.y,
                                            z: targetPositionDefaultHidden.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };
                                        positionChocolate = {
                                            x: targetPositionDefaultHidden.x,
                                            y: targetPositionDefaultHidden.y,
                                            z: targetPositionDefaultHidden.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };
                                        positionCocos = {
                                            x: targetPositionDetail.x,
                                            y: targetPositionDetail.y,
                                            z: targetPositionDetail.z,
                                            rotX: targetPositionDetail.rotX,
                                            rotY: targetPositionDetail.rotY,
                                            rotZ: targetPositionDetail.rotZ
                                        };

                                        modelCocosBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                                        modelRaspberryBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                                        modelChocolateBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);

                                        modelCocosBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
                                        modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                                        modelChocolateBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                                    }
                                }
                            }
                            createRenderer();
                            scene.add(modelRaspberryBar, modelChocolateBar, modelCocosBar);

                        }
                    }

                    const onProgress = () => {
                    };

                    const onError = (errorMessage) => {
                    };

                    const onLoadGlbfile = (gltf) => {
                        for (let child of gltf.scene.children) {

                            if (child.name === "Neoh_Bar_01_rasp") {
                                modelRaspberryBar = child;
                                modelRaspberryBar.userData = data['raspberry'];
                            } else if (child.name === "Neoh_Bar_02_choco") {
                                modelChocolateBar = child;
                                modelChocolateBar.userData = data['chocolate'];
                            } else if (child.name === "Neoh_Bar_03_cocos") {
                                modelCocosBar = child;
                                modelCocosBar.userData = data['cocos'];
                            }
                        }

                        onLoadBars();
                    }

                    // if (navigator.userAgent.match(/Android/i)
                    //     || navigator.userAgent.match(/webOS/i)
                    //     || navigator.userAgent.match(/BlackBerry/i)
                    //     || navigator.userAgent.match(/Windows Phone/i)
                    // ) {
                    //     loader.load('/assets/threejs/191212_NeohBars_Mobile_wReflection.glb', onLoadGlbfile, onProgress, onError);
                    // } else {
                    let modelUrl = AssetResolver.resolveStatic('threejs/191212_NeohBars_v003_1024_newTextures.glb');
                    loader.load(modelUrl, onLoadGlbfile, onProgress, onError);
                    // }
                }

                function createRenderer() {

                    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
                    //renderer.setSize(innerWidth, window.innerHeight);
                    renderer.setClearColor(0x000000, 0);
                    renderer.gammaFactor = 1;
                    renderer.outputEncoding = true;
                    renderer.physicallyCorrectLights = true;
                    if (navigator.userAgent.match(/Android/i)
                        || navigator.userAgent.match(/webOS/i)
                        || navigator.userAgent.match(/iPod/i)
                        || navigator.userAgent.match(/BlackBerry/i)
                        || navigator.userAgent.match(/Windows Phone/i)
                    ) {
                        renderer.setPixelRatio(window.devicePixelRatio / 2);
                    } else {
                        renderer.setPixelRatio(window.devicePixelRatio);
                    }
                    renderer.setClearColor(0x000000, 0);
                    renderer.gammaFactor = 1;
                    renderer.gammaOutput = true;
                    renderer.physicallyCorrectLights = true;
                    container.appendChild(renderer.domElement);
                    renderer.setAnimationLoop(() => {
                        update();
                    });
                    onWindowResize();

                    siteLoader().removeLoader();
                }

                // function createStats() {
                //     let statsContainer = document.getElementById('stats');
                //     stats = new Stats();
                //     stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                //     statsContainer.appendChild(stats.domElement);
                // }

                // Initialize ThreeJS Scene
                function initAll() {
                    scene = new THREE.Scene();
                    createCamera();
                    createLights();
                    loadModels();
                    // createStats();
                }

                let prevX = 0;
                let prevY = 0;
                const mouseInteractions = throttle((e) => {
                    if (preventAnimations || (windowWidth < 768 && window.ontouchstart)) {
                        // no mouse following on touch devices
                        return;
                    } else {
                        let cursorPosX = (window.Event) ? e.clientX : e.pageX;
                        let cursorPosY = (window.Event) ? e.clientY : e.pageY;
                        if (Math.abs(cursorPosX - prevX) > 7 || Math.abs(cursorPosY - prevY) > 7) {
                            lastMousePosition = {x: cursorPosX, y: cursorPosY};
                            speedX = (cursorPosX / (windowWidth / 2) - 1);
                            speedY = (cursorPosY / (window.innerHeight / 2) - 1);
                            mouseControlStuff(speedX, speedY);
                        }
                        prevX = cursorPosX;
                        prevY = cursorPosY;
                    }
                }, 57);


                if (!isTouchDevice()) {
                    window.addEventListener('mousemove', mouseInteractions);
                }

                function mouseControlStuff(speedX, speedY) {
                    let heroHeadline = document.getElementById('js__hero-headline');
                    if (!animate_activate) {
                        if (modelChocolateBar) {
                            modelChocolateBar.rotation.x = speedY / 8;
                            modelChocolateBar.rotation.y = speedX / 8;
                        }
                        if (modelCocosBar) {
                            modelCocosBar.rotation.x = speedY / 9;
                            modelCocosBar.rotation.y = speedX / 9;
                        }
                        if (modelRaspberryBar) {
                            modelRaspberryBar.rotation.x = speedY / 11;
                            modelRaspberryBar.rotation.y = speedX / 11;
                        }
                        if (heroHeadline && windowWidth > 768) {
                            heroHeadline.style.transform = "translate(" + Math.round(speedX * 10) + "px," + Math.round(speedY * 10) + "px)";
                        }
                    }
                }

                function setCssProperties() {
                    if (isHomePage) {
                        changeCSSPositionFixed();
                    } else if (isDetailPage) {
                        changeCssPositionAbsolute();
                    } else {
                        container.style.display = 'none';
                        container.style.position = null;
                        container.style.zIndex = null;
                    }
                }

                initAll();
                setCssProperties();
                if (isHomePage) prevPage = 'home';
                if (isDetailPage) prevPage = 'detail';

                initialized = true;

                createWindowResizeListener();

            } else if (initialized && (isHomePage || isDetailPage)) {
                // if already initialized
                resume();
                setSceneSize();
                if (isHomePage) {
                    changeCSSPositionFixed();
                    setupBarData();
                    setupCircleClicks();
                    setAnimationPositions();

                    positionChocolate = {x: 0, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
                        positionCocos = {x: 40, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
                        positionRaspberry = {x: 40, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12};

                    modelChocolateBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
                    modelRaspberryBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
                    modelCocosBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);

                    modelChocolateBar.position.set(targetPositionDefault.x, targetPositionDefault.y, targetPositionDefault.z);
                    modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                    modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);

                    setupAnimations();


                    prevPage = 'home';

                } else if (isDetailPage) {
                    setAnimationPositions();
                    modelChocolateBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                    modelRaspberryBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                    modelCocosBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);

                    if (!preventSetBarPositionOnDetail) {
                        let lastSegment = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

                        if (lastSegment === 'chocolate') {
                            modelChocolateBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
                            modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            positionChocolate = {...targetPositionDetail};
                            positionRaspberry = {...targetPositionDefaultHidden};
                            positionCocos = {...targetPositionDefaultHidden};
                        } else if (lastSegment === 'cocos') {
                            modelCocosBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
                            modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            modelChocolateBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            positionCocos = {...targetPositionDetail};
                            positionRaspberry = {...targetPositionDefaultHidden};
                            positionChocolate = {...targetPositionDefaultHidden};
                        } else if (lastSegment === 'raspberry') {
                            modelRaspberryBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
                            modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            modelChocolateBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
                            positionRaspberry = {...targetPositionDetail};
                            positionCocos = {...targetPositionDefaultHidden};
                            positionChocolate = {...targetPositionDefaultHidden};
                        }
                    } else preventSetBarPositionOnDetail = false; // reset

                    changeCssPositionAbsolute();
                    setupChangeBarAnimations();

                    prevPage = 'detail';
                } else {
                    container.style.display = 'none';
                    container.style.position = null;
                    container.style.zIndex = null;

                    prevPage = null;
                }

            } else if (initialized) {
                pause();
            } else {
                container.style.display = "none";
                container.style.position = null;
                container.style.zIndex = null;
            }
        }
    }

    function createWindowResizeListener() {

        if (!windowResizeListenerCreated) {
            windowResizeListenerCreated = true;
            // Control Size of the Scene based on Window Resize
            window.addEventListener('resize', onWindowResize);
        }
    }

    function setCameraPosition() {
        let adjustCameraZ;
        let containerWidth = container.clientWidth;
        if (windowWidth < 376) {
            adjustCameraZ = 44 * containerWidth / windowWidth;
        } else if (windowWidth < 420) {
            adjustCameraZ = 44 * containerWidth / windowWidth;
        } else if (windowWidth < 501) {
            adjustCameraZ = 40 * containerWidth / windowWidth;
        } else {
            adjustCameraZ = 32 * containerWidth / windowWidth;
        }
        camera.position.set(0, 0, adjustCameraZ);
    }

    function setSceneSize() {
        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();
        if (renderer) renderer.setSize(containerWidth, containerHeight);
        setCameraPosition();
    }

    function setupChangeBarAnimations() {
        animateInDetailPageCocos = new TWEEN.Tween(positionCocos).to(targetPositionDetail, 800).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateInDetailPageCocosHide = new TWEEN.Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateInDetailPageChocolate = new TWEEN.Tween(positionChocolate).to(targetPositionDetail, 800).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateInDetailPageChocolateHide = new TWEEN.Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateInDetailPageRaspberry = new TWEEN.Tween(positionRaspberry).to(targetPositionDetail, 800).easing(TWEEN.Easing.Sinusoidal.InOut),
            animateInDetailPageRaspberryHide = new TWEEN.Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(TWEEN.Easing.Sinusoidal.InOut);


        animateInDetailPageCocos.onUpdate(function () {
            modelCocosBar.position.x = positionCocos.x;
            modelCocosBar.position.y = positionCocos.y;
            modelCocosBar.position.z = positionCocos.z;
        });

        animateInDetailPageCocosHide.onUpdate(function () {
            modelCocosBar.position.x = positionCocos.x;
            modelCocosBar.position.y = positionCocos.y;
            modelCocosBar.position.z = positionCocos.z;
        });

        animateInDetailPageChocolate.onUpdate(function () {
            modelChocolateBar.position.x = positionChocolate.x;
            modelChocolateBar.position.y = positionChocolate.y;
            modelChocolateBar.position.z = positionChocolate.z;
        });

        animateInDetailPageChocolateHide.onUpdate(function () {
            modelChocolateBar.position.x = positionChocolate.x;
            modelChocolateBar.position.y = positionChocolate.y;
            modelChocolateBar.position.z = positionChocolate.z;
        });

        animateInDetailPageRaspberry.onUpdate(function () {
            modelRaspberryBar.position.x = positionRaspberry.x;
            modelRaspberryBar.position.y = positionRaspberry.y;
            modelRaspberryBar.position.z = positionRaspberry.z;
        });

        animateInDetailPageRaspberryHide.onUpdate(function () {
            modelRaspberryBar.position.x = positionRaspberry.x;
            modelRaspberryBar.position.y = positionRaspberry.y;
            modelRaspberryBar.position.z = positionRaspberry.z;
        });
    }

    function setupForTouchDevice() {
        targetPositionDefaultHidden = {x: -35, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
            positionCocos = {x: -35, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12},
            positionRaspberry = {x: -35, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 12};
    }

    function setupBarData() {
        let barDataEls = document.querySelectorAll('.js__bars__data');
        barDataEls.forEach(bar => {
            let barName = bar.dataset.barName;
            data[barName] = {
                url: bar.dataset.href,
                bar: barName,
            }
        });
    }

    function setupCircleClicks() {
        let barDataEls = document.querySelectorAll('.js__bars__data');

        if (barDataEls.length > 0) {
            let clickListeners = [];
            barDataEls.forEach(bar => {
                let barName = bar.dataset.barName;
                data[barName] = {
                    url: bar.dataset.href,
                    bar: barName,
                }

                function clickHandler(e) {
                    e.preventDefault();
                    let barHref = bar.dataset.href;
                    let barName;


                    for (let barProp in data) {
                        if (data[barProp].url === barHref) barName = data[barProp].bar;
                    }

                    if (barName) {
                        let customEvent = new CustomEvent('barClick', {
                            detail: {
                                href: bar.dataset.href,
                                bar: barName,
                            }
                        });
                        document.dispatchEvent(customEvent);
                    }
                }

                bar.addEventListener('click', clickHandler);

                clickListeners.push(() => {
                    bar.removeEventListener('click', clickHandler);
                })

            });


            destroyBarClickListeners = () => {
                clickListeners.forEach(destroyFunc => {
                    if (destroyFunc) destroyFunc();
                })
            }
        }
    }

    function changeBar(url) {
        preventAnimations = false;

        setupChangeBarAnimations();
        for (let barName in data) {
            if (data[barName].url === url) {
                if (barName === 'chocolate' && modelChocolateBar) {
                    // animation to chocolate
                    modelChocolateBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                    animateInDetailPageCocosHide.start();
                    animateInDetailPageRaspberryHide.start();
                    animateInDetailPageChocolate.start();
                } else if (barName === 'cocos' && modelCocosBar) {
                    modelCocosBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                    animateInDetailPageCocos.start();
                    animateInDetailPageRaspberryHide.start();
                    animateInDetailPageChocolateHide.start();
                } else if (barName === 'raspberry' && modelRaspberryBar) {
                    modelRaspberryBar.rotation.set(targetPositionDetail.rotX, targetPositionDetail.rotY, targetPositionDetail.rotZ);
                    animateInDetailPageRaspberry.start();
                    animateInDetailPageCocosHide.start();
                    animateInDetailPageChocolateHide.start();

                }
            }
        }
    }

    function update() {
        TWEEN.update();
        // stats.begin();
        // stats.end();
        renderer.render(scene, camera);
    }

    function animateToFlavours() {
        if (flavorsAnimating) return;
        flavorsAnimating = true;

        targetPositionFlavorsChocolate.rotX = speedY / 5;
        targetPositionFlavorsRaspberry.rotX = speedY / 9;
        targetPositionFlavorsCocos.rotX = speedY / 7;

        if (window.innerWidth > 1000) {
            targetPositionFlavorsChocolate.rotY = (speedX / 5) + (Math.PI * 2);
            targetPositionFlavorsRaspberry.rotY = (speedX / 9) + (Math.PI * 2);
            targetPositionFlavorsCocos.rotY = (speedX / 7) + (Math.PI * 2);
        } else {
            targetPositionFlavorsChocolate.rotY = speedX / 5;
            targetPositionFlavorsRaspberry.rotY = speedX / 9;
            targetPositionFlavorsCocos.rotY = speedX / 7;
        }
        setupAnimations();

        // if (animateResetChocolate) animateResetChocolate.stop();
        // if (animateResetCocos) animateResetCocos.stop();
        // if (animateResetRaspberry) animateResetRaspberry.stop();
        // if (animateToHiddenCocos) animateToHiddenCocos.stop();
        // if (animateToHiddenChocolate) animateToHiddenChocolate.stop();
        // if (animateToHiddenRaspberry) animateToHiddenRaspberry.stop();


        setTimeout(() => {
            if (modelChocolateBar) animateToFlavorsChocolate.start();
            if (modelCocosBar) animateToFlavorsCocos.start();
            if (modelRaspberryBar) animateToFlavorsRaspberry.start();
        }, 10);
    }

    function animateToHomeDefault() {
        if (homeDefaultAnimating) return;

        homeDefaultAnimating = true;
        targetPositionDefault.rotY = speedX / 5;
        targetPositionDefault.rotX = speedX / 5;
        setupAnimations();

        setTimeout(() => {
            animateResetChocolate.start();
            animateResetCocos.start();
            animateResetRaspberry.start();
        }, 10);
    }

    function animateToHidden() {
        setupHideBarAnimations();

        setTimeout(() => {
            animateToHiddenCocos.start();
            animateToHiddenChocolate.start();
            animateToHiddenRaspberry.start();
        }, 10);


    }

    function changeCssPositionAbsolute() {
        container.style.display = "";
        container.style.zIndex = "3";
        container.style.position = "absolute";
        container.style.top = '';
    }

    function changeCssPositionAbsoluteSlideOne() {
        container.style.display = "";
        container.style.zIndex = "";
        container.style.position = "absolute";
        container.style.top = window.innerHeight + 'px';
    }

    function changeCSSPositionFixed() {
        container.style.display = "";
        container.style.zIndex = "3";
        container.style.position = "fixed";
        container.style.top = '';
    }

    function setPreventAnimations(reset) {
        preventAnimations = true;
        if (renderer) {
            renderer.setAnimationLoop(null);
            if (reset) debouncedPreventAnimations();
        }
    }

    function setEnableAnimations() {
        preventAnimations = false;
        if (renderer) {
            renderer.setAnimationLoop(() => {
                update();
            });
        }
    }

    function animateToDetail(barName) {
        preventSetBarPositionOnDetail = true;

        container.style.zIndex = cssVariables.zIndexAboveContent;
        container.classList.add('home__scene--detail');
        setupHomeToDetailAnimations(barName);
        if (barName === 'chocolate') {
            animateToDetailPageChocolate.start();
            animateToDetailPageChocolateCocos.start();
            animateToDetailPageChocolateRaspberry.start();
        } else if (barName === 'raspberry') {
            animateToDetailPageRaspberry.start();
            animateToDetailPageRaspberryChocolate.start();
            animateToDetailPageRaspberryCocos.start();
        } else if (barName === 'cocos') {
            animateToDetailPageCocos.start();
            animateToDetailPageCocosChocolate.start();
            animateToDetailPageCocosRaspberry.start();
        }
        document.body.style.overflow = 'visible';
    }

    function pause() {
        container.style.display = 'none';
        container.style.position = null;
        container.style.zIndex = null;
        if (renderer) {
            renderer.setAnimationLoop(null);
        }
    }

    function resume() {
        container.style.display = '';
        if (renderer) {
            renderer.setAnimationLoop(() => {
                update();
            });
        }
    }

    function getHomeAnimationTime() {
        return homePageAnimationTime;
    }

    function hide(shouldHide) {
        if (shouldHide && !isHidden) {
            container.classList.add('home__scene--hidden');
            isHidden = true
        } else if (!shouldHide && isHidden) {
            container.classList.remove('home__scene--hidden');
            isHidden = false
        }
    }

    return {
        init: init,
        destroy: destroy,
        changeBar: changeBar,
        setPreventAnimations: setPreventAnimations,
        changeCssPositionAbsoluteSlideOne: changeCssPositionAbsoluteSlideOne,
        changeCSSPositionFixed: changeCSSPositionFixed,
        setEnableAnimations: setEnableAnimations,
        animateToFlavours: animateToFlavours,
        animateToHomeDefault: animateToHomeDefault,
        animateToDetail: animateToDetail,
        animateToHidden: animateToHidden,
        getHomeAnimationTime: getHomeAnimationTime,
        hide: hide,
        usesMobileVersion: mobileInit
    }
}

let crossBarsScript = null;
export default function () {
    if (!crossBarsScript) crossBarsScript = threeCrossbars();
    return crossBarsScript;
}
