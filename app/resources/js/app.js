require('intersection-observer');
import Swup from 'swup';
// import contactForm from './contact-form';
import NavAnimation from './nav';
import SwupJsPlugin from '@swup/js-plugin';
import Header from './header';
import careers from './careers';
import crossbars from './crossbar-detail';
import cssVariables from "./utils/css-variables";
import why from './why';
import home from './home';
import neohpedia from './neohpedia';
import about from './about';
import faq from './faq';
import productDetail from './product-detail';
import productOverview from './product-overview';
import crossbarMobile from './gyroscope-crossbar';
import videoControls from './components/video';
import instagramEmbed from './components/instagram-embed';
import globalNotification from './components/global-notification';
import throttle from 'lodash/throttle';
import threeJsBar from './three-crossbars';
import loaderScript from './loader';
import shopFinderScript from './shopfinder';
import shopifyScript from './shopify';
import challenges from "./challenges";
import taster from "./taster";
import Footer from "./components/footer";


import {TweenLite, ScrollToPlugin, CSSPlugin} from "gsap/all"; // leave the ScrollToPlugin import
import 'lazysizes';
import 'alpinejs';

const gsapPlugins = [ScrollToPlugin, CSSPlugin];
// set frames used by GSAP as 30 per second
TweenLite.ticker.fps(60);

// prevent auto browser scoll on refresh
history.scrollRestoration = "manual";

/*******************+*******************+*******
 ****************  SCRIPTS  ************ */


let isFirstPageLoad = true;
let scriptName;

let careersPage = careers();
let threejsBarScript = threeJsBar(runReplaceContent);
let whyPage = why();
let aboutPage = about();
// let contactPage = contactForm();
let homePage = home(runReplaceContent);
let neohpediaPage = neohpedia();
let crossbarsPage = crossbars();
let videoControlsScript = videoControls();
let debounced = false;
let loader = loaderScript();
let shopFinder = shopFinderScript();

shopifyScript.initShopify();
globalNotification.init();
Header.init();


function getScriptNameToExec(doc) {
    scriptName = ''
    let scriptEl = doc.querySelector('[data-script]');
    if (scriptEl) scriptName = scriptEl.dataset.script;
}

function runScriptsForPage() {
    if (!debounced) {
        globalNotification.onPageChange(isFirstPageLoad);
        loader.init(scriptName);
        Footer.init(scriptName);

        instagramEmbed(isFirstPageLoad);
        videoControlsScript.init();
        Header.get().onPageChange(scriptName);

        threejsBarScript.init(scriptName);
        aboutPage.init(scriptName);
        careersPage.init(scriptName);
        challenges.init(scriptName);
        crossbarsPage.init(scriptName);
        faq.init(scriptName);
        homePage.init(scriptName);
        neohpediaPage.init(scriptName);
        productDetail.init(scriptName);
        productOverview.init(scriptName);
        shopFinder.init(scriptName, isFirstPageLoad);
        whyPage.init(scriptName);
        taster.init(scriptName)

        isFirstPageLoad = false;
        debounced = true;
        setTimeout(() => {
            debounced = false;
        }, 100);
    }
}

function cleanUpScriptsForPage() {
    loader.destroy();
    videoControlsScript.destroy();

    threejsBarScript.destroy();
    // contactPage.destroy();
    aboutPage.destroy();
    careersPage.destroy();
    challenges.destroy();
    crossbarsPage.destroy();
    faq.destroy();
    homePage.destroy();
    neohpediaPage.destroy();
    productDetail.destroy();
    productOverview.destroy();
    shopFinder.destroy();
    whyPage.destroy();
    taster.destroy();

    crossbarMobile.destroy(); // is init-ed in the three-crossbar page, but destroyed here
}


/*******************+*******************+*******
 ****************  ACCEPT TRACKING HANDLING ************ */
let cookieDisclaimer = document.getElementById('cookie');

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

if (getCookie('accept_tracking') === null && cookieDisclaimer && document.location.href.indexOf('us-en') === -1) {
    cookieDisclaimer.style.opacity = '1';
    document.getElementById('acceptCookie').addEventListener('click', function () {
        var d = new Date;
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 28);
        document.cookie = 'accept_tracking' + "=" + true + ";path=/;expires=" + d.toGMTString();
        cookieDisclaimer.classList.add('cookie--hide');
    });
} else if (cookieDisclaimer) {
    cookieDisclaimer.classList.add('cookie--hide');
}


/*******************+*******************+*******
 ****************  ON FIRST LOAD STUFF TO EXECUTE ************ */

// on first load, run the code below

let navContainerMobileInit = document.getElementById('js__header-mob');
let isStore = document.getElementById('js__product')
if (navContainerMobileInit && isStore) {
    navContainerMobileInit.classList.add('nav__header--bg')
} else if (navContainerMobileInit) {
    navContainerMobileInit.classList.remove('nav__header--bg')
}


let navigation = NavAnimation.init();
navigation.addListener('open', () => window.scrollY < cssVariables.globalNotificationHeight && globalNotification.hide());
navigation.addListener('close', () => window.scrollY < cssVariables.globalNotificationHeight && globalNotification.show());

getScriptNameToExec(document);
runScriptsForPage();


/*******************+*******************+*******
 ****************  SWUP SETUP  ************ */

const swup = new Swup({
    plugins: [
        new SwupJsPlugin([
            {
                from: '(.*)', // meaning any
                to: '(.*)', // meaning any
                out: function (callback) {
                    if (navigation) {
                        let navOpen = navigation.getNavOpen();
                        let content = document.getElementById('js__content');
                        if (!navOpen) {
                            if (content) {
                                TweenLite.to(content, .4, {
                                    opacity: 0, onComplete: callback
                                })
                            }
                        } else {
                            TweenLite.to(content, .4, {
                                opacity: 0, onComplete: callback
                            })

                            setTimeout(() => {
                                navigation.toggleNav(callback);
                            }, 200);
                        }
                    }
                },
                in: function (callback) {
                    scroll(0, 0);
                    if (navigation) {
                        let navOpen = navigation.getNavOpen();
                        if (!navOpen) {
                            let content = document.getElementById('js__content');
                            if (content) {
                                TweenLite.to(content, .4, {
                                    opacity: 1, onComplete: function () {
                                        callback();
                                    }
                                })
                            }
                        }
                    }
                },
            }
        ]),
    ],

    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]):not([data-bar]), a[href^="/"]:not([data-no-swup]):not([data-bar])'
});


/*******************+*******************+*******
 ****************  REPLACE ELEMENTS AND RUN SCRIPTS ON PAGE CONTENT REPLACE  ************ */

let ctaButtons = document.querySelectorAll('.js__nav-cta');
let switchLangLinks = document.querySelectorAll('.js__switch-lang');
let title = document.querySelector('title');
let head = document.querySelector('head');
let navLinks = document.querySelectorAll('.js__nav__el');

function runReplaceContent(swup) {
    let currentPage = swup.cache.getCurrentPage() || swup.cache.last;
    navLinks.forEach(link => {
        link.classList.remove(link.dataset.activeClass);
    });

    if (currentPage) {
        let responseDoc = new DOMParser().parseFromString(currentPage.originalContent, "text/html").children[0];

        if (responseDoc) {
            getScriptNameToExec(responseDoc);

            let newNavLinks = responseDoc.querySelectorAll('.js__nav__el');
            newNavLinks.forEach(newNavLink => {
                if (newNavLink.classList.contains(newNavLink.dataset.activeClass)) {
                    navLinks.forEach(navLink => {
                        if (navLink.dataset.navId === newNavLink.dataset.navId) {
                            navLink.classList.add(navLink.dataset.activeClass);
                        }
                    })

                }
            })


            // update lang switch linksx
            let newSwitchLangLinks = responseDoc.querySelectorAll('.js__switch-lang');
            switchLangLinks.forEach((link, index) => {
                if (newSwitchLangLinks[index]) link.setAttribute('href', newSwitchLangLinks[index].getAttribute('href'));
            });
            // update call to action button colour
            let newCtaButtons = responseDoc.querySelectorAll('.js__nav-cta');
            ctaButtons.forEach((btn, index) => {
                if (newCtaButtons[index]) {
                    btn.className = newCtaButtons[index].className;
                    btn.href = newCtaButtons[index].href;
                }
            });

            let newTitle = responseDoc.querySelector('title');
            title.innerHTML = newTitle.innerHTML;

            // replace link SEO related tags
            let alternateLinks = responseDoc.querySelectorAll('link[rel="alternate"]');
            let canonicalLinks = responseDoc.querySelectorAll('link[rel="canonical"]');
            let schemaScripts = responseDoc.querySelectorAll('script[type="application/ld+json"]');
            let tagsToAppend = [...alternateLinks, ...canonicalLinks, ...schemaScripts];
            let alternateLinks2 = document.querySelectorAll('link[rel="alternate"]');
            let canonicalLinks2 = document.querySelectorAll('link[rel="canonical"]');
            let schemaScripts2 = document.querySelectorAll('script[type="application/ld+json"]');
            let tagsToRemove = [...alternateLinks2, ...canonicalLinks2, ...schemaScripts2];
            tagsToRemove.forEach(tag => tag.parentNode.removeChild(tag));
            tagsToAppend.forEach(tag => head.appendChild(tag));

        }
        // run scripts
        runScriptsForPage();
    }

}

swup.on('contentReplaced', function (event) {
    runReplaceContent(swup);
});


swup.on('willReplaceContent', function (event) {
    cleanUpScriptsForPage();
});


// 100vh fix for mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', throttle(() => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}), 50);