(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/assets/index"],{

/***/ "./app/resources/js/about.js":
/*!***********************************!*\
  !*** ./app/resources/js/about.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AboutPage = /*#__PURE__*/function () {
  function AboutPage() {
    _classCallCheck(this, AboutPage);

    this.initialized = false;
  }

  _createClass(AboutPage, [{
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        this.initialized = false;
        this.obsFunction();
      }
    }
  }, {
    key: "init",
    value: function init(pageName) {
      var isAboutPage = pageName === 'about';

      if (isAboutPage && !this.initialized) {
        this.initialized = true;
        this.obsFunction();
      }
    }
  }, {
    key: "obsFunction",
    value: function obsFunction() {
      var threshold = document.querySelector('.about__container__mask-top');
      var titles = document.querySelectorAll('.about__mid-hero__text');
      var bgImg = document.querySelector('.about__mid-hero');
      var config = {
        rootMargin: '20%'
      };
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            titles.forEach(function (title) {
              title.classList.add('about__mid-hero__text--show');
              bgImg.classList.add('about__mid-hero--scale');
            });
          } else {// observer.unobserve(entry.target);
          }
        });
      }, config);
      observer.observe(threshold);
    }
  }]);

  return AboutPage;
}();

var aboutPageScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!aboutPageScript) aboutPageScript = new AboutPage();
  return aboutPageScript;
});

/***/ }),

/***/ "./app/resources/js/app.js":
/*!*********************************!*\
  !*** ./app/resources/js/app.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./app/resources/js/nav.js");
/* harmony import */ var _swup_js_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swup/js-plugin */ "./node_modules/@swup/js-plugin/lib/index.js");
/* harmony import */ var _swup_js_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swup_js_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var _careers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./careers */ "./app/resources/js/careers.js");
/* harmony import */ var _crossbar_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crossbar-detail */ "./app/resources/js/crossbar-detail.js");
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _why__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./why */ "./app/resources/js/why.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./app/resources/js/home.js");
/* harmony import */ var _neohpedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./neohpedia */ "./app/resources/js/neohpedia.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about */ "./app/resources/js/about.js");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq */ "./app/resources/js/faq.js");
/* harmony import */ var _product_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-detail */ "./app/resources/js/product-detail.js");
/* harmony import */ var _product_overview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-overview */ "./app/resources/js/product-overview.js");
/* harmony import */ var _gyroscope_crossbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gyroscope-crossbar */ "./app/resources/js/gyroscope-crossbar.js");
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/video */ "./app/resources/js/components/video.js");
/* harmony import */ var _components_instagram_embed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/instagram-embed */ "./app/resources/js/components/instagram-embed.js");
/* harmony import */ var _components_global_notification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/global-notification */ "./app/resources/js/components/global-notification.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _three_crossbars__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./three-crossbars */ "./app/resources/js/three-crossbars.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loader */ "./app/resources/js/loader.js");
/* harmony import */ var _shopfinder__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shopfinder */ "./app/resources/js/shopfinder.js");
/* harmony import */ var _shopify__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shopify */ "./app/resources/js/shopify.js");
/* harmony import */ var _challenges__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./challenges */ "./app/resources/js/challenges.js");
/* harmony import */ var _taster__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./taster */ "./app/resources/js/taster.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footer */ "./app/resources/js/components/footer.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_28__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");

 // import contactForm from './contact-form';


























 // leave the ScrollToPlugin import



var gsapPlugins = [gsap_all__WEBPACK_IMPORTED_MODULE_26__["ScrollToPlugin"], gsap_all__WEBPACK_IMPORTED_MODULE_26__["CSSPlugin"]]; // set frames used by GSAP as 30 per second

gsap_all__WEBPACK_IMPORTED_MODULE_26__["TweenLite"].ticker.fps(60); // prevent auto browser scoll on refresh

history.scrollRestoration = "manual";
/*******************+*******************+*******
 ****************  SCRIPTS  ************ */

var isFirstPageLoad = true;
var scriptName;
var careersPage = Object(_careers__WEBPACK_IMPORTED_MODULE_4__["default"])();
var threejsBarScript = Object(_three_crossbars__WEBPACK_IMPORTED_MODULE_19__["default"])(runReplaceContent);
var whyPage = Object(_why__WEBPACK_IMPORTED_MODULE_7__["default"])();
var aboutPage = Object(_about__WEBPACK_IMPORTED_MODULE_10__["default"])(); // let contactPage = contactForm();

var homePage = Object(_home__WEBPACK_IMPORTED_MODULE_8__["default"])(runReplaceContent);
var neohpediaPage = Object(_neohpedia__WEBPACK_IMPORTED_MODULE_9__["default"])();
var crossbarsPage = Object(_crossbar_detail__WEBPACK_IMPORTED_MODULE_5__["default"])();
var videoControlsScript = Object(_components_video__WEBPACK_IMPORTED_MODULE_15__["default"])();
var debounced = false;
var loader = Object(_loader__WEBPACK_IMPORTED_MODULE_20__["default"])();
var shopFinder = Object(_shopfinder__WEBPACK_IMPORTED_MODULE_21__["default"])();
_shopify__WEBPACK_IMPORTED_MODULE_22__["default"].initShopify();
_components_global_notification__WEBPACK_IMPORTED_MODULE_17__["default"].init();
_header__WEBPACK_IMPORTED_MODULE_3__["default"].init();

function getScriptNameToExec(doc) {
  scriptName = '';
  var scriptEl = doc.querySelector('[data-script]');
  if (scriptEl) scriptName = scriptEl.dataset.script;
}

function runScriptsForPage() {
  if (!debounced) {
    _components_global_notification__WEBPACK_IMPORTED_MODULE_17__["default"].onPageChange(isFirstPageLoad);
    loader.init(scriptName);
    _components_footer__WEBPACK_IMPORTED_MODULE_25__["default"].init(scriptName);
    Object(_components_instagram_embed__WEBPACK_IMPORTED_MODULE_16__["default"])(isFirstPageLoad);
    videoControlsScript.init();
    _header__WEBPACK_IMPORTED_MODULE_3__["default"].get().onPageChange(scriptName);
    threejsBarScript.init(scriptName);
    aboutPage.init(scriptName);
    careersPage.init(scriptName);
    _challenges__WEBPACK_IMPORTED_MODULE_23__["default"].init(scriptName);
    crossbarsPage.init(scriptName);
    _faq__WEBPACK_IMPORTED_MODULE_11__["default"].init(scriptName);
    homePage.init(scriptName);
    neohpediaPage.init(scriptName);
    _product_detail__WEBPACK_IMPORTED_MODULE_12__["default"].init(scriptName);
    _product_overview__WEBPACK_IMPORTED_MODULE_13__["default"].init(scriptName);
    shopFinder.init(scriptName, isFirstPageLoad);
    whyPage.init(scriptName);
    _taster__WEBPACK_IMPORTED_MODULE_24__["default"].init(scriptName);
    isFirstPageLoad = false;
    debounced = true;
    setTimeout(function () {
      debounced = false;
    }, 100);
  }
}

function cleanUpScriptsForPage() {
  loader.destroy();
  videoControlsScript.destroy();
  threejsBarScript.destroy(); // contactPage.destroy();

  aboutPage.destroy();
  careersPage.destroy();
  _challenges__WEBPACK_IMPORTED_MODULE_23__["default"].destroy();
  crossbarsPage.destroy();
  _faq__WEBPACK_IMPORTED_MODULE_11__["default"].destroy();
  homePage.destroy();
  neohpediaPage.destroy();
  _product_detail__WEBPACK_IMPORTED_MODULE_12__["default"].destroy();
  _product_overview__WEBPACK_IMPORTED_MODULE_13__["default"].destroy();
  shopFinder.destroy();
  whyPage.destroy();
  _taster__WEBPACK_IMPORTED_MODULE_24__["default"].destroy();
  _gyroscope_crossbar__WEBPACK_IMPORTED_MODULE_14__["default"].destroy(); // is init-ed in the three-crossbar page, but destroyed here
}
/*******************+*******************+*******
 ****************  ACCEPT TRACKING HANDLING ************ */


var cookieDisclaimer = document.getElementById('cookie');

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

if (getCookie('accept_tracking') === null && cookieDisclaimer && document.location.href.indexOf('us-en') === -1) {
  cookieDisclaimer.style.opacity = '1';
  document.getElementById('acceptCookie').addEventListener('click', function () {
    var d = new Date();
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


var navContainerMobileInit = document.getElementById('js__header-mob');
var isStore = document.getElementById('js__product');

if (navContainerMobileInit && isStore) {
  navContainerMobileInit.classList.add('nav__header--bg');
} else if (navContainerMobileInit) {
  navContainerMobileInit.classList.remove('nav__header--bg');
}

var navigation = _nav__WEBPACK_IMPORTED_MODULE_1__["default"].init();
navigation.addListener('open', function () {
  return window.scrollY < _utils_css_variables__WEBPACK_IMPORTED_MODULE_6__["default"].globalNotificationHeight && _components_global_notification__WEBPACK_IMPORTED_MODULE_17__["default"].hide();
});
navigation.addListener('close', function () {
  return window.scrollY < _utils_css_variables__WEBPACK_IMPORTED_MODULE_6__["default"].globalNotificationHeight && _components_global_notification__WEBPACK_IMPORTED_MODULE_17__["default"].show();
});
getScriptNameToExec(document);
runScriptsForPage();
/*******************+*******************+*******
 ****************  SWUP SETUP  ************ */

var swup = new swup__WEBPACK_IMPORTED_MODULE_0___default.a({
  plugins: [new _swup_js_plugin__WEBPACK_IMPORTED_MODULE_2___default.a([{
    from: '(.*)',
    // meaning any
    to: '(.*)',
    // meaning any
    out: function out(callback) {
      if (navigation) {
        var navOpen = navigation.getNavOpen();
        var content = document.getElementById('js__content');

        if (!navOpen) {
          if (content) {
            gsap_all__WEBPACK_IMPORTED_MODULE_26__["TweenLite"].to(content, .4, {
              opacity: 0,
              onComplete: callback
            });
          }
        } else {
          gsap_all__WEBPACK_IMPORTED_MODULE_26__["TweenLite"].to(content, .4, {
            opacity: 0,
            onComplete: callback
          });
          setTimeout(function () {
            navigation.toggleNav(callback);
          }, 200);
        }
      }
    },
    "in": function _in(callback) {
      scroll(0, 0);

      if (navigation) {
        var navOpen = navigation.getNavOpen();

        if (!navOpen) {
          var content = document.getElementById('js__content');

          if (content) {
            gsap_all__WEBPACK_IMPORTED_MODULE_26__["TweenLite"].to(content, .4, {
              opacity: 1,
              onComplete: function onComplete() {
                callback();
              }
            });
          }
        }
      }
    }
  }])],
  linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]):not([data-bar]), a[href^="/"]:not([data-no-swup]):not([data-bar])'
});
/*******************+*******************+*******
 ****************  REPLACE ELEMENTS AND RUN SCRIPTS ON PAGE CONTENT REPLACE  ************ */

var ctaButtons = document.querySelectorAll('.js__nav-cta');
var switchLangLinks = document.querySelectorAll('.js__switch-lang');
var title = document.querySelector('title');
var head = document.querySelector('head');
var navLinks = document.querySelectorAll('.js__nav__el');

function runReplaceContent(swup) {
  var currentPage = swup.cache.getCurrentPage() || swup.cache.last;
  navLinks.forEach(function (link) {
    link.classList.remove(link.dataset.activeClass);
  });

  if (currentPage) {
    var responseDoc = new DOMParser().parseFromString(currentPage.originalContent, "text/html").children[0];

    if (responseDoc) {
      getScriptNameToExec(responseDoc);
      var newNavLinks = responseDoc.querySelectorAll('.js__nav__el');
      newNavLinks.forEach(function (newNavLink) {
        if (newNavLink.classList.contains(newNavLink.dataset.activeClass)) {
          navLinks.forEach(function (navLink) {
            if (navLink.dataset.navId === newNavLink.dataset.navId) {
              navLink.classList.add(navLink.dataset.activeClass);
            }
          });
        }
      }); // update lang switch linksx

      var newSwitchLangLinks = responseDoc.querySelectorAll('.js__switch-lang');
      switchLangLinks.forEach(function (link, index) {
        if (newSwitchLangLinks[index]) link.setAttribute('href', newSwitchLangLinks[index].getAttribute('href'));
      }); // update call to action button colour

      var newCtaButtons = responseDoc.querySelectorAll('.js__nav-cta');
      ctaButtons.forEach(function (btn, index) {
        if (newCtaButtons[index]) {
          btn.className = newCtaButtons[index].className;
          btn.href = newCtaButtons[index].href;
        }
      });
      var newTitle = responseDoc.querySelector('title');
      title.innerHTML = newTitle.innerHTML; // replace link SEO related tags

      var alternateLinks = responseDoc.querySelectorAll('link[rel="alternate"]');
      var canonicalLinks = responseDoc.querySelectorAll('link[rel="canonical"]');
      var schemaScripts = responseDoc.querySelectorAll('script[type="application/ld+json"]');
      var tagsToAppend = [].concat(_toConsumableArray(alternateLinks), _toConsumableArray(canonicalLinks), _toConsumableArray(schemaScripts));
      var alternateLinks2 = document.querySelectorAll('link[rel="alternate"]');
      var canonicalLinks2 = document.querySelectorAll('link[rel="canonical"]');
      var schemaScripts2 = document.querySelectorAll('script[type="application/ld+json"]');
      var tagsToRemove = [].concat(_toConsumableArray(alternateLinks2), _toConsumableArray(canonicalLinks2), _toConsumableArray(schemaScripts2));
      tagsToRemove.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      tagsToAppend.forEach(function (tag) {
        return head.appendChild(tag);
      });
    } // run scripts


    runScriptsForPage();
  }
}

swup.on('contentReplaced', function (event) {
  runReplaceContent(swup);
});
swup.on('willReplaceContent', function (event) {
  cleanUpScriptsForPage();
}); // 100vh fix for mobile

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', lodash_throttle__WEBPACK_IMPORTED_MODULE_18___default()(function () {
  // We execute the same script as before
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}), 50);

/***/ }),

/***/ "./app/resources/js/careers.js":
/*!*************************************!*\
  !*** ./app/resources/js/careers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CareersPage = /*#__PURE__*/function () {
  function CareersPage() {
    _classCallCheck(this, CareersPage);

    this.initialized = false;
    this.careerOpenings = [];
  }

  _createClass(CareersPage, [{
    key: "init",
    value: function init(pageName) {
      var isCareersPage = pageName === 'careers';

      if (isCareersPage) {
        this.careerOpenings = document.getElementsByClassName("careers-headline");

        if (this.careerOpenings.length > 0) {
          for (var i = 0; i < this.careerOpenings.length; i++) {
            this.careerOpenings[i].addEventListener("click", this.careerOpeningsHandler);
          }

          this.initialized = true;
        }
      }
    }
  }, {
    key: "careerOpeningsHandler",
    value: function careerOpeningsHandler() {
      this.classList.toggle("careers-headline--active");
      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        for (var i = 0; i < this.careerOpenings.length; i++) {
          this.careerOpenings[i].removeEventListener("click", this.careerOpeningsHandler);
        }

        this.initialized = false;
      }
    }
  }]);

  return CareersPage;
}();

var careersPageScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!careersPageScript) careersPageScript = new CareersPage();
  return careersPageScript;
});

/***/ }),

/***/ "./app/resources/js/challenges.js":
/*!****************************************!*\
  !*** ./app/resources/js/challenges.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");
/* harmony import */ var _components_calorie_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/calorie-calculator */ "./app/resources/js/components/calorie-calculator.js");



var challengePage, trainingPage, challengesOverviewPage;

function greyBlendVideo() {
  var video = document.querySelector('.js__challenges-video');
  var isSafari = navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0;

  if (window.getComputedStyle(document.body).mixBlendMode !== undefined && !isSafari && video) {
    video.classList.add('challenges__video__blend');
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(pageName) {
    // challengePage = document.getElementById('js__challenge-page');
    // trainingPage = document.getElementById('js__training-page');
    challengesOverviewPage = document.getElementById('js__challenges-overview-page');
    var isChallengeOrTrainingPage = pageName === 'training' || pageName === 'challenge';
    var isChallengesOverviewPage = pageName === 'challenge-overview';

    if (isChallengeOrTrainingPage) {
      _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().showBackArrow();
      greyBlendVideo();
    } else if (isChallengesOverviewPage) {
      greyBlendVideo();
      _components_calorie_calculator__WEBPACK_IMPORTED_MODULE_2__["default"].init();
    }

    var iframe = document.querySelector('#js__vimeo');

    if (iframe) {
      var player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"](iframe); // player.setVolume(0);
      // player.play();
    }
  },
  destroy: function destroy() {
    _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().hideBackArrow();

    if (challengesOverviewPage) {
      _components_calorie_calculator__WEBPACK_IMPORTED_MODULE_2__["default"].destroy();
    }
  }
});

/***/ }),

/***/ "./app/resources/js/components/calorie-calculator.js":
/*!***********************************************************!*\
  !*** ./app/resources/js/components/calorie-calculator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./app/resources/js/header.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown */ "./app/resources/js/components/dropdown.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  destroyFunctions: [],
  data: {
    gender: 'female',
    age: null,
    height: null,
    weight: null,
    activeLevel: null,
    activityToday: null
  },
  validateCalculator: function validateCalculator(showErrors) {
    if (!this.data.activeLevel) {
      var activeLevelEl = document.querySelector('.js__dropdown[data-dropdown="activeLevel"]');
      showErrors && activeLevelEl.classList.add('dropdown--error');
      return false;
    }

    return true;
  },
  calculateFinalValue: function calculateFinalValue() {
    var baseValue = this.data.gender === 'female' ? 665.1 + 9.6 * this.data.weight + 1.8 * this.data.height - 4.7 * this.data.age : 66.47 + 13.7 * this.data.weight + 5 * this.data.height - 6.8 * this.data.age;
    baseValue = Number(baseValue);
    var PALvalue = Number(this.data.activeLevel);
    var finalValue = Math.round(parseFloat(baseValue * PALvalue) + parseFloat(this.data.activityToday));
    var el = document.getElementById('js__calculator-value');
    var language = window.data.locale.split('-')[1];

    if (!isNaN(finalValue)) {
      el.textContent = new Intl.NumberFormat(language, {
        style: 'decimal'
      }).format(finalValue);
    }
  },
  recalculate: function recalculate() {
    var passesValidation = this.validateCalculator();
    if (passesValidation) this.calculateFinalValue();
  },
  init: function init() {
    var _this = this;

    var calculatorEl = document.getElementById("js__challenge-calculator");

    if (calculatorEl) {
      // allow input in numbers only
      var calculatorInputs = calculatorEl.querySelectorAll('.js__calculator-input');
      calculatorInputs.forEach(function (input) {
        _this.data[input.dataset.label] = input.value;

        var inputHandler = function inputHandler(e) {
          if (e.key === '-') e.preventDefault();
        };

        input.addEventListener('keydown', inputHandler);

        _this.destroyFunctions.push(function () {
          return input.removeEventListener('keydown', inputHandler);
        });
      });
      var keyPressDataHandler = delegate__WEBPACK_IMPORTED_MODULE_0___default()(document, '.js__calculator-input', 'input', function (e) {
        _this.data[e.target.dataset.label] = e.target.value;

        _this.recalculate();
      });
      this.destroyFunctions.push(function () {
        return keyPressDataHandler.destroy();
      }); // event handler for plus and minus icons

      var iconHandler = delegate__WEBPACK_IMPORTED_MODULE_0___default()(calculatorEl, '.js__calculator-icon', 'click', function (e) {
        var input = e.delegateTarget.parentElement.querySelector('input');
        var value = Number(input.value);
        _this.data[input.dataset.label] = input.value = e.delegateTarget.dataset.sign === '+' ? value + 1 : value - 1;

        _this.recalculate();
      });
      this.destroyFunctions.push(function () {
        return iconHandler.destroy();
      }); //js__calculator-button
      // button handler for male/female

      var activityToday = document.getElementById('js__activity-today');
      var activityTodayInput = document.getElementById('js__activitiy-today-input');
      var genderSelectButtons = delegate__WEBPACK_IMPORTED_MODULE_0___default()(calculatorEl, '.js__calculator-button', 'click', function (e) {
        var buttons = calculatorEl.querySelectorAll('.btn__dark');
        buttons.forEach(function (button) {
          return button.classList.remove('btn__dark--selected');
        });
        e.delegateTarget.classList.add('btn__dark--selected');
        _this.data.gender = e.delegateTarget.dataset.value;
        _this.data.activityToday = _this.data.gender === 'female' ? activityToday.dataset.femaleValue : activityToday.dataset.maleValue;
        activityTodayInput.value = _this.data.activityToday;

        _this.recalculate();
      });
      this.destroyFunctions.push(function () {
        return genderSelectButtons.destroy();
      }); // dropdown item handler

      var dropdownEls = document.querySelectorAll('.js__dropdown');
      var dropdownOptions = [];
      dropdownEls.forEach(function (el) {
        dropdownOptions.push({
          el: el,
          options: {
            reselectBehaviour: el.dataset.dropdown === 'activityToday' ? 'deselect' : null,
            onOpen: function onOpen() {
              return _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().hideMobileBottomNav();
            },
            onClose: function onClose() {
              return _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().showMobileBottomNav();
            },
            onSelect: function onSelect(e) {
              var input = document.querySelector('.js__calculator-input[data-label="' + e.target.dataset.label + '"]');

              if (e.target.dataset.label === 'activityToday' && input) {
                if (_this.data.gender === 'female') {
                  input.value = e.target.dataset.femaleValue;
                  _this.data[e.target.dataset.label] = Number(e.target.dataset.femaleValue);
                } else if (_this.data.gender === 'male') {
                  input.value = e.target.dataset.maleValue;
                  _this.data[e.target.dataset.label] = Number(e.target.dataset.maleValue);
                }

                e.selectedEl.dataset.femaleValue = e.target.dataset.femaleValue;
                e.selectedEl.dataset.maleValue = e.target.dataset.maleValue; // if (input) input.value = e.target.dataset
              } else {
                if (input) {
                  input.value = e.target.dataset.value;
                }

                _this.data[e.target.dataset.label] = Number(e.target.dataset.value);
              }

              e.selectedEl.innerHTML = e.target.innerHTML;
              e.el.classList.remove('dropdown--error');

              _this.recalculate();
            },
            onDeselect: function onDeselect(e) {// this.data[e.target.dataset.label] = 0;
              // let input = document.querySelector('.js__calculator-input[data-label="' + e.target.dataset.label + '"]');
              // if (input) input.value = 0;
              // e.selectedEl.classList.remove('dropdown__selected--active');
              // e.selectedEl.innerHTML = e.selectedEl.dataset.placeholder;
              // this.recalculate();
            }
          }
        });
      });
      _dropdown__WEBPACK_IMPORTED_MODULE_2__["default"].init(dropdownOptions); // const validateCalculator = (showErrors) => {
      //     if (!this.data.activeLevel) {
      //         let activeLevelEl = document.querySelector('.js__dropdown[data-dropdown="activeLevel"]');
      //         showErrors && activeLevelEl.classList.add('dropdown--error');
      //         return false;
      //     }
      //     return true;
      // };

      var calculateHandler = delegate__WEBPACK_IMPORTED_MODULE_0___default()(document, '#js__calculate-button', 'click', function () {
        // validation
        var passesValidation = _this.validateCalculator(true);

        if (passesValidation) {
          _this.calculateFinalValue();
        }
      });
      this.destroyFunctions.push(function () {
        return calculateHandler.destroy();
      });
      var activeLevelEl = document.getElementById('js__active-level');
      this.data.activeLevel = activeLevelEl ? activeLevelEl.dataset.initialValue : 0;
      this.recalculate();
    }
  },
  destroy: function destroy() {
    _dropdown__WEBPACK_IMPORTED_MODULE_2__["default"].destroy();
    this.destroyFunctions.forEach(function (destroyFunc) {
      return destroyFunc();
    });
    this.destroyFunctions = [];
  }
});

/***/ }),

/***/ "./app/resources/js/components/dropdown.js":
/*!*************************************************!*\
  !*** ./app/resources/js/components/dropdown.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_event_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event-emitter */ "./app/resources/js/utils/event-emitter.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var destroyInstances = [];

var Dropdown = _objectSpread(_objectSpread({}, _utils_event_emitter__WEBPACK_IMPORTED_MODULE_1__["default"]), {
  el: null,
  menu: null,
  selectedEl: null,
  backdrop: null,
  activeDropdownItem: null,
  destroyFunctions: [],
  onSelect: null,
  reselectBehaviour: null,
  disabled: false,
  toggle: function toggle() {
    if (!this.disabled) {
      this.isOpen ? this.close() : this.open();
    }
  },
  close: function close() {
    _utils_event_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('close', {
      el: this.el,
      dropdown: this
    });
    this.onClose ? this.onClose({
      dropdown: this,
      selectedEl: this.selectedEl,
      el: this.el
    }) : null;
    this.menu.classList.remove('dropdown__menu--show');
    this.backdrop && this.backdrop.classList.remove('dropdown__backdrop--show');
    this.isOpen = false;
  },
  open: function open() {
    _utils_event_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('open', {
      el: this.el,
      dropdown: this
    });
    this.onOpen ? this.onOpen({
      dropdown: this,
      selectedEl: this.selectedEl,
      el: this.el
    }) : null;
    this.menu.classList.add('dropdown__menu--show');
    this.backdrop && this.backdrop.classList.add('dropdown__backdrop--show');
    this.isOpen = true;
  },
  init: function init(dropdown, options) {
    var _this = this;

    this.menu = dropdown.querySelector('.js__dropdown-menu');
    this.backdrop = dropdown.querySelector('.js__dropdown-backdrop');
    this.selectedEl = dropdown.querySelector('.js__dropdown-selected');
    this.el = dropdown;
    this.onSelect = options && options.onSelect ? options.onSelect : null;
    this.reselectBehaviour = options && options.reselectBehaviour ? options.reselectBehaviour : null;
    this.onDeselect = options && options.onDeselect ? options.onDeselect : null;
    this.onOpen = options && options.onOpen ? options.onOpen : null;
    this.onClose = options && options.onClose ? options.onClose : null;
    this.activeDropdownItem = dropdown.querySelector('.dropdown__item--active');
    var toggleDelegation = delegate__WEBPACK_IMPORTED_MODULE_0___default()(dropdown, '.js__dropdown-toggle', 'click', function (e) {
      _this.toggle();
    });
    var dropdownItems = dropdown.querySelectorAll('.js__dropdown-item');

    if (dropdownItems.length <= 1) {
      this.disabled = true;
      this.el.classList.add('dropdown--disabled');
    }

    this.destroyFunctions.push(function () {
      return toggleDelegation.destroy();
    });
    var itemDelegation = delegate__WEBPACK_IMPORTED_MODULE_0___default()(dropdown, '.js__dropdown-item', 'click', function (e) {
      var event = {
        el: _this.el,
        target: e.delegateTarget,
        dropdown: _this,
        selectedEl: _this.selectedEl
      };

      if (!e.delegateTarget.classList.contains('dropdown__item--active') || !_this.reselectBehaviour) {
        if (_this.activeDropdownItem) _this.activeDropdownItem.classList.remove('dropdown__item--active');
        e.delegateTarget.classList.add('dropdown__item--active'); // dropdownSelected.innerHTML = e.delegateTarget.innerHTML;

        _this.activeDropdownItem = e.delegateTarget;

        _this.close();

        _this.onSelect ? _this.onSelect(event) : _this.selectedEl.innerHTML = e.delegateTarget.innerHTML;
        _utils_event_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('select', event);
      } else if (_this.reselectBehaviour === 'deselect') {
        _this.close();

        if (_this.onDeselect) _this.onDeselect(event);else if (_this.selectedEl.dataset.placeholder) _this.selectedEl.innerHTML = _this.selectedEl.dataset.placeholder;
        _utils_event_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('deselect', event);
      }
    });
    this.destroyFunctions.push(function () {
      return itemDelegation.destroy();
    }); // Detect when a user clicks away

    var handleOffDropdownClick = function handleOffDropdownClick(e) {
      if ((!dropdown.contains(e.target) || e.target.classList.contains('js__dropdown-backdrop')) && _this.isOpen) {
        _this.close();
      }
    };

    document.addEventListener('click', handleOffDropdownClick);
    this.destroyFunctions.push(function () {
      return document.removeEventListener('click', handleOffDropdownClick);
    });
    dropdown.classList.add('dropdown--loaded');
    return this;
  },
  destroy: function destroy() {
    this.destroyFunctions.forEach(function (destroyFunc) {
      return destroyFunc();
    });
  }
});

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(dropdownOptions) {
    var dropdowns = [];
    dropdownOptions.forEach(function (dropdownOption) {
      var dropdown = Object.create(Dropdown);
      dropdown.init(dropdownOption.el, dropdownOption.options);
      dropdowns.push(dropdown);
      destroyInstances.push(function () {
        return dropdown.destroy();
      });
    });
    return dropdowns;
  },
  destroy: function destroy() {
    destroyInstances.forEach(function (destroyFunc) {
      return destroyFunc();
    });
    destroyInstances = [];
  }
});

/***/ }),

/***/ "./app/resources/js/components/footer.js":
/*!***********************************************!*\
  !*** ./app/resources/js/components/footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var footerEl;
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(pageName) {
    footerEl = footerEl ? footerEl : document.getElementById('js__footer');

    if (footerEl) {
      switch (pageName) {
        case 'home':
        case 'store':
        case 'athlete-overview':
        case 'challenge-overview':
        case 'challenge':
        case 'story-overview':
        case 'recipe-overview':
        case 'neohpedia':
        case 'faq-overview':
        case 'faq':
        case 'legal':
        case 'press':
        case 'careers':
        case 'investors':
        case 'product-detail':
        case 'shopfinder':
          var crossBarTeaser = document.querySelector('.crossbar-teaser');

          if (!crossBarTeaser) {
            footerEl.classList.add('footer--primary');
          } else {
            if (crossBarTeaser.classList.contains('js__crossbar-black')) {
              footerEl.classList.add('footer--primary');
            }
          }

          break;

        default:
          footerEl.classList.remove('footer--primary');
          break;
      }
    }
  }
});

/***/ }),

/***/ "./app/resources/js/components/global-notification.js":
/*!************************************************************!*\
  !*** ./app/resources/js/components/global-notification.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css-variables */ "./app/resources/js/utils/css-variables.js");


var globalNotification,
    content,
    hiddenByUser = false,
    _show = false,
    scrollIsBelowNotificationHeight,
    notificationButton;

function handleScroll(e) {
  var offset = window.pageYOffset;

  if (offset >= _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].globalNotificationHeight && !scrollIsBelowNotificationHeight && _show) {
    document.body.classList.remove('has-global-notification-before-scroll');
    scrollIsBelowNotificationHeight = true;
  } else if (offset < _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].globalNotificationHeight && scrollIsBelowNotificationHeight) {
    document.body.classList.add('has-global-notification-before-scroll');
    scrollIsBelowNotificationHeight = false;
  }
}

function matchPageForGlobalNotification() {
  var page = globalNotification.dataset.page;
  var urlSplit = window.location.href.split('/');
  var lastUrlSegment = urlSplit[urlSplit.length - 1];
  return lastUrlSegment && lastUrlSegment.includes(page);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    var _this = this;

    globalNotification = document.getElementById('js__global-notification');
    content = document.getElementById('js__content');
    notificationButton = document.getElementById('js__global-notification-button');

    if (globalNotification) {
      delegate__WEBPACK_IMPORTED_MODULE_0___default()('.js__global-notification-close', 'click', function () {
        _this.handleHideByUser();
      });

      if (!matchPageForGlobalNotification()) {
        this.show();
      }

      _show = true;
      window.addEventListener('scroll', handleScroll, {
        passive: true
      });
    }
  },
  hide: function hide() {
    if (globalNotification && !hiddenByUser && _show) {
      globalNotification.classList.add('global-notification--hide');
      document.body.classList.remove('has-global-notification');
      document.body.classList.remove('has-global-notification-enter');
      document.body.classList.remove('has-global-notification-before-scroll');
      _show = false;

      if (window.scrollY < _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].globalNotificationHeight) {
        document.body.classList.add('has-global-notification-leave');
        setTimeout(function () {
          document.body.classList.remove('has-global-notification-leave');
        }, _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].notificationAnimationLength);
      }
    }
  },
  handleHideByUser: function handleHideByUser() {
    this.hide();
    hiddenByUser = true;
  },
  show: function show() {
    if (globalNotification && !hiddenByUser && !_show) {
      globalNotification.classList.remove('global-notification--hide');
      document.body.classList.remove('has-global-notification-leave');
      document.body.classList.add('has-global-notification');

      if (window.scrollY < _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].globalNotificationHeight) {
        document.body.classList.add('has-global-notification-before-scroll');
        document.body.classList.add('has-global-notification-enter');
        setTimeout(function () {
          document.body.classList.remove('has-global-notification-enter');
        }, _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].notificationAnimationLength);
      }

      _show = true;
    }
  },
  onPageChange: function onPageChange(isFirstPageLoad) {
    if (globalNotification && !isFirstPageLoad) {
      var page = globalNotification.dataset.page;
      var urlSplit = window.location.href.split('/');
      var lastUrlSegment = urlSplit[urlSplit.length - 1];

      if (matchPageForGlobalNotification()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
});

/***/ }),

/***/ "./app/resources/js/components/instagram-embed.js":
/*!********************************************************!*\
  !*** ./app/resources/js/components/instagram-embed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (isFirstPageLoad) {
  if (!isFirstPageLoad && window.instgrm && document.querySelector('.embed__ig')) {
    window.instgrm.Embeds.process();
  }
});

/***/ }),

/***/ "./app/resources/js/components/neoh-slider.js":
/*!****************************************************!*\
  !*** ./app/resources/js/components/neoh-slider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css-variables */ "./app/resources/js/utils/css-variables.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SWIPER_SELECTOR = '.js__neohslider';
var initialized = false,
    swiperInitialized = false,
    swiperObserver,
    swiperInstance,
    swiperEl;

function startNeohSwiper() {
  if (!swiperInitialized) {
    var _breakpoints;

    var navigationPrev = document.querySelector('.neohslider__navigation--prev');

    if (navigationPrev) {
      navigationPrev.classList.add('neohslider__navigation--hide');
    }

    swiperInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](SWIPER_SELECTOR, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1.4,
      spaceBetween: _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].innerGutterMobile,
      centeredSlides: true,
      centerInsufficientSlides: true,
      breakpoints: (_breakpoints = {
        560: {
          slidesPerView: 1.6,
          centeredSlides: true
        }
      }, _defineProperty(_breakpoints, _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].tabletBreakpoint, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].innerGutterTablet,
        centeredSlides: false,
        centeredSlidesBounds: true
      }), _defineProperty(_breakpoints, _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].desktopBreakpoint, {
        slidesPerView: 3,
        spaceBetween: _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].innerGutterDesktop,
        centeredSlidesBounds: true,
        centeredSlides: false
      }), _defineProperty(_breakpoints, 1800, {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].innerGutterDesktopWide,
        centeredSlidesBounds: true,
        centeredSlides: false
      }), _breakpoints),
      navigation: {
        nextEl: '.neohslider__navigation--next',
        prevEl: '.neohslider__navigation--prev'
      },
      on: {
        slideChange: function slideChange() {
          if (navigationPrev) navigationPrev.classList.remove('neohslider__navigation--hide');
        }
      }
    });
    setTimeout(function () {
      if (Array.isArray(swiperInstance)) {
        swiperInstance.forEach(function (swiper) {
          return swiper.autoplay.start();
        });
      } else {
        swiperInstance.autoplay.start();
      }
    }, 500);
    swiperInitialized = true;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(useObserver) {
    swiperEl = document.querySelector(SWIPER_SELECTOR);
    var swiperSlides = swiperEl ? swiperEl.querySelectorAll('.swiper-slide') : [];

    if (swiperEl && swiperSlides.length > 1) {
      if (useObserver) {
        swiperObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              startNeohSwiper();
            }
          });
        }, {
          root: null,
          rootMargin: "100px",
          threshold: [0, 0.25, 0.5, 1]
        });
        swiperObserver.observe(swiperEl);
      } else {
        startNeohSwiper();
      }

      initialized = true;
    } else {
      if (swiperEl) {
        var swiperWrapper = swiperEl.querySelector('.swiper-wrapper');
        swiperWrapper.classList.add('neohslider__swiper-wrapper--centered');
        var navigation = swiperEl.querySelectorAll('.neohslider__navigation');
        navigation.forEach(function (el) {
          return el.classList.add('neohslider__navigation--hide');
        });
        swiperSlides.forEach(function (el) {
          return el.classList.add('neohslider__card--width');
        });
      }
    }
  },
  destroy: function destroy() {
    if (initialized) {
      if (swiperObserver) swiperObserver.disconnect();

      if (swiperInstance) {
        if (Array.isArray(swiperInstance)) {
          swiperInstance.forEach(function (swiper) {
            return swiper.destroy(true, true);
          });
        } else {
          swiperInstance.destroy(true, true);
        }

        swiperInstance = null;
      }

      initialized = false;
      swiperInitialized = false;
    }
  }
});

/***/ }),

/***/ "./app/resources/js/components/product-dropdown.js":
/*!*********************************************************!*\
  !*** ./app/resources/js/components/product-dropdown.js ***!
  \*********************************************************/
/*! exports provided: setupProductDropdownTemplate, disableButtons, initializeProductDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupProductDropdownTemplate", function() { return setupProductDropdownTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableButtons", function() { return disableButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeProductDropdown", function() { return initializeProductDropdown; });
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dropdown */ "./app/resources/js/components/dropdown.js");
/* harmony import */ var _utils_normalized_shopify_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/normalized-shopify-data */ "./app/resources/js/utils/normalized-shopify-data.js");
/* harmony import */ var _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/asset-resolver */ "./app/resources/js/utils/asset-resolver.js");



var language = window.data.locale.split('-')[1]; // this rather long function sets up the templating for our product dropdowns. It draws on shopify and prismic data, so it gets rather complex..
// usePrismicVariants refers to whether we have 3 shopify products of the same type, or 1 product with 3 different types ("variants", e.g. clothing sizes )
// our function normalizeShopifyVariants is used to smooth out these differences
// ...so that dropdownData.variants gives us an array of the different types regardless of the usePrismicVariants attribute

function setupProductDropdownTemplate(productDropdown, products) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    usePrismicVariants: true,
    fallbackShopifyHandle: false,
    useDropdownIconForTaster: false
  };
  var productToLoad = productDropdown.dataset.product;
  var dropdownData = Object(_utils_normalized_shopify_data__WEBPACK_IMPORTED_MODULE_1__["default"])(productToLoad, products, options.usePrismicVariants);

  if (productDropdown) {
    var dropdownItemTemplate = productDropdown.querySelector('.js__dropdown-item-template');
    var dropdownMenu = productDropdown.querySelector('.js__dropdown-menu');

    if (dropdownItemTemplate) {
      dropdownData.variants.forEach(function (variant) {
        try {
          var clonedListItem = dropdownItemTemplate.content.cloneNode(true).firstElementChild;
          clonedListItem.setAttribute('data-shopify-variant', options.usePrismicVariants ? '' : variant.data.variant_id);
          clonedListItem.setAttribute('data-shopify', variant.data.shopify_product_handle);
          clonedListItem.setAttribute('data-amazon', variant.data.amazon_button_url ? variant.data.amazon_button_url.url : null);
          clonedListItem.setAttribute('data-uid', variant.uid);
          var listImage = clonedListItem.querySelector('img');

          if (variant.data.product_icon && variant.data.product_icon.url && !options.useDropdownIconForTaster) {
            listImage.src = _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(variant.data.product_icon.url);
            listImage.dataset.src = _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(variant.data.product_icon.url);
            listImage.classList.remove('dropdown__image--hide');
          }

          var listTitle = clonedListItem.querySelector('.js__product-title');
          listTitle.textContent = variant.data.variant_title;
          var listText = clonedListItem.querySelector('.js__product-text');
          listText.textContent = variant.data.variant_name ? variant.data.variant_name : variant.data.product_card_title;
          var price = clonedListItem.querySelector('.js__product-price');
          var formattedPrice = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: variant.priceV2.currencyCode
          }).format(variant.priceV2.amount);
          price.textContent = formattedPrice;
          dropdownMenu.appendChild(clonedListItem);
        } catch (error) {
          console.log(error);
        }
      });
      dropdownMenu.removeChild(dropdownItemTemplate);
    }

    var dropdownItems = productDropdown.querySelectorAll('.js__dropdown-item');
    var dropdownSelected = productDropdown.querySelector('.js__dropdown-selected');
    var selectedDropdownItem = dropdownItems[0];
    var addToCartButton = document.querySelectorAll(".js__add-to-cart[data-dropdown=\"".concat(productDropdown.dataset.dropdown, "\"]"));
    var lastSegment = location.href.split('/').pop();

    if (dropdownItems.length) {
      dropdownItems.forEach(function (li, index) {
        products.forEach(function (_product) {
          if (_product.handle === li.dataset.shopify) {
            if (_product.images && _product.images[0]) li.setAttribute('data-product-image', _product.images[0].src);

            if (options.usePrismicVariants) {
              var variant = _product.variants[0];
              setPricesOnDropdown(li, variant);
              li.setAttribute('data-available', variant.available);

              if (li.dataset.shopify === lastSegment) {
                selectedDropdownItem = li;
                li.classList.add('dropdown__item--active');
                dropdownSelected.setAttribute('data-available', variant.available);
              }
            } else {
              _product.variants.forEach(function (variant) {
                if (variant.title === li.dataset.shopifyVariant) {
                  setPricesOnDropdown(li, variant);
                  li.setAttribute('data-available', variant.available);

                  if (index === 0) {
                    li.classList.add('dropdown__item--active');
                    dropdownSelected.setAttribute('data-available', variant.available);
                  }
                }
              });
            }
          }
        });
      });
    } else {
      // in the case of the mixed package (uses prismic variants but doesn't have a dropdown
      products.forEach(function (_product) {
        if (_product.handle === dropdownSelected.dataset.shopify) {
          if (options.usePrismicVariants) {
            var variant = _product.variants[0];
            setPricesOnDropdown(dropdownSelected, variant);
            dropdownSelected.setAttribute('data-available', variant.available);
          }
        }

        if (dropdownItems[0]) {
          selectedDropdownItem = dropdownItems[0];
        }
      });
    }

    if (selectedDropdownItem) changeAddToCartButtons(addToCartButton, selectedDropdownItem.dataset.shopify, selectedDropdownItem.dataset.shopifyVariant);

    if (dropdownSelected && selectedDropdownItem) {
      dropdownSelected.querySelector('.js__product-title').textContent = selectedDropdownItem.querySelector('.js__product-title').textContent;
      dropdownSelected.querySelector('.js__product-text').textContent = selectedDropdownItem.querySelector('.js__product-text').textContent;
      dropdownSelected.querySelector('.js__product-price').textContent = selectedDropdownItem.querySelector('.js__product-price').textContent;
      var dropdownItemImage = selectedDropdownItem.querySelector('img');
      var selectedImage = dropdownSelected.querySelector('img');

      if (dropdownItemImage.dataset.src) {
        selectedImage.src = dropdownItemImage.dataset.src;
        selectedImage.classList.remove('dropdown__image--hide');
      } else if (options.useDropdownIconForTaster) {
        selectedImage.classList.remove('dropdown__image--hide');
      }

      if (selectedDropdownItem.dataset.available === 'false') {
        disableButtons(productDropdown.dataset.dropdown, selectedDropdownItem.dataset.shopify, selectedDropdownItem.dataset.shopifyVariant);
      }
    }
  } else {
    var _addToCartButton = document.querySelectorAll(".js__add-to-cart[data-dropdown=\"".concat(productDropdown.dataset.dropdown, "\"]"));

    changeAddToCartButtons(_addToCartButton, options.fallbackShopifyHandle);
  }

  function changeAddToCartButtons(addToCartButton, shopifyHandle, variantName) {
    // if our selected item doesn't use prismic variants (i.e. different sizes of t-shirt),
    // we give it the dataset.shopifyVariant property on initialization
    addToCartButton.forEach(function (button) {
      button.setAttribute('data-shopify', shopifyHandle);
      variantName && button.setAttribute('data-shopify-variant', variantName);
    });
  }

  function setPricesOnDropdown(li, variant) {
    var intlInstance = new Intl.NumberFormat(language, {
      style: 'currency',
      currency: variant.priceV2.currencyCode
    });
    var formattedPrice = intlInstance.format(variant.priceV2.amount);
    li.querySelector('.js__product-price').textContent = formattedPrice;

    if (variant.weight) {// let weightPrice = variant.priceV2.amount / variant.weight;
      // let formattedWeightPrice = intlInstance.format(weightPrice);
      // let weightPriceEl = li.querySelector('.js__product-weight-price');
      // li.querySelector('.js__product-weight-price').textContent = weightPriceEl.dataset.text.replace('PRICE_HERE', formattedWeightPrice);
    }
  }
}

function toggleDisableButton(button, disable) {
  if (disable) {
    if (button.dataset.notAvailableText) {
      button.textContent = button.dataset.notAvailableText;
    }

    button.classList.add('btn--disabled');
    button.disabled = true;
  } else {
    if (button.dataset.text) {
      button.textContent = button.dataset.text;
    }

    button.classList.remove('btn--disabled');
    button.disabled = false;
  }
}

var disableButtons = function disableButtons(dropdownID, shopifyHandle, variantName) {
  try {
    var addToCartButtons = document.querySelectorAll(".js__add-to-cart[data-dropdown=\"".concat(dropdownID, "\"]"));
    var immediateCheckoutButtons = document.querySelectorAll(".js__immediate-checkout[data-shopify=\"".concat(shopifyHandle, "\"]"));

    var forEachButtonCallback = function forEachButtonCallback(button) {
      if (variantName && variantName === button.dataset.shopifyVariant) {
        toggleDisableButton(button, true);
      } else if (!variantName) {
        toggleDisableButton(button, true);
      }
    };

    addToCartButtons.forEach(forEachButtonCallback);
    immediateCheckoutButtons.forEach(forEachButtonCallback);
  } catch (error) {
    console.log(error);
  }
}; // once the template of the dropdown is in place, initializeProductDropdown enables the actual dropdown functionality

function initializeProductDropdown(dropdownEl, _onSelect) {
  var dropdownSelected = document.querySelector('.js__dropdown-selected');
  var addToCartButton = document.querySelectorAll(".js__add-to-cart[data-dropdown=\"".concat(dropdownEl.dataset.dropdown, "\"]"));
  var amazonButtons = document.querySelectorAll('.js__buy-amazon');

  if (dropdownEl) {
    var dropdowns = _components_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"].init([{
      el: dropdownEl,
      options: {
        onSelect: function onSelect(e) {
          if (dropdownSelected) {
            var selectedEl = e.target;
            dropdownSelected.querySelector('.js__product-text').textContent = selectedEl.querySelector('.js__product-text').textContent;
            dropdownSelected.querySelector('.js__product-price').textContent = selectedEl.querySelector('.js__product-price').textContent;
            var img = dropdownSelected.querySelector('img');
            var liImg = selectedEl.querySelector('img');
            if (img && liImg) img.src = liImg.src;
            addToCartButton.forEach(function (button) {
              button.setAttribute('data-shopify', selectedEl.dataset.shopify);
              selectedEl.dataset.shopifyVariant && button.setAttribute('data-shopify-variant', selectedEl.dataset.shopifyVariant);

              if (selectedEl.dataset.available === 'false') {
                toggleDisableButton(button, true);
              } else {
                toggleDisableButton(button, false);
              }
            });
            amazonButtons.forEach(function (button) {
              button.setAttribute('data-shopify', selectedEl.dataset.shopify);
              if (!selectedEl.dataset.amazon) button.classList.add('btn--hide');else {
                button.setAttribute('href', selectedEl.dataset.amazon);
                button.classList.remove('btn--hide');
              }
            });
            _onSelect && _onSelect(selectedEl);
          }
        }
      }
    }]);
    return dropdowns;
  }
}

/***/ }),

/***/ "./app/resources/js/components/video.js":
/*!**********************************************!*\
  !*** ./app/resources/js/components/video.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VideoControls = /*#__PURE__*/function () {
  function VideoControls() {
    _classCallCheck(this, VideoControls);

    this.videos = [];
    this.initializedVideos = [];
    this.initialized = false;
  }

  _createClass(VideoControls, [{
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        this.initializedVideos.forEach(function (videoObj) {
          if (videoObj.mute) videoObj.mute.removeEventListener('click', videoObj.muteHandler);
          if (videoObj.fullScreen) videoObj.fullScreen.removeEventListener('click', videoObj.fullScreenHandler);
        });
        this.initializedVideos = [];
        this.initialized = false;
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.videos = document.querySelectorAll('.js__video[data-video]');

      if (this.videos.length > 0 && !this.initialized) {
        this.videos.forEach(function (video) {
          var videoId = video.dataset.video;

          if (video.dataset.playback === 'home') {
            video.currentTime = 6;
          }

          var muteButton = document.querySelector(".js__video__mute[data-video=\"".concat(videoId, "\"]"));

          function handleMuteButton() {
            video.muted = !video.muted;

            if (!video.muted) {
              muteButton.classList.add("video__btn__sound--active");
            } else {
              muteButton.classList.remove("video__btn__sound--active");
            }
          }

          if (muteButton) muteButton.addEventListener('click', handleMuteButton);

          function handleFullScreenButton() {
            if (!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)) {
              if (video.requestFullscreen) video.requestFullscreen();else if (video.mozRequestFullScreen) video.mozRequestFullScreen();else if (video.webkitEnterFullScreen) {
                video.webkitEnterFullScreen();
              } else if (video.msRequestFullscreen) video.msRequestFullscreen();
            }

            video.muted = false;
            video.play();
            video.currentTime = 0;

            if (!video.muted && muteButton) {
              muteButton.classList.add("video__btn__sound--active");
            } else if (muteButton) {
              muteButton.classList.remove("video__btn__sound--active");
            }

            video.classList.add('video--full-screen');
          }

          if (document.addEventListener) {
            document.addEventListener('fullscreenchange', exitHandler, false);
            document.addEventListener('mozfullscreenchange', exitHandler, false);
            document.addEventListener('MSFullscreenChange', exitHandler, false);
            document.addEventListener('webkitfullscreenchange', exitHandler, false);
          }

          function exitHandler() {
            if (document.webkitIsFullScreen === false) {
              video.muted = true;

              if (muteButton) {
                muteButton.classList.remove("video__btn__sound--active");
              }

              video.classList.remove('video--full-screen');
            } else if (document.mozFullScreen === false) {
              video.muted = true;

              if (muteButton) {
                muteButton.classList.remove("video__btn__sound--active");
              }

              video.classList.remove('video--full-screen');
            } else if (document.msFullscreenElement === false) {
              video.muted = true;

              if (muteButton) {
                muteButton.classList.remove("video__btn__sound--active");
              }

              video.classList.remove('video--full-screen');
            }
          }

          var fullScreenButton = document.querySelector(".js__video__full-screen[data-video=\"".concat(videoId, "\"]"));
          if (fullScreenButton) fullScreenButton.addEventListener('click', handleFullScreenButton);

          if (fullScreenButton && _this.initialized) {
            document.onkeydown = function (evt) {
              if ("key" in evt) {
                this.handleFullScreenButton();
              }
            };
          }

          _this.initializedVideos.push({
            mute: muteButton,
            video: video,
            muteHandler: handleMuteButton,
            fullScreen: fullScreenButton,
            fullScreenHandler: handleFullScreenButton
          });
        });
        this.initialized = true;
      }
    }
  }]);

  return VideoControls;
}();

var videoControlsScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!videoControlsScript) videoControlsScript = new VideoControls();
  return videoControlsScript;
});

/***/ }),

/***/ "./app/resources/js/crossbar-detail.js":
/*!*********************************************!*\
  !*** ./app/resources/js/crossbar-detail.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _three_crossbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-crossbars */ "./app/resources/js/three-crossbars.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _components_neoh_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/neoh-slider */ "./app/resources/js/components/neoh-slider.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var crossbarsPage = /*#__PURE__*/function () {
  function crossbarsPage() {
    _classCallCheck(this, crossbarsPage);

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

  _createClass(crossbarsPage, [{
    key: "setupSwiper",
    value: function setupSwiper() {
      var _this = this;

      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.crossbar__swiper', {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        navigation: {
          nextEl: '.crossbar__button--next',
          prevEl: '.crossbar__button--prev'
        }
      });
      this.contentContainers = document.querySelectorAll('[data-id]');
      this.contentContainers.forEach(function (el) {
        el.style.display = "none";
      }); // let that = this;

      if (this.contentContainers && this.contentContainers[0]) {
        this.currentContainer = this.contentContainers[0];
        this.contentContainers[0].style.display = "block";
      } // swiper nav positioning


      this.swiperPagination = document.getElementById('js__swiper-navigation');

      var setSwiperNavPosition = function setSwiperNavPosition(index) {
        var innerDiv = document.querySelector(".crossbar__hero__inner[data-bar=\"".concat(index, "\"]"));
        var parentDiv = document.querySelector(".crossbar__hero[data-bar=\"".concat(index, "\"]"));

        if (innerDiv && parentDiv && window.innerWidth > 500) {
          var positionBot = parentDiv.clientHeight - innerDiv.clientHeight;
          _this.swiperPagination.style.bottom = Math.max(positionBot / 2, 10) + 'px';
        } else {
          _this.swiperPagination.style.bottom = '';
        }
      };

      var prevActiveIndex = 0;
      this.swiper.on('slideChange', function () {
        _components_neoh_slider__WEBPACK_IMPORTED_MODULE_4__["default"].destroy();

        _this.contentContainers.forEach(function (el) {
          // hide all containers and remove marquee class ( fixes resize bug)
          var activeMarquee = el.querySelector('.js_marquee3k');
          if (activeMarquee) activeMarquee.classList.remove('js_marquee3k__active');
          el.style.display = "none";
        }); // change cta button colour...


        var ctaButtons = document.querySelectorAll('.js__nav-cta');
        ctaButtons.forEach(function (btn, index) {
          btn.classList.remove(_this.contentContainers[prevActiveIndex].dataset.ctaClass);
          btn.classList.add(_this.contentContainers[_this.swiper.activeIndex].dataset.ctaClass); // let crossbarButton = document.querySelector(`.js__lead-to-store[data-shopify="${this.contentContainers[this.swiper.activeIndex].dataset.shopifyHandle}"]`);
          // if (crossbarButton) btn.href = crossbarButton.href;
        }); // get prev container

        _this.currentContainer.dataset.ctaClass;
        _this.currentContainer = _this.contentContainers[_this.swiper.activeIndex];
        _this.currentContainer.style.display = "block";

        _this.setupMarquee();

        var newUrl = _this.contentContainers[_this.swiper.activeIndex].getAttribute('data-url');

        _this.chartDestroyEventListeners.forEach(function (listenerDestroyFunc) {
          listenerDestroyFunc();
        });

        _this.setupCharts(_this.swiper.activeIndex);

        var threeBar = Object(_three_crossbars__WEBPACK_IMPORTED_MODULE_1__["default"])();

        if (!threeBar.usesMobileVersion) {
          threeBar.changeBar(newUrl);
        }

        if (!window.location.href.includes('preview')) {
          window.history.replaceState(null, null, newUrl);
        }

        prevActiveIndex = _this.swiper.activeIndex;
        setSwiperNavPosition(_this.swiper.activeIndex);
        _components_neoh_slider__WEBPACK_IMPORTED_MODULE_4__["default"].init();
      });
      setSwiperNavPosition(0);
      var resizeHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        setSwiperNavPosition(_this.swiper.activeIndex);
      }, 80);
      window.addEventListener('resize', resizeHandler);

      this.destroySwiperResizeListener = function () {
        window.removeEventListener('resize', resizeHandler);
      }; // initial setup for buttons, especially when going from home to detail page


      var ctaButtons = document.querySelectorAll('.js__nav-cta');
      ctaButtons.forEach(function (btn, index) {
        if (_this.currentContainer) {
          btn.classList.add(_this.currentContainer.dataset.ctaClass); // let crossbarButton = document.querySelector(`.js__lead-to-store[data-shopify="${this.currentContainer.dataset.shopifyHandle}"]`);
          // if (crossbarButton) btn.href = crossbarButton.href;
        }
      });
    }
  }, {
    key: "heroNavigation",
    value: function heroNavigation() {
      var _this2 = this;

      this.popStateListener = window.addEventListener('popstate', function (item) {
        var pathname = item.target.location.pathname;
        var barFlavors = pathname ? pathname.split('/') : null;

        if (_this2.isDetailPage) {
          var barFlavor = barFlavors && barFlavors.length > 0 ? barFlavors[barFlavors.length - 1] : null;

          var _document = barFlavor ? window.document.querySelectorAll("[data-bar-slide-name='" + barFlavor + "']") : null;

          if (_document && _document.length > 0) {
            var swiperIndex = parseInt(_document[0].getAttribute('data-bar-slide-index'));

            var barUrl = _document[0].getAttribute('data-bar-url');

            if (barUrl && _this2.swiper) {
              _this2.swiper.slideTo(swiperIndex);
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
  }, {
    key: "hideHomeButtons",
    value: function hideHomeButtons() {
      var homeCTA = document.getElementById('js__cta-home');
      var midCTA = document.getElementById('js__cta-mid');

      if (homeCTA) {
        homeCTA.classList.add('bars__data__container--hide');
      }

      if (midCTA) {
        midCTA.classList.add('bars__data__container--hide');
      }
    }
  }, {
    key: "setupMarquee",
    value: function setupMarquee() {
      var _this3 = this;

      setTimeout(function () {
        var newMarquee = _this3.currentContainer.querySelector('.js_marquee3k');

        if (newMarquee) newMarquee.classList.add('js_marquee3k__active');
      }, 10); // add to end of event loop
    }
  }, {
    key: "setupCharts",
    value: function setupCharts(barIndex) {
      var _this4 = this;

      var chartButtons = document.querySelectorAll(".chart__buttons .btn[data-bar=\"".concat(barIndex, "\"]"));
      var charts = document.querySelectorAll(".chart__graph[data-bar=\"".concat(barIndex, "\"]"));
      this.chartDestroyEventListeners = [];

      function animateGraph(chartButton) {
        var selectedChart = null;

        var _iterator = _createForOfIteratorHelper(charts),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var chart = _step.value;
            var chartIndex = chartButton.dataset.chart;

            if (chart.dataset.chart === chartIndex) {
              selectedChart = chart;
              selectedChart.classList.add('chart__graph--show');
              var chartBars = selectedChart.querySelectorAll('.chart__graph__bar__inner');
              var largestVal = selectedChart.dataset.largest;

              var _iterator3 = _createForOfIteratorHelper(chartBars),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var bar = _step3.value;
                  var value = Math.round(bar.dataset.value / largestVal * 100);
                  gsap_all__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].fromTo(bar, .5, {
                    height: '0%'
                  }, {
                    height: value + '%',
                    delay: .2
                  });
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } else {
              chart.classList.remove('chart__graph--show');
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(chartButtons),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var button = _step2.value;

            if (button !== chartButton) {
              button.style.border = '';
              button.style.color = '';
            } else {
              var colour = button.dataset.colour;
              button.style.border = "1px solid ".concat(colour);
              button.style.color = colour;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      chartButtons.forEach(function (button) {
        var chartButtonClickHandler = function chartButtonClickHandler() {
          animateGraph(button);
        };

        button.addEventListener('click', chartButtonClickHandler);

        _this4.chartDestroyEventListeners.push(function () {
          button.removeEventListener('click', chartButtonClickHandler);
        });
      });
      this.setupChartScroll(chartButtons, animateGraph);
    }
  }, {
    key: "setButtonStyleActive",
    value: function setButtonStyleActive(button) {
      var colour = button.dataset.colour;
      button.style.border = "1px solid ".concat(colour);
      button.style.color = colour;
    }
  }, {
    key: "setupChartScroll",
    value: function setupChartScroll(chartButtons, animateGraph) {
      var _this5 = this;

      var observerCallback = function observerCallback(entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateGraph(chartButtons[0]);
            var colour = chartButtons[0].dataset.colour;
            chartButtons[0].style.border = "1px solid ".concat(colour);
            chartButtons[0].style.color = colour;

            _this5.chartObserver.unobserve(chartButtons[0]);
          }
        });
      };

      this.chartObserver = new IntersectionObserver(observerCallback, {
        threshold: 0.2
      });

      if (chartButtons[0]) {
        this.chartObserver.observe(chartButtons[0]);

        this.destroyObservers = function () {
          _this5.chartObserver.unobserve(chartButtons[0]);
        };
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        this.swiper.destroy(true, true);
        this.swiper = null;
        this.initialized = false;
        this.chartDestroyEventListeners.forEach(function (listenerDestroyFunc) {
          listenerDestroyFunc();
        });
        _components_neoh_slider__WEBPACK_IMPORTED_MODULE_4__["default"].destroy();
        [this.destroyObservers, this.destroySwiperResizeListener].forEach(function (destroyFunc) {
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
  }, {
    key: "init",
    value: function init(pageName) {
      var _this6 = this;

      this.isDetailPage = pageName === 'crossbar-detail';
      this.destroy();

      if (this.isDetailPage && !this.initialized) {
        this.hideHomeButtons();
        setTimeout(function () {
          _this6.setupSwiper();

          _this6.setupMarquee();

          _this6.heroNavigation();

          _this6.setupCharts(0);

          _components_neoh_slider__WEBPACK_IMPORTED_MODULE_4__["default"].init();
          _this6.initialized = true;
        }, 10); // add to end of event loop
      }
    }
  }]);

  return crossbarsPage;
}();

var crossbarsPageScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!crossbarsPageScript) crossbarsPageScript = new crossbarsPage();
  return crossbarsPageScript;
});

/***/ }),

/***/ "./app/resources/js/faq.js":
/*!*********************************!*\
  !*** ./app/resources/js/faq.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");

var isFaqDetailPage = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(pageName) {
    isFaqDetailPage = pageName === 'faq';

    if (isFaqDetailPage) {
      _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().showHeader();
      _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().setPreventHeaderHide(true);
    }
  },
  destroy: function destroy() {
    if (isFaqDetailPage) _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().setPreventHeaderHide(false);
  }
});

/***/ }),

/***/ "./app/resources/js/gyroscope-crossbar.js":
/*!************************************************!*\
  !*** ./app/resources/js/gyroscope-crossbar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./app/resources/js/loader.js");

var initialOrientationX,
    initialOrientationY,
    mainImage,
    detailPageImages = [],
    heroHeadline;
var translateBase1 = {
  x: -16,
  y: 16
};
var rotateBase1 = {
  x: -.75,
  y: .88,
  z: -.874,
  a: -.04
};
var skewBase1 = {
  y: -6,
  x: -1
}; // let translateBase2 = {
//     x: -16,
//     y: 16,
// };

var rotateBase2 = {
  x: .68,
  y: .42,
  z: -.874,
  a: .032
};
var skewBase2 = {
  y: -6,
  x: -0
};
var rotateBase3 = {
  x: .4,
  a: 3
};
var translateBase3 = {
  x: 8,
  y: 8
};
var skewBase3 = {
  x: 1
};
var destroyFuncs = [];

function transformImageHome(beta, gamma) {
  // Because we don't want to have the device upside down
  // We constrain the x value to the range [0,90]
  if (beta < 0) {
    beta = 0;
  }

  if (beta > 90) {
    beta = 90;
  } // x has a range of 0-90, y has a range of 0-180
  // gamma += 90;


  var gammaNorm = gamma / 90;
  var betaNorm = Math.abs(beta / 90 - 1);
  gammaNorm = Math.min(Math.max(gammaNorm, -1), 1);
  betaNorm = Math.min(Math.max(betaNorm, -1), 1);

  if (gammaNorm >= 0) {
    mainImage.style.transform = "perspective(300px) translate3d(".concat(gammaNorm * translateBase1.x, "px, ").concat(betaNorm * translateBase1.y, "px, 0px) rotate3d(").concat(betaNorm * rotateBase1.x, ", ").concat(rotateBase1.y, ", ").concat(gammaNorm * rotateBase1.z, ", ").concat(gammaNorm * rotateBase1.a, "turn) skewY(").concat(gammaNorm * skewBase1.y, "deg) skewX(").concat(gammaNorm * skewBase1.x, "deg)");
    mainImage.style.webkitTransform = "perspective(300px) translate3d(".concat(gammaNorm * translateBase1.x, "px, ").concat(betaNorm * translateBase1.y, "px, 0px) rotate3d(").concat(betaNorm * rotateBase1.x, ", ").concat(rotateBase1.y, ", ").concat(gammaNorm * rotateBase1.z, ", ").concat(gammaNorm * rotateBase1.a, "turn) skewY(").concat(gammaNorm * skewBase1.y, "deg) skewX(").concat(gammaNorm * skewBase1.x, "deg)");
    heroHeadline.style.transform = "translateX(".concat(gammaNorm * 10, "px) translateY(").concat(betaNorm * 10, "px)");
    heroHeadline.style.webkitTransform = "translateX(".concat(gammaNorm * 10, "px) translateY(").concat(betaNorm * 10, "px)");
  } else {
    gammaNorm = Math.abs(gammaNorm);
    mainImage.style.transform = "perspective(300px) translate3d(".concat(gammaNorm * translateBase1.x, "px, ").concat(betaNorm * translateBase1.y, "px, 0px) rotate3d(").concat(betaNorm * rotateBase1.x, ", ").concat(rotateBase2.y, ", ").concat(gammaNorm * rotateBase2.z, ", ").concat(gammaNorm * rotateBase2.a, "turn) skewY(").concat(gammaNorm * skewBase2.y, "deg) skewX(").concat(gammaNorm * skewBase2.x, "deg)");
    mainImage.style.webkitTransform = "perspective(300px) translate3d(".concat(gammaNorm * translateBase1.x, "px, ").concat(betaNorm * translateBase1.y, "px, 0px) rotate3d(").concat(betaNorm * rotateBase2.x, ", ").concat(rotateBase2.y, ", ").concat(gammaNorm * rotateBase2.z, ", ").concat(gammaNorm * rotateBase2.a, "turn) skewY(").concat(gammaNorm * skewBase2.y, "deg) skewX(").concat(gammaNorm * skewBase2.x, "deg)");
    heroHeadline.style.transform = "translateX(".concat(gammaNorm * -10, "px) translateY(").concat(betaNorm * -10, "px)");
    heroHeadline.style.webkitTransform = "translateX(".concat(gammaNorm * -10, "px) translateY(").concat(betaNorm * -10, "px)");
  }
}

function transformImageDetail(beta, gamma) {
  var gammaNorm = gamma / 90;
  var betaNorm = beta / 90;
  var initialTransformStateDetail = 'translateX(6vw) rotateZ(-90deg) translateX(-100%)';
  detailPageImages.forEach(function (image) {
    image.style.transform = initialTransformStateDetail + " translate3d(".concat(betaNorm * translateBase3.x, "px, ").concat(gammaNorm * translateBase3.y, "px, 0px) skewX(").concat(gammaNorm * skewBase3.x, "deg)");
    image.style.webkitTransform = initialTransformStateDetail + " translate3d(".concat(betaNorm * translateBase3.x, "px, ").concat(gammaNorm * translateBase3.y, "px, 0px) skewX(").concat(gammaNorm * skewBase3.x, "deg)");
  });
} // perspective(400px) translate3d(16px, 12px, -10px) rotate3d(-0.1069, 0.42, -0.874615, -0.038turn) skewY(-4deg)


/* harmony default export */ __webpack_exports__["default"] = ({
  initHome: function initHome() {
    mainImage = document.getElementById('js__hero-mobile-bar');

    mainImage.onload = function () {
      Object(_loader__WEBPACK_IMPORTED_MODULE_0__["default"])().removeLoader();
    };

    mainImage.src = mainImage.dataset.src;
    heroHeadline = document.getElementById('js__hero-headline');
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // firefox implementation of the deviceorientation doesn't work well

    if (!isFirefox) {
      if (window.DeviceOrientationEvent || 'ondeviceorientation' in window) {
        var attachDeviceOrientationListeners = function attachDeviceOrientationListeners() {
          var handleOrientation = function handleOrientation(event) {
            var x = event.beta; // In degree in the range [-180,180]

            var y = event.gamma; // In degree in the range [-90,90]

            transformImageHome(x, y);
          }; // mainImage.classList.add('home__hero__mobile-bar__animation');


          window.addEventListener('deviceorientation', handleOrientation);
          destroyFuncs.push(function () {
            return window.removeEventListener('deviceorientation', handleOrientation);
          });
        };

        // gyro exists
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          DeviceOrientationEvent.requestPermission().then(function (response) {
            if (response == 'granted') {
              attachDeviceOrientationListeners();
            }
          })["catch"](console.error);
        } else {
          attachDeviceOrientationListeners();
        }
      } else if (window.DeviceMotionEvent || 'ondevicemotion' in window) {
        var attachDeviceMotionListeners = function attachDeviceMotionListeners() {
          var handleDeviceMotion = function handleDeviceMotion(event) {
            var x = event.rotationRate.beta; // In degree in the range [-180,180]

            var y = event.rotationRate.gamma; // In degree in the range [-90,90]

            transformImageHome(x, y);
          };

          window.addEventListener('devicemotion', handleDeviceMotion);
          destroyFuncs.push(function () {
            return window.removeEventListener('devicemotion', handleDeviceMotion);
          });
        };

        if (typeof DeviceMotionEvent.requestPermission === 'function') {
          // iOS 13+
          DeviceMotionEvent.requestPermission().then(function (response) {
            if (response == 'granted') {
              attachDeviceMotionListeners();
            }
          })["catch"](console.error);
        } else {
          attachDeviceMotionListeners();
        }
      }
    }
  },
  initDetail: function initDetail(data) {
    // chocolate is bar_1, raspberry is bar_2, cocos is bar_3
    detailPageImages = document.querySelectorAll('.crossbar__bars-static__bar');
    var counter = 0;
    detailPageImages.forEach(function (image) {
      if (image.complete) {
        counter++;
        if (counter >= detailPageImages.length) Object(_loader__WEBPACK_IMPORTED_MODULE_0__["default"])().removeLoader();
      } else {
        image.onload = function () {
          counter++;
          if (counter >= detailPageImages.length) Object(_loader__WEBPACK_IMPORTED_MODULE_0__["default"])().removeLoader();
        };
      }

      image.classList.add('crossbar__bars-static__bar--show');
    });

    if (window.DeviceOrientationEvent || !('ondeviceorientation' in window)) {
      // gyro exist
      var handleOrientation = function handleOrientation(event) {
        var x = event.beta; // In degree in the range [-180,180]

        var y = event.gamma; // In degree in the range [-90,90]

        transformImageDetail(x, y);
      }; // mainImage.classList.add('home__hero__mobile-bar__animation');


      window.addEventListener('deviceorientation', handleOrientation);
      destroyFuncs.push(function () {
        return window.removeEventListener('deviceorientation', handleOrientation);
      });
    } else if (!('ondevicemotion' in window)) {
      var handleDeviceMotion = function handleDeviceMotion(event) {
        var x = event.rotationRate.beta; // In degree in the range [-180,180]

        var y = event.rotationRate.gamma; // In degree in the range [-90,90]

        transformImageDetail(x, y);
      };

      window.addEventListener('devicemotion', handleDeviceMotion);
      destroyFuncs.push(function () {
        return window.removeEventListener('devicemotion', handleDeviceMotion);
      });
    }
  },
  disableHome: function disableHome() {
    var mainHeroBar = document.getElementById('js__hero-mobile-bar-container');
    if (mainHeroBar) mainHeroBar.classList.add('home__hero__mobile-bar--hide');
  },
  destroy: function destroy() {
    destroyFuncs.forEach(function (func) {
      return func();
    });
    destroyFuncs = [];
  }
});

/***/ }),

/***/ "./app/resources/js/header.js":
/*!************************************!*\
  !*** ./app/resources/js/header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _utils_is_touch_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-touch-device */ "./app/resources/js/utils/is-touch-device.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

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

  _createClass(Header, [{
    key: "onPageChange",
    value: function onPageChange(pageName) {
      this.currentPage = pageName;
    }
  }, {
    key: "init",
    value: function init(pageName) {
      var _this = this;

      document.addEventListener('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        if (_this.preventAnimation) return;
        var currentScrollValue = window.pageYOffset;
        _this.scrollDirection = currentScrollValue < _this.scrollOffset ? 'up' : 'down';
        _this.scrollOffset = currentScrollValue;
        var windowHeight = window.innerHeight; // this.isHomePage = document.getElementById("js__home-wrapper");

        if (_this.scrollOffset > windowHeight / 2 && _this.currentPage !== 'home') {
          if (!_this.desktopHeader.classList.contains('nav--bg') && !_this.preventBgClass) _this.desktopHeader.classList.add('nav--bg');
        } else if (_this.scrollOffset > windowHeight * 2 && _this.currentPage == 'home') {
          if (!_this.desktopHeader.classList.contains('nav--bg') && !_this.preventBgClass) _this.desktopHeader.classList.add('nav--bg');
        } else if (!(_this.currentPage === 'store' && window.innerWidth <= _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__["default"].tabletBreakpoint)) {
          if (_this.desktopHeader.classList.contains('nav--bg')) _this.desktopHeader.classList.remove('nav--bg');
        }

        if (_this.scrollDirection === 'down' && _this.scrollOffset > _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__["default"].headerHeightMobile + _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__["default"].globalNotificationHeight) {
          _this.hideHeader();
        } else if (_this.scrollDirection === 'up') {
          _this.showHeader();
        }
      }, Object(_utils_is_touch_device__WEBPACK_IMPORTED_MODULE_3__["default"])() ? 200 : 80), {
        passive: true
      });
      var resizeHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        if (!Object(_utils_is_touch_device__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
          _this.desktopHeader.classList.remove('nav--hide');
        }

        _this.desktopHeader.style.height = null;
        _this.desktopHeader.style.height = _this.desktopHeader.clientHeight + 'px';
      }, 120);
      window.addEventListener('resize', resizeHandler);
      delegate__WEBPACK_IMPORTED_MODULE_4___default()([this.desktopHeader], '.js__back-arrow', 'click', function (e) {
        window.history.back();
      });
    }
  }, {
    key: "removeBgClass",
    value: function removeBgClass() {
      this.desktopHeader.classList.remove('nav--bg');
    }
  }, {
    key: "showHeader",
    value: function showHeader() {
      if (!this.preventHeaderHide && !this.isShown) {
        if (this.callbacks['show-start']) this.callbacks['show-start'].forEach(function (func) {
          return func();
        });
        this.desktopHeader.classList.remove('nav--hide');
        this.desktopHeaderShow = true;
        this.isShown = true;
        if (this.callbacks['show']) this.callbacks['show'].forEach(function (func) {
          return func();
        });
      }
    }
  }, {
    key: "hideMobileBottomNav",
    value: function hideMobileBottomNav() {
      this.desktopHeader.style.display = "none";
    }
  }, {
    key: "showMobileBottomNav",
    value: function showMobileBottomNav() {
      this.desktopHeader.style.display = null;
    }
  }, {
    key: "hideHeader",
    value: function hideHeader(override) {
      var _this2 = this;

      if ((!this.preventHeaderHide || override) && this.isShown) {
        if (this.callbacks['hide-start']) this.callbacks['hide-start'].forEach(function (func) {
          return func();
        });
        this.desktopHeader.classList.add('nav--hide');
        this.desktopHeaderShow = false;
        this.isShown = false;
        setTimeout(function () {
          if (_this2.callbacks['hide'] && !_this2.isShown) _this2.callbacks['hide'].forEach(function (func) {
            return func();
          });
        }, _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__["default"].headerAnimationDelay);
      }
    }
  }, {
    key: "setPreventHeaderHide",
    value: function setPreventHeaderHide(value) {
      this.preventHeaderHide = value;
    }
  }, {
    key: "showBackArrow",
    value: function showBackArrow() {
      var _this3 = this;

      this.backArrows = document.querySelectorAll('.js__back-arrow');
      this.desktopHeader.style.height = this.desktopHeader.clientHeight + 'px';
      this.backArrows.forEach(function (arrow) {
        arrow.classList.add('nav__back-arrow--show');
        arrow.style.top = _this3.desktopHeader.clientHeight / 2;
      });
      this.navLogos.forEach(function (logo) {
        logo.classList.add('nav__logo__container--hide');
      });
      this.backArrowShown = true;
    }
  }, {
    key: "hideBackArrow",
    value: function hideBackArrow() {
      this.backArrows.forEach(function (arrow) {
        arrow.classList.remove('nav__back-arrow--show');
      });
      this.navLogos.forEach(function (logo) {
        logo.classList.remove('nav__logo__container--hide');
      });
      this.backArrowShown = false;
    }
  }, {
    key: "getBackArrowShown",
    value: function getBackArrowShown() {
      return this.backArrowShown;
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, callback) {
      if (this.callbacks[eventName]) this.callbacks[eventName].push(callback);else this.callbacks[eventName] = [callback];
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, callback) {
      var foundIndex = this.callbacks[eventName].findIndex(function (_callback) {
        return _callback === callback;
      });
      if (foundIndex) this.callbacks[eventName].splice(foundIndex, 1);
    }
  }, {
    key: "toggleMobileGreyHeader",
    value: function toggleMobileGreyHeader(value) {
      if (value) this.preventBgClass = true;else this.preventBgClass = false;
      this.removeBgClass(); // this.desktopHeader.classList.remove('nav--grey');
      // if (value) this.desktopHeader.classList.add('nav--grey');
      // else this.desktopHeader.classList.remove('nav--grey');
    }
  }]);

  return Header;
}();

var headerInstance = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    if (!headerInstance) {
      // only need a singleton, but I think it's better to have the init option available on the top level
      headerInstance = new Header();
      return headerInstance;
    }

    return headerInstance;
  },
  get: function get() {
    return headerInstance;
  }
});

/***/ }),

/***/ "./app/resources/js/home.js":
/*!**********************************!*\
  !*** ./app/resources/js/home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _three_crossbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-crossbars */ "./app/resources/js/three-crossbars.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./app/resources/js/loader.js");
/* harmony import */ var _utils_get_device_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/get-device-type */ "./app/resources/js/utils/get-device-type.js");
/* harmony import */ var _utils_wheel_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/wheel-events */ "./app/resources/js/utils/wheel-events.js");
/* harmony import */ var _utils_touch_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/touch-events */ "./app/resources/js/utils/touch-events.js");
/* harmony import */ var _utils_is_touch_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/is-touch-device */ "./app/resources/js/utils/is-touch-device.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav */ "./app/resources/js/nav.js");
/* harmony import */ var _components_neoh_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/neoh-slider */ "./app/resources/js/components/neoh-slider.js");
/* harmony import */ var _utils_shopify_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/shopify-client */ "./app/resources/js/utils/shopify-client.js");


















function Home(contentReplacedCallBack) {
  this.contentReplacedCallBack = contentReplacedCallBack;

  this.init = function (pageName) {
    this.swupInitialized = false;
    this.swup = null;
    this.homeWrapper = null;
    this.swiperInitialized = false;
    this.recommendedSwiperInitialized = false;
    this.recommendedSwiper;
    var isHomePage = pageName === 'home';

    if (isHomePage) {
      this.navCTA = document.querySelector('.js__nav-cta');
      this.homeWrapper = document.getElementById('js__home-wrapper');
      this.initialized = false;
      this.overflowHiddenSet = true;
      this.scrollState = 'free'; // free, animating, free
      // this.endSectionEl = document.getElementById('js__home-end');

      this.midSectionEl = document.getElementById('js__home-mid-section');
      this.homeHeroEl = document.getElementById('js__home-hero');
      this.lastIndexEl = null;
      this.scrollDirection = null;
      this.observer = null;
      this.observer2 = null;
      this.animationTime = window.innerWidth > 500 ? 0.6 : 0.3;
      this.windowHeight = window.innerHeight;
      this.neohBar = Object(_three_crossbars__WEBPACK_IMPORTED_MODULE_1__["default"])();
      this.barAnimationTime = this.neohBar.getHomeAnimationTime();
      this.scrollToCurrentValue = 'home';
      this.firstScroll = true;
      this.scrollUptToHomeAvailable = false;
      this.scrollToMidAvailable = false;
      this.allowOverflowToChange = false;
      this.waitingAnimation = null;
      this.touchInProgress = false;
      this.currentTween = null;
      this.isTouchDevice = Object(_utils_is_touch_device__WEBPACK_IMPORTED_MODULE_8__["default"])();
      this.currentScrollValue = 0;
      this.debounce = false;
      this.scrollValues = [];
      this.isIpad = /iPad/.test(navigator.platform);
      this.allowDocumentScroll = false;
      this.eventHandlerDebounce = false;
      this.mobileStaticBars = document.querySelectorAll('.js__bar-static-flavor');
      this.carts = document.querySelectorAll('.js__cart-path');
      _utils_wheel_events__WEBPACK_IMPORTED_MODULE_6__["default"].init();
      this.fetchIGPosts();
      this.setupRecommendedSwiper();
      _components_neoh_slider__WEBPACK_IMPORTED_MODULE_15__["default"].init(true);
      var deviceType = Object(_utils_get_device_type__WEBPACK_IMPORTED_MODULE_5__["default"])();
      var shouldInitializeTouchDevice = this.isTouchDevice && window.innerWidth <= _utils_css_variables__WEBPACK_IMPORTED_MODULE_12__["default"].desktopBreakpoint - 1 || deviceType === 'tablet' || deviceType === 'mobile';

      if (shouldInitializeTouchDevice) {
        this.setupTouchDevice();
      } else {
        this.setupDesktopScroll();
        this.setupDetailPageTransitions();
      }

      this.initialized = true;
    }
  };

  this.fetchIGPosts = function () {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://www.instagram.com/neoh/?__a=1").then(function (data) {
      var imageArray = data.data.graphql.user.edge_owner_to_timeline_media.edges;
      var i;

      for (i = 0; i < 12; i++) {
        var node = document.getElementById("neohInstagram");
        var divNode = document.createElement("div");
        divNode.setAttribute('class', 'swiper-slide');
        var imageNode = document.createElement("img");
        imageNode.setAttribute('data-src', imageArray[i].node.display_url);
        imageNode.setAttribute('alt', 'Follow NEOH on Instagram');
        imageNode.setAttribute('class', 'lazyload');
        node.appendChild(divNode);
        divNode.appendChild(imageNode);
      }
    }).then(function () {
      _this.setupSwiper();
    })["catch"](function (error) {
      document.getElementById("neohInstagram").parentNode.parentNode.style.display = 'none';
    });
  };

  this.setupSwiper = function () {
    var _this2 = this;

    var observedElInstagram = document.getElementById('instagram-swiper');

    if (observedElInstagram) {
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]('#instagram-swiper', {
        direction: 'horizontal',
        speed: 500,
        autoplay: {
          delay: 3099,
          disableOnInteraction: false
        },
        loop: true,
        loopPreventsSlide: true,
        slidesPerView: 1,
        breakpoints: {
          1000: {
            slidesPerView: 2
          },
          1440: {
            slidesPerView: 3
          }
        }
      });
    }

    var observerInstagram = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          if (_this2.swiper && !_this2.swiper.autoplay.running) {
            _this2.swiper.autoplay.start();
          }
        }
      });
    }, {
      threshold: 0.1
    });
    observerInstagram.observe(observedElInstagram);

    this.destroyObserverListeners = function () {
      if (observerInstagram) observerInstagram.unobserve(observedElInstagram);
      if (_this2.swiper) _this2.swiper.destroy(true, true);
    };
  };

  this.setupRecommendedSwiper = function () {
    var _this3 = this;

    var observerRecommended;
    var observedElRecommended = document.getElementById('js__store-recommended');

    if (observedElRecommended) {
      var setCardPrices = function setCardPrices(products) {
        var cardsPrices = document.querySelectorAll('.js__store-card-price');
        cardsPrices.forEach(function (priceDiv) {
          var associatedShopifyProduct = products.find(function (product) {
            return product.handle === priceDiv.dataset.shopify;
          });

          if (associatedShopifyProduct) {
            var variant = associatedShopifyProduct.variants[0];
            var formattedPrice = new Intl.NumberFormat(window.data.locale.split('-')[1], {
              style: 'currency',
              currency: variant.priceV2.currencyCode
            }).format(variant.priceV2.amount);
            priceDiv.innerHTML = formattedPrice;
          }
        });
      };

      this.recommendedSwiper = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]('#js__store-recommended', {
        direction: 'horizontal',
        speed: 500,
        slidesPerView: 1.12,
        spaceBetween: 24,
        loopFillGroupWithBlank: true,
        breakpoints: {
          768: {
            slidesPerView: 2.12
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1440: {
            slidesPerView: 2
          }
        }
      });
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_16__["subscribeProducts"])(function (res) {
        setCardPrices(res);
      });
    }

    this.destroyObserverListeners = function () {
      if (observerRecommended) observerRecommended.unobserve(observedElRecommended);
      if (_this3.recommendedSwiper) _this3.recommendedSwiper.destroy(true, true);
    };
  };

  this.setupTouchDevice = function () {
    var _this4 = this;

    this.homeCTA = document.getElementById('js__cta-home');
    this.midCTA = document.getElementById('js__cta-mid-fixed');
    this.midHeadline = document.getElementById('js__home-mid__headline-fixed');
    this.midText = document.getElementById('js__home__mid-section__text-fixed');
    var midsection = document.getElementById('js__home-mid-section-wrapper');
    if (midsection) midsection.classList.add('home__mid-section--transparent');
    this.midHeadline.classList.add('home__mid-section__headline--hide');
    this.midText.classList.add('home__mid-section__text--hide');
    this.homeCTA.classList.remove('bars__data__container--hide');
    var prevScrollValue = 0;
    var detectScrollTop = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      var pageYOffset = window.pageYOffset;
      if (Math.abs(pageYOffset - prevScrollValue) > _this4.windowHeight / 2.1) return;
      if (prevScrollValue > pageYOffset) _this4.scrollDirection = 'up';else if (prevScrollValue < pageYOffset) _this4.scrollDirection = 'down';
      prevScrollValue = pageYOffset;

      _this4.checkScrollAnimationLogic(pageYOffset, _this4.windowHeight);
    }, 50);
    var detectScrollTopDebounce = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      _this4.checkScrollAnimationLogic(window.pageYOffset, _this4.windowHeight);
    }, 80);
    document.addEventListener('scroll', detectScrollTop, false);
    document.addEventListener('scroll', detectScrollTopDebounce, false);

    this.removeScrollListeners = function () {
      document.removeEventListener('scroll', detectScrollTop, false);
      document.removeEventListener('scroll', detectScrollTopDebounce, false);
    };

    this.setupDetailPageTransitionsTouch();
  };

  this.checkScrollAnimationLogic = function (pageYOffset, windowHeight) {
    if (pageYOffset > windowHeight * 0.44) {
      if (pageYOffset < windowHeight * 1.64 && this.scrollDirection === 'down') this.animateNeohBarFlavoursTouchDevice();else if (pageYOffset < windowHeight * 1.84 && this.scrollDirection === 'up') this.animateNeohBarFlavoursTouchDevice();else this.animateNeohBarHiddenTouchDevice();
    } else {
      this.animateHeroAreaTouchDevice();
    }
  };

  this.animateNeohBarHiddenTouchDevice = function () {
    this.homeCTA.classList.add('bars__data__container--hide');
    this.midCTA.classList.add('bars__data__container--hide');
    this.midHeadline.classList.add('home__mid-section__headline--hide');
    this.midText.classList.add('home__mid-section__text--hide');
    this.navCTA.classList.remove('btn__cta--white'); // this.endSectionEl.style.opacity = 1;

    this.cartBgChangeToRed();
    this.mobileStaticBars.forEach(function (bar) {
      bar.classList.remove('home__mid-section__bars-static__bar--show');
    });
    var midSectionMobile = document.getElementById('js__home-mid-section-mobile');
    if (midSectionMobile) midSectionMobile.classList.add('home__mid-section__content--black');
  };

  this.animateNeohBarFlavoursTouchDevice = function () {
    var _this5 = this;

    this.homeCTA.classList.add('bars__data__container--hide');
    setTimeout(function () {
      _this5.homeHeroEl.style.opacity = 0; // this.endSectionEl.style.opacity = 0;

      var midSectionMobile = document.getElementById('js__home-mid-section-mobile');
      if (midSectionMobile) midSectionMobile.classList.remove('home__mid-section__content--black');

      _this5.midCTA.classList.remove('bars__data__container--hide');

      _this5.midHeadline.classList.remove('home__mid-section__headline--hide');

      _this5.midText.classList.remove('home__mid-section__text--hide');

      _this5.navCTA.classList.add('btn__cta--white');

      _this5.cartBgChangeToBlack();

      _this5.mobileStaticBars.forEach(function (bar) {
        bar.classList.add('home__mid-section__bars-static__bar--show');
      });
    }, 100); // wait a bit before showing text
  };

  this.animateHeroAreaTouchDevice = function () {
    var _this6 = this;

    this.homeCTA.classList.remove('bars__data__container--hide');
    setTimeout(function () {
      _this6.homeHeroEl.style.opacity = 1; // this.endSectionEl.style.opacity = 0;

      var midSectionMobile = document.getElementById('js__home-mid-section-mobile');
      if (midSectionMobile) midSectionMobile.classList.remove('home__mid-section__content--black');

      _this6.midCTA.classList.add('bars__data__container--hide');

      _this6.midHeadline.classList.add('home__mid-section__headline--hide');

      _this6.midText.classList.add('home__mid-section__text--hide');

      _this6.navCTA.classList.remove('btn__cta--white');

      _this6.cartBgChangeToRed();

      _this6.mobileStaticBars.forEach(function (bar) {
        bar.classList.remove('home__mid-section__bars-static__bar--show');
      });
    }, 100); // wait a bit before showing text
  };

  this.setupDesktopScroll = function () {
    var _this7 = this;

    document.body.style.overflow = 'hidden';
    this.homeCTA = document.getElementById('js__cta-home');
    this.midCTA = document.getElementById('js__cta-mid');
    this.midHeadline = document.getElementById('js__home-mid__headline');
    this.midText = document.getElementById('js__home__mid-section__text'); // this.homeCTA.style.position = 'absolute';

    var homeMidSectionMobile = document.getElementById('js__home-mid-section-mobile');
    if (homeMidSectionMobile) homeMidSectionMobile.remove();

    if (!Object(_loader__WEBPACK_IMPORTED_MODULE_4__["default"])().getLoaderRemoved()) {
      var loaderRemovedHandler = function loaderRemovedHandler() {
        if (_this7.homeWrapper) {
          scrollTo(0, 0);

          _this7.homeCTA.classList.remove('bars__data__container--hide');

          document.body.style.overflow = 'hidden'; // hijacking the first scroll...

          _this7.allowDocumentScroll = true;
        }

        document.removeEventListener('loaderRemoved', loaderRemovedHandler);
      };

      document.addEventListener('loaderRemoved', loaderRemovedHandler);
    } else {
      this.homeCTA.classList.remove('bars__data__container--hide');
      document.body.style.overflow = 'hidden'; // hijacking the first scroll...

      this.allowDocumentScroll = true;
    }

    this.setupScrollAnimations(); // this.observer2 = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         setTimeout(() => {
    //             if (entry.isIntersecting) {
    //
    //                 if (this.scrollDirection === 'up' && this.scrollState !== 'animating' && this.scrollToCurrentValue !== 'home') {
    //                     if (this.touchInProgress && this.isIpad) this.waitingAnimation = this.scrollToHome;
    //                     else if (!this.isIpad) this.scrollToHome();
    //                 }
    //             }
    //         }, 40);
    //     })
    // }, {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: [0, 0.25, 0.5, 1]
    // });
    //
    // if (this.homeHeroEl) this.observer2.observe(this.homeHeroEl);

    this.destroyObservers = function () {// this.observer2.unobserve(this.homeHeroEl);
      // this.observer = null;
      // this.observer2 = null;
    };

    var resizeEventHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      if (_this7.isTouchDevice || window.innerWidth <= _utils_css_variables__WEBPACK_IMPORTED_MODULE_12__["default"]) return;
      _this7.animationTime = window.innerWidth > 500 ? 0.6 : 0.3;

      if (_this7.scrollToCurrentValue === 'home') {
        _this7.scrollToHome();
      } else if (_this7.scrollToCurrentValue === 'mid') {
        _this7.scrollFromHomeToMid();
      }
    }, 200);
    window.addEventListener('resize', resizeEventHandler);

    this.removeResizeEventListeners = function () {
      window.removeEventListener('resize', resizeEventHandler);
    };
  }; // DESKTOP SCROLL ANIMATIONS


  this.scrollFromHomeToMid = function (byPass) {
    var _this8 = this;

    if (this.scrollState === 'animating' && !byPass) return;
    this.homeCTA.classList.add('bars__data__container--hide');
    this.scrollState = 'animating';
    this.overflowHiddenSet = true;
    document.body.style.overflow = 'hidden';
    this.neohBar.setEnableAnimations();
    this.neohBar.animateToFlavours();
    this.midHeadline.classList.remove('home__mid-section__headline--hide');
    this.midText.classList.remove('home__mid-section__text--hide');

    if (!_nav__WEBPACK_IMPORTED_MODULE_14__["default"].get().getNavOpen()) {
      _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().hideHeader();
      _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().setPreventHeaderHide(true);
    }

    setTimeout(function () {
      _this8.currentTween = gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].to(window, _this8.animationTime, {
        scrollTo: '#js__home-mid-section',
        onComplete: function onComplete() {
          if (_this8.midSectionEl && _this8.midSectionEl.getBoundingClientRect().top < -50 || _this8.midSectionEl.getBoundingClientRect().top > 50) {// return setTimeout(() => {
            //     this.scrollFromHomeToMid(true);
            // }, 240);
          } else {
            setTimeout(function () {
              if (!_nav__WEBPACK_IMPORTED_MODULE_14__["default"].get().getNavOpen()) {
                _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().hideHeader();
                _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().setPreventHeaderHide(false);
              }
            }, 400);
          }

          _this8.scrollToCurrentValue = 'mid';
          _this8.currentTween = null;
          _this8.waitingAnimation = null;

          _this8.midCTA.classList.remove('bars__data__container--hide');

          _this8.scrollState = 'free';
          _this8.scrollUptToHomeAvailable = true;
          _this8.allowOverflowToChange = true;
          _this8.scrollToMidAvailable = false; // only becomes available upon scroll down

          _this8.firstScroll = false;
        }
      });
    }, 60);
  };

  this.scrollFromEndToMid = function (customAnimationTime, byPass) {
    var _this9 = this;

    _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().setPreventHeaderHide(true);
    this.midCTA.classList.remove('bars__data__container--hide');
    if (this.scrollState === 'animating' && !byPass) return;
    this.scrollState = 'animating';
    this.overflowHiddenSet = true;
    document.body.style.overflow = 'hidden';
    this.midHeadline.classList.remove('home__mid-section__headline--hide');
    this.midText.classList.remove('home__mid-section__text--hide');
    this.neohBar.hide(false);
    setTimeout(function () {
      // this.neohBar.setEnableAnimations();
      // this.neohBar.animateToFlavours();
      _this9.currentTween = gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].to(window, customAnimationTime ? customAnimationTime : _this9.animationTime, {
        scrollTo: '#js__home-mid-section',
        onComplete: function onComplete() {
          if (_this9.midSectionEl && _this9.midSectionEl.getBoundingClientRect().top < -50 || _this9.midSectionEl.getBoundingClientRect().top > 50) {// return setTimeout(() => {
            //     this.scrollFromEndToMid(null, true);
            // }, 120);
          } else {
            setTimeout(function () {
              if (!_nav__WEBPACK_IMPORTED_MODULE_14__["default"].get().getNavOpen()) {
                _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().hideHeader(true);
                _header__WEBPACK_IMPORTED_MODULE_13__["default"].get().setPreventHeaderHide(false);
              }
            }, 200);
          }

          _this9.scrollToCurrentValue = 'mid';
          _this9.scrollUptToHomeAvailable = true;
          _this9.scrollState = 'free';
          _this9.allowOverflowToChange = true;

          _this9.neohBar.hide(false);

          _this9.currentTween = null;
          _this9.waitingAnimation = null;
          _this9.scrollToMidAvailable = false; // only becomes available upon scroll down
        }
      });
    }, 60);
  };

  this.scrollToHome = function (byPass) {
    var _this10 = this;

    if (this.scrollState === 'animating' && !byPass) return;
    this.scrollState = 'animating';
    this.overflowHiddenSet = true;
    document.body.style.overflow = 'hidden'; // this.neohBar.setEnableAnimations();

    this.midCTA.classList.add('bars__data__container--hide');
    this.neohBar.animateToHomeDefault();
    this.cartBgChangeToRed();
    this.navCTA.classList.remove('btn__cta--white');
    this.midHeadline.classList.add('home__mid-section__headline--hide');
    this.midText.classList.add('home__mid-section__text--hide');
    this.neohBar.hide(false);
    setTimeout(function () {
      _this10.currentTween = gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].to(window, _this10.animationTime, {
        scrollTo: {
          y: 0
        },
        onComplete: function onComplete() {
          if (window.scrollY > 50) {
            return setTimeout(function () {
              _this10.scrollToHome(true);
            }, 120);
          }

          _this10.scrollToCurrentValue = 'home';
          _this10.scrollDirection = 'down';
          _this10.currentTween = null;
          _this10.waitingAnimation = null;
          _this10.overflowHiddenSet = true;
          document.body.style.overflow = 'hidden';
          setTimeout(function () {
            _this10.scrollState = 'free';

            _this10.homeCTA.classList.remove('bars__data__container--hide');

            _this10.firstScroll = true;
            _this10.allowOverflowToChange = false;
          }, 200); // wait for bar animation before allowing scroll
        }
      });
    }, 60);
  };

  this.createOnceEventHandler = function (direction) {
    var _this11 = this;

    return function (event) {
      if (!_nav__WEBPACK_IMPORTED_MODULE_14__["default"].get().getNavOpen()) {
        if (!_this11.allowDocumentScroll || _this11.eventHandlerDebounce) return;
        _this11.eventHandlerDebounce = true;
        setTimeout(function () {
          _this11.eventHandlerDebounce = false;
        }, 120);

        if (direction) {
          _this11.scrollDirection = direction;
        } else {
          _this11.scrollDirection = event.detail ? event.detail.direction : null;
        }

        if (_this11.scrollState === "animating") return;

        if (_this11.overflowHiddenSet && _this11.allowOverflowToChange) {
          document.body.style.overflow = '';
          _this11.overflowHiddenSet = false;
          _this11.allowOverflowToChange = false;
        }

        if (_this11.scrollDirection === 'down' && _this11.scrollToCurrentValue === 'mid') {
          _this11.scrollToMidAvailable = true;
        }

        if (_this11.firstScroll && _this11.scrollDirection === 'down') {
          // scroll to mid is only triggered by the scroll once handler, in order to reduce bugs
          _this11.scrollFromHomeToMid();

          _this11.firstScroll = false;
        } else if (_this11.scrollDirection === 'up' && _this11.scrollToCurrentValue === 'mid' && !_this11.scrollToMidAvailable) {
          _this11.scrollToHome();
        } else if (_this11.scrollUptToHomeAvailable && _this11.scrollDirection === 'up') {
          _this11.scrollToHome();

          _this11.scrollUptToHomeAvailable = false;
        } else if (_this11.scrollToMidAvailable && _this11.scrollDirection === 'up' && _this11.scrollToCurrentValue !== 'home') {
          _this11.scrollFromEndToMid();
        } else {
          _this11.scrollUptToHomeAvailable = false;
        }
      }
    };
  };

  this.setupScrollAnimations = function () {
    var _this12 = this;

    var eventHandler = this.createOnceEventHandler();
    document.addEventListener('wheelonce', eventHandler);

    this.removeSwipeWheelEventListeners = function () {
      document.removeEventListener('wheelonce', eventHandler);
    };

    var prevScrollValue = 0;
    var detectScrollTop = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(function (e) {
      if (_this12.scrollState === 'animating' && !_nav__WEBPACK_IMPORTED_MODULE_14__["default"].get().getNavOpen()) e.preventDefault();
      var offset = window.pageYOffset;

      if (offset < 60) {
        if (_this12.scrollDirection === 'up') {
          _this12.scrollToCurrentValue = 'home';

          if (_this12.scrollState !== 'animating') {
            _this12.scrollToHome();
          }

          _this12.scrollState = 'free';
          _this12.scrollToCurrentValue = 'home';
        }

        _this12.scrollDirection = 'down';
        _this12.firstScroll = true;
      } else {
        var scrollFromLastEl = _this12.lastIndexEl.getBoundingClientRect().top;

        if (scrollFromLastEl < 0) {
          _this12.scrollToCurrentValue = 'end';
          _this12.scrollToMidAvailable = false;
          _this12.scrollUptToHomeAvailable = false;

          _this12.neohBar.hide(true);

          _this12.cartBgChangeToRed();
        } else if (scrollFromLastEl > 50 && prevScrollValue - offset < 500 && _this12.scrollDirection === 'up') {
          _this12.scrollFromEndToMid();
        } else if (_this12.midSectionEl && _this12.midSectionEl.getBoundingClientRect().top < -50) {
          _this12.scrollToCurrentValue = 'mid';
          _this12.scrollToMidAvailable = true;
          _this12.scrollUptToHomeAvailable = false;
        }
      }

      prevScrollValue = offset;
    }, 50);
    document.addEventListener('scroll', detectScrollTop, false);

    this.removeScrollListeners = function () {
      // document.removeEventListener('wheel', wheelHandler, {passive: false});
      // document.removeEventListener('DOMMouseScroll', wheelHandler, false);
      document.removeEventListener('scroll', detectScrollTop, false);
    };
  };

  this.setupDetailPageTransitionsTouch = function () {
    var _this13 = this;

    var circles = document.querySelectorAll('.js__bars__data');
    var destroyListeners = [];
    circles.forEach(function (circle) {
      var barCircleClickHandler = function barCircleClickHandler(event) {
        event.preventDefault();

        _this13.swup.loadPage({
          url: circle.href,
          method: 'GET'
        });

        _this13.destroy();
      };

      circle.addEventListener('click', barCircleClickHandler);
      destroyListeners.push(function () {
        return circle.removeEventListener('click', barCircleClickHandler);
      });
    });

    this.removeCircleClickListeners = function () {
      destroyListeners.forEach(function (destroyFunc) {
        return destroyFunc();
      });
    };

    if (!this.swup && !this.swupInitialized) {
      this.swup = new swup__WEBPACK_IMPORTED_MODULE_2___default.a({
        linkSelector: null
      });
      this.swupInitialized = true;

      var swupHandler = function swupHandler(event) {
        scrollTo(0, 0);
        var content = document.querySelector('#swup');
        gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].fromTo(content, .24, {
          opacity: 0
        }, {
          opacity: 1
        });

        if (_this13.swup) {
          _this13.contentReplacedCallBack(_this13.swup);

          _this13.swupInitialized = false;
          _this13.swup = null;
        }
      };

      this.swup.on('contentReplaced', swupHandler);
    }
  };

  this.setupDetailPageTransitions = function () {
    var _this14 = this;

    this.lastIndexEl = document.getElementById('js__home-end-content');

    var fadeOutHomeElements = function fadeOutHomeElements() {
      var heroHeadline = document.getElementById('js__hero-headline');
      if (heroHeadline) gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].to(heroHeadline, .5, {
        opacity: 0
      });
      var heroTag = document.getElementById('js__home__hero__tag');
      if (heroTag) gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].to(heroTag, .5, {
        opacity: 0
      });

      _this14.homeCTA.classList.add('bars__data__container--hide');
    };

    var barCircleClickHandler = function barCircleClickHandler(event) {
      if (_this14.scrollState === 'animating' || _this14.debounce) return;
      _this14.debounce = true;
      setTimeout(function () {
        _this14.debounce = false;
      }, 100);

      if (_this14.isTouchDevice) {
        _this14.scrollState = 'animating';
        if (_this14.scrollToCurrentValue === 'home') fadeOutHomeElements();else {
          _this14.midCTA.classList.add('bars__data__container--hide');

          _this14.midHeadline.classList.add('home__mid-section__headline--hide');

          _this14.midText.classList.add('home__mid-section__text--hide');

          var midSectionMobile = document.getElementById('js__home-mid-section-mobile');
          midSectionMobile.classList.add('home__mid-section__content--black');
        }

        _this14.neohBar.animateToDetail(event.detail.bar);

        setTimeout(function () {
          _this14.scrollState = 'free';

          _this14.swup.loadPage({
            url: event.detail.href,
            method: 'GET'
          });

          _this14.destroy();
        }, 500);
      } else {
        if (_this14.scrollToCurrentValue === 'home') {
          fadeOutHomeElements();

          _this14.neohBar.animateToDetail(event.detail.bar);

          _this14.scrollState = 'animating';
          setTimeout(function () {
            // if (this.currentTween) this.currentTween.pause();
            _this14.scrollState = 'free';

            _this14.swup.loadPage({
              url: event.detail.href,
              method: 'GET'
            });

            _this14.destroy();
          }, 500);
        } else if (_this14.scrollToCurrentValue === 'mid' || _this14.scrollToCurrentValue === 'end') {
          _this14.lastIndexEl.style.visibility = 'hidden';
          var marquee = document.getElementById('js__home-marquee');
          if (marquee) marquee.classList.add('marquee--hide');

          _this14.neohBar.animateToDetail(event.detail.bar); // if (this.currentTween) this.currentTween.pause();
          // this.scrollState = 'animating';
          // this.overflowHiddenSet = true;
          // document.body.style.overflow = 'hidden';


          _this14.scrollState = 'free';
          _this14.overflowHiddenSet = false;
          document.body.style.overflow = '';

          _this14.midSectionEl.parentElement.classList.add('home__mid-section__content--black');

          _this14.midHeadline.classList.add('home__mid-section__headline--hide');

          _this14.midText.classList.add('home__mid-section__text--hide');

          _this14.swup.loadPage({
            url: event.detail.href,
            method: 'GET'
          });

          _this14.destroy(); // setTimeout(() => {
          //     TweenLite.to(window, .6, {
          //         scrollTo: this.lastIndexEl, onComplete: () => {
          //             this.scrollState = 'free';
          //             this.overflowHiddenSet = false;
          //             document.body.style.overflow = '';
          //
          //
          //             this.swup.loadPage({
          //                 url: event.detail.href,
          //                 method: 'GET'
          //             });
          //
          //             this.destroy();
          //         }
          //     })
          // }, 60);

        }
      }
    };

    document.addEventListener('barClick', barCircleClickHandler);

    this.removeCircleClickListeners = function () {
      document.removeEventListener('barClick', barCircleClickHandler);
    };

    if (!this.swup && !this.swupInitialized) {
      this.swup = new swup__WEBPACK_IMPORTED_MODULE_2___default.a({
        linkSelector: null
      });
      this.swupInitialized = true;

      var swupHandler = function swupHandler(event) {
        scrollTo(0, 0);
        var content = document.querySelector('#swup');
        gsap_all__WEBPACK_IMPORTED_MODULE_10__["TweenLite"].fromTo(content, .24, {
          opacity: 0
        }, {
          opacity: 1
        });

        if (_this14.swup) {
          _this14.contentReplacedCallBack(_this14.swup);

          _this14.swupInitialized = false;
          _this14.swup = null;
        }
      };

      this.swup.on('contentReplaced', swupHandler);
    }
  };

  this.cartBgChangeToRed = function () {
    this.carts.forEach(function (cart) {
      if (cart.classList.contains('cart__path--on-red')) {
        cart.classList.remove('cart__path--on-red');
        cart.parentElement.classList.remove('cart--on-red');
      }
    }); // nav.style.transform = null;
    // nav.style.transitionDelay = null;
  };

  this.cartBgChangeToBlack = function () {
    this.carts.forEach(function (cart) {
      cart.classList.add('cart__path--on-red');
      cart.parentElement.classList.add('cart--on-red');
    });
  };

  this.destroy = function () {
    if (this.initialized) {
      this.scrollState = 'free';
      document.body.style.overflow = '';
      this.cartBgChangeToRed();
      if (this.swup && this.swupInitialized) this.swup.destroy.bind(this);
      _utils_wheel_events__WEBPACK_IMPORTED_MODULE_6__["default"].destroy();
      _components_neoh_slider__WEBPACK_IMPORTED_MODULE_15__["default"].destroy();
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_16__["unsubscribeProducts"])();
      [this.removeScrollListeners, this.removeResizeEventListeners, this.removeCircleClickListeners, this.removeSwipeWheelEventListeners, this.destroyObservers, this.destroyObserverListeners].forEach(function (destroyFunction) {
        if (destroyFunction) {
          destroyFunction();
        }

        destroyFunction = null;
      });
      this.homeWrapper = null;
      this.swiperInitialized = false;
      this.recommendedSwiperInitialized = false;
      this.recommendedSwiper = null;
      this.navCTA = null;
      this.homeWrapper = null;
      this.initialized = false;
      this.overflowHiddenSet = true; // this.endSectionEl = document.getElementById('js__home-end');

      this.midSectionEl = null;
      this.homeHeroEl = null;
      this.lastIndexEl = null;
      this.scrollDirection = null;
      this.observer = null;
      this.observer2 = null;
      this.scrollToCurrentValue = 'home';
      this.firstScroll = true;
      this.scrollUptToHomeAvailable = false;
      this.scrollToMidAvailable = false;
      this.allowOverflowToChange = false;
      this.waitingAnimation = null;
      this.touchInProgress = false;
      this.currentTween = null;
      this.currentScrollValue = 0;
      this.debounce = false;
      this.scrollValues = [];
      this.allowDocumentScroll = false;
      this.eventHandlerDebounce = false;
      this.mobileStaticBars = null;
      this.carts = null;
      this.initialized = false;
    }
  };
}

var script = null;
/* harmony default export */ __webpack_exports__["default"] = (function (contentReplacedCallBack) {
  if (!script) script = new Home(contentReplacedCallBack);
  return script;
});

/***/ }),

/***/ "./app/resources/js/loader.js":
/*!************************************!*\
  !*** ./app/resources/js/loader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function loaderAnimations() {
  var currentIndex = 0,
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
  var loaderAnim = document.getElementById('js-loader');

  function init(pageName) {
    setTimeout(function () {
      loaderAnim = document.getElementById('js-loader');

      if (!loaderRemoved && loaderAnim) {
        isHomePage = pageName === 'home';
        isDetailPage = pageName === 'crossbar-detail';

        if (isHomePage || isDetailPage) {
          loaderAnim.classList.remove('loader--hide'); // headline animations

          document.body.style.overflow = 'hidden';
          headlines = document.getElementsByClassName('js__home-headline');
          sceneContainer = document.getElementById('scene-container');
          lastIndex = headlines.length;

          if (headlines.length > 0) {
            gsapAnimateHeadline();
            headlineInterval = setInterval(function () {
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
        } else {}
      }
    }, 30);
  }

  function gsapAnimateHeadline() {
    lastIndex = headlines.length - 1;
    var headline = headlines[currentIndex];
    var oldHeadline = currentIndex - 1 >= 0 ? headlines[currentIndex - 1] : headlines[lastIndex];
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
        var customEvent = new CustomEvent('loaderRemoved');
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
  };
}

var loaderScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!loaderScript) loaderScript = loaderAnimations();
  return loaderScript;
});

/***/ }),

/***/ "./app/resources/js/nav.js":
/*!*********************************!*\
  !*** ./app/resources/js/nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





function Link(el) {
  var _this = this;

  this.subLinkContainer = el.nextElementSibling;
  this.open = this.subLinkContainer ? this.subLinkContainer.classList.contains('nav__overlay__sub-link__container--open') : false;
  this.hasSubLinks = el.dataset && el.dataset.hasOwnProperty('subLinks');
  this.el = el;
  this.subLinks = this.subLinkContainer ? this.subLinkContainer.querySelectorAll('.js__nav-sub-link') : [];

  if (this.subLinkContainer && this.subLinkContainer.classList.contains('nav__overlay__sub-link__container--open')) {
    setTimeout(function () {
      var subLinkContent = _this.subLinkContainer.firstElementChild;
      _this.subLinkContainer.style.height = subLinkContent.clientHeight + 'px';
    }, 500);
  }

  this.openSubLinks = function (open) {
    if (this.hasSubLinks) {
      var subLinkContent = this.subLinkContainer.firstElementChild;

      if (open) {
        this.subLinkContainer.style.height = subLinkContent.clientHeight + 'px';
      } else {
        this.subLinkContainer.style.height = '0px';
      }

      this.open = open;
    }
  };

  this.setLinkAsActive = function (active) {
    if (active) {
      el.classList.add('nav__overlay__link-primary--active');
    } else {
      el.classList.remove('nav__overlay__link-primary--active');
    }
  };

  this.setSubLinkAsActive = function (active, subLinkEl) {
    if (active && subLinkEl) {
      this.subLinks.forEach(function (_subLinkEl) {
        if (_subLinkEl === subLinkEl) {
          subLinkEl.classList.add('nav__overlay__sub-link--active');
        }
      });
    } else {
      this.subLinks.forEach(function (_subLinkEl) {
        _subLinkEl.classList.remove('nav__overlay__sub-link--active');
      });
    }
  };
}

var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    var _this2 = this;

    _classCallCheck(this, Navigation);

    var navBurger = document.getElementById('js__burger');
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

    var toggleHandler = function toggleHandler() {
      return _this2.toggleNav();
    };

    navBurger.addEventListener('click', toggleHandler);
    this.navOverlayBg.addEventListener('click', toggleHandler);
    this.setupAnimations();
    this.preloadNavLinkImages();
    this.alwaysCloseMenu();
    this.setupNavLinks();
  }

  _createClass(Navigation, [{
    key: "setupNavLinks",
    value: function setupNavLinks() {
      var _this3 = this;

      var navLinks = document.querySelectorAll('.js__nav-link-header');
      navLinks.forEach(function (link) {
        var linkInstance = new Link(link);

        _this3.linksArray.push(linkInstance);

        var linksArray = _this3.linksArray;
        linkInstance.el.addEventListener('click', function (e) {
          // e.preventDefault();
          linksArray.forEach(function (_link) {
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
          });
        });
        linkInstance.subLinks.forEach(function (subLink) {
          subLink.addEventListener('click', function (e) {
            linksArray.forEach(function (_link) {
              _link.setSubLinkAsActive(false);
            });
            linkInstance.setSubLinkAsActive(true, subLink);
          });
        });
      }); // language menu

      this.openLangSwitchButton = document.getElementById('js__nav-lang-button');
      this.openLangSwitchContainer = document.getElementById('js__nav-lang-select');
      this.openLangSwitchContent = this.openLangSwitchContainer.firstElementChild;
      this.langSwitchIsOpen = false;

      if (this.openLangSwitchButton) {
        var langSwitchHandler = function langSwitchHandler(e) {
          return _this3.toggleLangSwitchMenu(e);
        };

        this.openLangSwitchButton.addEventListener('click', langSwitchHandler);
        this.navFooterBg.addEventListener('click', langSwitchHandler);
      }
    }
  }, {
    key: "toggleLangSwitchMenu",
    value: function toggleLangSwitchMenu(e) {
      e && e.preventDefault();

      if (this.langSwitchIsOpen) {
        this.openLangSwitchContainer.style.height = null;
        this.openLangSwitchButton.classList.add('btn__cta--white');
        this.openLangSwitchButton.classList.remove('btn__cta--red');
        gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].to(this.navFooterBg, 10, {
          opacity: 0,
          useFrames: true
        });
        this.navFooterBg.classList.remove('nav__overlay__footer-bg--show');
      } else {
        this.openLangSwitchContainer.style.height = this.openLangSwitchContent.clientHeight + 'px';
        this.openLangSwitchButton.classList.add('btn__cta--red');
        this.openLangSwitchButton.classList.remove('btn__cta--white');
        this.navFooterBg.classList.add('nav__overlay__footer-bg--show');
        gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].to(this.navFooterBg, 10, {
          opacity: 1,
          useFrames: true
        });
      }

      this.langSwitchIsOpen = !this.langSwitchIsOpen;
    }
  }, {
    key: "toggleNav",
    value: function toggleNav(onCompleteCallback) {
      var _this4 = this;

      if (this.navBurgerAnimActive) return;
      this.navOpen = !this.navOpen;
      this.preventAnimations = false;
      this.navBurgerAnimActive = true;

      if (this.navOpen) {
        this.navBurgerAnimationTo.restart(false); // this.navOverlayAnimation.restart(false);

        this.setupOverlayAnimation();
        this.navOverlayAnimation.play();
        _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().showHeader();
        _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().setPreventHeaderHide(true);
        _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().removeBgClass();
        this.shouldShowBackArrow = _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().getBackArrowShown();
        if (this.shouldShowBackArrow) _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().hideBackArrow();
        if (this.callbacks['open']) this.callbacks['open'].forEach(function (func) {
          return func();
        });
        if (this.langSwitchIsOpen) this.toggleLangSwitchMenu();
        setTimeout(function () {
          var hasActiveLinks = false;

          for (var i = 0; i < _this4.navLinksAll.length; i++) {
            if (_this4.navLinksAll[i].classList.contains(_this4.navLinksAll[i].dataset.activeClass)) {
              hasActiveLinks = true;
              break;
            }
          }

          if (!hasActiveLinks) {
            var _loop = function _loop(_i) {
              if (_this4.navLinksAll[_i].classList.contains('nav__overlay__link-primary--header')) {
                _this4.navLinksAll[_i].classList.add(_this4.navLinksAll[_i].dataset.activeClass);

                var subLinkContainer = _this4.navLinksAll[_i].nextElementSibling;
                var subLinkContent = subLinkContainer.firstElementChild;
                subLinkContainer.style.height = subLinkContent.clientHeight + 'px';

                _this4.linksArray.forEach(function (link) {
                  if (link.el === _this4.navLinksAll[_i]) {
                    link.openSubLinks(true);
                    link.setLinkAsActive(true);
                  }
                });

                return "break";
              }
            };

            for (var _i = 0; _i < _this4.navLinksAll.length; _i++) {
              var _ret = _loop(_i);

              if (_ret === "break") break;
            }
          }
        }, 650);
      } else {
        this.navBurgerAnimationReverse.restart(true);
        this.setupOverlayAnimationReverse();
        this.navOverlayAnimationReverse.play();
        if (this.shouldShowBackArrow) _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().showBackArrow();
        if (this.callbacks['close']) this.callbacks['close'].forEach(function (func) {
          return func();
        });
        _header__WEBPACK_IMPORTED_MODULE_1__["default"].get().setPreventHeaderHide(false);
        setTimeout(function () {
          if (onCompleteCallback) onCompleteCallback();
        }, 350); // the total time of the nav animation (roughly)
      } // prevent body scroll


      if (this.navOpen) document.body.style.overflow = 'hidden';else document.body.style.overflow = 'visible';
    }
  }, {
    key: "getNavOpen",
    value: function getNavOpen() {
      return this.navOpen;
    }
  }, {
    key: "setupOverlayAnimation",
    value: function setupOverlayAnimation() {
      var _this5 = this;

      this.navOverlayAnimation = new gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]({
        useFrames: true,
        paused: true,
        delay: 12
      });
      this.navOverlayAnimation.addCallback(function () {
        // if (this.defaultImage !== this.newDefaultImage) this.defaultImage = this.newDefaultImage;
        if (_this5.navOpen) {
          _this5.navOverlay.classList.add('nav__overlay--open');

          _this5.navFooter.classList.add('nav__footer--open');

          _this5.navOverlayBg.classList.add('nav__overlay__bg--show');
        } else {
          _this5.navOverlay.classList.remove('nav__overlay--open');

          _this5.navFooter.classList.remove('nav__footer--open');

          _this5.navOverlayBg.classList.remove('nav__overlay__bg--show');
        }
      }, null).to(this.navOverlayBg, 7, {
        opacity: 1,
        x: '0%'
      }).to(this.navOverlay, 5, {
        opacity: 1,
        x: '0%'
      }, '-=3').add(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].fromTo(this.navFooter, 4, {
        opacity: 0
      }, {
        opacity: 1
      }), '+=10').addCallback(function () {
        _this5.navBurgerAnimActive = false;
      }, null);
    }
  }, {
    key: "setupOverlayAnimationReverse",
    value: function setupOverlayAnimationReverse() {
      var _this6 = this;

      this.navOverlayAnimationReverse = new gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]({
        useFrames: true,
        paused: true
      });
      this.navOverlayAnimationReverse.add(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].fromTo(this.navFooter, 4, {
        opacity: 1
      }, {
        opacity: 0
      }), 0).to(this.navOverlay, 5, {
        opacity: 0,
        x: '100%',
        ease: gsap_all__WEBPACK_IMPORTED_MODULE_0__["Linear"]
      }, '+=5').to(this.navOverlayBg, 8, {
        opacity: 0,
        x: 80,
        ease: gsap_all__WEBPACK_IMPORTED_MODULE_0__["Linear"]
      }, '-=3').addCallback(function () {
        if (_this6.navOpen) {
          _this6.navOverlay.classList.add('nav__overlay--open');

          _this6.navFooter.classList.add('nav__footer--open');

          _this6.navOverlayBg.classList.add('nav__overlay__bg--show');
        } else {
          _this6.navOverlay.classList.remove('nav__overlay--open');

          _this6.navFooter.classList.remove('nav__footer--open');

          _this6.navOverlayBg.classList.remove('nav__overlay__bg--show');
        }

        _this6.navBurgerAnimActive = false;
      }, '+=12');
    }
  }, {
    key: "setupAnimations",
    value: function setupAnimations() {
      // setup animations
      this.navBurgerAnimationTo = new gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]({
        useFrames: true,
        paused: true
      });
      this.navBurgerAnimationTo.staggerTo(this.burgerEls, 10, {
        opacity: 0
      }, -1, '+=1');

      if (window.innerWidth > _utils_css_variables__WEBPACK_IMPORTED_MODULE_2__["default"].tabletBreakpoint) {
        this.navBurgerAnimationTo.staggerTo(this.navLinks, 1, {
          opacity: 0
        }, 5, 0);
      }

      this.navBurgerAnimationTo.to(this.burgerEls[0], 0, {
        transform: 'translateY(8px) rotate(-45deg)'
      }).to(this.burgerEls[2], 0, {
        transform: 'translateY(-6px) rotate(45deg)'
      }).to(this.burgerMask, 0, {
        maxHeight: '100%'
      }).to([this.burgerEls[0], this.burgerEls[2]], 0, {
        opacity: 1
      }).to(this.burgerMask, 10, {
        maxHeight: '0%'
      });
      this.navBurgerAnimationReverse = new gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]({
        useFrames: true,
        paused: true
      });
      this.navBurgerAnimationReverse.to(this.burgerMask, 10, {
        maxHeight: '100%'
      }, '+=3').to(this.burgerEls, 0, {
        opacity: 0
      }).to(this.burgerEls[2], 0, {
        transform: 'unset'
      }).to(this.burgerEls[0], 0, {
        transform: 'unset'
      }) // .to(burgerEls, 0, {backgroundColor: '#e8dac0'})
      .to(this.burgerMask, 0, {
        maxHeight: '0%'
      }).staggerTo(this.burgerEls, 10, {
        opacity: 1
      }, 1, '+=2').staggerTo(this.navLinks, 4, {
        opacity: 1
      }, -4);
    }
  }, {
    key: "preloadNavLinkImages",
    value: function preloadNavLinkImages() {
      if (this.navOpen) {
        this.navLinks.forEach(function (link) {
          var imgEl = new Image();
          imgEl.src = link.dataset.image;
        });
      }
    }
  }, {
    key: "alwaysCloseMenu",
    value: function alwaysCloseMenu() {
      var _this7 = this;

      this.navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          _this7.nav = false;
        });
      });
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, callback) {
      if (this.callbacks[eventName]) this.callbacks[eventName].push(callback);else this.callbacks[eventName] = [callback];
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, callback) {
      var foundIndex = this.callbacks[eventName].findIndex(function (_callback) {
        return _callback === callback;
      });
      if (foundIndex) this.callbacks[eventName].splice(foundIndex, 1);
    }
  }]);

  return Navigation;
}();

var navInstance = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    if (!navInstance) {
      // only need a singleton, but I think it's better to have the init option available on the top level
      navInstance = new Navigation(options);
      return navInstance;
    }

    return navInstance;
  },
  get: function get() {
    return navInstance;
  }
});

/***/ }),

/***/ "./app/resources/js/neohpedia.js":
/*!***************************************!*\
  !*** ./app/resources/js/neohpedia.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NeohpediaPage = /*#__PURE__*/function () {
  function NeohpediaPage() {
    _classCallCheck(this, NeohpediaPage);

    this.swiper = null;
    this.initialized = false;
    this.buttons = [];
  }

  _createClass(NeohpediaPage, [{
    key: "setupSwiper",
    value: function setupSwiper() {
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetAfter: 48
      });
      this.swiperNav();
    }
  }, {
    key: "swiperNav",
    value: function swiperNav() {
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll('[data-id]')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var contentblock = _step.value;
          contentblock.classList.remove("neohpedia__article-content--active");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('[data-id-button]')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var btn = _step2.value;
          btn.classList.remove("btn-text--active");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var contentblockActive = document.querySelectorAll('[data-id]')[this.swiper.realIndex];
      contentblockActive.classList.add("neohpedia__article-content--active");
      var btnActive = document.querySelectorAll('[data-id-button]')[this.swiper.realIndex];
      btnActive.classList.add("btn-text--active");
      this.buttons = document.querySelectorAll('[data-id-button]');

      if (this.buttons.length > 0) {
        for (var i = 0; i < this.buttons.length; i++) {
          this.buttons[i].addEventListener("click", this.buttonAction);
        }

        this.initialized = true;
      }
    }
  }, {
    key: "buttonAction",
    value: function buttonAction() {
      var allButtons = document.querySelectorAll('[data-id-button]');
      var allContent = document.querySelectorAll('[data-id]');
      var currentID = this.dataset.idButton;

      for (var i = 0; i < allButtons.length; i++) {
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
  }, {
    key: "init",
    value: function init(pageName) {
      var isNeohpediaPage = pageName === 'neohpedia';

      if (isNeohpediaPage) {
        this.setupSwiper();
        this.initialized = true;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        this.swiper.destroy(true, true);
        this.swiper = null;
        this.initialized = false;
      }
    }
  }]);

  return NeohpediaPage;
}();

var neohpediaPageScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!neohpediaPageScript) neohpediaPageScript = new NeohpediaPage();
  return neohpediaPageScript;
});

/***/ }),

/***/ "./app/resources/js/product-detail.js":
/*!********************************************!*\
  !*** ./app/resources/js/product-detail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./app/resources/js/nav.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dropdown */ "./app/resources/js/components/dropdown.js");
/* harmony import */ var _utils_shopify_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/shopify-integration */ "./app/resources/js/utils/shopify-integration.js");
/* harmony import */ var _components_product_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-dropdown */ "./app/resources/js/components/product-dropdown.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _components_neoh_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/neoh-slider */ "./app/resources/js/components/neoh-slider.js");
/* harmony import */ var _utils_shopify_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shopify-client */ "./app/resources/js/utils/shopify-client.js");










var productDropdown,
    dropdownSelected,
    productDescriptionContainer,
    addToCartButton,
    amazonButtons,
    initialized = false,
    productInfoTemplates,
    productInfoContainer,
    products,
    dropdown,
    productBgTemplates,
    productBgContainer,
    lastSegment,
    destroyListeners = [],
    language = window.data.locale.split('-')[1],
    swiper,
    recommendedSwiperInitialized = false,
    recommendedSwiper = null;
var usePrismicVariants;

function initializedWithShopifyProduct(initializedPrismicDoc, initializedShopifyProduct) {
  if (products.length > 0 && initializedShopifyProduct) {
    var productVariantIndex = 0; // this is the index of product.variants
    // if we use shopify variants (all initializedPrismicDocs are the same document)
    // set the button data

    amazonButtons.forEach(function (button) {
      if (initializedPrismicDoc.data.amazon_button_url.url) {
        button.setAttribute('href', initializedPrismicDoc.data.amazon_button_url.url);
      } else {
        button.classList.add('btn--hide');
      }
    }); // set the product price

    setPrice(initializedShopifyProduct.variants[productVariantIndex]); // setup for our product dropdown such as setting the shopify handles, and the price for each in the html

    Object(_components_product_dropdown__WEBPACK_IMPORTED_MODULE_4__["setupProductDropdownTemplate"])(productDropdown, products, {
      usePrismicVariants: usePrismicVariants,
      fallbackShopifyHandle: initializedPrismicDoc.data.shopify_product_handle
    });
    initProductDropdowns();
    insertProductInfoTemplate(initializedShopifyProduct.handle, initializedShopifyProduct.variants[productVariantIndex].title);
    var cardsPrices = document.querySelectorAll('.js__store-card-price');
    cardsPrices.forEach(function (priceDiv) {
      var associatedShopifyProduct = products.find(function (product) {
        return product.handle === priceDiv.dataset.shopify;
      });

      if (associatedShopifyProduct) {
        var variant = associatedShopifyProduct.variants[0];
        var formattedPrice = new Intl.NumberFormat(language, {
          style: 'currency',
          currency: variant.priceV2.currencyCode
        }).format(variant.priceV2.amount);
        priceDiv.innerHTML = formattedPrice;
      }
    });
  }
}

function initImageGallery() {
  function selectGalleryImage(e) {
    swiper.slideTo(e.delegateTarget.dataset.index, 0);
  }

  var delegateMouseOver = delegate__WEBPACK_IMPORTED_MODULE_5___default()('.js__store-gallery-image', 'mouseover', selectGalleryImage, false);
  destroyListeners.push(function () {
    return delegateMouseOver.destroy();
  });
  var clickListener = delegate__WEBPACK_IMPORTED_MODULE_5___default()('.js__store-gallery-image', 'click', selectGalleryImage, false);
  destroyListeners.push(function () {
    return clickListener.destroy();
  });
  initImageGalleryTemplate();
}

function initImageGalleryTemplate() {
  try {
    var galleryImages = document.querySelectorAll('.js__item-image');
    var counter = 0;

    var onLoadImages = function onLoadImages() {
      counter++;

      if (counter === galleryImages.length && galleryImages.length > 1) {
        setTimeout(function () {
          // swiper messes up sometimes when the images aren't fully rendered yet
          swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.js__item-gallery', {
            direction: 'horizontal',
            slidesPerView: 1,
            on: {
              slideChange: function slideChange() {
                var imageContainers = document.querySelectorAll('.js__store-gallery-image');
                imageContainers.forEach(function (container) {
                  return container.classList.remove('store__item-thumbnail__inner--selected');
                });
                imageContainers[this.activeIndex].classList.add('store__item-thumbnail__inner--selected');
              }
            }
          });
        }, 750);
      }
    };

    galleryImages.forEach(function (image) {
      if (image.complete) onLoadImages();else image.onload = onLoadImages();
    });
  } catch (error) {
    console.log(error);
  }
}

function changeUrl(newLastSegment) {
  var urlSplit = location.href.split('/');
  var lastSegment = location.href.split('/').pop().split('?')[0];

  if (lastSegment !== newLastSegment) {
    urlSplit.pop();
    window.history.pushState({}, '', "".concat(urlSplit.join('/'), "/").concat(newLastSegment));
  }
}

function insertProductInfoTemplate(productHandle) {
  if (productHandle) {
    if (productInfoTemplates) {
      var associatedProductInfoTemplate;
      var associatedBgTemplate;
      productInfoTemplates.forEach(function (template) {
        if (template.dataset.shopify === productHandle) associatedProductInfoTemplate = template;
      });

      if (!associatedProductInfoTemplate) {
        productInfoTemplates.forEach(function (template) {
          if (template.dataset.shopify === products[0].handle) associatedProductInfoTemplate = template;
        });
      }

      if (associatedProductInfoTemplate) {
        var content = associatedProductInfoTemplate.content.cloneNode(true); // remove any existing product info

        if (productInfoContainer.firstElementChild) {
          productInfoContainer.style.height = productInfoContainer.clientHeight + 'px';
          productInfoContainer.removeChild(productInfoContainer.firstElementChild);
        }

        productInfoContainer.appendChild(content.firstElementChild); // open the first expander el
        // if (expanders[0]) expanders[0].open();

        setTimeout(function () {
          productInfoContainer.style.height = null;
        }, 400);
      }

      productBgTemplates.forEach(function (template) {
        if (template.dataset.shopify === productHandle) associatedBgTemplate = template;
      });

      if (associatedBgTemplate) {
        var _content = associatedBgTemplate.content.cloneNode(true); // remove any existing bg


        if (productBgContainer.firstElementChild) {
          productBgContainer.removeChild(productBgContainer.firstElementChild);
        }

        productBgContainer.appendChild(_content.firstElementChild);
      }
    }
  }
}

function changeProductDescription(shopifyHandle) {
  var descriptionTemplate = document.querySelector(".js__product-description-template[data-shopify=\"".concat(shopifyHandle, "\"]"));

  if (descriptionTemplate) {
    var templateContent = descriptionTemplate.content.cloneNode(true);
    productDescriptionContainer.innerHTML = templateContent.firstElementChild.innerHTML;
  }
} // function changeNeohSlider(shopifyHandle) {
//     let template = document.querySelector(`.js__product-neoh-slider-template[data-shopify="${shopifyHandle}"]`);
//     if (template) {
//         let templateContent = template.content.cloneNode(true);
//         NeohSlider.destroy()
//         let neohSliderEl = document.querySelector('.js__product-neoh-slider');
//
//         while (neohSliderEl.firstElementChild) {
//             neohSliderEl.removeChild(neohSliderEl.firstElementChild);
//             neohSliderEl.appendChild(templateContent);
//         }
//     }
// }


function setPrice(variant) {
  // sets the price on the sticker
  var productPrice = document.getElementById('js__product-price');

  if (productPrice) {
    var formattedPrice = new Intl.NumberFormat(language, {
      style: 'currency',
      currency: variant.priceV2.currencyCode
    }).format(variant.priceV2.amount);
    productPrice.innerHTML = formattedPrice;
  }
}

function containerUp() {
  if (dropdown && window.innerWidth <= _utils_css_variables__WEBPACK_IMPORTED_MODULE_7__["default"].tabletBreakpoint) {
    dropdown.classList.add('store__product-dropdown__container--translate');
  }
}

function containerDown() {
  if (dropdown) {
    dropdown.classList.remove('store__product-dropdown__container--translate');
  }
}

var addGreyHeaderHandler = function addGreyHeaderHandler() {
  return _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().toggleMobileGreyHeader(true);
};

var removeGreyHeaderHandler = function removeGreyHeaderHandler() {
  return _header__WEBPACK_IMPORTED_MODULE_0__["default"].get().toggleMobileGreyHeader(false);
};

function insertImageGalleryTemplate(shopifyHandle) {
  var foundTemplate = document.querySelector(".js__item-gallery-template[data-shopify=\"".concat(shopifyHandle, "\"]"));
  swiper && swiper.destroy(true, true);

  if (foundTemplate) {
    var templateContent = foundTemplate.content.cloneNode(true);
    var gallery = document.getElementById('js__item-gallery');

    while (gallery.firstElementChild) {
      gallery.removeChild(gallery.firstElementChild);
    }

    var galleryDiv = templateContent.querySelector('.js__item-gallery');
    gallery.appendChild(galleryDiv);
    var thumbNailDiv = templateContent.querySelector('.js__thumbnails');
    gallery.appendChild(thumbNailDiv);
    initImageGalleryTemplate();
    var product = products.find(function (product) {
      return product.handle === shopifyHandle;
    });

    if (usePrismicVariants) {
      if (product.variants && product.variants[0]) {
        setPrice(product.variants[0]);
      }
    } else {
      var variant = product.variants.find(function (variant) {
        return variant.title === variantName;
      });
      if (variant) setPrice(variant);
    }
  }
}

function initRecommendedProducts() {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (!recommendedSwiperInitialized) {
          if (document.querySelectorAll('.js__recommended-card').length > 1) {
            recommendedSwiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('#js__store-recommended', {
              direction: 'horizontal',
              speed: 500,
              preloadImages: true,
              watchSlidesVisibility: true,
              autoplay: {
                delay: 1800,
                disableOnInteraction: false
              },
              loop: true,
              loopFillGroupWithBlank: true,
              slidesPerView: 1.12,
              spaceBetween: 24,
              breakpoints: {
                768: {
                  slidesPerView: 2.12
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                  autoplay: false
                },
                1440: {
                  slidesPerView: 2
                }
              }
            });
          }

          recommendedSwiperInitialized = true;
        }
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.25, 0.5, 1]
  });
  var observedEl = document.getElementById('js__store-recommended');
  if (observedEl) observer.observe(observedEl);
  destroyListeners.push(function () {
    if (recommendedSwiper) {
      recommendedSwiper.destroy(true, true);
      recommendedSwiperInitialized = false;
    }
  });
}

function initProductDropdowns() {
  dropdown = document.querySelector('.store__product-dropdown__container');
  var dropdownEl = document.querySelector('.js__dropdown');
  var dropdownItems = dropdownEl.querySelectorAll('.js__dropdown-item');
  var dropdownAbove = document.querySelector('.js__product-above');

  if (dropdownItems.length <= 1) {
    dropdownAbove.classList.add('store__product-dropdown-above--hide');
  }

  var callback = function callback(selectedEl) {
    try {
      if (usePrismicVariants) {
        changeUrl(selectedEl.dataset.shopify);
        insertProductInfoTemplate(selectedEl.dataset.shopify, selectedEl.dataset.shopifyVariant);
        insertImageGalleryTemplate(selectedEl.dataset.shopify, selectedEl.dataset.shopifyVariant);
        changeProductDescription(selectedEl.dataset.shopify);
      }
    } catch (error) {
      console.log(error);
    }
  };

  Object(_components_product_dropdown__WEBPACK_IMPORTED_MODULE_4__["initializeProductDropdown"])(dropdownEl, callback);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(pageName) {
    var isProductDetailPage = pageName === 'product-detail';

    if (isProductDetailPage) {
      initialized = true;
      var header = _header__WEBPACK_IMPORTED_MODULE_0__["default"].get();
      header.toggleMobileGreyHeader(true); // hide header CTA button

      header.addListener('hide-start', containerUp);
      header.addListener('show-start', containerDown);
      var nav = _nav__WEBPACK_IMPORTED_MODULE_1__["default"].get();
      nav.addListener('open', removeGreyHeaderHandler);
      nav.addListener('close', addGreyHeaderHandler);
      productDropdown = document.querySelector('.js__product-dropdown'); // dropdownSelected = document.querySelector('.js__dropdown-selected');
      // addToCartButton = document.querySelectorAll('.store__add-to-cart.js__add-to-cart');

      amazonButtons = document.querySelectorAll('.js__buy-amazon');
      productInfoTemplates = document.querySelectorAll('.js__store-product-info');
      productInfoContainer = document.getElementById('js__store-product-info-container');
      productDescriptionContainer = document.getElementById('js__product-description');
      productBgTemplates = document.querySelectorAll('.js__product-bg');
      productBgContainer = document.querySelector('.js__product-bg-container'); // our product for the page is found by comparing the url slug to the shopify handles
      // url slug => prismic doc => shopify product

      lastSegment = location.href.split('/').pop().split('?')[0];
      var initializedPrismicDoc = window.data.prismicProducts.find(function (product) {
        return product.uid === lastSegment;
      });
      initializedPrismicDoc = initializedPrismicDoc ? initializedPrismicDoc : window.data.prismicProducts[0];
      usePrismicVariants = Object(_utils_shopify_integration__WEBPACK_IMPORTED_MODULE_3__["shouldUsePrismicVariants"])(initializedPrismicDoc); // some of our initialization requires the shopify products first:

      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_9__["subscribeProducts"])(function (res) {
        products = res;
        var initializedShopifyProduct = products.find(function (product) {
          return product.handle === initializedPrismicDoc.data.shopify_product_handle;
        }); // perform the initial setup for the page now that we have found the right product that we are using

        initializedWithShopifyProduct(initializedPrismicDoc, initializedShopifyProduct);
      }); // ... other initialization doesn't require the shopify products

      initImageGallery();
      initRecommendedProducts();
      _components_neoh_slider__WEBPACK_IMPORTED_MODULE_8__["default"].init(true);
    }
  },
  destroy: function destroy() {
    if (initialized) {
      _components_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"].destroy();
      _components_neoh_slider__WEBPACK_IMPORTED_MODULE_8__["default"].destroy();
      initialized = false;
      destroyListeners.forEach(function (func) {
        return func();
      });
      destroyListeners = [];
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_9__["unsubscribeProducts"])();
      var header = _header__WEBPACK_IMPORTED_MODULE_0__["default"].get();
      header.removeListener('hide-start', containerUp);
      header.removeListener('show-start', containerDown);
      header.toggleMobileGreyHeader(false);
      var nav = _nav__WEBPACK_IMPORTED_MODULE_1__["default"].get();
      nav.removeListener('open', removeGreyHeaderHandler);
      nav.removeListener('close', addGreyHeaderHandler);
    }
  }
});

/***/ }),

/***/ "./app/resources/js/product-overview.js":
/*!**********************************************!*\
  !*** ./app/resources/js/product-overview.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopify */ "./app/resources/js/shopify.js");
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_shopify_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/shopify-client */ "./app/resources/js/utils/shopify-client.js");





var products,
    language = window.data.locale.split('-')[1],
    destroyListeners = [],
    initialized;

function setPrice(el, variant) {
  if (el) {
    var formattedPrice = new Intl.NumberFormat(language, {
      style: 'currency',
      currency: variant.priceV2.currencyCode
    }).format(variant.priceV2.amount);
    el.innerHTML = formattedPrice;
  }
}

function initializeWithShopifyProducts() {
  var prices = document.querySelectorAll('.js__store-card-price');
  prices.forEach(function (price) {
    var foundProduct = products.find(function (product) {
      return product.handle === price.dataset.shopify;
    });
    if (foundProduct) setPrice(price, foundProduct.variants[0]);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(pageName) {
    var isProductOverviewPage = pageName === 'store';

    if (isProductOverviewPage) {
      var onResize = function onResize() {
        if (window.innerWidth > _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].tabletBreakpoint) {
          sections.forEach(function (section) {
            return section.classList.remove('store__section--hide');
          });
          tabs.forEach(function (tab) {
            return tab.dataset.index === '0' ? tab.classList.add('store__tab--active') : tab.classList.remove('store__tab--active');
          });
        }
      };

      var header = _header__WEBPACK_IMPORTED_MODULE_2__["default"].get();
      initialized = true;
      header.toggleMobileGreyHeader(true);
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_4__["subscribeProducts"])(function (res) {
        products = res;
        initializeWithShopifyProducts();
      });
      var sections = document.querySelectorAll('.js__store-section');

      if (window.innerWidth < _utils_css_variables__WEBPACK_IMPORTED_MODULE_1__["default"].tabletBreakpoint) {
        var sectionToHide = document.querySelectorAll('.js__store-section-hidden-mob');
        sectionToHide.forEach(function (section) {
          section.classList.add('store__section--hide');
        });

        var _header = _header__WEBPACK_IMPORTED_MODULE_2__["default"].get();

        _header.setPreventHeaderHide(true);

        sections.forEach(function (section) {
          return section.dataset.index > 0 && section.classList.add('store__section--hide');
        });
      }

      var tabs = document.querySelectorAll('.js__store-tab');
      var tabListener = delegate__WEBPACK_IMPORTED_MODULE_3___default()('.js__store-tab', 'click', function (e) {
        var indexToShow = e.delegateTarget.dataset.index;
        tabs.forEach(function (tab) {
          return tab.dataset.index === indexToShow ? tab.classList.add('store__tab--active') : tab.classList.remove('store__tab--active');
        });
        sections.forEach(function (section) {
          return section.dataset.index === indexToShow ? section.classList.remove('store__section--hide') : section.classList.add('store__section--hide');
        });
      });
      destroyListeners.push(function () {
        return tabListener.destroy();
      });
      window.addEventListener('resize', onResize);
      destroyListeners.push(function () {
        return window.removeEventListener('resize', onResize);
      });
    }
  },
  destroy: function destroy() {
    if (initialized) {
      var header = _header__WEBPACK_IMPORTED_MODULE_2__["default"].get();
      header.setPreventHeaderHide(false);
      header.toggleMobileGreyHeader(false);
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_4__["unsubscribeProducts"])();
      destroyListeners.forEach(function (func) {
        return func();
      });
      destroyListeners = [];
      initialized = false;
    }
  }
});

/***/ }),

/***/ "./app/resources/js/shopfinder.js":
/*!****************************************!*\
  !*** ./app/resources/js/shopfinder.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopfinderPage = /*#__PURE__*/function () {
  function ShopfinderPage() {
    _classCallCheck(this, ShopfinderPage);

    this.initialized = false;
  }

  _createClass(ShopfinderPage, [{
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        this.initialized = false;
      }
    }
  }, {
    key: "init",
    value: function init(pageName, isFirstPageLoad) {
      // let storeContainer = document.getElementById('js__shopfinder');
      var isShopFinderPage = pageName === 'shopfinder';

      if (isShopFinderPage && !this.initialized && !isFirstPageLoad) {
        this.initialized = true;

        if (window.localStorage) {
          window.location.reload();
        }
      }
    }
  }]);

  return ShopfinderPage;
}();

var shopfinderPageScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function (isFirstPageLoad) {
  if (!shopfinderPageScript) shopfinderPageScript = new ShopfinderPage();
  return shopfinderPageScript;
});

/***/ }),

/***/ "./app/resources/js/shopify.js":
/*!*************************************!*\
  !*** ./app/resources/js/shopify.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shopify-buy */ "./node_modules/shopify-buy/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! delegate */ "./node_modules/delegate/src/delegate.js");
/* harmony import */ var delegate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(delegate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _utils_event_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/event-emitter */ "./app/resources/js/utils/event-emitter.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./app/resources/js/header.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav */ "./app/resources/js/nav.js");
/* harmony import */ var _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/asset-resolver */ "./app/resources/js/utils/asset-resolver.js");
/* harmony import */ var _utils_shopify_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/shopify-integration */ "./app/resources/js/utils/shopify-integration.js");
/* harmony import */ var _utils_shopify_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shopify-client */ "./app/resources/js/utils/shopify-client.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var client,
    products,
    checkout,
    cartState = [],
    cartWindow,
    cartItemTemplate,
    updatingCheckout = false,
    cartCheckout,
    cartOpen = false,
    cartTotalPrice,
    cartContentContainer,
    cartItemsContainer,
    cartIconNumbers,
    cartIconPaths,
    cartMessages,
    shopifyPrimiscData,
    apiCallMade = false,
    updateShopifyCartApiCall,
    cartDeliveryContainer,
    deliveryThreshold = 25,
    enableFreeDeliveryThreshold = false,
    headerMob,
    interactionOccurred = false,
    cartBackdrop,
    cartEmptyContent,
    cartTeaserContent,
    cartTimeout,
    addToCartFired = false,
    cartTeaserMessage,
    cartTeaserPrice,
    cartTeaserImage,
    cartTeaserName,
    cartTeaserAddToCartButton,
    language = window.data.locale.split('-')[1],
    shopifyCheckoutDomain = window.data.shopifyCheckoutDomain,
    shopifyStorefrontApiToken = window.data.shopifyStorefrontApiToken;
var cartShowDuration = 4500;

function addToCart(product, variant, quantity) {
  if (checkout && product && !updatingCheckout) {
    var foundCartItem = cartState.find(function (cartItem) {
      return cartItem.variant.id === variant.id;
    });

    if (foundCartItem) {
      var newQuantity = foundCartItem.quantity + quantity;
      updateCartWindow(variant, newQuantity);
      addToShopifyCart(variant, quantity);
    } else {
      addToCartWindow(variant, product, quantity);
      addToShopifyCart(variant, quantity);
    } // update cart state (we need an array to easily parse through the data, the shopify SDK unfortunately gives us an object)


    if (foundCartItem) foundCartItem.quantity += quantity;else {
      var variantToPush = Object.assign({}, variant);
      if (!variantToPush.product) variantToPush.product = product;
      cartState.push({
        variant: variantToPush,
        quantity: quantity
      });
    }
    afterUpdateState(product ? product.handle : null);
    showCartWindow();
    setTimeout(function () {
      if (!interactionOccurred) {
        closeCartWindow();
      }
    }, cartShowDuration);
  }
}

function recalculateCart() {
  var cartItems = document.querySelectorAll('.cart__item');
  var cartStateShowsDiffBetweenShopifyCart = false;
  var foundCartItem = null;
  cartItems.forEach(function (item) {
    var variantID = item.getAttribute('variant-id');

    if (variantID) {
      // item that is used as empty state offer has no variant id
      var quantity = Number(item.querySelector('input').value);

      if (quantity === 0) {
        item.parentElement.removeChild(item);
      }

      foundCartItem = cartState.find(function (cartItem) {
        return cartItem.variant.id === variantID;
      });
      if (foundCartItem && foundCartItem.quantity === quantity) return;else {
        if (quantity > foundCartItem.quantity && window.fbq) {
          if (window.fbq && !addToCartFired) {
            fbq('track', 'AddToCart', {
              product: foundCartItem && foundCartItem.product ? foundCartItem.product.handle : null
            });
            addToCartFired = true;
          }
        }

        if (window.dataLayer) {
          var product = products.find(function (product) {
            for (var i = 0; i < product.variants.length; i++) {
              if (product.variants[i].id === variantID) return true;
            }

            return false;
          });

          if (product) {
            if (foundCartItem.quantity < quantity) {
              window.dataLayer.push({
                event: 'add_to_cart',
                product: product.handle,
                quantity: quantity - foundCartItem.quantity
              });
            } else {
              window.dataLayer.push({
                event: 'remove_from_cart',
                product: product.handle,
                quantity: foundCartItem.quantity - quantity
              });
            }
          }
        }

        foundCartItem.quantity = quantity;
        cartStateShowsDiffBetweenShopifyCart = true;
      }
    }
  });

  if (cartStateShowsDiffBetweenShopifyCart) {
    updateShopifyCart();
    if (foundCartItem) afterUpdateState(foundCartItem.variant.product ? foundCartItem.variant.product.handle : null);
  }
}

function addToShopifyCart(variant, quantity) {
  var lineItemsToAdd = [{
    variantId: variant.id,
    quantity: quantity
  }];
  updatingCheckout = true;
  return client.checkout.addLineItems(checkout.id, lineItemsToAdd).then(function (newCheckout) {
    return afterCheckoutUpdates(newCheckout);
  });
}

function updateShopifyCart() {
  var lineItemsToUpdate = [];
  cartState.forEach(function (cartItem) {
    for (var itemKey in checkout.lineItems) {
      if (checkout.lineItems[itemKey].variant && checkout.lineItems[itemKey].variant.id === cartItem.variant.id) {
        lineItemsToUpdate.push({
          id: checkout.lineItems[itemKey].id,
          quantity: cartItem.quantity
        });
      }
    }
  });
  updatingCheckout = true;

  if (apiCallMade) {
    return updateShopifyCartApiCall;
  } else {
    apiCallMade = true;
    updateShopifyCartApiCall = client.checkout.updateLineItems(checkout.id, lineItemsToUpdate).then(function (newCheckout) {
      afterCheckoutUpdates(newCheckout);
      apiCallMade = false;
    });
    return updateShopifyCartApiCall;
  }
}

function afterCheckoutUpdates(newCheckout) {
  checkout = newCheckout;
  updateCheckoutHref(checkout.webUrl);
  updatingCheckout = false;
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('shopify_checkout-' + window.data.locale, newCheckout.id);
  return newCheckout;
}

function afterUpdateState(productHandle) {
  updateCartTotal();

  if (productHandle) {
    var totalPrice = getCartTotalPrice();

    if (totalPrice < deliveryThreshold && enableFreeDeliveryThreshold && cartState.length > 0) {
      try {
        var prismicAssociatedPost = shopifyPrimiscData.find(function (post) {
          return post.data.shopify_product_handle === productHandle;
        });

        if (prismicAssociatedPost.data.teaser_product_handle) {
          var teaserProductDoc = shopifyPrimiscData.find(function (post) {
            return post.data.shopify_product_handle === prismicAssociatedPost.data.teaser_product_handle;
          });
          var teaserProduct = products.find(function (_product) {
            return _product.handle === teaserProductDoc.data.shopify_product_handle;
          });
          cartTeaserContent.classList.add('cart__teaser--show');
          cartTeaserMessage.textContent = prismicAssociatedPost.data.teaser_message;
          cartTeaserImage.src = teaserProductDoc.data.product_icon.url;
          cartTeaserName.textContent = teaserProduct.title;
          cartTeaserAddToCartButton.dataset.shopify = teaserProduct.handle;
          var formattedPrice = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: teaserProduct.variants[0].priceV2.currencyCode
          }).format(teaserProduct.variants[0].priceV2.amount);
          cartTeaserPrice.textContent = formattedPrice;
        } else {
          cartTeaserContent.classList.remove('cart__teaser--show');
        }
      } catch (error) {
        cartTeaserContent.classList.remove('cart__teaser--show');
      }
    } else {
      cartTeaserContent.classList.remove('cart__teaser--show');
    }
  } else {
    cartTeaserContent.classList.remove('cart__teaser--show');
  }
}

function showCartWindow() {
  cartWindow.classList.add('cart__window--open');
  cartBackdrop.classList.add('cart__window__backdrop--show');
  cartOpen = true;
  _header__WEBPACK_IMPORTED_MODULE_5__["default"].get().setPreventHeaderHide(true);
}

function closeCartWindow() {
  cartWindow.classList.remove('cart__window--open');
  cartBackdrop.classList.remove('cart__window__backdrop--show');
  cartOpen = false;
  _header__WEBPACK_IMPORTED_MODULE_5__["default"].get().setPreventHeaderHide(false);
}

function updateCartWindow(variant, quantity) {
  var itemToUpdate = cartWindow.querySelector("[variant-id=\"".concat(variant.id, "\"]"));

  if (itemToUpdate) {
    var input = itemToUpdate.querySelector('input');
    input.value = Number(quantity);
  }
}

function addToCartWindow(variant, product, quantity) {
  if (cartItemTemplate) {
    var templateClone = cartItemTemplate.content.cloneNode(true);
    var productEl = templateClone.querySelector('.cart__item__name');
    var prismicAssociatedPost = shopifyPrimiscData.find(function (post) {
      return post.data.shopify_product_handle === product.handle;
    });
    var usePrismicVariants = Object(_utils_shopify_integration__WEBPACK_IMPORTED_MODULE_8__["shouldUsePrismicVariants"])(prismicAssociatedPost);

    if (usePrismicVariants) {
      productEl.textContent = prismicAssociatedPost.data.variant_name ? "".concat(product.productType, " - ").concat(prismicAssociatedPost.data.variant_name) : product.title;
    } else {
      productEl.textContent = product.variants.length > 1 ? "".concat(product.title, " - ").concat(variant.title) : product.title;
    }

    var priceEl = templateClone.querySelector('.cart__item__price');
    var formattedPrice = new Intl.NumberFormat(language, {
      style: 'currency',
      currency: variant.priceV2.currencyCode
    }).format(variant.priceV2.amount);
    priceEl.textContent = formattedPrice;
    var input = templateClone.querySelector('input');
    input.value = quantity;
    templateClone.firstElementChild.setAttribute('variant-id', variant.id);
    var closeButton = templateClone.querySelector('.cart__item__close');
    closeButton.setAttribute('variant-id', variant.id);
    var img = templateClone.querySelector('img');
    var imgPlaceholder = templateClone.querySelector('.cart__item__image-placeholder');

    if (prismicAssociatedPost) {
      if (prismicAssociatedPost.data.product_icon && prismicAssociatedPost.data.product_icon.url) {
        var newSrc = _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_7__["default"].resolve(prismicAssociatedPost.data.product_icon.url);
        img.setAttribute('src', newSrc);
      } else {
        img.classList.add('cart__item__image--hide');
        imgPlaceholder.classList.add('cart__item__image-placeholder--show');
      }
    }

    cartItemsContainer.appendChild(templateClone);
  }
}

function removeFromCartWindow(variantId) {
  var elementToRemove = cartWindow.querySelector("[variant-id=\"".concat(variantId, "\"]"));

  if (elementToRemove) {
    cartItemsContainer.removeChild(elementToRemove);
  }
}

function updateCheckoutHref(href) {
  cartCheckout.setAttribute('href', href);
}

function getCartTotalPrice() {
  return cartState.reduce(function (accumulator, currentItem) {
    return accumulator + Number(currentItem.variant.price * currentItem.quantity);
  }, 0);
}

function updateCartTotal() {
  var totalPrice = getCartTotalPrice();
  var formattedTotal = new Intl.NumberFormat(language, {
    style: 'currency',
    currency: checkout.currencyCode
  }).format(totalPrice);
  cartTotalPrice.textContent = formattedTotal;

  if (totalPrice > deliveryThreshold && enableFreeDeliveryThreshold) {
    cartDeliveryContainer.classList.remove('cart__total__inner--hidden');
  } else {
    cartDeliveryContainer.classList.add('cart__total__inner--hidden');
  }

  var totalQuantity = cartState.reduce(function (accumulator, currentItem) {
    return accumulator + currentItem.quantity;
  }, 0);

  if (totalQuantity > 0) {
    cartIconPaths.forEach(function (path) {
      path.style.fill = _utils_css_variables__WEBPACK_IMPORTED_MODULE_3__["default"].colorPrimary;
    });
    cartIconNumbers.forEach(function (el) {
      el.textContent = totalQuantity;
    });
    cartMessages.textContent = null;
    cartContentContainer.classList.remove('cart__content--hide');
    cartEmptyContent.classList.remove('cart__empty--show');
  } else {
    cartIconPaths.forEach(function (path) {
      path.style.fill = 'none';
    });
    cartIconNumbers.forEach(function (el) {
      el.textContent = null;
    });
    cartMessages.textContent = cartMessages.dataset.emptyCart;
    cartContentContainer.classList.add('cart__content--hide');
    cartEmptyContent.classList.add('cart__empty--show');
  }
}

function createCheckout(config) {
  var existingCheckout = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('shopify_checkout-' + window.data.locale);

  if (existingCheckout) {
    return client.checkout.fetch(existingCheckout).then(function (checkoutRes) {
      if (!checkoutRes.completedAt) {
        return client.checkout.create(_objectSpread(_objectSpread({}, config), {}, {
          lineItems: checkoutRes.lineItems.map(function (item) {
            return {
              variantId: item.variant.id,
              quantity: item.quantity
            };
          })
        })).then(function (checkoutRes) {
          checkout = checkoutRes;

          var _loop = function _loop(itemKey) {
            if (checkoutRes.lineItems[itemKey].variant) {
              var product = products.find(function (product) {
                return product.id === checkoutRes.lineItems[itemKey].variant.product.id;
              });
              var variant = checkoutRes.lineItems[itemKey].variant;
              cartState.push({
                variant: variant,
                quantity: checkoutRes.lineItems[itemKey].quantity
              });
              addToCartWindow(variant, product, checkoutRes.lineItems[itemKey].quantity);
            }
          };

          for (var itemKey in checkoutRes.lineItems) {
            _loop(itemKey);
          }

          return checkoutRes;
        });
      } else {
        // if our checkout has already gone through, create a new one
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('shopify_checkout-' + window.data.locale);
        return createCheckout(config);
      }
    })["catch"](function (e) {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('shopify_checkout-' + window.data.locale);
      return createCheckout(config);
    });
  } else {
    return client.checkout.create(config);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  initShopify: function initShopify() {
    cartIconNumbers = document.querySelectorAll('.js__cart-number');
    cartIconPaths = document.querySelectorAll('.js__cart-path');
    cartWindow = document.querySelector('#js__cart-window');
    cartCheckout = cartWindow.querySelector('#js__cart-checkout');
    cartItemsContainer = cartWindow.querySelector('#js__cart-items');
    cartItemTemplate = cartWindow.querySelector('#js__cart-item-template');
    cartTotalPrice = cartWindow.querySelector('#js__cart-total'); // cartContentContainer = cartWindow.querySelector('#js__cart-total-container');

    cartContentContainer = cartWindow.querySelector('#js__cart-content');
    cartMessages = cartWindow.querySelector('.js__cart-messages');
    headerMob = document.getElementById('js__header-mob');
    cartBackdrop = document.getElementById('js__cart-backdrop');
    cartEmptyContent = document.getElementById('js__cart-empty');
    cartTeaserContent = document.getElementById('js__cart-teaser');
    cartDeliveryContainer = cartWindow.querySelector('#js__cart-delivery');

    if (cartDeliveryContainer) {
      deliveryThreshold = cartDeliveryContainer.dataset.freeDeliveryThreshold;
      enableFreeDeliveryThreshold = cartDeliveryContainer.dataset.enableFreeDeliveryThreshold;
    }

    shopifyPrimiscData = window.data.prismicProducts;
    client = Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_9__["initializeClient"])();
    Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_9__["loadShopifyStorefrontProducts"])(client).then(function (res) {
      products = res;
      var checkoutConfig = {// presentmentCurrencyCode: 'USD',
      }; //preload images
      // products.forEach(product => {
      //     if (product.images && product.images[0]) {
      //         let img = new Image();
      //         img.src = product.images[0].src;
      //     }
      // });
      // initialize our shopping cart

      createCheckout(checkoutConfig).then(function (res) {
        afterCheckoutUpdates(res);
        var teaserProduct = cartState[0] ? cartState[0].variant.product : null;
        afterUpdateState(teaserProduct ? teaserProduct.handle : null);
      }); // Setup our cart's empty state

      var emptyCartOfferName = cartEmptyContent.querySelector('.js__cart-name');
      var emptyCartOfferPrice = cartEmptyContent.querySelector('.js__cart-price');
      var emptyCartButton = cartEmptyContent.querySelector('#js__empty-cart-checkout');
      var productOffer = products.find(function (product) {
        return product.handle === emptyCartButton.dataset.shopify;
      });

      if (cartTeaserContent) {
        cartTeaserMessage = cartTeaserContent.querySelector('#js__cart-teaser-message');
        cartTeaserPrice = cartTeaserContent.querySelector('.js__cart-price');
        cartTeaserImage = cartTeaserContent.querySelector('#js__cart-teaser-image');
        cartTeaserName = cartTeaserContent.querySelector('.js__cart-name');
        cartTeaserAddToCartButton = cartTeaserContent.querySelector('.js__add-to-cart');
      }

      if (!productOffer) {
        productOffer = products[0];
        emptyCartButton.dataset.shopify = productOffer.handle;
        var emptyCartImage = document.getElementById('js__cart-empty-image');
        var emptyCartProduct = shopifyPrimiscData.find(function (prismicProduct) {
          return prismicProduct.data.shopify_product_handle === productOffer.handle;
        });
        emptyCartImage.src = emptyCartProduct.data.product_icon.url;
      }

      if (productOffer) {
        emptyCartOfferName.textContent = productOffer.title;
        var formattedPrice = new Intl.NumberFormat(language, {
          style: 'currency',
          currency: productOffer.variants[0].priceV2.currencyCode
        }).format(productOffer.variants[0].priceV2.amount);
        emptyCartOfferPrice.textContent = formattedPrice;
      } // close cart when header hides


      _header__WEBPACK_IMPORTED_MODULE_5__["default"].get().addListener('hide', closeCartWindow);
    }); // Detect click on cart icon, which opens the cart window

    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__cart', 'click', function () {
      if (cartOpen) closeCartWindow();else {
        showCartWindow();
        _header__WEBPACK_IMPORTED_MODULE_5__["default"].get().showHeader();
        if (_nav__WEBPACK_IMPORTED_MODULE_6__["default"].get().getNavOpen()) _nav__WEBPACK_IMPORTED_MODULE_6__["default"].get().toggleNav();

        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'open_cart'
          });
        }
      }
    }); // detect click on link within rich text, which takes us away from the cart

    var cartRichText = document.getElementById('js__cart-rich-text');

    if (cartRichText) {
      cartRichText.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'a' && cartOpen) closeCartWindow();
      });
    } // Detect click away from cart


    document.addEventListener('click', function (e) {
      if (!cartWindow.contains(e.target) && !e.target.classList.contains('js__add-to-cart')) {
        if (cartOpen && !e.target.classList.contains('js__cart-number')) {
          closeCartWindow();
          interactionOccurred = true;
        }
      } else {
        interactionOccurred = true;
        _header__WEBPACK_IMPORTED_MODULE_5__["default"].get().showHeader();
        if (cartTimeout) clearTimeout(cartTimeout);
        cartTimeout = setTimeout(function () {
          return interactionOccurred = false;
        }, cartShowDuration);
      }
    }); // Detect click on add to cart button, which increments cart value by 1

    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__add-to-cart', 'click', function (e) {
      if (e.delegateTarget.dataset.shopify) {
        var product = products.find(function (product) {
          return product.handle === e.delegateTarget.dataset.shopify;
        });
        var productVariant;

        if (e.delegateTarget.dataset.shopifyVariant) {
          productVariant = product.variants.find(function (_variant) {
            return _variant.title === e.delegateTarget.dataset.shopifyVariant;
          });
        } else {
          productVariant = product.variants[0];
        }

        if (e.delegateTarget.dataset.shopifyVariant) {
          addToCart(product, productVariant, 1, e.delegateTarget.dataset.shopifyVariant);
        } else {
          addToCart(product, productVariant, 1);
        }

        if (window.fbq && !addToCartFired) {
          fbq('track', 'AddToCart', {
            product: product.handle
          });
          addToCartFired = true;
        }

        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'add_to_cart',
            product: product.handle,
            quantity: 1
          });
        }
      }
    }); // On click of checkout button, we need to check if there is a difference between the input values (quantities) and our cart state

    delegate__WEBPACK_IMPORTED_MODULE_2___default()('#js__cart-checkout', 'click', function (e) {
      e.preventDefault();
      var cartItems = document.querySelectorAll('.cart__item');
      var cartStateShowsDiffBetweenShopifyCart = false;
      var foundCartItem = null;
      cartItems.forEach(function (item) {
        var variantID = item.getAttribute('variant-id');

        if (variantID) {
          // item that is used as empty state offer has no variant id
          var quantity = Number(item.querySelector('input').value);
          foundCartItem = cartState.find(function (cartItem) {
            return cartItem.variant.id === variantID;
          });
          if (foundCartItem && foundCartItem.quantity === quantity) return;else {
            foundCartItem.quantity = quantity;
            cartStateShowsDiffBetweenShopifyCart = true;
          }
        }
      });

      if (cartStateShowsDiffBetweenShopifyCart) {
        updateShopifyCart().then(function (res) {
          return location.href = res.webUrl;
        });
      } else {
        location.href = e.delegateTarget.href;
      }
    }); // Remove an item from the cart

    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__cart-remove', 'click', function (e) {
      var variantId = e.delegateTarget.getAttribute('variant-id');

      if (variantId) {
        // find product using the variant id
        var foundIndex = cartState.findIndex(function (item) {
          return item.variant.id === variantId;
        });
        var quantity;

        if (foundIndex > -1) {
          var idToRemove;

          for (var itemKey in checkout.lineItems) {
            if (checkout.lineItems[itemKey].variant && checkout.lineItems[itemKey].variant.id === variantId) {
              idToRemove = checkout.lineItems[itemKey].id;
              quantity = checkout.lineItems[itemKey].quantity;
            }
          } // remove the product form our shopify cart


          if (idToRemove) {
            updatingCheckout = true;
            client.checkout.removeLineItems(checkout.id, [idToRemove]).then(function (newCheckout) {
              checkout = newCheckout; // remove el from cart window

              afterCheckoutUpdates(newCheckout);
            });
            cartState.splice(foundIndex, 1);
            removeFromCartWindow(variantId);
            var removedProduct;

            if (cartState[0]) {
              products.forEach(function (_product) {
                _product.variants.forEach(function (variant) {
                  if (variant.id === cartState[0].variant.id) {
                    removedProduct = _product;
                  }
                });
              });
            }

            afterUpdateState(removedProduct ? removedProduct.handle : null);

            if (window.dataLayer) {
              var product = products.find(function (product) {
                for (var i = 0; i < product.variants.length; i++) {
                  if (product.variants[i].id === variantId) return true;
                }

                return false;
              });
              window.dataLayer.push({
                event: 'remove_from_cart',
                product: product.handle,
                quantity: quantity
              });
            }
          }
        }
      }
    }); // when the user changes input value of a product in our cart:

    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__cart-number', 'focusout', function (e) {
      recalculateCart();
    });
    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__cart-number', 'keyup', function (e) {
      if (e.code === 'Enter' || e.keyCode === 13) {
        if (e.delegateTarget.blur) e.delegateTarget.blur();
      }
    });
    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__buy-amazon', 'click', function () {
      if (window.fbq) {
        if (!addToCartFired) {
          fbq('track', 'AddToCart', {
            amazon: true
          });
          addToCartFired = true;
        }

        fbq('track', 'InitiateCheckout', {
          amazon: true
        });
      }
    });
    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__lead-to-store', 'click', function () {
      if (window.fbq) fbq('track', 'Lead');
    });
    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__dropdown-item', 'click', function (e) {
      console.log(e);
      e.stopPropagation();
    }); // button for immediate add to cart and checkout

    delegate__WEBPACK_IMPORTED_MODULE_2___default()('.js__immediate-checkout', 'click', function (e) {
      var product = products.find(function (product) {
        return product.handle === e.delegateTarget.dataset.shopify;
      });
      var button = e.delegateTarget;
      var productVariant = product.variants[0];
      var savedText = button.textContent;

      if (button.dataset.waitingText) {
        button.textContent = button.dataset.waitingText;
      }

      var immediateCheckoutWithRetry = function immediateCheckoutWithRetry(counter) {
        if (checkout) {
          var foundCartItem = cartState.find(function (cartItem) {
            return cartItem.variant.id === productVariant.id;
          });

          if (!foundCartItem) {
            addToShopifyCart(productVariant, 1).then(function (res) {
              location.href = res.webUrl;
            });
          } else {
            location.href = checkout.webUrl;
          }
        } else {
          if (counter > 0) {
            setTimeout(function () {
              immediateCheckoutWithRetry(--counter);
            }, 500);
          } else {
            button.textContent = savedText;
          }
        }
      };

      immediateCheckoutWithRetry(6);
    });
    return this;
  },
  getProducts: function getProducts() {
    return products;
  }
});

/***/ }),

/***/ "./app/resources/js/taster.js":
/*!************************************!*\
  !*** ./app/resources/js/taster.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_neoh_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/neoh-slider */ "./app/resources/js/components/neoh-slider.js");
/* harmony import */ var _components_product_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-dropdown */ "./app/resources/js/components/product-dropdown.js");
/* harmony import */ var _utils_shopify_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shopify-client */ "./app/resources/js/utils/shopify-client.js");



var initialized = false,
    observer = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(scriptName) {
    if (scriptName === 'teaser' && !initialized) {
      _components_neoh_slider__WEBPACK_IMPORTED_MODULE_0__["default"].init(true);
      var productDropdowns = document.querySelectorAll('.js__product-dropdown');
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_2__["subscribeProducts"])(function (products) {
        productDropdowns.forEach(function (productDropdown) {
          var tasterHandle = productDropdown.dataset.product;
          Object(_components_product_dropdown__WEBPACK_IMPORTED_MODULE_1__["setupProductDropdownTemplate"])(productDropdown, products, {
            usePrismicVariants: true,
            fallbackShopifyHandle: tasterHandle,
            useDropdownIconForTaster: true
          });
          Object(_components_product_dropdown__WEBPACK_IMPORTED_MODULE_1__["initializeProductDropdown"])(productDropdown);
        });
      });
      var observeEls = document.querySelectorAll('[data-observer-class]');

      var observerCallback = function observerCallback(entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!entry.target.dataset.intersectionRatio || entry.intersectionRatio > entry.target.dataset.intersectionRatio) {
              if (!entry.target.classList.contains(entry.target.dataset.observerClass)) {
                entry.target.classList.add(entry.target.dataset.observerClass);
              }
            }
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, {
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75, 1]
      });
      observeEls.forEach(function (el) {
        observer.observe(el);
      });
      var heroImage = document.querySelector('.js__hero-image');
      heroImage.classList.add('hero__image--show');
      initialized = true;
    }
  },
  destroy: function destroy() {
    if (initialized) {
      Object(_utils_shopify_client__WEBPACK_IMPORTED_MODULE_2__["unsubscribeProducts"])();
      _components_neoh_slider__WEBPACK_IMPORTED_MODULE_0__["default"].destroy();

      if (observer) {
        observer.disconnect();
        observer = null;
      }

      initialized = false;
    }
  }
});

/***/ }),

/***/ "./app/resources/js/three-crossbars.js":
/*!*********************************************!*\
  !*** ./app/resources/js/three-crossbars.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./app/resources/js/loader.js");
/* harmony import */ var _utils_css_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/css-variables */ "./app/resources/js/utils/css-variables.js");
/* harmony import */ var _utils_is_touch_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/is-touch-device */ "./app/resources/js/utils/is-touch-device.js");
/* harmony import */ var _utils_get_device_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/get-device-type */ "./app/resources/js/utils/get-device-type.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three-gltf-loader */ "./node_modules/three-gltf-loader/index.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(three_gltf_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
/* harmony import */ var _gyroscope_crossbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gyroscope-crossbar */ "./app/resources/js/gyroscope-crossbar.js");
/* harmony import */ var _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/asset-resolver */ "./app/resources/js/utils/asset-resolver.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













function threeCrossbars() {
  var initialized = false,
      mobileInit = false; // Set all Basic Variables and Constants needed for Scene

  var camera,
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
  var debouncedPreventAnimations = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    preventAnimations = false;
    renderer.setAnimationLoop(function () {
      update();
    });
  }, 200);
  var container,
      isHomePage,
      isDetailPage,
      prevPage = null,
      lastMousePosition; // Animations

  var homePageAnimationTime = Object(_utils_is_touch_device__WEBPACK_IMPORTED_MODULE_4__["default"])() ? 600 : 800,
      speedX = 0,
      speedY = 0,
      animate_activate,
      positionChocolate = {
    x: 0,
    y: 0,
    z: 0,
    rotX: 0,
    rotY: 0,
    rotZ: Math.PI / 12
  },
      positionCocos = {
    x: 40,
    y: 0,
    z: 0,
    rotX: 0,
    rotY: 0,
    rotZ: Math.PI / 12
  },
      positionRaspberry = {
    x: 40,
    y: 0,
    z: 0,
    rotX: 0,
    rotY: 0,
    rotZ: Math.PI / 12
  },
      targetPositionFlavorsChocolate = {
    x: -9,
    y: -4,
    z: 3,
    rotX: 0,
    rotY: Math.PI * 2,
    rotZ: Math.PI / 4
  },
      targetPositionFlavorsCocos = {
    x: -14.5,
    y: -2,
    z: -3,
    rotX: 0,
    rotY: Math.PI * 2,
    rotZ: Math.PI / 2.5
  },
      targetPositionFlavorsRaspberry = {
    x: -12,
    y: -3,
    z: 0,
    rotX: 0,
    rotY: Math.PI * 2,
    rotZ: Math.PI / 3.25
  },
      targetPositionDetail = {
    x: -8,
    y: 0,
    z: 0,
    rotX: 0,
    rotY: 0,
    rotZ: Math.PI / 2
  },
      targetPositionDefault = {
    x: 0,
    y: 0,
    z: 0,
    rotX: 0,
    rotY: 0,
    rotZ: Math.PI / 12
  },
      targetPositionDefaultHidden = {
    x: 40,
    y: 0,
    z: 0,
    rotX: 0,
    rotY: 0,
    rotZ: Math.PI / 12
  };
  var windowWidth = window.innerWidth; // let statsContainer = document.getElementById('stats');
  // statsContainer.append(windowWidth + ' ' + windowHeight);

  var animateToFlavorsChocolate,
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
  var onWindowResize = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    windowWidth = window.innerWidth;
    setTimeout(function () {
      if (!mobileInit && (isHomePage || isDetailPage)) {
        if (initialized) {
          setAnimationPositions();
          setSceneSize();
          container.style.display = null;
        } else {
          init();
        }
      }
    }, 100);
  }, 60);

  function destroy() {
    if (initialized) {
      if (typeof destroyBarClickListeners === 'function') {
        destroyBarClickListeners();
      }
    }
  }

  function setAnimationPositions() {
    if (windowWidth < 420) {
      targetPositionDetail = {
        x: -5,
        y: 1.4,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsCocos = {
        x: -5.6,
        y: 2,
        z: -9,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsChocolate = {
        x: -7.1,
        y: -1.5,
        z: -1,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsRaspberry = {
        x: -6.6,
        y: 0.5,
        z: -5,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2
      };
    } else if (windowWidth < 501) {
      targetPositionDetail = {
        x: -3.8,
        y: 1.2,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      }, targetPositionDefaultHidden = {
        x: -20,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 12
      }, positionChocolate = {
        x: -20,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 12
      }, positionRaspberry = {
        x: -20,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 12
      }, targetPositionDetail = {
        x: -3.8,
        y: 1.2,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsCocos = {
        x: -5.6,
        y: 2,
        z: -4,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsChocolate = {
        x: -7.1,
        y: -1.5,
        z: 0,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsRaspberry = {
        x: -6.6,
        y: 0.5,
        z: -2,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2
      };
    } else if (windowWidth < 650) {
      targetPositionDetail = {
        x: -3.9,
        y: 0.5,
        z: -5,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsChocolate = {
        x: -8,
        y: -5.6,
        z: 0,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 4.5
      }, targetPositionFlavorsCocos = {
        x: -8.5,
        y: -0.5,
        z: -6,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3
      }, targetPositionFlavorsRaspberry = {
        x: -7.75,
        y: -3.5,
        z: -3,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3.5
      };
    } else if (windowWidth < 769) {
      targetPositionDetail = {
        x: -4.5,
        y: -0.4,
        z: -3,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsChocolate = {
        x: -8,
        y: -5.6,
        z: 0,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 4.5
      }, targetPositionFlavorsCocos = {
        x: -8.5,
        y: -0.5,
        z: -6,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3
      }, targetPositionFlavorsRaspberry = {
        x: -7.75,
        y: -3.5,
        z: -3,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3.5
      };
    } else if (windowWidth < 1001) {
      targetPositionDetail = {
        x: -4.4,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      }, targetPositionFlavorsChocolate = {
        x: -8,
        y: -2.5,
        z: 0,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 4
      }, targetPositionFlavorsCocos = {
        x: -12,
        y: -0.5,
        z: -6,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2.5
      }, targetPositionFlavorsRaspberry = {
        x: -10,
        y: -1.5,
        z: -3,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3.25
      };
    } else if (windowWidth < 1400) {
      targetPositionDetail = {
        x: -5,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      };
      targetPositionFlavorsChocolate = {
        x: -11,
        y: -6.5,
        z: 0,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 4
      }, targetPositionFlavorsCocos = {
        x: -17.5,
        y: -4,
        z: -8,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2.6
      }, targetPositionFlavorsRaspberry = {
        x: -14,
        y: -5,
        z: -4,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3.25
      };
    } else {
      targetPositionDetail = {
        x: -6,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2
      };
      targetPositionFlavorsChocolate = {
        x: -11,
        y: -6.5,
        z: 0,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 4
      }, targetPositionFlavorsCocos = {
        x: -17.5,
        y: -4,
        z: -8,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 2.6
      }, targetPositionFlavorsRaspberry = {
        x: -14,
        y: -5,
        z: -4,
        rotX: 0,
        rotY: Math.PI * 2,
        rotZ: Math.PI / 3.25
      };
    }
  }

  function setupAnimations() {
    animateToFlavorsChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionFlavorsChocolate, homePageAnimationTime).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Quadratic.InOut), animateToFlavorsCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionFlavorsCocos, homePageAnimationTime).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Quadratic.InOut), animateToFlavorsRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionFlavorsRaspberry, homePageAnimationTime).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Quadratic.InOut);
    animateResetChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDefault, homePageAnimationTime).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateResetCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDefaultHidden, homePageAnimationTime).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateResetRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDefaultHidden, homePageAnimationTime).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
    animateToFlavorsChocolate.onStart(function () {
      animate_activate = true;
    });
    animateToFlavorsChocolate.onUpdate(function () {
      modelChocolateBar.position.x = positionChocolate.x;
      modelChocolateBar.position.y = positionChocolate.y;
      modelChocolateBar.position.z = positionChocolate.z; // modelChocolateBar.rotation.x = positionChocolate.rotX;

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
      modelCocosBar.position.z = positionCocos.z; // modelCocosBar.rotation.x = positionCocos.rotX;

      modelCocosBar.rotation.y = positionCocos.rotY;
      modelCocosBar.rotation.z = positionCocos.rotZ;
    });
    animateToFlavorsRaspberry.onUpdate(function () {
      modelRaspberryBar.position.x = positionRaspberry.x;
      modelRaspberryBar.position.y = positionRaspberry.y;
      modelRaspberryBar.position.z = positionRaspberry.z; // modelRaspberryBar.rotation.x = positionRaspberry.rotX;

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
      modelChocolateBar.position.z = positionChocolate.z; // modelChocolateBar.rotation.x = positionChocolate.rotX;

      modelChocolateBar.rotation.y = positionChocolate.rotY;
      modelChocolateBar.rotation.z = positionChocolate.rotZ;
    });
    animateResetCocos.onUpdate(function () {
      modelCocosBar.position.x = positionCocos.x;
      modelCocosBar.position.y = positionCocos.y;
      modelCocosBar.position.z = positionCocos.z; // modelCocosBar.rotation.x = positionCocos.rotX;

      modelCocosBar.rotation.y = positionCocos.rotY;
      modelCocosBar.rotation.z = positionCocos.rotZ;
    });
    animateResetRaspberry.delay(100);
    animateResetRaspberry.onUpdate(function () {
      modelRaspberryBar.position.x = positionRaspberry.x;
      modelRaspberryBar.position.y = positionRaspberry.y;
      modelRaspberryBar.position.z = positionRaspberry.z; // modelRaspberryBar.rotation.x = positionRaspberry.rotX;

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
      animateToDetailPageChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDetail, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
      animateToDetailPageChocolateCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
      animateToDetailPageChocolateRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
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
      animateToDetailPageRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDetail, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
      animateToDetailPageRaspberryChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
      animateToDetailPageRaspberryCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
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
      animateToDetailPageCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDetail, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
      animateToDetailPageCocosChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
      animateToDetailPageCocosRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
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
    animateToHiddenChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
    animateToHiddenRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
    animateToHiddenCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
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
    var deviceType = Object(_utils_get_device_type__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var shouldInitializeTouchDevice = Object(_utils_is_touch_device__WEBPACK_IMPORTED_MODULE_4__["default"])() && window.innerWidth <= _utils_css_variables__WEBPACK_IMPORTED_MODULE_3__["default"].desktopBreakpoint - 1 || deviceType === 'tablet' || deviceType === 'mobile';

    if (shouldInitializeTouchDevice) {
      container.style.display = "none";
      setupBarData();

      if (isHomePage) {
        _gyroscope_crossbar__WEBPACK_IMPORTED_MODULE_9__["default"].initHome();
        mobileInit = true;
        initialized = true;
      } else if (isDetailPage) {
        _gyroscope_crossbar__WEBPACK_IMPORTED_MODULE_9__["default"].initDetail(data);
      }
    } else if (!mobileInit) {
      // hide mobile bars
      _gyroscope_crossbar__WEBPACK_IMPORTED_MODULE_9__["default"].disableHome();

      if (!initialized && (isHomePage || isDetailPage)) {
        // Create Camera, Lights, Models, Renderer, Render and Update Functions
        var createCamera = function createCamera() {
          camera = new three__WEBPACK_IMPORTED_MODULE_6__["PerspectiveCamera"](36, container.clientWidth / container.clientHeight, 1, 100);
          setCameraPosition();
          camera.lookAt(0, 0, 0);
        };

        var createLights = function createLights() {
          var ambientLight = new three__WEBPACK_IMPORTED_MODULE_6__["HemisphereLight"](0xffffff, 0xffffff, 1.6);
          var directionalLightLeft = new three__WEBPACK_IMPORTED_MODULE_6__["DirectionalLight"](0xffffff, 4);
          directionalLightLeft.shadow = true;
          directionalLightLeft.position.set(6, -18, 20);
          scene.add(directionalLightLeft, ambientLight);
        };

        var createRenderer = function createRenderer() {
          renderer = new three__WEBPACK_IMPORTED_MODULE_6__["WebGLRenderer"]({
            antialias: true,
            alpha: true
          }); //renderer.setSize(innerWidth, window.innerHeight);

          renderer.setClearColor(0x000000, 0);
          renderer.gammaFactor = 1;
          renderer.outputEncoding = true;
          renderer.physicallyCorrectLights = true;

          if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            renderer.setPixelRatio(window.devicePixelRatio / 2);
          } else {
            renderer.setPixelRatio(window.devicePixelRatio);
          }

          renderer.setClearColor(0x000000, 0);
          renderer.gammaFactor = 1;
          renderer.gammaOutput = true;
          renderer.physicallyCorrectLights = true;
          container.appendChild(renderer.domElement);
          renderer.setAnimationLoop(function () {
            update();
          });
          onWindowResize();
          Object(_loader__WEBPACK_IMPORTED_MODULE_2__["default"])().removeLoader();
        }; // function createStats() {
        //     let statsContainer = document.getElementById('stats');
        //     stats = new Stats();
        //     stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        //     statsContainer.appendChild(stats.domElement);
        // }
        // Initialize ThreeJS Scene


        var initAll = function initAll() {
          scene = new three__WEBPACK_IMPORTED_MODULE_6__["Scene"]();
          createCamera();
          createLights();
          loadModels(); // createStats();
        };

        var mouseControlStuff = function mouseControlStuff(speedX, speedY) {
          var heroHeadline = document.getElementById('js__hero-headline');

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
        };

        var setCssProperties = function setCssProperties() {
          if (isHomePage) {
            changeCSSPositionFixed();
          } else if (isDetailPage) {
            changeCssPositionAbsolute();
          } else {
            container.style.display = 'none';
            container.style.position = null;
            container.style.zIndex = null;
          }
        };

        setupBarData();
        setupCircleClicks();
        setAnimationPositions();
        setupAnimations();
        setupHomeToDetailAnimations();

        var loadModels = function loadModels() {
          var loader = new three_gltf_loader__WEBPACK_IMPORTED_MODULE_7___default.a();

          function onLoadBars() {
            if (isHomePage) {
              modelChocolateBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
              modelRaspberryBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
              modelCocosBar.rotation.set(targetPositionDefault.rotX, targetPositionDefault.rotY, targetPositionDefault.rotZ);
              modelChocolateBar.position.set(targetPositionDefault.x, targetPositionDefault.y, targetPositionDefault.z);
              modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              createRenderer();
              scene.add(modelRaspberryBar, modelChocolateBar, modelCocosBar); // setTimeout(() => {
              //     modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              //     modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              // }, 200);
            } else {
              for (var barName in data) {
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

          var onProgress = function onProgress() {};

          var onError = function onError(errorMessage) {};

          var onLoadGlbfile = function onLoadGlbfile(gltf) {
            var _iterator = _createForOfIteratorHelper(gltf.scene.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;

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
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            onLoadBars();
          }; // if (navigator.userAgent.match(/Android/i)
          //     || navigator.userAgent.match(/webOS/i)
          //     || navigator.userAgent.match(/BlackBerry/i)
          //     || navigator.userAgent.match(/Windows Phone/i)
          // ) {
          //     loader.load('/assets/threejs/191212_NeohBars_Mobile_wReflection.glb', onLoadGlbfile, onProgress, onError);
          // } else {


          var modelUrl = _utils_asset_resolver__WEBPACK_IMPORTED_MODULE_10__["default"].resolveStatic('threejs/191212_NeohBars_v003_1024_newTextures.glb');
          loader.load(modelUrl, onLoadGlbfile, onProgress, onError); // }
        };

        var prevX = 0;
        var prevY = 0;
        var mouseInteractions = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function (e) {
          if (preventAnimations || windowWidth < 768 && window.ontouchstart) {
            // no mouse following on touch devices
            return;
          } else {
            var cursorPosX = window.Event ? e.clientX : e.pageX;
            var cursorPosY = window.Event ? e.clientY : e.pageY;

            if (Math.abs(cursorPosX - prevX) > 7 || Math.abs(cursorPosY - prevY) > 7) {
              lastMousePosition = {
                x: cursorPosX,
                y: cursorPosY
              };
              speedX = cursorPosX / (windowWidth / 2) - 1;
              speedY = cursorPosY / (window.innerHeight / 2) - 1;
              mouseControlStuff(speedX, speedY);
            }

            prevX = cursorPosX;
            prevY = cursorPosY;
          }
        }, 57);

        if (!Object(_utils_is_touch_device__WEBPACK_IMPORTED_MODULE_4__["default"])()) {
          window.addEventListener('mousemove', mouseInteractions);
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
          positionChocolate = {
            x: 0,
            y: 0,
            z: 0,
            rotX: 0,
            rotY: 0,
            rotZ: Math.PI / 12
          }, positionCocos = {
            x: 40,
            y: 0,
            z: 0,
            rotX: 0,
            rotY: 0,
            rotZ: Math.PI / 12
          }, positionRaspberry = {
            x: 40,
            y: 0,
            z: 0,
            rotX: 0,
            rotY: 0,
            rotZ: Math.PI / 12
          };
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
            var lastSegment = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

            if (lastSegment === 'chocolate') {
              modelChocolateBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
              modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              positionChocolate = _objectSpread({}, targetPositionDetail);
              positionRaspberry = _objectSpread({}, targetPositionDefaultHidden);
              positionCocos = _objectSpread({}, targetPositionDefaultHidden);
            } else if (lastSegment === 'cocos') {
              modelCocosBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
              modelRaspberryBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              modelChocolateBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              positionCocos = _objectSpread({}, targetPositionDetail);
              positionRaspberry = _objectSpread({}, targetPositionDefaultHidden);
              positionChocolate = _objectSpread({}, targetPositionDefaultHidden);
            } else if (lastSegment === 'raspberry') {
              modelRaspberryBar.position.set(targetPositionDetail.x, targetPositionDetail.y, targetPositionDetail.z);
              modelCocosBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              modelChocolateBar.position.set(targetPositionDefaultHidden.x, targetPositionDefaultHidden.y, targetPositionDefaultHidden.z);
              positionRaspberry = _objectSpread({}, targetPositionDetail);
              positionCocos = _objectSpread({}, targetPositionDefaultHidden);
              positionChocolate = _objectSpread({}, targetPositionDefaultHidden);
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
      windowResizeListenerCreated = true; // Control Size of the Scene based on Window Resize

      window.addEventListener('resize', onWindowResize);
    }
  }

  function setCameraPosition() {
    var adjustCameraZ;
    var containerWidth = container.clientWidth;

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
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    if (renderer) renderer.setSize(containerWidth, containerHeight);
    setCameraPosition();
  }

  function setupChangeBarAnimations() {
    animateInDetailPageCocos = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDetail, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateInDetailPageCocosHide = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionCocos).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateInDetailPageChocolate = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDetail, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateInDetailPageChocolateHide = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionChocolate).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateInDetailPageRaspberry = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDetail, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut), animateInDetailPageRaspberryHide = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Tween(positionRaspberry).to(targetPositionDefaultHidden, 800).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].Easing.Sinusoidal.InOut);
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
    targetPositionDefaultHidden = {
      x: -35,
      y: 0,
      z: 0,
      rotX: 0,
      rotY: 0,
      rotZ: Math.PI / 12
    }, positionCocos = {
      x: -35,
      y: 0,
      z: 0,
      rotX: 0,
      rotY: 0,
      rotZ: Math.PI / 12
    }, positionRaspberry = {
      x: -35,
      y: 0,
      z: 0,
      rotX: 0,
      rotY: 0,
      rotZ: Math.PI / 12
    };
  }

  function setupBarData() {
    var barDataEls = document.querySelectorAll('.js__bars__data');
    barDataEls.forEach(function (bar) {
      var barName = bar.dataset.barName;
      data[barName] = {
        url: bar.dataset.href,
        bar: barName
      };
    });
  }

  function setupCircleClicks() {
    var barDataEls = document.querySelectorAll('.js__bars__data');

    if (barDataEls.length > 0) {
      var clickListeners = [];
      barDataEls.forEach(function (bar) {
        var barName = bar.dataset.barName;
        data[barName] = {
          url: bar.dataset.href,
          bar: barName
        };

        function clickHandler(e) {
          e.preventDefault();
          var barHref = bar.dataset.href;
          var barName;

          for (var barProp in data) {
            if (data[barProp].url === barHref) barName = data[barProp].bar;
          }

          if (barName) {
            var customEvent = new CustomEvent('barClick', {
              detail: {
                href: bar.dataset.href,
                bar: barName
              }
            });
            document.dispatchEvent(customEvent);
          }
        }

        bar.addEventListener('click', clickHandler);
        clickListeners.push(function () {
          bar.removeEventListener('click', clickHandler);
        });
      });

      destroyBarClickListeners = function destroyBarClickListeners() {
        clickListeners.forEach(function (destroyFunc) {
          if (destroyFunc) destroyFunc();
        });
      };
    }
  }

  function changeBar(url) {
    preventAnimations = false;
    setupChangeBarAnimations();

    for (var barName in data) {
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
    _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_8__["default"].update(); // stats.begin();
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
      targetPositionFlavorsChocolate.rotY = speedX / 5 + Math.PI * 2;
      targetPositionFlavorsRaspberry.rotY = speedX / 9 + Math.PI * 2;
      targetPositionFlavorsCocos.rotY = speedX / 7 + Math.PI * 2;
    } else {
      targetPositionFlavorsChocolate.rotY = speedX / 5;
      targetPositionFlavorsRaspberry.rotY = speedX / 9;
      targetPositionFlavorsCocos.rotY = speedX / 7;
    }

    setupAnimations(); // if (animateResetChocolate) animateResetChocolate.stop();
    // if (animateResetCocos) animateResetCocos.stop();
    // if (animateResetRaspberry) animateResetRaspberry.stop();
    // if (animateToHiddenCocos) animateToHiddenCocos.stop();
    // if (animateToHiddenChocolate) animateToHiddenChocolate.stop();
    // if (animateToHiddenRaspberry) animateToHiddenRaspberry.stop();

    setTimeout(function () {
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
    setTimeout(function () {
      animateResetChocolate.start();
      animateResetCocos.start();
      animateResetRaspberry.start();
    }, 10);
  }

  function animateToHidden() {
    setupHideBarAnimations();
    setTimeout(function () {
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
      renderer.setAnimationLoop(function () {
        update();
      });
    }
  }

  function animateToDetail(barName) {
    preventSetBarPositionOnDetail = true;
    container.style.zIndex = _utils_css_variables__WEBPACK_IMPORTED_MODULE_3__["default"].zIndexAboveContent;
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
      renderer.setAnimationLoop(function () {
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
      isHidden = true;
    } else if (!shouldHide && isHidden) {
      container.classList.remove('home__scene--hidden');
      isHidden = false;
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
  };
}

var crossBarsScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!crossBarsScript) crossBarsScript = threeCrossbars();
  return crossBarsScript;
});

/***/ }),

/***/ "./app/resources/js/utils/asset-resolver.js":
/*!**************************************************!*\
  !*** ./app/resources/js/utils/asset-resolver.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  resolve: function resolve(url) {
    if (url.includes('images.prismic.io/neoh')) {
      return url.replace('images.prismic.io/neoh', 'images-cdn.neoh.com');
    }

    return url;
  },
  resolveStatic: function resolveStatic(path) {
    return 'https://static-cdn.neoh.com/' + path;
  }
});

/***/ }),

/***/ "./app/resources/js/utils/css-variables.js":
/*!*************************************************!*\
  !*** ./app/resources/js/utils/css-variables.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var windowWidth = window.innerWidth;
/* harmony default export */ __webpack_exports__["default"] = ({
  colorPrimary: '#E74023',
  colorSecondary: '#E8DAC0',
  headerHeightMobile: 72,
  headerHeightTablet: 82,
  tabletBreakpoint: 769,
  desktopBreakpoint: 1001,
  desktopWideBreakpoint: 1441,
  zIndexAboveContent: 4,
  // currently used for bar animation
  expanderTransitionTime: 320,
  // ms
  headerAnimationDelay: 200,
  // ms
  globalNotificationHeight: 44,
  // in px
  innerGutterMobile: 24,
  innerGutterTablet: 32,
  innerGutterDesktop: 40,
  innerGutterDesktopWide: 54,
  outerGutterTablet: windowWidth * 0.08,
  outerGutterDesktop: windowWidth * 0.12,
  outerGutterDesktopWide: windowWidth * 0.18,
  notificationAnimationLength: 320
});

/***/ }),

/***/ "./app/resources/js/utils/event-emitter.js":
/*!*************************************************!*\
  !*** ./app/resources/js/utils/event-emitter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  callbacks: {},
  addEventListener: function addEventListener(event, callback) {
    this.callbacks[event] = callback;
  },
  emit: function emit(event, data) {
    if (this.callbacks[event]) {
      try {
        this.callbacks[event](data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  unsubscribe: function unsubscribe(event) {
    if (this.callbacks[event]) delete this.callbacks[event];
  }
});

/***/ }),

/***/ "./app/resources/js/utils/get-device-type.js":
/*!***************************************************!*\
  !*** ./app/resources/js/utils/get-device-type.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getDeviceType = function getDeviceType() {
  var ua = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }

  if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }

  return "desktop";
};

/* harmony default export */ __webpack_exports__["default"] = (getDeviceType);

/***/ }),

/***/ "./app/resources/js/utils/is-touch-device.js":
/*!***************************************************!*\
  !*** ./app/resources/js/utils/is-touch-device.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isTouchDevice = __webpack_require__(/*! is-touch-device */ "./node_modules/is-touch-device/build/index.js");

var isTouch = ('ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || isTouchDevice()) && window.innerWidth < 960; //this is a touch device you can any action here

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return isTouch;
});

/***/ }),

/***/ "./app/resources/js/utils/normalized-shopify-data.js":
/*!***********************************************************!*\
  !*** ./app/resources/js/utils/normalized-shopify-data.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeShopifyVariants; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function normalizeShopifyVariants(productToLoad) {
  var storefrontProducts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var usePrismicVariants = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var variants = [];
  var associatedShopifyAdminProduct = window.data.shopifyAdminApiProducts.find(function (product) {
    return product.handle === productToLoad;
  });

  if (usePrismicVariants) {
    var shopifyProductCurrentType = associatedShopifyAdminProduct.product_type;
    window.data.shopifyAdminApiProducts.forEach(function (product) {
      if (product.product_type === shopifyProductCurrentType) {
        window.data.prismicProducts.forEach(function (productDoc) {
          if (product.handle === productDoc.data.shopify_product_handle) {
            var associatedStorefrontProduct = storefrontProducts.find(function (storefrontProduct) {
              return product.handle === storefrontProduct.handle;
            });

            var variant = _objectSpread(_objectSpread({}, associatedStorefrontProduct.variants[0]), productDoc);

            variants.push(variant);
          }
        });
      }
    });
    variants.sort(function (variantA, variantB) {
      return variantA.data.order - variantB.data.order;
    });
    return {
      variants: variants,
      productTitle: shopifyProductCurrentType
    };
  } else {
    var _shopifyProductCurrentType = associatedShopifyAdminProduct.title;
    var associatedPrismicDoc = window.data.prismicProducts.find(function (product) {
      return product.data.shopify_product_handle === productToLoad;
    });
    var associatedStorefrontProduct = storefrontProducts.find(function (storefrontProduct) {
      return storefrontProduct.handle === productToLoad;
    });

    if (associatedShopifyAdminProduct.options[0]) {
      associatedShopifyAdminProduct.options[0].values.forEach(function (value) {
        var associatedStorefrontVariant = associatedStorefrontProduct.variants.find(function (storefrontVariant) {
          return storefrontVariant.title === value;
        });

        var variant = _objectSpread(_objectSpread(_objectSpread({}, associatedStorefrontVariant), associatedPrismicDoc), {}, {
          data: _objectSpread(_objectSpread({}, associatedPrismicDoc.data), {}, {
            variant_name: associatedStorefrontProduct.variants.length <= 1 ? associatedPrismicDoc.data.variant_name : "".concat(associatedShopifyAdminProduct.options[0].name, " ").concat(value),
            variant_id: value
          })
        });

        variants.push(variant);
      });
    }

    return {
      variants: variants,
      productTitle: _shopifyProductCurrentType
    };
  }
}

/***/ }),

/***/ "./app/resources/js/utils/shopify-client.js":
/*!**************************************************!*\
  !*** ./app/resources/js/utils/shopify-client.js ***!
  \**************************************************/
/*! exports provided: initializeClient, loadShopifyStorefrontProducts, subscribeProducts, unsubscribeProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeClient", function() { return initializeClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadShopifyStorefrontProducts", function() { return loadShopifyStorefrontProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeProducts", function() { return subscribeProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeProducts", function() { return unsubscribeProducts; });
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shopify-buy */ "./node_modules/shopify-buy/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_0__);


var language = window.data.locale.split('-')[1],
    shopifyCheckoutDomain = window.data.shopifyCheckoutDomain,
    shopifyStorefrontApiToken = window.data.shopifyStorefrontApiToken,
    productsLoaded = false,
    products = null,
    onLoadProducts = function onLoadProducts() {};

function initializeClient() {
  var client = shopify_buy__WEBPACK_IMPORTED_MODULE_0___default.a.buildClient({
    domain: shopifyCheckoutDomain || 'checkout.neoh.com',
    storefrontAccessToken: shopifyStorefrontApiToken || '897fb78c08f2ede0e91a28397eee324c',
    language: language
  });
  return client;
}
function loadShopifyStorefrontProducts(client) {
  return client.product.fetchAll().then(function (res) {
    products = res;
    productsLoaded = true;
    setTimeout(function () {
      onLoadProducts(res);
    }, 0);
    return res;
  })["catch"](function (e) {
    products = [];
    productsLoaded = true;
    setTimeout(function () {
      onLoadProducts([]);
    }, 0);
    return [];
  });
}
function subscribeProducts(callback) {
  if (!productsLoaded) {
    if (typeof callback === 'function') {
      onLoadProducts = callback;
    }
  } else {
    callback(products);
  }
}
function unsubscribeProducts() {
  onLoadProducts = function onLoadProducts() {};
}

/***/ }),

/***/ "./app/resources/js/utils/shopify-integration.js":
/*!*******************************************************!*\
  !*** ./app/resources/js/utils/shopify-integration.js ***!
  \*******************************************************/
/*! exports provided: shouldUsePrismicVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUsePrismicVariants", function() { return shouldUsePrismicVariants; });
var shouldUsePrismicVariants = function shouldUsePrismicVariants(prismicProduct) {
  return prismicProduct.data.use_prismic_variants;
};

/***/ }),

/***/ "./app/resources/js/utils/touch-events.js":
/*!************************************************!*\
  !*** ./app/resources/js/utils/touch-events.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var xDown = null;
var yDown = null;
var direction = null;
var debounce = false;

function handleTouchStart(evt) {
  var firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

; // function handleTouchEnd(evt) {
//     const endTouch = evt.changedTouches[0];
//     var xDownEnd = endTouch.clientX;
//     var yDownEnd = endTouch.clientY;
//     var xDiff = xDown - xDownEnd;
//     var yDiff = yDown - yDownEnd;
//
//     sendEvent(xDiff, yDiff);
// }

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp; // let customEvent = new CustomEvent('swipeonce', {detail: {direction: direction}});
  // document.dispatchEvent(customEvent);

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      direction = 'right';
    } else {
      direction = 'left';
    }
  } else {
    if (yDiff > 0) {
      direction = 'down';
    } else {
      direction = 'up';
    }
  }

  sendEvent(direction);
  /* reset values */

  xDown = null;
  yDown = null;
}

;

function sendEvent(direction) {
  if (!debounce) {
    var customEvent = new CustomEvent('swipeonce', {
      detail: {
        direction: direction
      }
    });
    document.dispatchEvent(customEvent);
    debounce = true;
    setTimeout(function () {
      debounce = false;
    }, 180);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    document.addEventListener('touchstart', handleTouchStart, false); // document.addEventListener('touchend', handleTouchStart, false);

    document.addEventListener('touchmove', handleTouchMove, false);
  },
  destroy: function destroy() {
    document.removeEventListener('touchstart', handleTouchStart, false);
    document.removeEventListener('touchmove', handleTouchMove, false);
  }
});

/***/ }),

/***/ "./app/resources/js/utils/wheel-events.js":
/*!************************************************!*\
  !*** ./app/resources/js/utils/wheel-events.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var values = [];
var velocityArr = [];
var valuesMaxLength = 11;
var velocityArrLength = 4;
var throttle = false;
var lastIsAcceleratingValue = false;
var prevTime = new Date().getTime(); // var currTime;
// var callback;

function getScrollValue(e) {
  if (e.deltaY) return e.deltaY;
  if (e.wheelDeltaY) return e.wheelDeltaY * -1;
  if (e.detail) return e.detail * 5; // normalize scroll value for firefox with multiplier
}

function getAverageVelocity() {
  // getting the average protects us from random spikes in values,
  //and the lack of precise decimal values from the browser
  var sum = 0;
  var l = values.length;

  for (var i = 0; i < l; i++) {
    sum += values[i];
  }

  return parseFloat(sum / l);
} // function getAccelerationValue() {
//     // get the smallest value index and the largest value index
//     // if the smallest value index is lower, we know that we have an ascending array, e.g. [6, 8, 8, 9]
//     // and vice versa if the largest value index is lower then we have a descending array
//
//     var sum = 0;
//     var smallestValue = Infinity;
//     var smallestValueIndex = 0;
//     var largestValue = 0;
//     var largestValueIndex = 0;
//     var l = velocityArr.length;
//
//     for (var i = 0; i < l; i++) {
//         var v = velocityArr[i];
//         if (v < smallestValue) {
//             smallestValue = v;
//             smallestValueIndex = i;
//         }
//         if (v > largestValue) {
//             largestValue = v;
//             largestValueIndex = i;
//         }
//
//         sum += v;
//     }
//     var acceleration = parseFloat((sum / l) - smallestValue);
//     // if largestValueINdex is the same as the smallestValue index, the acceleration is 0
//     return largestValueIndex >= smallestValueIndex ? acceleration : acceleration * -1;
// }


function getIsAccelerating() {
  var smallestValue = Infinity;
  var smallestValueIndex = 0;
  var largestValue = 0;
  var largestValueIndex = 0;
  var l = velocityArr.length;

  for (var i = 0; i < l; i++) {
    var v = velocityArr[i];

    if (v < smallestValue) {
      smallestValue = v;
      smallestValueIndex = i;
    }

    if (v > largestValue) {
      largestValue = v;
      largestValueIndex = i;
    }
  } // if largestValueINdex is the same as the smallestValue index, the acceleration is 0


  return largestValueIndex >= smallestValueIndex;
}

function wheelHandler(event) {
  if (throttle) return;
  throttle = true; // only including below because of safari's bugs

  var currTime = new Date().getTime();

  if (currTime - prevTime > 180) {
    values = [];
    velocityArr = [];
    lastIsAcceleratingValue = false;
  }

  prevTime = currTime;
  if (values.length >= valuesMaxLength) values.shift();
  var scrollValue = getScrollValue(event);
  var averageVelocity = getAverageVelocity();
  if (velocityArr.length >= velocityArrLength) velocityArr.shift();
  velocityArr.push(Math.abs(averageVelocity));
  var valuesLength = values.length;
  var switchInDirection = false;

  if (valuesLength > 0 && scrollValue < 0 && values[valuesLength - 1] > 0 || scrollValue > 0 && values[valuesLength - 1] < 0) {
    switchInDirection = true; // values = [];
    // velocityArr = [];
    // lastIsAcceleratingValue = false;
  }

  values.push(scrollValue); // apply throttle...
  // var accelerationValue = getAccelerationValue(velocityArr);

  var isAccelerating = getIsAccelerating();

  if (isAccelerating && !lastIsAcceleratingValue || switchInDirection) {
    var direction = scrollValue >= 0 ? 'down' : 'up';
    var customEvent = new CustomEvent('wheelonce', {
      detail: {
        direction: direction
      }
    });
    document.dispatchEvent(customEvent); // throw event
  }

  lastIsAcceleratingValue = isAccelerating; //

  setTimeout(function () {
    throttle = false;
  }, 40);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    document.addEventListener('wheel', wheelHandler, {
      passive: false
    });
  },
  destroy: function destroy() {
    document.removeEventListener('wheel', wheelHandler, {
      passive: false
    });
  }
});

/***/ }),

/***/ "./app/resources/js/why.js":
/*!*********************************!*\
  !*** ./app/resources/js/why.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var whyPage = /*#__PURE__*/function () {
  function whyPage() {
    _classCallCheck(this, whyPage);

    this.swiper = null;
    this.initialized = false;
  }

  _createClass(whyPage, [{
    key: "setupSwiper",
    value: function setupSwiper() {
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.image-swiper', {
        direction: 'horizontal',
        autoplay: {
          delay: 4000
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
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.initialized) {
        this.swiper.destroy(true, true);
        this.swiper = null;
        this.initialized = false;
      }
    }
  }, {
    key: "init",
    value: function init(pageName) {
      var isWhyPage = pageName === 'why';

      if (isWhyPage && !this.initialized) {
        this.setupSwiper();
        this.initialized = true;
      }
    }
  }]);

  return whyPage;
}();

var whyPageScript = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!whyPageScript) whyPageScript = new whyPage();
  return whyPageScript;
});

/***/ }),

/***/ "./app/resources/scss/main.scss":
/*!**************************************!*\
  !*** ./app/resources/scss/main.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/@swup/plugin/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/@swup/plugin/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin() {
        _classCallCheck(this, Plugin);

        this.isSwupPlugin = true;
    }

    _createClass(Plugin, [{
        key: "mount",
        value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with plugin
        }
    }, {
        key: "unmount",
        value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with plugin is disabled
        }
    }, {
        key: "_beforeMount",
        value: function _beforeMount() {
            // here for any future hidden auto init
        }
    }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {}
        // here for any future hidden auto-cleanup


        // this is here so we can tell if plugin was created by extending this class

    }]);

    return Plugin;
}();

exports.default = Plugin;

/***/ }),

/***/ "./node_modules/@vimeo/player/dist/player.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v2.14.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */
var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */

function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */

function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */

function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */

function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function (self) {

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var defineProperty = function (object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();

  if ( module.exports) {
    module.exports = context[name];
  }
})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {

  var builtInProp,
      cycle,
      scheduling_queue,
      ToString = Object.prototype.toString,
      timer = typeof setImmediate != "undefined" ? function timer(fn) {
    return setImmediate(fn);
  } : setTimeout; // dammit, IE8.

  try {
    Object.defineProperty({}, "x", {});

    builtInProp = function builtInProp(obj, name, val, config) {
      return Object.defineProperty(obj, name, {
        value: val,
        writable: true,
        configurable: config !== false
      });
    };
  } catch (err) {
    builtInProp = function builtInProp(obj, name, val) {
      obj[name] = val;
      return obj;
    };
  } // Note: using a queue instead of array for efficiency


  scheduling_queue = function Queue() {
    var first, last, item;

    function Item(fn, self) {
      this.fn = fn;
      this.self = self;
      this.next = void 0;
    }

    return {
      add: function add(fn, self) {
        item = new Item(fn, self);

        if (last) {
          last.next = item;
        } else {
          first = item;
        }

        last = item;
        item = void 0;
      },
      drain: function drain() {
        var f = first;
        first = last = cycle = void 0;

        while (f) {
          f.fn.call(f.self);
          f = f.next;
        }
      }
    };
  }();

  function schedule(fn, self) {
    scheduling_queue.add(fn, self);

    if (!cycle) {
      cycle = timer(scheduling_queue.drain);
    }
  } // promise duck typing


  function isThenable(o) {
    var _then,
        o_type = typeof o;

    if (o != null && (o_type == "object" || o_type == "function")) {
      _then = o.then;
    }

    return typeof _then == "function" ? _then : false;
  }

  function notify() {
    for (var i = 0; i < this.chain.length; i++) {
      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
    }

    this.chain.length = 0;
  } // NOTE: This is a separate function to isolate
  // the `try..catch` so that other code can be
  // optimized better


  function notifyIsolated(self, cb, chain) {
    var ret, _then;

    try {
      if (cb === false) {
        chain.reject(self.msg);
      } else {
        if (cb === true) {
          ret = self.msg;
        } else {
          ret = cb.call(void 0, self.msg);
        }

        if (ret === chain.promise) {
          chain.reject(TypeError("Promise-chain cycle"));
        } else if (_then = isThenable(ret)) {
          _then.call(ret, chain.resolve, chain.reject);
        } else {
          chain.resolve(ret);
        }
      }
    } catch (err) {
      chain.reject(err);
    }
  }

  function resolve(msg) {
    var _then,
        self = this; // already triggered?


    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    try {
      if (_then = isThenable(msg)) {
        schedule(function () {
          var def_wrapper = new MakeDefWrapper(self);

          try {
            _then.call(msg, function $resolve$() {
              resolve.apply(def_wrapper, arguments);
            }, function $reject$() {
              reject.apply(def_wrapper, arguments);
            });
          } catch (err) {
            reject.call(def_wrapper, err);
          }
        });
      } else {
        self.msg = msg;
        self.state = 1;

        if (self.chain.length > 0) {
          schedule(notify, self);
        }
      }
    } catch (err) {
      reject.call(new MakeDefWrapper(self), err);
    }
  }

  function reject(msg) {
    var self = this; // already triggered?

    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    self.msg = msg;
    self.state = 2;

    if (self.chain.length > 0) {
      schedule(notify, self);
    }
  }

  function iteratePromises(Constructor, arr, resolver, rejecter) {
    for (var idx = 0; idx < arr.length; idx++) {
      (function IIFE(idx) {
        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
          resolver(idx, msg);
        }, rejecter);
      })(idx);
    }
  }

  function MakeDefWrapper(self) {
    this.def = self;
    this.triggered = false;
  }

  function MakeDef(self) {
    this.promise = self;
    this.state = 0;
    this.triggered = false;
    this.chain = [];
    this.msg = void 0;
  }

  function Promise(executor) {
    if (typeof executor != "function") {
      throw TypeError("Not a function");
    }

    if (this.__NPO__ !== 0) {
      throw TypeError("Not a promise");
    } // instance shadowing the inherited "brand"
    // to signal an already "initialized" promise


    this.__NPO__ = 1;
    var def = new MakeDef(this);

    this["then"] = function then(success, failure) {
      var o = {
        success: typeof success == "function" ? success : true,
        failure: typeof failure == "function" ? failure : false
      }; // Note: `then(..)` itself can be borrowed to be used against
      // a different promise constructor for making the chained promise,
      // by substituting a different `this` binding.

      o.promise = new this.constructor(function extractChain(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        o.resolve = resolve;
        o.reject = reject;
      });
      def.chain.push(o);

      if (def.state !== 0) {
        schedule(notify, def);
      }

      return o.promise;
    };

    this["catch"] = function $catch$(failure) {
      return this.then(void 0, failure);
    };

    try {
      executor.call(void 0, function publicResolve(msg) {
        resolve.call(def, msg);
      }, function publicReject(msg) {
        reject.call(def, msg);
      });
    } catch (err) {
      reject.call(def, err);
    }
  }

  var PromisePrototype = builtInProp({}, "constructor", Promise,
  /*configurable=*/
  false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

  Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

  builtInProp(PromisePrototype, "__NPO__", 0,
  /*configurable=*/
  false);
  builtInProp(Promise, "resolve", function Promise$resolve(msg) {
    var Constructor = this; // spec mandated checks
    // note: best "isPromise" check that's practical for now

    if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
      return msg;
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      resolve(msg);
    });
  });
  builtInProp(Promise, "reject", function Promise$reject(msg) {
    return new this(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      reject(msg);
    });
  });
  builtInProp(Promise, "all", function Promise$all(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    if (arr.length === 0) {
      return Constructor.resolve([]);
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      var len = arr.length,
          msgs = Array(len),
          count = 0;
      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        msgs[idx] = msg;

        if (++count === len) {
          resolve(msgs);
        }
      }, reject);
    });
  });
  builtInProp(Promise, "race", function Promise$race(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        resolve(msg);
      }, reject);
    });
  });
  return Promise;
});
});

/**
 * @module lib/callbacks
 */
var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */

function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */

function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */

function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */

function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}

/**
 * @module lib/embed
 */
var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */

function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */

function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  // Prevent execution if users include the player.js script multiple times.
  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  window.addEventListener('message', onMessage);
}

/**
 * @module lib/postmessage
 */
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */

function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */

function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */

function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}

/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */
function initializeScreenfull() {
  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    fullscreenchange: fn.fullscreenchange,
    fullscreenerror: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new Promise(function (resolve, reject) {
        var onFullScreenEntered = function onFullScreenEntered() {
          screenfull.off('fullscreenchange', onFullScreenEntered);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenEntered);
        element = element || document.documentElement;
        var returnPromise = element[fn.requestFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      });
    },
    exit: function exit() {
      return new Promise(function (resolve, reject) {
        if (!screenfull.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function onFullScreenExit() {
          screenfull.off('fullscreenchange', onFullScreenExit);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenExit);
        var returnPromise = document[fn.exitFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      });
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback);
      }
    }
  };
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });
  return screenfull;
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};

var Player = /*#__PURE__*/function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);

    /* global jQuery */
    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this._window = element.ownerDocument.defaultView;
    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      _this._onMessage = function (event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      _this._window.addEventListener('message', _this._onMessage);

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    if (screenfull.isEnabled) {
      var exitFullscreen = function exitFullscreen() {
        return screenfull.exit();
      };

      screenfull.on('fullscreenchange', function () {
        if (screenfull.isFullscreen) {
          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } else {
          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } // eslint-disable-next-line


        _this.ready().then(function () {
          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
        });
      });
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|object} options The id of the video or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */

  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.request(this.element);
      }

      return this.callMethod('requestFullscreen');
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.exit();
      }

      return this.callMethod('exitFullscreen');
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */

  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      if (screenfull.isEnabled) {
        return npo_src.resolve(screenfull.isFullscreen);
      }

      return this.get('fullscreen');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          _this5.element.parentNode.removeChild(_this5.element);
        } // If the clip is private there is a case where the element stays the
        // div element. Destroy should reset the div and remove the iframe child.


        if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
          _this5.element.removeAttribute('data-vimeo-initialized');

          var iframe = _this5.element.querySelector('iframe');

          if (iframe && iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }

        _this5._window.removeEventListener('message', _this5._onMessage);

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */

    /**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     */

    /**
     * For 360° videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */

  }, {
    key: "getCameraProps",
    value: function getCameraProps() {
      return this.get('cameraProps');
    }
    /**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     */

    /**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */

  }, {
    key: "setCameraProps",
    value: function setCameraProps(camera) {
      return this.set('cameraProps', camera);
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */

    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */

    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */

  }, {
    key: "getChapters",
    value: function getChapters() {
      return this.get('chapters');
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */

    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */

  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      return this.get('currentChapter');
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     */

    /**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */

  }, {
    key: "getQualities",
    value: function getQualities() {
      return this.get('qualities');
    }
    /**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     */

    /**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */

  }, {
    key: "getQuality",
    value: function getQuality() {
      return this.get('quality');
    }
    /**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     */

    /**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */

  }, {
    key: "setQuality",
    value: function setQuality(quality) {
      return this.set('quality', quality);
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  screenfull = initializeScreenfull();
  initializeEmbeds();
  resizeEmbeds();
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with multiple element roots. Make sure <template> only has a single child element.`);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items > 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && expression.match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler, options);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler, options);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.0",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/dom7/dist/dom7.modular.js":
/*!************************************************!*\
  !*** ./node_modules/dom7/dist/dom7.modular.js ***!
  \************************************************/
/*! exports provided: $, addClass, removeClass, hasClass, toggleClass, attr, removeAttr, prop, data, removeData, dataset, val, transform, transition, on, off, once, trigger, transitionEnd, animationEnd, width, outerWidth, height, outerHeight, offset, hide, show, styles, css, toArray, each, forEach, filter, map, html, text, is, indexOf, index, eq, append, appendTo, prepend, prependTo, insertBefore, insertAfter, next, nextAll, prev, prevAll, siblings, parent, parents, closest, find, children, remove, detach, add, empty, scrollTo, scrollTop, scrollLeft, animate, stop, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Dom7 2.1.5
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: May 15, 2020
 */


class Dom7 {
  constructor(arr) {
    const self = this;
    // Create array-like object
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  }
}

function $(selector, context) {
  const arr = [];
  let i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
      // String
    if (typeof selector === 'string') {
      let els;
      let tempParent;
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
}

function requestAnimationFrame(callback) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame(callback);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame(id);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  let el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
        return el.dom7ElementDataStorage[key];
      }

      const dataKey = el.getAttribute(`data-${key}`);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      const attr = el.attributes[i];
      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;
    else if (dataset[key] === 'true') dataset[key] = true;
    else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  const dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        const values = [];
        for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (let i = 0; i < dom.length; i += 1) {
    const el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
  }
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);
    else {
      const parents = $(target).parents(); // eslint-disable-line
      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(' ');
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent,
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent,
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  const events = eventType.split(' ');
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }
  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
  const events = args[0].split(' ');
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let evt;
      try {
        evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  const events = ['webkitTransitionEnd', 'transitionend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  const events = ['webkitAnimationEnd', 'animationend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollY : el.scrollTop;
    const scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollX : el.scrollLeft;
    return {
      top: (box.top + scrollTop) - clientTop,
      left: (box.left + scrollLeft) - clientLeft,
    };
  }

  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  let i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (let prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  const arr = [];
  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  const matchedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  const modifiedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"];
  else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;
  let returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append(...args) {
  let newChild;

  for (let k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  let closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  const children = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].childNodes;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...args) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < args.length; i += 1) {
    const toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo(...args) {
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2));
      let done;
      if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop));
      if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft));
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing', // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - (Math.cos(progress * Math.PI) / 2);
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];

      // Define & Cache Initials & Units
      a.elements.each((index, el) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el,
        };
        Object.keys(props).forEach((prop) => {
          initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue,
          };
        });
      });

      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
        }

        elements.forEach((element) => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach((prop) => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const { initialValue, finalValue, unit } = el[prop];
            el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue));
            const currentValue = el[prop].currentValue;

            if (
              (finalValue > initialValue && currentValue >= finalValue) ||
              (finalValue < initialValue && currentValue <= finalValue)) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    },
  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = ('resize scroll').split(' ');
function eventShortcut(name, ...args) {
  if (typeof args[0] === 'undefined') {
    for (let i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();
        else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on(name, ...args);
}

function click(...args) {
  return eventShortcut.bind(this)('click', ...args);
}
function blur(...args) {
  return eventShortcut.bind(this)('blur', ...args);
}
function focus(...args) {
  return eventShortcut.bind(this)('focus', ...args);
}
function focusin(...args) {
  return eventShortcut.bind(this)('focusin', ...args);
}
function focusout(...args) {
  return eventShortcut.bind(this)('focusout', ...args);
}
function keyup(...args) {
  return eventShortcut.bind(this)('keyup', ...args);
}
function keydown(...args) {
  return eventShortcut.bind(this)('keydown', ...args);
}
function keypress(...args) {
  return eventShortcut.bind(this)('keypress', ...args);
}
function submit(...args) {
  return eventShortcut.bind(this)('submit', ...args);
}
function change(...args) {
  return eventShortcut.bind(this)('change', ...args);
}
function mousedown(...args) {
  return eventShortcut.bind(this)('mousedown', ...args);
}
function mousemove(...args) {
  return eventShortcut.bind(this)('mousemove', ...args);
}
function mouseup(...args) {
  return eventShortcut.bind(this)('mouseup', ...args);
}
function mouseenter(...args) {
  return eventShortcut.bind(this)('mouseenter', ...args);
}
function mouseleave(...args) {
  return eventShortcut.bind(this)('mouseleave', ...args);
}
function mouseout(...args) {
  return eventShortcut.bind(this)('mouseout', ...args);
}
function mouseover(...args) {
  return eventShortcut.bind(this)('mouseover', ...args);
}
function touchstart(...args) {
  return eventShortcut.bind(this)('touchstart', ...args);
}
function touchend(...args) {
  return eventShortcut.bind(this)('touchend', ...args);
}
function touchmove(...args) {
  return eventShortcut.bind(this)('touchmove', ...args);
}
function resize(...args) {
  return eventShortcut.bind(this)('resize', ...args);
}
function scroll(...args) {
  return eventShortcut.bind(this)('scroll', ...args);
}




/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),

/***/ "./node_modules/is-touch-device/build/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/is-touch-device/build/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isTouchDevice;
function isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.match = match
module.exports.regexpToFunction = regexpToFunction
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var whitelist = (options && options.whitelist) || undefined
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1
      var c = path[k]
      var matches = whitelist ? whitelist.indexOf(c) > -1 : true

      if (matches) {
        prev = c
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var pattern = capture || group
    var delimiter = prev || defaultDelimiter

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: pattern
        ? escapeGroup(pattern)
        : '[^' + escapeString(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Create path match function from `path-to-regexp` spec.
 */
function match (str, options) {
  var keys = []
  var re = pathToRegexp(str, keys, options)
  return regexpToFunction(re, keys)
}

/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction (re, keys) {
  return function (pathname, options) {
    var m = re.exec(pathname)
    if (!m) return false

    var path = m[0]
    var index = m.index
    var params = {}
    var decode = (options && options.decode) || decodeURIComponent

    for (var i = 1; i < m.length; i++) {
      if (m[i] === undefined) continue

      var key = keys[i - 1]

      if (key.repeat) {
        params[key.name] = m[i].split(key.delimiter).map(function (value) {
          return decode(value, key)
        })
      } else {
        params[key.name] = decode(m[i], key)
      }
    }

    return { path: path, index: index, params: params }
  }
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent
    var validate = options ? options.validate !== false : true

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) continue

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = options.delimiter || DEFAULT_DELIMITER
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (!token.prefix) {
          route += '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + escapeString(delimiter) + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    var endToken = tokens[tokens.length - 1]
    var isEndDelimited = typeof endToken === 'string'
      ? endToken[endToken.length - 1] === delimiter
      : endToken === undefined

    if (!strict) route += '(?:' + escapeString(delimiter) + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + escapeString(delimiter) + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/shopify-buy/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shopify-buy/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
      The MIT License (MIT)

Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

      */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/*
The MIT License (MIT)
Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.


*/
function join() {
  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return fields.join(' ');
}

function isObject(value) {
  return Boolean(value) && Object.prototype.toString.call(value.valueOf()) === '[object Object]';
}

function deepFreezeCopyExcept(predicate, structure) {
  if (predicate(structure)) {
    return structure;
  } else if (isObject(structure)) {
    return Object.freeze(Object.keys(structure).reduce(function (copy, key) {
      copy[key] = deepFreezeCopyExcept(predicate, structure[key]);

      return copy;
    }, {}));
  } else if (Array.isArray(structure)) {
    return Object.freeze(structure.map(function (item) {
      return deepFreezeCopyExcept(predicate, item);
    }));
  } else {
    return structure;
  }
}

function schemaForType(typeBundle, typeName) {
  var typeSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var type = typeBundle.types[typeName];

  if (type) {
    return type;
  } else if (typeSchema && typeSchema.kind === 'INTERFACE') {
    return typeSchema;
  }

  throw new Error('No type of ' + typeName + ' found in schema');
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

var VariableDefinition = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#variable} to create a VariableDefinition.
   *
   * @param {String} name The name of the variable.
   * @param {String} type The GraphQL type of the variable.
   * @param {*} [defaultValue] The default value of the variable.
   */
  function VariableDefinition(name, type, defaultValue) {
    classCallCheck(this, VariableDefinition);

    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the variable as an input value (e.g. `$variableName`).
   *
   * @return {String} The GraphQL query string for the variable as an input value.
   */

  createClass(VariableDefinition, [{
    key: 'toInputValueString',
    value: function toInputValueString() {
      return '$' + this.name;
    }

    /**
     * Returns the GraphQL query string for the variable (e.g. `$variableName:VariableType = defaultValue`).
     *
     * @return {String} The GraphQL query string for the variable.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var defaultValueString = this.defaultValue ? ' = ' + formatInputValue(this.defaultValue) : '';

      return '$' + this.name + ':' + this.type + defaultValueString;
    }
  }]);
  return VariableDefinition;
}();

function isVariable(value) {
  return VariableDefinition.prototype.isPrototypeOf(value);
}

function variable(name, type, defaultValue) {
  return new VariableDefinition(name, type, defaultValue);
}

var Enum = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#enum} to create an Enum.
   *
   * @param {String} key The key of the enum.
   */
  function Enum(key) {
    classCallCheck(this, Enum);

    this.key = key;
  }

  /**
   * Returns the GraphQL query string for the enum (e.g. `enumKey`).
   *
   * @return {String} The GraphQL query string for the enum.
   */

  createClass(Enum, [{
    key: "toString",
    value: function toString() {
      return this.key;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.key.valueOf();
    }
  }]);
  return Enum;
}();

var enumFunction = function enumFunction(key) {
  return new Enum(key);
};

var Scalar = function () {
  function Scalar(value) {
    classCallCheck(this, Scalar);

    this.value = value;
  }

  createClass(Scalar, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value.valueOf();
    }
  }, {
    key: "unwrapped",
    get: function get$$1() {
      return this.value;
    }
  }]);
  return Scalar;
}();

function formatInputValue(value) {
  if (VariableDefinition.prototype.isPrototypeOf(value)) {
    return value.toInputValueString();
  } else if (Enum.prototype.isPrototypeOf(value)) {
    return String(value);
  } else if (Scalar.prototype.isPrototypeOf(value)) {
    return JSON.stringify(value.valueOf());
  } else if (Array.isArray(value)) {
    return '[' + join.apply(undefined, toConsumableArray(value.map(formatInputValue))) + ']';
  } else if (isObject(value)) {
    return formatObject(value, '{', '}');
  } else {
    return JSON.stringify(value);
  }
}

function formatObject(value) {
  var openChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var closeChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var argPairs = Object.keys(value).map(function (key) {
    return key + ': ' + formatInputValue(value[key]);
  });

  return '' + openChar + join.apply(undefined, toConsumableArray(argPairs)) + closeChar;
}

function formatArgs(args) {
  if (!Object.keys(args).length) {
    return '';
  }

  return ' (' + formatObject(args) + ')';
}

function formatDirectives(directives) {
  if (!Object.keys(directives).length) {
    return '';
  }

  var directiveStrings = Object.keys(directives).map(function (key) {
    var directiveArgs = directives[key];
    var arg = directiveArgs && Object.keys(directiveArgs).length ? '(' + formatObject(directiveArgs) + ')' : '';

    return '@' + key + arg;
  });

  return ' ' + join.apply(undefined, toConsumableArray(directiveStrings));
}

// eslint-disable-next-line no-empty-function
var noop = function noop() {};

var Profiler = {
  trackTypeDependency: noop,
  trackFieldDependency: noop
};

var trackTypeDependency = Profiler.trackTypeDependency;
var trackFieldDependency = Profiler.trackFieldDependency;

function parseFieldCreationArgs(creationArgs) {
  var callback = noop;
  var options = {};
  var selectionSet = null;

  if (creationArgs.length === 2) {
    if (typeof creationArgs[1] === 'function') {
      var _creationArgs = slicedToArray(creationArgs, 2);

      options = _creationArgs[0];
      callback = _creationArgs[1];
    } else {
      var _creationArgs2 = slicedToArray(creationArgs, 2);

      options = _creationArgs2[0];
      selectionSet = _creationArgs2[1];
    }
  } else if (creationArgs.length === 1) {
    // SelectionSet is defined before this function is called since it's
    // called by SelectionSet
    // eslint-disable-next-line no-use-before-define
    if (SelectionSet.prototype.isPrototypeOf(creationArgs[0])) {
      selectionSet = creationArgs[0];
    } else if (typeof creationArgs[0] === 'function') {
      callback = creationArgs[0];
    } else {
      options = creationArgs[0];
    }
  }

  return { options: options, selectionSet: selectionSet, callback: callback };
}

var emptyArgs = Object.freeze({});
var emptyDirectives = Object.freeze({});

var Field = function () {

  /**
   * This constructor should not be invoked directly.
   * Fields are added to a selection by {@link SelectionSetBuilder#add}, {@link SelectionSetBuilder#addConnection}
   * and {@link SelectionSetBuilder#addInlineFragmentOn}.
   *
   * @param {String} name The name of the field.
   * @param {Object} [options] An options object containing:
   *   @param {Object} [options.args] Arguments for the field.
   *   @param {String} [options.alias] An alias for the field.
   *   @param {Object} [options.directives] Directives for the field.
   * @param {SelectionSet} selectionSet The selection set on the field.
   */
  function Field(name, options, selectionSet) {
    classCallCheck(this, Field);

    this.name = name;
    this.alias = options.alias || null;
    this.responseKey = this.alias || this.name;
    this.args = options.args ? deepFreezeCopyExcept(isVariable, options.args) : emptyArgs;
    this.directives = options.directives ? deepFreezeCopyExcept(isVariable, options.directives) : emptyDirectives;
    this.selectionSet = selectionSet;
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the Field (e.g. `catAlias: cat(size: 'small') { name }` or `name`).
   *
   * @return {String} The GraphQL query string for the Field.
   */

  createClass(Field, [{
    key: 'toString',
    value: function toString() {
      var aliasPrefix = this.alias ? this.alias + ': ' : '';

      return '' + aliasPrefix + this.name + formatArgs(this.args) + formatDirectives(this.directives) + this.selectionSet;
    }
  }]);
  return Field;
}();

// This is an interface that defines a usage, and simplifies type checking
var Spread = function Spread() {
  classCallCheck(this, Spread);
};

var InlineFragment = function (_Spread) {
  inherits(InlineFragment, _Spread);

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link SelectionSetBuilder#addInlineFragmentOn} to create an InlineFragment.
   *
   * @param {String} typeName The type of the fragment.
   * @param {SelectionSet} selectionSet The selection set on the fragment.
   */
  function InlineFragment(typeName, selectionSet) {
    classCallCheck(this, InlineFragment);

    var _this = possibleConstructorReturn(this, (InlineFragment.__proto__ || Object.getPrototypeOf(InlineFragment)).call(this));

    _this.typeName = typeName;
    _this.selectionSet = selectionSet;
    Object.freeze(_this);
    return _this;
  }

  /**
   * Returns the GraphQL query string for the InlineFragment (e.g. `... on Cat { name }`).
   *
   * @return {String} The GraphQL query string for the InlineFragment.
   */

  createClass(InlineFragment, [{
    key: 'toString',
    value: function toString() {
      return '... on ' + this.typeName + this.selectionSet;
    }
  }]);
  return InlineFragment;
}(Spread);

var FragmentSpread = function (_Spread2) {
  inherits(FragmentSpread, _Spread2);

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Document#defineFragment} to create a FragmentSpread.
   *
   * @param {FragmentDefinition} fragmentDefinition The corresponding fragment definition.
   */
  function FragmentSpread(fragmentDefinition) {
    classCallCheck(this, FragmentSpread);

    var _this2 = possibleConstructorReturn(this, (FragmentSpread.__proto__ || Object.getPrototypeOf(FragmentSpread)).call(this));

    _this2.name = fragmentDefinition.name;
    _this2.selectionSet = fragmentDefinition.selectionSet;
    Object.freeze(_this2);
    return _this2;
  }

  /**
   * Returns the GraphQL query string for the FragmentSpread (e.g. `...catName`).
   *
   * @return {String} The GraphQL query string for the FragmentSpread.
   */

  createClass(FragmentSpread, [{
    key: 'toString',
    value: function toString() {
      return '...' + this.name;
    }
  }, {
    key: 'toDefinition',
    value: function toDefinition() {
      // eslint-disable-next-line no-use-before-define
      return new FragmentDefinition(this.name, this.selectionSet.typeSchema.name, this.selectionSet);
    }
  }]);
  return FragmentSpread;
}(Spread);

var FragmentDefinition = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Document#defineFragment} to create a FragmentDefinition on a {@link Document}.
   *
   * @param {String} name The name of the fragment definition.
   * @param {String} typeName The type of the fragment.
   */
  function FragmentDefinition(name, typeName, selectionSet) {
    classCallCheck(this, FragmentDefinition);

    this.name = name;
    this.typeName = typeName;
    this.selectionSet = selectionSet;
    this.spread = new FragmentSpread(this);
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the FragmentDefinition (e.g. `fragment catName on Cat { name }`).
   *
   * @return {String} The GraphQL query string for the FragmentDefinition.
   */

  createClass(FragmentDefinition, [{
    key: 'toString',
    value: function toString() {
      return 'fragment ' + this.name + ' on ' + this.typeName + ' ' + this.selectionSet;
    }
  }]);
  return FragmentDefinition;
}();

function selectionsHaveIdField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === 'id';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveIdField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function selectionsHaveTypenameField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === '__typename';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveTypenameField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function indexSelectionsByResponseKey(selections) {
  function assignOrPush(obj, key, value) {
    if (Array.isArray(obj[key])) {
      obj[key].push(value);
    } else {
      obj[key] = [value];
    }
  }
  var unfrozenObject = selections.reduce(function (acc, selection) {
    if (selection.responseKey) {
      assignOrPush(acc, selection.responseKey, selection);
    } else {
      var responseKeys = Object.keys(selection.selectionSet.selectionsByResponseKey);

      responseKeys.forEach(function (responseKey) {
        assignOrPush(acc, responseKey, selection);
      });
    }

    return acc;
  }, {});

  Object.keys(unfrozenObject).forEach(function (key) {
    Object.freeze(unfrozenObject[key]);
  });

  return Object.freeze(unfrozenObject);
}

/**
 * Class that specifies the full selection of data to query.
 */

var SelectionSet = function () {

  /**
   * This constructor should not be invoked directly. SelectionSets are created when building queries/mutations.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {(Object|String)} type The type of the current selection.
   * @param {Function} builderFunction Callback function used to build the SelectionSet.
   *   The callback takes a {@link SelectionSetBuilder} as its argument.
   */
  function SelectionSet(typeBundle, type, builderFunction) {
    classCallCheck(this, SelectionSet);

    if (typeof type === 'string') {
      this.typeSchema = schemaForType(typeBundle, type);
    } else {
      this.typeSchema = type;
    }

    trackTypeDependency(this.typeSchema.name);

    this.typeBundle = typeBundle;
    this.selections = [];
    if (builderFunction) {
      // eslint-disable-next-line no-use-before-define
      builderFunction(new SelectionSetBuilder(this.typeBundle, this.typeSchema, this.selections));
    }

    if (this.typeSchema.implementsNode || this.typeSchema.name === 'Node') {
      if (!selectionsHaveIdField(this.selections)) {
        this.selections.unshift(new Field('id', {}, new SelectionSet(typeBundle, 'ID')));
      }
    }

    if (this.typeSchema.kind === 'INTERFACE') {
      if (!selectionsHaveTypenameField(this.selections)) {
        this.selections.unshift(new Field('__typename', {}, new SelectionSet(typeBundle, 'String')));
      }
    }

    this.selectionsByResponseKey = indexSelectionsByResponseKey(this.selections);
    Object.freeze(this.selections);
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the SelectionSet (e.g. `{ cat { name } }`).
   *
   * @return {String} The GraphQL query string for the SelectionSet.
   */

  createClass(SelectionSet, [{
    key: 'toString',
    value: function toString() {
      if (this.typeSchema.kind === 'SCALAR' || this.typeSchema.kind === 'ENUM') {
        return '';
      } else {
        return ' { ' + join(this.selections) + ' }';
      }
    }
  }]);
  return SelectionSet;
}();

var SelectionSetBuilder = function () {

  /**
   * This constructor should not be invoked directly. SelectionSetBuilders are created when building queries/mutations.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {Object} typeSchema The schema object for the type of the current selection.
   * @param {Field[]} selections The fields on the current selection.
   */
  function SelectionSetBuilder(typeBundle, typeSchema, selections) {
    classCallCheck(this, SelectionSetBuilder);

    this.typeBundle = typeBundle;
    this.typeSchema = typeSchema;
    this.selections = selections;
  }

  createClass(SelectionSetBuilder, [{
    key: 'hasSelectionWithResponseKey',
    value: function hasSelectionWithResponseKey(responseKey) {
      return this.selections.some(function (field) {
        return field.responseKey === responseKey;
      });
    }

    /**
     * Adds a field to be queried on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.add('cat', {args: {id: '123456'}, alias: 'meow'}, (cat) => {
     *     cat.add('name');
     *   });
     * });
     *
     * @param {SelectionSet|String} selectionOrFieldName The selection or name of the field to add.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function|SelectionSet} [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'add',
    value: function add(selectionOrFieldName) {
      var selection = void 0;

      if (Object.prototype.toString.call(selectionOrFieldName) === '[object String]') {
        trackFieldDependency(this.typeSchema.name, selectionOrFieldName);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        selection = this.field.apply(this, [selectionOrFieldName].concat(rest));
      } else {
        if (Field.prototype.isPrototypeOf(selectionOrFieldName)) {
          trackFieldDependency(this.typeSchema.name, selectionOrFieldName.name);
        }

        selection = selectionOrFieldName;
      }

      if (selection.responseKey && this.hasSelectionWithResponseKey(selection.responseKey)) {
        throw new Error('The field name or alias \'' + selection.responseKey + '\' has already been added.');
      }
      this.selections.push(selection);
    }
  }, {
    key: 'field',
    value: function field(name) {
      for (var _len2 = arguments.length, creationArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        creationArgs[_key2 - 1] = arguments[_key2];
      }

      var parsedArgs = parseFieldCreationArgs(creationArgs);
      var options = parsedArgs.options,
          callback = parsedArgs.callback;
      var selectionSet = parsedArgs.selectionSet;

      if (!selectionSet) {
        if (!this.typeSchema.fieldBaseTypes[name]) {
          throw new Error('No field of name "' + name + '" found on type "' + this.typeSchema.name + '" in schema');
        }

        var fieldBaseType = schemaForType(this.typeBundle, this.typeSchema.fieldBaseTypes[name]);

        selectionSet = new SelectionSet(this.typeBundle, fieldBaseType, callback);
      }

      return new Field(name, options, selectionSet);
    }

    /**
     * Creates an inline fragment.
     *
     * @access private
     * @param {String} typeName The type  the inline fragment.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     * @return {InlineFragment} An inline fragment.
     */

  }, {
    key: 'inlineFragmentOn',
    value: function inlineFragmentOn(typeName) {
      var builderFunctionOrSelectionSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var selectionSet = void 0;

      if (SelectionSet.prototype.isPrototypeOf(builderFunctionOrSelectionSet)) {
        selectionSet = builderFunctionOrSelectionSet;
      } else {
        selectionSet = new SelectionSet(this.typeBundle, schemaForType(this.typeBundle, typeName), builderFunctionOrSelectionSet);
      }

      return new InlineFragment(typeName, selectionSet);
    }

    /**
     * Adds a field to be queried on the current selection.
     *
     * @access private
     * @param {String}    name The name of the field to add to the query.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function}  [callback] Callback which will be used to create a new {@link SelectionSet} for the field added.
     */

  }, {
    key: 'addField',
    value: function addField(name) {
      for (var _len3 = arguments.length, creationArgs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        creationArgs[_key3 - 1] = arguments[_key3];
      }

      this.add.apply(this, [name].concat(creationArgs));
    }

    /**
     * Adds a connection to be queried on the current selection.
     * This adds all the fields necessary for pagination.
     *
     * @example
     * client.query((root) => {
     *   root.add('cat', (cat) => {
     *     cat.addConnection('friends', {args: {first: 10}, alias: 'coolCats'}, (friends) => {
     *       friends.add('name');
     *     });
     *   });
     * });
     *
     * @param {String}    name The name of the connection to add to the query.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{first: 10}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'addConnection',
    value: function addConnection(name) {
      for (var _len4 = arguments.length, creationArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        creationArgs[_key4 - 1] = arguments[_key4];
      }

      var _parseFieldCreationAr = parseFieldCreationArgs(creationArgs),
          options = _parseFieldCreationAr.options,
          callback = _parseFieldCreationAr.callback,
          selectionSet = _parseFieldCreationAr.selectionSet;

      this.add(name, options, function (connection) {
        connection.add('pageInfo', {}, function (pageInfo) {
          pageInfo.add('hasNextPage');
          pageInfo.add('hasPreviousPage');
        });
        connection.add('edges', {}, function (edges) {
          edges.add('cursor');
          edges.addField('node', {}, selectionSet || callback); // This is bad. Don't do this
        });
      });
    }

    /**
     * Adds an inline fragment on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.add('animal', (animal) => {
     *     animal.addInlineFragmentOn('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {String} typeName The name of the type of the inline fragment.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'addInlineFragmentOn',
    value: function addInlineFragmentOn(typeName) {
      var fieldTypeCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      this.add(this.inlineFragmentOn(typeName, fieldTypeCb));
    }

    /**
     * Adds a fragment spread on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.addFragment(catFragmentSpread);
     * });
     *
     * @param {FragmentSpread} fragmentSpread The fragment spread to add.
     */

  }, {
    key: 'addFragment',
    value: function addFragment(fragmentSpread) {
      this.add(fragmentSpread);
    }
  }]);
  return SelectionSetBuilder;
}();

function parseArgs(args) {
  var name = void 0;
  var variables = void 0;
  var selectionSetCallback = void 0;

  if (args.length === 3) {
    var _args = slicedToArray(args, 3);

    name = _args[0];
    variables = _args[1];
    selectionSetCallback = _args[2];
  } else if (args.length === 2) {
    if (Object.prototype.toString.call(args[0]) === '[object String]') {
      name = args[0];
      variables = null;
    } else if (Array.isArray(args[0])) {
      variables = args[0];
      name = null;
    }

    selectionSetCallback = args[1];
  } else {
    selectionSetCallback = args[0];
    name = null;
  }

  return { name: name, variables: variables, selectionSetCallback: selectionSetCallback };
}

var VariableDefinitions = function () {
  function VariableDefinitions(variableDefinitions) {
    classCallCheck(this, VariableDefinitions);

    this.variableDefinitions = variableDefinitions ? [].concat(toConsumableArray(variableDefinitions)) : [];
    Object.freeze(this.variableDefinitions);
    Object.freeze(this);
  }

  createClass(VariableDefinitions, [{
    key: 'toString',
    value: function toString() {
      if (this.variableDefinitions.length === 0) {
        return '';
      }

      return ' (' + join(this.variableDefinitions) + ') ';
    }
  }]);
  return VariableDefinitions;
}();

/**
 * Base class for {@link Query} and {@link Mutation}.
 * @abstract
 */

var Operation = function () {

  /**
   * This constructor should not be invoked. The subclasses {@link Query} and {@link Mutation} should be used instead.
   */
  function Operation(typeBundle, operationType) {
    classCallCheck(this, Operation);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _parseArgs = parseArgs(args),
        name = _parseArgs.name,
        variables = _parseArgs.variables,
        selectionSetCallback = _parseArgs.selectionSetCallback;

    this.typeBundle = typeBundle;
    this.name = name;
    this.variableDefinitions = new VariableDefinitions(variables);
    this.operationType = operationType;
    if (operationType === 'query') {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.queryType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.queryType);
    } else {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.mutationType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.mutationType);
    }
    Object.freeze(this);
  }

  /**
   * Whether the operation is anonymous (i.e. has no name).
   */

  createClass(Operation, [{
    key: 'toString',

    /**
     * Returns the GraphQL query or mutation string (e.g. `query myQuery { cat { name } }`).
     *
     * @return {String} The GraphQL query or mutation string.
     */
    value: function toString() {
      var nameString = this.name ? ' ' + this.name : '';

      return '' + this.operationType + nameString + this.variableDefinitions + this.selectionSet;
    }
  }, {
    key: 'isAnonymous',
    get: function get$$1() {
      return !this.name;
    }
  }]);
  return Operation;
}();

/**
 * GraphQL Query class.
 * @extends Operation
 */

var Query = function (_Operation) {
  inherits(Query, _Operation);

  /**
   * This constructor should not be invoked directly.
   * Use the factory functions {@link Client#query} or {@link Document#addQuery} to create a Query.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {String} [name] A name for the query.
   * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
   * @param {Function} selectionSetCallback The query builder callback.
   *   A {@link SelectionSet} is created using this callback.
   */
  function Query(typeBundle) {
    var _ref;

    classCallCheck(this, Query);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Query.__proto__ || Object.getPrototypeOf(Query)).call.apply(_ref, [this, typeBundle, 'query'].concat(args)));
  }

  return Query;
}(Operation);

/**
 * GraphQL Mutation class.
 * @extends Operation
 */

var Mutation = function (_Operation) {
  inherits(Mutation, _Operation);

  /**
   * This constructor should not be invoked directly.
   * Use the factory functions {@link Client#mutation} or {@link Document#addMutation} to create a Mutation.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {String} [name] A name for the mutation.
   * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
   * @param {Function} selectionSetCallback The mutation builder callback.
   *   A {@link SelectionSet} is created using this callback.
   */
  function Mutation(typeBundle) {
    var _ref;

    classCallCheck(this, Mutation);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Mutation.__proto__ || Object.getPrototypeOf(Mutation)).call.apply(_ref, [this, typeBundle, 'mutation'].concat(args)));
  }

  return Mutation;
}(Operation);

function isAnonymous(operation) {
  return operation.isAnonymous;
}

function hasAnonymousOperations(operations) {
  return operations.some(isAnonymous);
}

function hasDuplicateOperationNames(operations) {
  var names = operations.map(function (operation) {
    return operation.name;
  });

  return names.reduce(function (hasDuplicates, name, index) {
    return hasDuplicates || names.indexOf(name) !== index;
  }, false);
}

function extractOperation(typeBundle, operationType) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (Operation.prototype.isPrototypeOf(args[0])) {
    return args[0];
  }

  if (operationType === 'query') {
    return new (Function.prototype.bind.apply(Query, [null].concat([typeBundle], args)))();
  } else {
    return new (Function.prototype.bind.apply(Mutation, [null].concat([typeBundle], args)))();
  }
}

function isInvalidOperationCombination(operations) {
  if (operations.length === 1) {
    return false;
  }

  return hasAnonymousOperations(operations) || hasDuplicateOperationNames(operations);
}

function fragmentNameIsNotUnique(existingDefinitions, name) {
  return existingDefinitions.some(function (definition) {
    return definition.name === name;
  });
}

var Document = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#document} to create a Document.
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   */
  function Document(typeBundle) {
    classCallCheck(this, Document);

    this.typeBundle = typeBundle;
    this.definitions = [];
  }

  /**
   * Returns the GraphQL query string for the Document (e.g. `query queryOne { ... } query queryTwo { ... }`).
   *
   * @return {String} The GraphQL query string for the Document.
   */

  createClass(Document, [{
    key: 'toString',
    value: function toString() {
      return join(this.definitions);
    }

    /**
     * Adds an operation to the Document.
     *
     * @private
     * @param {String} operationType The type of the operation. Either 'query' or 'mutation'.
     * @param {(Operation|String)} [query|queryName] Either an instance of an operation
     *   object, or the name of an operation. Both are optional.
     * @param {Object[]} [variables] A list of variables in the operation. See {@link Client#variable}.
     * @param {Function} [callback] The query builder callback. If an operation
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
      */

  }, {
    key: 'addOperation',
    value: function addOperation(operationType) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var operation = extractOperation.apply(undefined, [this.typeBundle, operationType].concat(args));

      if (isInvalidOperationCombination(this.operations.concat(operation))) {
        throw new Error('All operations must be uniquely named on a multi-operation document');
      }

      this.definitions.push(operation);
    }

    /**
     * Adds a query to the Document.
     *
     * @example
     * document.addQuery('myQuery', (root) => {
     *   root.add('cat', (cat) => {
     *    cat.add('name');
     *   });
     * });
     *
     * @param {(Query|String)} [query|queryName] Either an instance of a query
     *   object, or the name of a query. Both are optional.
     * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
     * @param {Function} [callback] The query builder callback. If a query
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
     */

  }, {
    key: 'addQuery',
    value: function addQuery() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.addOperation.apply(this, ['query'].concat(args));
    }

    /**
     * Adds a mutation to the Document.
     *
     * @example
     * const input = client.variable('input', 'CatCreateInput!');
     *
     * document.addMutation('myMutation', [input], (root) => {
     *   root.add('catCreate', {args: {input}}, (catCreate) => {
     *     catCreate.add('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {(Mutation|String)} [mutation|mutationName] Either an instance of a mutation
     *   object, or the name of a mutation. Both are optional.
     * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
     * @param {Function} [callback] The mutation builder callback. If a mutation
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
     */

  }, {
    key: 'addMutation',
    value: function addMutation() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.addOperation.apply(this, ['mutation'].concat(args));
    }

    /**
     * Defines a fragment on the Document.
     *
     * @param {String} name The name of the fragment.
     * @param {String} onType The type the fragment is on.
     * @param {Function} [builderFunction] The query builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {FragmentSpread} A {@link FragmentSpread} to be used with {@link SelectionSetBuilder#addFragment}.
     */

  }, {
    key: 'defineFragment',
    value: function defineFragment(name, onType, builderFunction) {
      if (fragmentNameIsNotUnique(this.fragmentDefinitions, name)) {
        throw new Error('All fragments must be uniquely named on a multi-fragment document');
      }

      var selectionSet = new SelectionSet(this.typeBundle, onType, builderFunction);
      var fragment = new FragmentDefinition(name, onType, selectionSet);

      this.definitions.push(fragment);

      return fragment.spread;
    }

    /**
     * All operations ({@link Query} and {@link Mutation}) on the Document.
     */

  }, {
    key: 'operations',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return Operation.prototype.isPrototypeOf(definition);
      });
    }

    /**
     * All {@link FragmentDefinition}s on the Document.
     */

  }, {
    key: 'fragmentDefinitions',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return FragmentDefinition.prototype.isPrototypeOf(definition);
      });
    }
  }]);
  return Document;
}();

/**
 * The base class used when deserializing response data.
 * Provides rich features, like functions to generate queries to refetch a node or fetch the next page.
 *
 * @class
 */
var GraphModel =

/**
 * @param {Object} attrs Attributes on the GraphModel.
 */
function GraphModel(attrs) {
  var _this = this;

  classCallCheck(this, GraphModel);

  Object.defineProperty(this, 'attrs', { value: attrs, enumerable: false });

  Object.keys(this.attrs).filter(function (key) {
    return !(key in _this);
  }).forEach(function (key) {
    var descriptor = void 0;

    if (attrs[key] === null) {
      descriptor = {
        enumerable: true,
        get: function get$$1() {
          return null;
        }
      };
    } else {
      descriptor = {
        enumerable: true,
        get: function get$$1() {
          return this.attrs[key].valueOf();
        }
      };
    }
    Object.defineProperty(_this, key, descriptor);
  });
};

/**
 * A registry of classes used to deserialize the response data. Uses {@link GraphModel} by default.
 */

var ClassRegistry = function () {
  function ClassRegistry() {
    classCallCheck(this, ClassRegistry);

    this.classStore = {};
  }

  /**
   * Registers a class for a GraphQL type in the registry.
   *
   * @param {Class} constructor The constructor of the class.
   * @param {String} type The GraphQL type of the object to deserialize into the class.
   */

  createClass(ClassRegistry, [{
    key: 'registerClassForType',
    value: function registerClassForType(constructor, type) {
      this.classStore[type] = constructor;
    }

    /**
     * Unregisters a class for a GraphQL type in the registry.
     *
     * @param {String} type The GraphQL type to unregister.
     */

  }, {
    key: 'unregisterClassForType',
    value: function unregisterClassForType(type) {
      delete this.classStore[type];
    }

    /**
     * Returns the class for the given GraphQL type.
     *
     * @param {String} type The GraphQL type to look up.
     * @return {Class|GraphModel} The class for the given GraphQL type. Defaults to {@link GraphModel} if no class is registered for the GraphQL type.
     */

  }, {
    key: 'classForType',
    value: function classForType(type) {
      return this.classStore[type] || GraphModel;
    }
  }]);
  return ClassRegistry;
}();

function isValue(arg) {
  return Object.prototype.toString.call(arg) !== '[object Null]' && Object.prototype.toString.call(arg) !== '[object Undefined]';
}

function isNodeContext(context) {
  return context.selection.selectionSet.typeSchema.implementsNode;
}

function isConnection(context) {
  return context.selection.selectionSet.typeSchema.name.endsWith('Connection');
}

function nearestNode(context) {
  if (context == null) {
    return null;
  } else if (isNodeContext(context)) {
    return context;
  } else {
    return nearestNode(context.parent);
  }
}

function contextsFromRoot(context) {
  if (context.parent) {
    return contextsFromRoot(context.parent).concat(context);
  } else {
    return [context];
  }
}

function contextsFromNearestNode(context) {
  if (context.selection.selectionSet.typeSchema.implementsNode) {
    return [context];
  } else {
    return contextsFromNearestNode(context.parent).concat(context);
  }
}

function initializeDocumentAndVars(currentContext, contextChain) {
  var lastInChain = contextChain[contextChain.length - 1];
  var first = lastInChain.selection.args.first;
  var variableDefinitions = Object.keys(lastInChain.selection.args).filter(function (key) {
    return isVariable(lastInChain.selection.args[key]);
  }).map(function (key) {
    return lastInChain.selection.args[key];
  });

  var firstVar = variableDefinitions.find(function (definition) {
    return definition.name === 'first';
  });

  if (!firstVar) {
    if (isVariable(first)) {
      firstVar = first;
    } else {
      firstVar = variable('first', 'Int', first);
      variableDefinitions.push(firstVar);
    }
  }

  var document = new Document(currentContext.selection.selectionSet.typeBundle);

  return [document, variableDefinitions, firstVar];
}

function addNextFieldTo(currentSelection, contextChain, path, cursor) {
  // There are always at least two. When we start, it's the root context, and the first set
  var nextContext = contextChain.shift();

  path.push(nextContext.selection.responseKey);

  if (contextChain.length) {
    currentSelection.add(nextContext.selection.name, { alias: nextContext.selection.alias, args: nextContext.selection.args }, function (newSelection) {
      addNextFieldTo(newSelection, contextChain, path, cursor);
    });
  } else {
    var edgesField = nextContext.selection.selectionSet.selections.find(function (field) {
      return field.name === 'edges';
    });
    var nodeField = edgesField.selectionSet.selections.find(function (field) {
      return field.name === 'node';
    });
    var first = void 0;

    if (isVariable(nextContext.selection.args.first)) {
      first = nextContext.selection.args.first;
    } else {
      first = variable('first', 'Int', nextContext.selection.args.first);
    }

    var options = {
      alias: nextContext.selection.alias,
      args: Object.assign({}, nextContext.selection.args, { after: cursor, first: first })
    };

    currentSelection.addConnection(nextContext.selection.name, options, nodeField.selectionSet);
  }
}

function collectFragments(selections) {
  return selections.reduce(function (fragmentDefinitions, field) {
    if (FragmentSpread.prototype.isPrototypeOf(field)) {
      fragmentDefinitions.push(field.toDefinition());
    }

    fragmentDefinitions.push.apply(fragmentDefinitions, toConsumableArray(collectFragments(field.selectionSet.selections)));

    return fragmentDefinitions;
  }, []);
}

function nextPageQueryAndPath(context, cursor) {
  var nearestNodeContext = nearestNode(context);

  if (nearestNodeContext) {
    return function () {
      var _document$definitions;

      var path = [];
      var nodeType = nearestNodeContext.selection.selectionSet.typeSchema;
      var nodeId = nearestNodeContext.responseData.id;
      var contextChain = contextsFromNearestNode(context);

      var _initializeDocumentAn = initializeDocumentAndVars(context, contextChain),
          _initializeDocumentAn2 = slicedToArray(_initializeDocumentAn, 2),
          document = _initializeDocumentAn2[0],
          variableDefinitions = _initializeDocumentAn2[1];

      document.addQuery(variableDefinitions, function (root) {
        path.push('node');
        root.add('node', { args: { id: nodeId } }, function (node) {
          node.addInlineFragmentOn(nodeType.name, function (fragment) {
            addNextFieldTo(fragment, contextChain.slice(1), path, cursor);
          });
        });
      });

      var fragments = collectFragments(document.operations[0].selectionSet.selections);

      (_document$definitions = document.definitions).unshift.apply(_document$definitions, toConsumableArray(fragments));

      return [document, path];
    };
  } else {
    return function () {
      var _document$definitions2;

      var path = [];
      var contextChain = contextsFromRoot(context);

      var _initializeDocumentAn3 = initializeDocumentAndVars(context, contextChain),
          _initializeDocumentAn4 = slicedToArray(_initializeDocumentAn3, 2),
          document = _initializeDocumentAn4[0],
          variableDefinitions = _initializeDocumentAn4[1];

      document.addQuery(variableDefinitions, function (root) {
        addNextFieldTo(root, contextChain.slice(1), path, cursor);
      });

      var fragments = collectFragments(document.operations[0].selectionSet.selections);

      (_document$definitions2 = document.definitions).unshift.apply(_document$definitions2, toConsumableArray(fragments));

      return [document, path];
    };
  }
}

function hasNextPage$1(connection, edge) {
  if (edge !== connection.edges[connection.edges.length - 1]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasNextPage;
}

function hasPreviousPage(connection, edge) {
  if (edge !== connection.edges[0]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasPreviousPage;
}

function transformConnections(variableValues) {
  return function (context, value) {
    if (isConnection(context)) {
      if (!(value.pageInfo && value.pageInfo.hasOwnProperty('hasNextPage') && value.pageInfo.hasOwnProperty('hasPreviousPage'))) {
        throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
      }

      return value.edges.map(function (edge) {
        return Object.assign(edge.node, {
          nextPageQueryAndPath: nextPageQueryAndPath(context, edge.cursor),
          hasNextPage: hasNextPage$1(value, edge),
          hasPreviousPage: hasPreviousPage(value, edge),
          variableValues: variableValues
        });
      });
    } else {
      return value;
    }
  };
}

/* eslint-disable no-warning-comments */
var DecodingContext = function () {
  function DecodingContext(selection, responseData) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    classCallCheck(this, DecodingContext);

    this.selection = selection;
    this.responseData = responseData;
    this.parent = parent;
    Object.freeze(this);
  }

  createClass(DecodingContext, [{
    key: 'contextForObjectProperty',
    value: function contextForObjectProperty(responseKey) {
      var nestedSelections = this.selection.selectionSet.selectionsByResponseKey[responseKey];
      var nextSelection = nestedSelections && nestedSelections[0];
      var nextContext = void 0;

      // fragment spreads operate inside the current context, so we recurse to get the proper
      // selection set, but retain the current response context
      if (Spread.prototype.isPrototypeOf(nextSelection)) {
        nextContext = new DecodingContext(nextSelection, this.responseData, this.parent);
      } else {
        nextContext = new DecodingContext(nextSelection, this.responseData[responseKey], this);
      }

      if (!nextSelection) {
        throw new Error('Unexpected response key "' + responseKey + '", not found in selection set: ' + this.selection.selectionSet);
      }

      if (Field.prototype.isPrototypeOf(nextSelection)) {
        return nextContext;
      } else {
        return nextContext.contextForObjectProperty(responseKey);
      }
    }
  }, {
    key: 'contextForArrayItem',
    value: function contextForArrayItem(item) {
      return new DecodingContext(this.selection, item, this.parent);
    }
  }]);
  return DecodingContext;
}();

function decodeArrayItems(context, transformers) {
  return context.responseData.map(function (item) {
    return decodeContext(context.contextForArrayItem(item), transformers);
  });
}

function decodeObjectValues(context, transformers) {
  return Object.keys(context.responseData).reduce(function (acc, responseKey) {
    acc[responseKey] = decodeContext(context.contextForObjectProperty(responseKey), transformers);

    return acc;
  }, {});
}

function runTransformers(transformers, context, value) {
  return transformers.reduce(function (acc, transformer) {
    return transformer(context, acc);
  }, value);
}

function decodeContext(context, transformers) {
  var value = context.responseData;

  if (Array.isArray(value)) {
    value = decodeArrayItems(context, transformers);
  } else if (isObject(value)) {
    value = decodeObjectValues(context, transformers);
  }

  return runTransformers(transformers, context, value);
}

function generateRefetchQueries(context, value) {
  if (isValue(value) && isNodeContext(context)) {
    value.refetchQuery = function () {
      return new Query(context.selection.selectionSet.typeBundle, function (root) {
        root.add('node', { args: { id: context.responseData.id } }, function (node) {
          node.addInlineFragmentOn(context.selection.selectionSet.typeSchema.name, context.selection.selectionSet);
        });
      });
    };
  }

  return value;
}

function transformPojosToClassesWithRegistry(classRegistry) {
  return function transformPojosToClasses(context, value) {
    if (isObject(value)) {
      var Klass = classRegistry.classForType(context.selection.selectionSet.typeSchema.name);

      return new Klass(value);
    } else {
      return value;
    }
  };
}

function transformScalars(context, value) {
  if (isValue(value)) {
    if (context.selection.selectionSet.typeSchema.kind === 'SCALAR') {
      return new Scalar(value);
    } else if (context.selection.selectionSet.typeSchema.kind === 'ENUM') {
      return new Enum(value);
    }
  }

  return value;
}

function recordTypeInformation(context, value) {
  var _context$selection$se = context.selection.selectionSet,
      typeBundle = _context$selection$se.typeBundle,
      typeSchema = _context$selection$se.typeSchema;

  if (isValue(value)) {
    if (value.__typename) {
      value.type = schemaForType(typeBundle, value.__typename, typeSchema);
    } else {
      value.type = typeSchema;
    }
  }

  return value;
}

function defaultTransformers(_ref) {
  var _ref$classRegistry = _ref.classRegistry,
      classRegistry = _ref$classRegistry === undefined ? new ClassRegistry() : _ref$classRegistry,
      variableValues = _ref.variableValues;

  return [transformScalars, generateRefetchQueries, transformConnections(variableValues), recordTypeInformation, transformPojosToClassesWithRegistry(classRegistry)];
}

/**
 * A function used to decode the response data.
 *
 * @function decode
 * @param {SelectionSet} selection The selection set used to query the response data.
 * @param {Object} responseData The response data returned.
 * @param {Object} [options] Options to use when decoding including:
 *   @param {ClassRegistry} [options.classRegistry] A class registry to use when deserializing the data into classes.
 * @return {GraphModel} The decoded response data.
 */
function decode(selection, responseData) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var transformers = options.transformers || defaultTransformers(options);
  var context = new DecodingContext(selection, responseData);

  return decodeContext(context, transformers);
}

function httpFetcher(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function fetcher(graphQLParams, headers) {
    return fetch(url, _extends({
      body: JSON.stringify(graphQLParams),
      method: 'POST',
      mode: 'cors'
    }, options, {
      headers: _extends({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, options.headers, headers)
    })).then(function (response) {
      var contentType = response.headers.get('content-type');

      if (contentType.indexOf('application/json') > -1) {
        return response.json();
      }

      return response.text().then(function (text) {
        return { text: text };
      });
    });
  };
}

function hasNextPage(paginatedModels) {
  return paginatedModels && paginatedModels.length && paginatedModels[paginatedModels.length - 1].hasNextPage;
}

/**
 * The Client class used to create and send GraphQL documents, fragments, queries and mutations.
 */

var Client$2 = function () {

  /**
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {Object} options An options object. Must include either `url` and optional `fetcherOptions` OR a `fetcher` function.
   *   @param {(String|Function)} options.url|fetcher Either the URL of the GraphQL API endpoint, or a custom fetcher function for further customization.
   *   @param {Object} [options.fetcherOptions] Additional options to use with `fetch`, like headers. Do not specify this argument if `fetcher` is specified.
   *   @param {ClassRegistry} [options.registry=new ClassRegistry()] A {@link ClassRegistry} used to decode the response data.
   */
  function Client(typeBundle, _ref) {
    var url = _ref.url,
        fetcherOptions = _ref.fetcherOptions,
        fetcher = _ref.fetcher,
        _ref$registry = _ref.registry,
        registry = _ref$registry === undefined ? new ClassRegistry() : _ref$registry;
    classCallCheck(this, Client);

    this.typeBundle = typeBundle;
    this.classRegistry = registry;

    if (url && fetcher) {
      throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');
    }

    if (url) {
      this.fetcher = httpFetcher(url, fetcherOptions);
    } else if (fetcher) {
      if (fetcherOptions) {
        throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');
      }

      this.fetcher = fetcher;
    } else {
      throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.');
    }
  }

  /**
   * Creates a GraphQL document.
   *
   * @example
   * const document = client.document();
   *
   * @return {Document} A GraphQL document.
   */

  createClass(Client, [{
    key: 'document',
    value: function document() {
      return new Document(this.typeBundle);
    }

    /**
     * Creates a GraphQL query.
     *
     * @example
     * const query = client.query('myQuery', (root) => {
     *   root.add('cat', (cat) => {
     *    cat.add('name');
     *   });
     * });
     *
     * @param {String} [name] A name for the query.
     * @param {VariableDefinition[]} [variables] A list of variables in the query. See {@link Client#variable}.
     * @param {Function} selectionSetCallback The query builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {Query} A GraphQL query.
     */

  }, {
    key: 'query',
    value: function query() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Query, [null].concat([this.typeBundle], args)))();
    }

    /**
     * Creates a GraphQL mutation.
     *
     * @example
     * const input = client.variable('input', 'CatCreateInput!');
     *
     * const mutation = client.mutation('myMutation', [input], (root) => {
     *   root.add('catCreate', {args: {input}}, (catCreate) => {
     *     catCreate.add('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {String} [name] A name for the mutation.
     * @param {VariableDefinition[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
     * @param {Function} selectionSetCallback The mutation builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {Mutation} A GraphQL mutation.
     */

  }, {
    key: 'mutation',
    value: function mutation() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new (Function.prototype.bind.apply(Mutation, [null].concat([this.typeBundle], args)))();
    }

    /**
     * Sends a GraphQL operation (query or mutation) or a document.
     *
     * @example
     * client.send(query, {id: '12345'}).then((result) => {
     *   // Do something with the returned result
     *   console.log(result);
     * });
     *
     * @param {(Query|Mutation|Document|Function)} request The operation or document to send. If represented
     * as a function, it must return `Query`, `Mutation`, or `Document` and recieve the client as the only param.
     * @param {Object} [variableValues] The values for variables in the operation or document.
     * @param {Object} [otherProperties] Other properties to send with the query. For example, a custom operation name.
     * @param {Object} [headers] Additional headers to be applied on a request by request basis.
     * @return {Promise.<Object>} A promise resolving to an object containing the response data.
     */

  }, {
    key: 'send',
    value: function send(request) {
      var variableValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      var otherProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var operationOrDocument = void 0;

      if (Function.prototype.isPrototypeOf(request)) {
        operationOrDocument = request(this);
      } else {
        operationOrDocument = request;
      }

      var graphQLParams = { query: operationOrDocument.toString() };

      if (variableValues) {
        graphQLParams.variables = variableValues;
      }

      Object.assign(graphQLParams, otherProperties);

      var operation = void 0;

      if (Operation.prototype.isPrototypeOf(operationOrDocument)) {
        operation = operationOrDocument;
      } else {
        var document = operationOrDocument;

        if (document.operations.length === 1) {
          operation = document.operations[0];
        } else if (otherProperties.operationName) {
          operation = document.operations.find(function (documentOperation) {
            return documentOperation.name === otherProperties.operationName;
          });
        } else {
          throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ');
        }
      }

      return this.fetcher(graphQLParams, headers).then(function (response) {
        if (response.data) {
          response.model = decode(operation, response.data, {
            classRegistry: _this.classRegistry,
            variableValues: variableValues
          });
        }

        return response;
      });
    }

    /**
     * Fetches the next page of a paginated node or array of nodes.
     *
     * @example
     * client.fetchNextPage(node, {first: 10}).then((result) => {
     *   // Do something with the next page
     *   console.log(result);
     * });
     *
     * @param {(GraphModel|GraphModel[])} nodeOrNodes The node or list of nodes on which to fetch the next page.
     * @param {Object} [options] Options object containing:
     *   @param {Integer} [options.first] The number of nodes to query on the next page. Defaults to the page size of the previous query.
     * @return {Promise.<GraphModel[]>} A promise resolving with the next page of {@link GraphModel}s.
     */

  }, {
    key: 'fetchNextPage',
    value: function fetchNextPage(nodeOrNodes, options) {
      var node = void 0;

      if (Array.isArray(nodeOrNodes)) {
        node = nodeOrNodes[nodeOrNodes.length - 1];
      } else {
        node = nodeOrNodes;
      }

      var _node$nextPageQueryAn = node.nextPageQueryAndPath(),
          _node$nextPageQueryAn2 = slicedToArray(_node$nextPageQueryAn, 2),
          query = _node$nextPageQueryAn2[0],
          path = _node$nextPageQueryAn2[1];

      var variableValues = void 0;

      if (node.variableValues || options) {
        variableValues = Object.assign({}, node.variableValues, options);
      }

      return this.send(query, variableValues).then(function (response) {
        response.model = path.reduce(function (object, key) {
          return object[key];
        }, response.model);

        return response;
      });
    }

    /**
     * Fetches all subsequent pages of a paginated array of nodes.
     *
     * @example
     * client.fetchAllPages(nodes, {pageSize: 20}).then((result) => {
     *   // Do something with all the models
     *   console.log(result);
     * });
     *
     * @param {GraphModel[]} paginatedModels The list of nodes on which to fetch all pages.
     * @param {Object} options Options object containing:
     *   @param {Integer} options.pageSize The number of nodes to query on each page.
     * @return {Promise.<GraphModel[]>} A promise resolving with all pages of {@link GraphModel}s, including the original list.
     */

  }, {
    key: 'fetchAllPages',
    value: function fetchAllPages(paginatedModels, _ref2) {
      var _this2 = this;

      var pageSize = _ref2.pageSize;

      if (hasNextPage(paginatedModels)) {
        return this.fetchNextPage(paginatedModels, { first: pageSize }).then(function (_ref3) {
          var model = _ref3.model;

          var pages = paginatedModels.concat(model);

          return _this2.fetchAllPages(pages, { pageSize: pageSize });
        });
      }

      return Promise.resolve(paginatedModels);
    }

    /**
     * Refetches a {@link GraphModel} whose type implements `Node`.
     *
     * @example
     * client.refetch(node).then((result) => {
     *   // Do something with the refetched node
     *   console.log(result);
     * });
     *
     * @param {GraphModel} nodeType A {@link GraphModel} whose type implements `Node`.
     * @return {Promise.<GraphModel>} The refetched {@link GraphModel}.
     */

  }, {
    key: 'refetch',
    value: function refetch(nodeType) {
      if (!nodeType) {
        throw new Error('\'client#refetch\' must be called with a non-null instance of a Node.');
      } else if (!nodeType.type.implementsNode) {
        throw new Error('\'client#refetch\' must be called with a type that implements Node. Received ' + nodeType.type.name + '.');
      }

      return this.send(nodeType.refetchQuery()).then(function (_ref4) {
        var model = _ref4.model;
        return model.node;
      });
    }

    /**
     * Creates a variable to be used in a {@link Query} or {@link Mutation}.
     *
     * @example
     * const idVariable = client.variable('id', 'ID!', '12345');
     *
     * @param {String} name The name of the variable.
     * @param {String} type The GraphQL type of the variable.
     * @param {*} [defaultValue] The default value of the variable.
     * @return {VariableDefinition} A variable object that can be used in a {@link Query} or {@link Mutation}.
     */

  }, {
    key: 'variable',
    value: function variable$$1(name, type, defaultValue) {
      return variable(name, type, defaultValue);
    }

    /**
     * Creates an enum to be used in a {@link Query} or {@link Mutation}.
     *
     * @example
     * const titleEnum = client.enum('TITLE');
     *
     * @param {String} key The key of the enum.
     * @return {Enum} An enum object that can be used in a {@link Query} or {@link Mutation}.
     */

  }, {
    key: 'enum',
    value: function _enum(key) {
      return enumFunction(key);
    }
  }]);
  return Client;
}();

/**
 * The class used to configure the JS Buy SDK Client.
 * @class
 */
var Config = function () {
  createClass$1(Config, [{
    key: 'requiredProperties',


    /**
     * Properties that must be set on initializations
     * @attribute requiredProperties
     * @default ['storefrontAccessToken', 'domain']
     * @type Array
     * @private
     */
    get: function get$$1() {
      return ['storefrontAccessToken', 'domain'];
    }

    /**
     * Deprecated properties that map directly to required properties
     * @attribute deprecatedProperties
     * @default {'accessToken': 'storefrontAccessToken', 'apiKey': 'storefrontAccessToken'}
     * @type Object
     * @private
     */

  }, {
    key: 'deprecatedProperties',
    get: function get$$1() {
      return {
        accessToken: 'storefrontAccessToken',
        apiKey: 'storefrontAccessToken'
      };
    }

    /**
     * @constructs Config
     * @param {Object} attrs An object specifying the configuration. Requires the following properties:
     *   @param {String} attrs.storefrontAccessToken The {@link https://help.shopify.com/api/reference/storefront_access_token|Storefront access token} for the shop.
     *   @param {String} attrs.domain The `myshopify` domain for the shop (e.g. `graphql.myshopify.com`).
     */

  }]);

  function Config(attrs) {
    var _this = this;

    classCallCheck$1(this, Config);

    Object.keys(this.deprecatedProperties).forEach(function (key) {
      if (!attrs.hasOwnProperty(key)) {
        return;
      }
      // eslint-disable-next-line no-console
      console.warn('[ShopifyBuy] Config property ' + key + ' is deprecated as of v1.0, please use ' + _this.deprecatedProperties[key] + ' instead.');
      attrs[_this.deprecatedProperties[key]] = attrs[key];
    });

    this.requiredProperties.forEach(function (key) {
      if (attrs.hasOwnProperty(key)) {
        _this[key] = attrs[key];
      } else {
        throw new Error('new Config() requires the option \'' + key + '\'');
      }
    });

    if (attrs.hasOwnProperty('apiVersion')) {
      this.apiVersion = attrs.apiVersion;
    } else {
      this.apiVersion = '2020-07';
    }

    if (attrs.hasOwnProperty('source')) {
      this.source = attrs.source;
    }

    if (attrs.hasOwnProperty('language')) {
      this.language = attrs.language;
    }
  }

  return Config;
}();

var Resource = function Resource(client) {
  classCallCheck$1(this, Resource);

  this.graphQLClient = client;
};

var defaultErrors = [{ message: 'an unknown error has occurred.' }];

function defaultResolver(path) {
  var keys = path.split('.');

  return function (_ref) {
    var model = _ref.model,
        errors = _ref.errors;

    return new Promise(function (resolve, reject) {
      try {
        var result = keys.reduce(function (ref, key) {
          return ref[key];
        }, model);

        resolve(result);
      } catch (_) {
        if (errors) {
          reject(errors);
        } else {
          reject(defaultErrors);
        }
      }
    });
  };
}

function fetchResourcesForProducts(productOrProduct, client) {
  var products = [].concat(productOrProduct);

  return Promise.all(products.reduce(function (promiseAcc, product) {

    // If the graphql query doesn't find a match, skip fetching variants and images.
    if (product === null) {
      return promiseAcc;
    }

    // Fetch the rest of the images and variants for this product
    promiseAcc.push(client.fetchAllPages(product.images, { pageSize: 250 }).then(function (images) {
      product.attrs.images = images;
    }));

    promiseAcc.push(client.fetchAllPages(product.variants, { pageSize: 250 }).then(function (variants) {
      product.attrs.variants = variants;
    }));

    return promiseAcc;
  }, []));
}

function paginateProductConnectionsAndResolve(client) {
  return function (products) {
    return fetchResourcesForProducts(products, client).then(function () {
      return products;
    });
  };
}

function paginateCollectionsProductConnectionsAndResolve(client) {
  return function (collectionOrCollections) {
    var collections = [].concat(collectionOrCollections);

    return Promise.all(collections.reduce(function (promiseAcc, collection) {
      return promiseAcc.concat(fetchResourcesForProducts(collection.products, client));
    }, [])).then(function () {
      return collectionOrCollections;
    });
  };
}

/**
 * @namespace ProductHelpers
 */
var productHelpers = {

  /**
   * Returns the variant of a product corresponding to the options given.
   *
   * @example
   * const selectedVariant = client.product.helpers.variantForOptions(product, {
   *   size: "Small",
   *   color: "Red"
   * });
   *
   * @memberof ProductHelpers
   * @method variantForOptions
   * @param {GraphModel} product The product to find the variant on. Must include `variants`.
   * @param {Object} options An object containing the options for the variant.
   * @return {GraphModel} The variant corresponding to the options given.
   */
  variantForOptions: function variantForOptions(product, options) {
    return product.variants.find(function (variant) {
      return variant.selectedOptions.every(function (selectedOption) {
        return options[selectedOption.name] === selectedOption.value.valueOf();
      });
    });
  }
};

function query(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.ProductFragment);
    });
  });
  return document;
}

function query$1(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.ids = client.variable("ids", "[ID!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.ids], function (root) {
    root.add("nodes", {
      args: {
        ids: variables.__defaultOperation__.ids
      }
    }, function (nodes) {
      nodes.addFragment(spreads.ProductFragment);
    });
  });
  return document;
}

function query$2(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "ProductSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
    root.add("products", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (products) {
      products.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      products.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
    });
  });
  return document;
}

function query$3(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.handle = client.variable("handle", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.handle], function (root) {
    root.add("productByHandle", {
      args: {
        handle: variables.__defaultOperation__.handle
      }
    }, function (productByHandle) {
      productByHandle.addFragment(spreads.ProductFragment);
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK product resource
 * @class
 */

var ProductResource = function (_Resource) {
  inherits$1(ProductResource, _Resource);

  function ProductResource() {
    classCallCheck$1(this, ProductResource);
    return possibleConstructorReturn$1(this, (ProductResource.__proto__ || Object.getPrototypeOf(ProductResource)).apply(this, arguments));
  }

  createClass$1(ProductResource, [{
    key: 'fetchAll',


    /**
     * Fetches all products on the shop.
     *
     * @example
     * client.product.fetchAll().then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {Int} [pageSize] The number of products to fetch per page
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */
    value: function fetchAll() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return this.graphQLClient.send(query$2, { first: first }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single product by ID on the shop.
     *
     * @example
     * client.product.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==').then((product) => {
     *   // Do something with the product
     * });
     *
     * @param {String} id The id of the product to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetch',
    value: function fetch(id) {
      return this.graphQLClient.send(query, { id: id }).then(defaultResolver('node')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches multiple products by ID on the shop.
     *
     * @example
     * const ids = ['Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ='];
     * client.product.fetchMultiple(ids).then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {String[]} ids The ids of the products to fetch
     * @return {Promise|GraphModel[]} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetchMultiple',
    value: function fetchMultiple(ids) {
      return this.graphQLClient.send(query$1, { ids: ids }).then(defaultResolver('nodes')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single product by handle on the shop.
     *
     * @example
     * client.product.fetchByHandle('my-product').then((product) => {
     *   // Do something with the product
     * });
     *
     * @param {String} handle The handle of the product to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetchByHandle',
    value: function fetchByHandle(handle) {
      return this.graphQLClient.send(query$3, { handle: handle }).then(defaultResolver('productByHandle')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches all products on the shop that match the query.
     *
     * @example
     * client.product.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((products) => {
     *   // Do something with the first 10 products sorted by title in ascending order
     * });
     *
     * @param {Object} [args] An object specifying the query data containing zero or more of:
     *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
     *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
     *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/productsortkeys|Product Sort Keys}.
     *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#products|here}
     *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */

  }, {
    key: 'fetchQuery',
    value: function fetchQuery() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$first = _ref.first,
          first = _ref$first === undefined ? 20 : _ref$first,
          _ref$sortKey = _ref.sortKey,
          sortKey = _ref$sortKey === undefined ? 'ID' : _ref$sortKey,
          query$$1 = _ref.query,
          reverse = _ref.reverse;

      return this.graphQLClient.send(query$2, {
        first: first,
        sortKey: sortKey,
        query: query$$1,
        reverse: reverse
      }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }
  }, {
    key: 'helpers',
    get: function get$$1() {
      return productHelpers;
    }
  }]);
  return ProductResource;
}(Resource);

function query$4(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CollectionFragment);
    });
  });
  return document;
}

function query$5(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id, variables.__defaultOperation__.productsFirst], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CollectionFragment);
      node.addInlineFragmentOn("Collection", function (Collection) {
        Collection.add("products", {
          args: {
            first: variables.__defaultOperation__.productsFirst
          }
        }, function (products) {
          products.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
    });
  });
  return document;
}

function query$6(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
    root.add("collections", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (collections) {
      collections.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      collections.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CollectionFragment);
        });
      });
    });
  });
  return document;
}

function query$7(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse, variables.__defaultOperation__.productsFirst], function (root) {
    root.add("collections", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (collections) {
      collections.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      collections.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CollectionFragment);
          node.add("products", {
            args: {
              first: variables.__defaultOperation__.productsFirst
            }
          }, function (products) {
            products.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            products.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.addFragment(spreads.ProductFragment);
              });
            });
          });
        });
      });
    });
  });
  return document;
}

function query$8(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.handle = client.variable("handle", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.CollectionsProductsFragment = document.defineFragment("CollectionsProductsFragment", "Collection", function (root) {
    root.add("products", {
      args: {
        first: 20
      }
    }, function (products) {
      products.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      products.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.handle], function (root) {
    root.add("collectionByHandle", {
      args: {
        handle: variables.__defaultOperation__.handle
      }
    }, function (collectionByHandle) {
      collectionByHandle.addFragment(spreads.CollectionFragment);
      collectionByHandle.addFragment(spreads.CollectionsProductsFragment);
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK collection resource
 * @class
 */

var CollectionResource = function (_Resource) {
  inherits$1(CollectionResource, _Resource);

  function CollectionResource() {
    classCallCheck$1(this, CollectionResource);
    return possibleConstructorReturn$1(this, (CollectionResource.__proto__ || Object.getPrototypeOf(CollectionResource)).apply(this, arguments));
  }

  createClass$1(CollectionResource, [{
    key: 'fetchAll',


    /**
     * Fetches all collections on the shop, not including products.
     * To fetch collections with products use [fetchAllsWithProducts]{@link Client#fetchAllsWithProducts}.
     *
     * @example
     * client.collection.fetchAll().then((collections) => {
     *   // Do something with the collections
     * });
     *
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */
    value: function fetchAll() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return this.graphQLClient.send(query$6, { first: first }).then(defaultResolver('collections'));
    }

    /**
     * Fetches all collections on the shop, including products.
     *
     * @example
     * client.collection.fetchAllWithProducts().then((collections) => {
     *   // Do something with the collections
     * });
     *
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */

  }, {
    key: 'fetchAllWithProducts',
    value: function fetchAllWithProducts() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$first = _ref.first,
          first = _ref$first === undefined ? 20 : _ref$first,
          _ref$productsFirst = _ref.productsFirst,
          productsFirst = _ref$productsFirst === undefined ? 20 : _ref$productsFirst;

      return this.graphQLClient.send(query$7, { first: first, productsFirst: productsFirst }).then(defaultResolver('collections')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single collection by ID on the shop, not including products.
     * To fetch the collection with products use [fetchWithProducts]{@link Client#fetchWithProducts}.
     *
     * @example
     * client.collection.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} id The id of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetch',
    value: function fetch(id) {
      return this.graphQLClient.send(query$4, { id: id }).then(defaultResolver('node'));
    }

    /**
     * Fetches a single collection by ID on the shop, including products.
     *
     * @example
     * client.collection.fetchWithProducts('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} id The id of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetchWithProducts',
    value: function fetchWithProducts(id) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$productsFirst = _ref2.productsFirst,
          productsFirst = _ref2$productsFirst === undefined ? 20 : _ref2$productsFirst;

      return this.graphQLClient.send(query$5, { id: id, productsFirst: productsFirst }).then(defaultResolver('node')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a collection by handle on the shop.
     *
     * @example
     * client.collection.fetchByHandle('my-collection').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} handle The handle of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetchByHandle',
    value: function fetchByHandle(handle) {
      return this.graphQLClient.send(query$8, { handle: handle }).then(defaultResolver('collectionByHandle'));
    }

    /**
     * Fetches all collections on the shop that match the query.
     *
     * @example
     * client.collection.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((collections) => {
     *   // Do something with the first 10 collections sorted by title in ascending order
     * });
     *
     * @param {Object} [args] An object specifying the query data containing zero or more of:
     *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
     *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
     *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/collectionsortkeys|Collection Sort Keys}.
     *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#collections|here}
     *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */

  }, {
    key: 'fetchQuery',
    value: function fetchQuery() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$first = _ref3.first,
          first = _ref3$first === undefined ? 20 : _ref3$first,
          _ref3$sortKey = _ref3.sortKey,
          sortKey = _ref3$sortKey === undefined ? 'ID' : _ref3$sortKey,
          query = _ref3.query,
          reverse = _ref3.reverse;

      return this.graphQLClient.send(query$6, {
        first: first,
        sortKey: sortKey,
        query: query,
        reverse: reverse
      }).then(defaultResolver('collections'));
    }
  }]);
  return CollectionResource;
}(Resource);

function query$9(client) {
  var document = client.document();
  document.addQuery(function (root) {
    root.add("shop", function (shop) {
      shop.add("currencyCode");
      shop.add("paymentSettings", function (paymentSettings) {
        paymentSettings.add("enabledPresentmentCurrencies");
      });
      shop.add("description");
      shop.add("moneyFormat");
      shop.add("name");
      shop.add("primaryDomain", function (primaryDomain) {
        primaryDomain.add("host");
        primaryDomain.add("sslEnabled");
        primaryDomain.add("url");
      });
    });
  });
  return document;
}

function query$10(client) {
  var document = client.document();
  var spreads = {};
  spreads.PolicyFragment = document.defineFragment("PolicyFragment", "ShopPolicy", function (root) {
    root.add("id");
    root.add("title");
    root.add("url");
    root.add("body");
  });
  document.addQuery(function (root) {
    root.add("shop", function (shop) {
      shop.add("privacyPolicy", function (privacyPolicy) {
        privacyPolicy.addFragment(spreads.PolicyFragment);
      });
      shop.add("termsOfService", function (termsOfService) {
        termsOfService.addFragment(spreads.PolicyFragment);
      });
      shop.add("refundPolicy", function (refundPolicy) {
        refundPolicy.addFragment(spreads.PolicyFragment);
      });
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK shop resource
 * @class
 */

var ShopResource = function (_Resource) {
  inherits$1(ShopResource, _Resource);

  function ShopResource() {
    classCallCheck$1(this, ShopResource);
    return possibleConstructorReturn$1(this, (ShopResource.__proto__ || Object.getPrototypeOf(ShopResource)).apply(this, arguments));
  }

  createClass$1(ShopResource, [{
    key: 'fetchInfo',


    /**
     * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
     * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
     *
     * @example
     * client.shop.fetchInfo().then((shop) => {
     *   // Do something with the shop
     * });
     *
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
     */
    value: function fetchInfo() {
      return this.graphQLClient.send(query$9).then(defaultResolver('shop'));
    }

    /**
     * Fetches shop policies (privacy policy, terms of service and refund policy).
     *
     * @example
     * client.shop.fetchPolicies().then((shop) => {
     *   // Do something with the shop
     * });
     *
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
     */

  }, {
    key: 'fetchPolicies',
    value: function fetchPolicies() {
      return this.graphQLClient.send(query$10).then(defaultResolver('shop'));
    }
  }]);
  return ShopResource;
}(Resource);

function handleCheckoutMutation(mutationRootKey, client) {
  return function (_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        errors = _ref.errors,
        _ref$model = _ref.model,
        model = _ref$model === undefined ? {} : _ref$model;

    var rootData = data[mutationRootKey];
    var rootModel = model[mutationRootKey];

    if (rootData && rootData.checkout) {
      return client.fetchAllPages(rootModel.checkout.lineItems, { pageSize: 250 }).then(function (lineItems) {
        rootModel.checkout.attrs.lineItems = lineItems;
        rootModel.checkout.errors = errors;
        rootModel.checkout.userErrors = rootModel.userErrors;

        return rootModel.checkout;
      });
    }

    if (errors && errors.length) {
      return Promise.reject(new Error(JSON.stringify(errors)));
    }

    if (rootData && rootData.checkoutUserErrors && rootData.checkoutUserErrors.length) {
      return Promise.reject(new Error(JSON.stringify(rootData.checkoutUserErrors)));
    }

    if (rootData && rootData.userErrors && rootData.userErrors.length) {
      return Promise.reject(new Error(JSON.stringify(rootData.userErrors)));
    }

    return Promise.reject(new Error("The " + mutationRootKey + " mutation failed due to an unknown error."));
  };
}

function query$11(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CheckoutFragment);
    });
  });
  return document;
}

function query$12(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.input = client.variable("input", "CheckoutCreateInput!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.input], function (root) {
    root.add("checkoutCreate", {
      args: {
        input: variables.__defaultOperation__.input
      }
    }, function (checkoutCreate) {
      checkoutCreate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutCreate.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutCreate.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$13(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
    root.add("checkoutLineItemsAdd", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItems: variables.__defaultOperation__.lineItems
      }
    }, function (checkoutLineItemsAdd) {
      checkoutLineItemsAdd.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutLineItemsAdd.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsAdd.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$14(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItemIds = client.variable("lineItemIds", "[ID!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItemIds], function (root) {
    root.add("checkoutLineItemsRemove", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItemIds: variables.__defaultOperation__.lineItemIds
      }
    }, function (checkoutLineItemsRemove) {
      checkoutLineItemsRemove.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutLineItemsRemove.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsRemove.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$15(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
    root.add("checkoutLineItemsReplace", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItems: variables.__defaultOperation__.lineItems
      }
    }, function (checkoutLineItemsReplace) {
      checkoutLineItemsReplace.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsReplace.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$16(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemUpdateInput!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
    root.add("checkoutLineItemsUpdate", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItems: variables.__defaultOperation__.lineItems
      }
    }, function (checkoutLineItemsUpdate) {
      checkoutLineItemsUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutLineItemsUpdate.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsUpdate.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$17(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutAttributesUpdateV2 = {};
  variables.checkoutAttributesUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
  variables.checkoutAttributesUpdateV2.input = client.variable("input", "CheckoutAttributesUpdateV2Input!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutAttributesUpdateV2", [variables.checkoutAttributesUpdateV2.checkoutId, variables.checkoutAttributesUpdateV2.input], function (root) {
    root.add("checkoutAttributesUpdateV2", {
      args: {
        checkoutId: variables.checkoutAttributesUpdateV2.checkoutId,
        input: variables.checkoutAttributesUpdateV2.input
      }
    }, function (checkoutAttributesUpdateV2) {
      checkoutAttributesUpdateV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutAttributesUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutAttributesUpdateV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$18(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutDiscountCodeApplyV2 = {};
  variables.checkoutDiscountCodeApplyV2.discountCode = client.variable("discountCode", "String!");
  variables.checkoutDiscountCodeApplyV2.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutDiscountCodeApplyV2", [variables.checkoutDiscountCodeApplyV2.discountCode, variables.checkoutDiscountCodeApplyV2.checkoutId], function (root) {
    root.add("checkoutDiscountCodeApplyV2", {
      args: {
        discountCode: variables.checkoutDiscountCodeApplyV2.discountCode,
        checkoutId: variables.checkoutDiscountCodeApplyV2.checkoutId
      }
    }, function (checkoutDiscountCodeApplyV2) {
      checkoutDiscountCodeApplyV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutDiscountCodeApplyV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutDiscountCodeApplyV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$19(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutDiscountCodeRemove = {};
  variables.checkoutDiscountCodeRemove.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutDiscountCodeRemove", [variables.checkoutDiscountCodeRemove.checkoutId], function (root) {
    root.add("checkoutDiscountCodeRemove", {
      args: {
        checkoutId: variables.checkoutDiscountCodeRemove.checkoutId
      }
    }, function (checkoutDiscountCodeRemove) {
      checkoutDiscountCodeRemove.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutDiscountCodeRemove.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutDiscountCodeRemove.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$20(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutGiftCardsAppend = {};
  variables.checkoutGiftCardsAppend.giftCardCodes = client.variable("giftCardCodes", "[String!]!");
  variables.checkoutGiftCardsAppend.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutGiftCardsAppend", [variables.checkoutGiftCardsAppend.giftCardCodes, variables.checkoutGiftCardsAppend.checkoutId], function (root) {
    root.add("checkoutGiftCardsAppend", {
      args: {
        giftCardCodes: variables.checkoutGiftCardsAppend.giftCardCodes,
        checkoutId: variables.checkoutGiftCardsAppend.checkoutId
      }
    }, function (checkoutGiftCardsAppend) {
      checkoutGiftCardsAppend.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutGiftCardsAppend.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutGiftCardsAppend.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$21(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutGiftCardRemoveV2 = {};
  variables.checkoutGiftCardRemoveV2.appliedGiftCardId = client.variable("appliedGiftCardId", "ID!");
  variables.checkoutGiftCardRemoveV2.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutGiftCardRemoveV2", [variables.checkoutGiftCardRemoveV2.appliedGiftCardId, variables.checkoutGiftCardRemoveV2.checkoutId], function (root) {
    root.add("checkoutGiftCardRemoveV2", {
      args: {
        appliedGiftCardId: variables.checkoutGiftCardRemoveV2.appliedGiftCardId,
        checkoutId: variables.checkoutGiftCardRemoveV2.checkoutId
      }
    }, function (checkoutGiftCardRemoveV2) {
      checkoutGiftCardRemoveV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutGiftCardRemoveV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutGiftCardRemoveV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$22(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutEmailUpdateV2 = {};
  variables.checkoutEmailUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
  variables.checkoutEmailUpdateV2.email = client.variable("email", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutEmailUpdateV2", [variables.checkoutEmailUpdateV2.checkoutId, variables.checkoutEmailUpdateV2.email], function (root) {
    root.add("checkoutEmailUpdateV2", {
      args: {
        checkoutId: variables.checkoutEmailUpdateV2.checkoutId,
        email: variables.checkoutEmailUpdateV2.email
      }
    }, function (checkoutEmailUpdateV2) {
      checkoutEmailUpdateV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutEmailUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutEmailUpdateV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$23(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutShippingAddressUpdateV2 = {};
  variables.checkoutShippingAddressUpdateV2.shippingAddress = client.variable("shippingAddress", "MailingAddressInput!");
  variables.checkoutShippingAddressUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutShippingAddressUpdateV2", [variables.checkoutShippingAddressUpdateV2.shippingAddress, variables.checkoutShippingAddressUpdateV2.checkoutId], function (root) {
    root.add("checkoutShippingAddressUpdateV2", {
      args: {
        shippingAddress: variables.checkoutShippingAddressUpdateV2.shippingAddress,
        checkoutId: variables.checkoutShippingAddressUpdateV2.checkoutId
      }
    }, function (checkoutShippingAddressUpdateV2) {
      checkoutShippingAddressUpdateV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutShippingAddressUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutShippingAddressUpdateV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK checkout resource
 * @class
 */

var CheckoutResource = function (_Resource) {
  inherits$1(CheckoutResource, _Resource);

  function CheckoutResource() {
    classCallCheck$1(this, CheckoutResource);
    return possibleConstructorReturn$1(this, (CheckoutResource.__proto__ || Object.getPrototypeOf(CheckoutResource)).apply(this, arguments));
  }

  createClass$1(CheckoutResource, [{
    key: 'fetch',


    /**
     * Fetches a checkout by ID.
     *
     * @example
     * client.checkout.fetch('FlZj9rZXlN5MDY4ZDFiZTUyZTUwNTE2MDNhZjg=').then((checkout) => {
     *   // Do something with the checkout
     * });
     *
     * @param {String} id The id of the checkout to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the checkout.
     */
    value: function fetch(id) {
      var _this2 = this;

      return this.graphQLClient.send(query$11, { id: id }).then(defaultResolver('node')).then(function (checkout) {
        if (!checkout) {
          return null;
        }

        return _this2.graphQLClient.fetchAllPages(checkout.lineItems, { pageSize: 250 }).then(function (lineItems) {
          checkout.attrs.lineItems = lineItems;

          return checkout;
        });
      });
    }

    /**
     * Creates a checkout.
     *
     * @example
     * const input = {
     *   lineItems: [
     *     {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}
     *   ]
     * };
     *
     * client.checkout.create(input).then((checkout) => {
     *   // Do something with the newly created checkout
     * });
     *
     * @param {Object} [input] An input object containing zero or more of:
     *   @param {String} [input.email] An email connected to the checkout.
     *   @param {Object[]} [input.lineItems] A list of line items in the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     *   @param {Object} [input.shippingAddress] A shipping address. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/mailingaddressinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.note] A note for the checkout.
     *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.presentmentCurrencyCode ] A presentment currency code. See the {@link https://help.shopify.com/en/api/storefront-api/reference/enum/currencycode|Storefront API reference} for valid currency code values.
     * @return {Promise|GraphModel} A promise resolving with the created checkout.
     */

  }, {
    key: 'create',
    value: function create() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.graphQLClient.send(query$12, { input: input }).then(handleCheckoutMutation('checkoutCreate', this.graphQLClient));
    }

    /**
     * Replaces the value of checkout's custom attributes and/or note with values defined in the input
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};
     *
     * client.checkout.updateAttributes(checkoutId, input).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update.
     * @param {Object} [input] An input object containing zero or more of:
     *   @param {Boolean} [input.allowPartialAddresses] An email connected to the checkout.
     *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.note] A note for the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateAttributes',
    value: function updateAttributes(checkoutId) {
      var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.graphQLClient.send(query$17, { checkoutId: checkoutId, input: input }).then(handleCheckoutMutation('checkoutAttributesUpdateV2', this.graphQLClient));
    }

    /**
     * Replaces the value of checkout's email address
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const email = 'user@example.com';
     *
     * client.checkout.updateEmail(checkoutId, email).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update.
     * @param {String} email The email address to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateEmail',
    value: function updateEmail(checkoutId, email) {
      return this.graphQLClient.send(query$22, { checkoutId: checkoutId, email: email }).then(handleCheckoutMutation('checkoutEmailUpdateV2', this.graphQLClient));
    }

    /**
     * Adds line items to an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
     *
     * client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add line items to.
     * @param {Object[]} lineItems A list of line items to add to the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addLineItems',
    value: function addLineItems(checkoutId, lineItems) {
      return this.graphQLClient.send(query$13, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsAdd', this.graphQLClient));
    }

    /**
     * Applies a discount to an existing checkout using a discount code.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const discountCode = 'best-discount-ever';
     *
     * client.checkout.addDiscount(checkoutId, discountCode).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add discount to.
     * @param {String} discountCode The discount code to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addDiscount',
    value: function addDiscount(checkoutId, discountCode) {
      return this.graphQLClient.send(query$18, { checkoutId: checkoutId, discountCode: discountCode }).then(handleCheckoutMutation('checkoutDiscountCodeApplyV2', this.graphQLClient));
    }

    /**
     * Removes the applied discount from an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     *
     * client.checkout.removeDiscount(checkoutId).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to remove the discount from.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeDiscount',
    value: function removeDiscount(checkoutId) {
      return this.graphQLClient.send(query$19, { checkoutId: checkoutId }).then(handleCheckoutMutation('checkoutDiscountCodeRemove', this.graphQLClient));
    }

    /**
     * Applies gift cards to an existing checkout using a list of gift card codes
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const giftCardCodes = ['6FD8853DAGAA949F'];
     *
     * client.checkout.addGiftCards(checkoutId, giftCardCodes).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add gift cards to.
     * @param {String[]} giftCardCodes The gift card codes to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addGiftCards',
    value: function addGiftCards(checkoutId, giftCardCodes) {
      return this.graphQLClient.send(query$20, { checkoutId: checkoutId, giftCardCodes: giftCardCodes }).then(handleCheckoutMutation('checkoutGiftCardsAppend', this.graphQLClient));
    }

    /**
     * Remove a gift card from an existing checkout
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const appliedGiftCardId = 'Z2lkOi8vc2hvcGlmeS9BcHBsaWVkR2lmdENhcmQvNDI4NTQ1ODAzMTI=';
     *
     * client.checkout.removeGiftCard(checkoutId, appliedGiftCardId).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add gift cards to.
     * @param {String} appliedGiftCardId The gift card id to remove from the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeGiftCard',
    value: function removeGiftCard(checkoutId, appliedGiftCardId) {
      return this.graphQLClient.send(query$21, { checkoutId: checkoutId, appliedGiftCardId: appliedGiftCardId }).then(handleCheckoutMutation('checkoutGiftCardRemoveV2', this.graphQLClient));
    }

    /**
     * Removes line items from an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItemIds = ['TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU='];
     *
     * client.checkout.removeLineItems(checkoutId, lineItemIds).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to remove line items from.
     * @param {String[]} lineItemIds A list of the ids of line items to remove from the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeLineItems',
    value: function removeLineItems(checkoutId, lineItemIds) {
      return this.graphQLClient.send(query$14, { checkoutId: checkoutId, lineItemIds: lineItemIds }).then(handleCheckoutMutation('checkoutLineItemsRemove', this.graphQLClient));
    }

    /**
     * Replace line items on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
     *
     * client.checkout.replaceLineItems(checkoutId, lineItems).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add line items to.
     * @param {Object[]} lineItems A list of line items to set on the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'replaceLineItems',
    value: function replaceLineItems(checkoutId, lineItems) {
      return this.graphQLClient.send(query$15, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsReplace', this.graphQLClient));
    }

    /**
     * Updates line items on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [
     *   {
     *     id: 'TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU=',
     *     quantity: 5,
     *     variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg=='
     *   }
     * ];
     *
     * client.checkout.updateLineItems(checkoutId, lineItems).then(checkout => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update a line item on.
     * @param {Object[]} lineItems A list of line item information to update. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineitemupdateinput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateLineItems',
    value: function updateLineItems(checkoutId, lineItems) {
      return this.graphQLClient.send(query$16, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsUpdate', this.graphQLClient));
    }

    /**
     * Updates shipping address on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const shippingAddress = {
     *    address1: 'Chestnut Street 92',
     *    address2: 'Apartment 2',
     *    city: 'Louisville',
     *    company: null,
     *    country: 'United States',
     *    firstName: 'Bob',
     *    lastName: 'Norman',
     *    phone: '555-625-1199',
     *    province: 'Kentucky',
     *    zip: '40202'
     *  };
     *
     * client.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
     *   // Do something with the updated checkout
     * });
     *
     * @param  {String} checkoutId The ID of the checkout to update shipping address.
     * @param  {Object} shippingAddress A shipping address.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateShippingAddress',
    value: function updateShippingAddress(checkoutId, shippingAddress) {
      return this.graphQLClient.send(query$23, { checkoutId: checkoutId, shippingAddress: shippingAddress }).then(handleCheckoutMutation('checkoutShippingAddressUpdateV2', this.graphQLClient));
    }
  }]);
  return CheckoutResource;
}(Resource);

/**
 * @namespace ImageHelpers
 */
var imageHelpers = {

  /**
   * Generates the image src for a resized image with maximum dimensions `maxWidth` and `maxHeight`.
   * Images do not scale up.
   *
   * @example
   * const url = client.image.helpers.imageForSize(product.variants[0].image, {maxWidth: 50, maxHeight: 50});
   *
   * @memberof ImageHelpers
   * @method imageForSize
   * @param {Object} image The original image model to generate the image src for.
   * @param {Object} options An options object containing:
   *  @param {Integer} options.maxWidth The maximum width for the image.
   *  @param {Integer} options.maxHeight The maximum height for the image.
   * @return {String} The image src for the resized image.
   */
  imageForSize: function imageForSize(image, _ref) {
    var maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight;

    var splitUrl = image.src.split('?');
    var notQuery = splitUrl[0];
    var query = splitUrl[1] ? '?' + splitUrl[1] : '';

    // Use the section before the query
    var imageTokens = notQuery.split('.');

    // Take the token before the file extension and append the dimensions
    var imagePathIndex = imageTokens.length - 2;

    imageTokens[imagePathIndex] = imageTokens[imagePathIndex] + '_' + maxWidth + 'x' + maxHeight;

    return '' + imageTokens.join('.') + query;
  }
};

/**
 * The JS Buy SDK image resource
 * @class
 */

var ImageResource = function (_Resource) {
  inherits$1(ImageResource, _Resource);

  function ImageResource() {
    classCallCheck$1(this, ImageResource);
    return possibleConstructorReturn$1(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).apply(this, arguments));
  }

  createClass$1(ImageResource, [{
    key: 'helpers',
    get: function get$$1() {
      return imageHelpers;
    }
  }]);
  return ImageResource;
}(Resource);

var version = "2.11.0";

var AppliedGiftCard = {
  "name": "AppliedGiftCard",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amountUsedV2": "MoneyV2",
    "balanceV2": "MoneyV2",
    "id": "ID",
    "lastCharacters": "String",
    "presentmentAmountUsed": "MoneyV2"
  },
  "implementsNode": true
};

var Attribute = {
  "name": "Attribute",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "key": "String",
    "value": "String"
  },
  "implementsNode": false
};

var AutomaticDiscountApplication = {
  "name": "AutomaticDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "title": "String"
  },
  "implementsNode": false
};

var Boolean$1 = {
  "name": "Boolean",
  "kind": "SCALAR"
};

var Checkout = {
  "name": "Checkout",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "appliedGiftCards": "AppliedGiftCard",
    "completedAt": "DateTime",
    "createdAt": "DateTime",
    "currencyCode": "CurrencyCode",
    "customAttributes": "Attribute",
    "discountApplications": "DiscountApplicationConnection",
    "email": "String",
    "id": "ID",
    "lineItems": "CheckoutLineItemConnection",
    "lineItemsSubtotalPrice": "MoneyV2",
    "note": "String",
    "order": "Order",
    "orderStatusUrl": "URL",
    "paymentDue": "Money",
    "paymentDueV2": "MoneyV2",
    "ready": "Boolean",
    "requiresShipping": "Boolean",
    "shippingAddress": "MailingAddress",
    "shippingLine": "ShippingRate",
    "subtotalPrice": "Money",
    "subtotalPriceV2": "MoneyV2",
    "taxExempt": "Boolean",
    "taxesIncluded": "Boolean",
    "totalPrice": "Money",
    "totalPriceV2": "MoneyV2",
    "totalTax": "Money",
    "totalTaxV2": "MoneyV2",
    "updatedAt": "DateTime",
    "webUrl": "URL"
  },
  "implementsNode": true
};

var CheckoutAttributesUpdateV2Payload = {
  "name": "CheckoutAttributesUpdateV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutCreatePayload = {
  "name": "CheckoutCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutDiscountCodeApplyV2Payload = {
  "name": "CheckoutDiscountCodeApplyV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutDiscountCodeRemovePayload = {
  "name": "CheckoutDiscountCodeRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutEmailUpdateV2Payload = {
  "name": "CheckoutEmailUpdateV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutErrorCode = {
  "name": "CheckoutErrorCode",
  "kind": "ENUM"
};

var CheckoutGiftCardRemoveV2Payload = {
  "name": "CheckoutGiftCardRemoveV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutGiftCardsAppendPayload = {
  "name": "CheckoutGiftCardsAppendPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItem = {
  "name": "CheckoutLineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "discountAllocations": "DiscountAllocation",
    "id": "ID",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": true
};

var CheckoutLineItemConnection = {
  "name": "CheckoutLineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CheckoutLineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var CheckoutLineItemEdge = {
  "name": "CheckoutLineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "CheckoutLineItem"
  },
  "implementsNode": false
};

var CheckoutLineItemsAddPayload = {
  "name": "CheckoutLineItemsAddPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsRemovePayload = {
  "name": "CheckoutLineItemsRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsReplacePayload = {
  "name": "CheckoutLineItemsReplacePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "CheckoutUserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsUpdatePayload = {
  "name": "CheckoutLineItemsUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutShippingAddressUpdateV2Payload = {
  "name": "CheckoutShippingAddressUpdateV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutUserError = {
  "name": "CheckoutUserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "code": "CheckoutErrorCode",
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};

var Collection = {
  "name": "Collection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "image": "Image",
    "products": "ProductConnection",
    "title": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};

var CollectionConnection = {
  "name": "CollectionConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CollectionEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var CollectionEdge = {
  "name": "CollectionEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Collection"
  },
  "implementsNode": false
};

var CountryCode = {
  "name": "CountryCode",
  "kind": "ENUM"
};

var CurrencyCode = {
  "name": "CurrencyCode",
  "kind": "ENUM"
};

var DateTime = {
  "name": "DateTime",
  "kind": "SCALAR"
};

var Decimal = {
  "name": "Decimal",
  "kind": "SCALAR"
};

var DiscountAllocation = {
  "name": "DiscountAllocation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "allocatedAmount": "MoneyV2",
    "discountApplication": "DiscountApplication"
  },
  "implementsNode": false
};

var DiscountApplication = {
  "name": "DiscountApplication",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "allocationMethod": "DiscountApplicationAllocationMethod",
    "targetSelection": "DiscountApplicationTargetSelection",
    "targetType": "DiscountApplicationTargetType",
    "value": "PricingValue"
  },
  "possibleTypes": ["AutomaticDiscountApplication", "DiscountCodeApplication", "ManualDiscountApplication", "ScriptDiscountApplication"]
};

var DiscountApplicationAllocationMethod = {
  "name": "DiscountApplicationAllocationMethod",
  "kind": "ENUM"
};

var DiscountApplicationConnection = {
  "name": "DiscountApplicationConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "DiscountApplicationEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var DiscountApplicationEdge = {
  "name": "DiscountApplicationEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "node": "DiscountApplication"
  },
  "implementsNode": false
};

var DiscountApplicationTargetSelection = {
  "name": "DiscountApplicationTargetSelection",
  "kind": "ENUM"
};

var DiscountApplicationTargetType = {
  "name": "DiscountApplicationTargetType",
  "kind": "ENUM"
};

var DiscountCodeApplication = {
  "name": "DiscountCodeApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "applicable": "Boolean",
    "code": "String"
  },
  "implementsNode": false
};

var Domain = {
  "name": "Domain",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "host": "String",
    "sslEnabled": "Boolean",
    "url": "URL"
  },
  "implementsNode": false
};

var Float = {
  "name": "Float",
  "kind": "SCALAR"
};

var HTML = {
  "name": "HTML",
  "kind": "SCALAR"
};

var ID = {
  "name": "ID",
  "kind": "SCALAR"
};

var Image = {
  "name": "Image",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "altText": "String",
    "id": "ID",
    "originalSrc": "URL",
    "src": "URL"
  },
  "implementsNode": false
};

var ImageConnection = {
  "name": "ImageConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ImageEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ImageEdge = {
  "name": "ImageEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Image"
  },
  "implementsNode": false
};

var Int = {
  "name": "Int",
  "kind": "SCALAR"
};

var MailingAddress = {
  "name": "MailingAddress",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "address1": "String",
    "address2": "String",
    "city": "String",
    "company": "String",
    "country": "String",
    "countryCodeV2": "CountryCode",
    "firstName": "String",
    "formatted": "String",
    "id": "ID",
    "lastName": "String",
    "latitude": "Float",
    "longitude": "Float",
    "name": "String",
    "phone": "String",
    "province": "String",
    "provinceCode": "String",
    "zip": "String"
  },
  "implementsNode": true
};

var ManualDiscountApplication = {
  "name": "ManualDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "title": "String"
  },
  "implementsNode": false
};

var Money = {
  "name": "Money",
  "kind": "SCALAR"
};

var MoneyV2 = {
  "name": "MoneyV2",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Decimal",
    "currencyCode": "CurrencyCode"
  },
  "implementsNode": false
};

var Mutation$1 = {
  "name": "Mutation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Payload",
    "checkoutCreate": "CheckoutCreatePayload",
    "checkoutDiscountCodeApplyV2": "CheckoutDiscountCodeApplyV2Payload",
    "checkoutDiscountCodeRemove": "CheckoutDiscountCodeRemovePayload",
    "checkoutEmailUpdateV2": "CheckoutEmailUpdateV2Payload",
    "checkoutGiftCardRemoveV2": "CheckoutGiftCardRemoveV2Payload",
    "checkoutGiftCardsAppend": "CheckoutGiftCardsAppendPayload",
    "checkoutLineItemsAdd": "CheckoutLineItemsAddPayload",
    "checkoutLineItemsRemove": "CheckoutLineItemsRemovePayload",
    "checkoutLineItemsReplace": "CheckoutLineItemsReplacePayload",
    "checkoutLineItemsUpdate": "CheckoutLineItemsUpdatePayload",
    "checkoutShippingAddressUpdateV2": "CheckoutShippingAddressUpdateV2Payload"
  },
  "implementsNode": false,
  "relayInputObjectBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdateInput",
    "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Input",
    "checkoutCreate": "CheckoutCreateInput",
    "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
    "customerActivate": "CustomerActivateInput",
    "customerCreate": "CustomerCreateInput",
    "customerReset": "CustomerResetInput"
  }
};

var Node = {
  "name": "Node",
  "kind": "INTERFACE",
  "fieldBaseTypes": {},
  "possibleTypes": ["AppliedGiftCard", "Article", "Blog", "Checkout", "CheckoutLineItem", "Collection", "Comment", "ExternalVideo", "MailingAddress", "MediaImage", "Metafield", "Model3d", "Order", "Page", "Payment", "Product", "ProductOption", "ProductVariant", "ShopPolicy", "Video"]
};

var Order = {
  "name": "Order",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "currencyCode": "CurrencyCode",
    "customerUrl": "URL",
    "id": "ID",
    "lineItems": "OrderLineItemConnection",
    "orderNumber": "Int",
    "processedAt": "DateTime",
    "shippingAddress": "MailingAddress",
    "subtotalPrice": "Money",
    "subtotalPriceV2": "MoneyV2",
    "totalPrice": "Money",
    "totalPriceV2": "MoneyV2",
    "totalRefunded": "Money",
    "totalRefundedV2": "MoneyV2",
    "totalShippingPrice": "Money",
    "totalShippingPriceV2": "MoneyV2",
    "totalTax": "Money",
    "totalTaxV2": "MoneyV2"
  },
  "implementsNode": true
};

var OrderLineItem = {
  "name": "OrderLineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": false
};

var OrderLineItemConnection = {
  "name": "OrderLineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "OrderLineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var OrderLineItemEdge = {
  "name": "OrderLineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "OrderLineItem"
  },
  "implementsNode": false
};

var PageInfo = {
  "name": "PageInfo",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "hasNextPage": "Boolean",
    "hasPreviousPage": "Boolean"
  },
  "implementsNode": false
};

var PaymentSettings = {
  "name": "PaymentSettings",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "enabledPresentmentCurrencies": "CurrencyCode"
  },
  "implementsNode": false
};

var PricingPercentageValue = {
  "name": "PricingPercentageValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "percentage": "Float"
  },
  "implementsNode": false
};

var PricingValue = {
  "name": "PricingValue",
  "kind": "UNION"
};

var Product = {
  "name": "Product",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "availableForSale": "Boolean",
    "createdAt": "DateTime",
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "images": "ImageConnection",
    "onlineStoreUrl": "URL",
    "options": "ProductOption",
    "productType": "String",
    "publishedAt": "DateTime",
    "title": "String",
    "updatedAt": "DateTime",
    "variants": "ProductVariantConnection",
    "vendor": "String"
  },
  "implementsNode": true
};

var ProductConnection = {
  "name": "ProductConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductEdge = {
  "name": "ProductEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Product"
  },
  "implementsNode": false
};

var ProductOption = {
  "name": "ProductOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "values": "String"
  },
  "implementsNode": true
};

var ProductVariant = {
  "name": "ProductVariant",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "availableForSale": "Boolean",
    "compareAtPrice": "Money",
    "compareAtPriceV2": "MoneyV2",
    "id": "ID",
    "image": "Image",
    "presentmentPrices": "ProductVariantPricePairConnection",
    "price": "Money",
    "priceV2": "MoneyV2",
    "product": "Product",
    "selectedOptions": "SelectedOption",
    "sku": "String",
    "title": "String",
    "unitPrice": "MoneyV2",
    "unitPriceMeasurement": "UnitPriceMeasurement",
    "weight": "Float"
  },
  "implementsNode": true
};

var ProductVariantConnection = {
  "name": "ProductVariantConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductVariantEdge = {
  "name": "ProductVariantEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "ProductVariant"
  },
  "implementsNode": false
};

var ProductVariantPricePair = {
  "name": "ProductVariantPricePair",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "compareAtPrice": "MoneyV2",
    "price": "MoneyV2"
  },
  "implementsNode": false
};

var ProductVariantPricePairConnection = {
  "name": "ProductVariantPricePairConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantPricePairEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductVariantPricePairEdge = {
  "name": "ProductVariantPricePairEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "node": "ProductVariantPricePair"
  },
  "implementsNode": false
};

var QueryRoot = {
  "name": "QueryRoot",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "collectionByHandle": "Collection",
    "collections": "CollectionConnection",
    "node": "Node",
    "nodes": "Node",
    "productByHandle": "Product",
    "products": "ProductConnection",
    "shop": "Shop"
  },
  "implementsNode": false
};

var ScriptDiscountApplication = {
  "name": "ScriptDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String"
  },
  "implementsNode": false
};

var SelectedOption = {
  "name": "SelectedOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "value": "String"
  },
  "implementsNode": false
};

var ShippingRate = {
  "name": "ShippingRate",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "handle": "String",
    "price": "Money",
    "priceV2": "MoneyV2",
    "title": "String"
  },
  "implementsNode": false
};

var Shop = {
  "name": "Shop",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "currencyCode": "CurrencyCode",
    "description": "String",
    "moneyFormat": "String",
    "name": "String",
    "paymentSettings": "PaymentSettings",
    "primaryDomain": "Domain",
    "privacyPolicy": "ShopPolicy",
    "refundPolicy": "ShopPolicy",
    "termsOfService": "ShopPolicy"
  },
  "implementsNode": false
};

var ShopPolicy = {
  "name": "ShopPolicy",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "body": "String",
    "id": "ID",
    "title": "String",
    "url": "URL"
  },
  "implementsNode": true
};

var String$1 = {
  "name": "String",
  "kind": "SCALAR"
};

var URL = {
  "name": "URL",
  "kind": "SCALAR"
};

var UnitPriceMeasurement = {
  "name": "UnitPriceMeasurement",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "measuredType": "UnitPriceMeasurementMeasuredType",
    "quantityUnit": "UnitPriceMeasurementMeasuredUnit",
    "quantityValue": "Float",
    "referenceUnit": "UnitPriceMeasurementMeasuredUnit",
    "referenceValue": "Int"
  },
  "implementsNode": false
};

var UnitPriceMeasurementMeasuredType = {
  "name": "UnitPriceMeasurementMeasuredType",
  "kind": "ENUM"
};

var UnitPriceMeasurementMeasuredUnit = {
  "name": "UnitPriceMeasurementMeasuredUnit",
  "kind": "ENUM"
};

var UserError = {
  "name": "UserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};

var Types = {
  types: {}
};
Types.types["AppliedGiftCard"] = AppliedGiftCard;
Types.types["Attribute"] = Attribute;
Types.types["AutomaticDiscountApplication"] = AutomaticDiscountApplication;
Types.types["Boolean"] = Boolean$1;
Types.types["Checkout"] = Checkout;
Types.types["CheckoutAttributesUpdateV2Payload"] = CheckoutAttributesUpdateV2Payload;
Types.types["CheckoutCreatePayload"] = CheckoutCreatePayload;
Types.types["CheckoutDiscountCodeApplyV2Payload"] = CheckoutDiscountCodeApplyV2Payload;
Types.types["CheckoutDiscountCodeRemovePayload"] = CheckoutDiscountCodeRemovePayload;
Types.types["CheckoutEmailUpdateV2Payload"] = CheckoutEmailUpdateV2Payload;
Types.types["CheckoutErrorCode"] = CheckoutErrorCode;
Types.types["CheckoutGiftCardRemoveV2Payload"] = CheckoutGiftCardRemoveV2Payload;
Types.types["CheckoutGiftCardsAppendPayload"] = CheckoutGiftCardsAppendPayload;
Types.types["CheckoutLineItem"] = CheckoutLineItem;
Types.types["CheckoutLineItemConnection"] = CheckoutLineItemConnection;
Types.types["CheckoutLineItemEdge"] = CheckoutLineItemEdge;
Types.types["CheckoutLineItemsAddPayload"] = CheckoutLineItemsAddPayload;
Types.types["CheckoutLineItemsRemovePayload"] = CheckoutLineItemsRemovePayload;
Types.types["CheckoutLineItemsReplacePayload"] = CheckoutLineItemsReplacePayload;
Types.types["CheckoutLineItemsUpdatePayload"] = CheckoutLineItemsUpdatePayload;
Types.types["CheckoutShippingAddressUpdateV2Payload"] = CheckoutShippingAddressUpdateV2Payload;
Types.types["CheckoutUserError"] = CheckoutUserError;
Types.types["Collection"] = Collection;
Types.types["CollectionConnection"] = CollectionConnection;
Types.types["CollectionEdge"] = CollectionEdge;
Types.types["CountryCode"] = CountryCode;
Types.types["CurrencyCode"] = CurrencyCode;
Types.types["DateTime"] = DateTime;
Types.types["Decimal"] = Decimal;
Types.types["DiscountAllocation"] = DiscountAllocation;
Types.types["DiscountApplication"] = DiscountApplication;
Types.types["DiscountApplicationAllocationMethod"] = DiscountApplicationAllocationMethod;
Types.types["DiscountApplicationConnection"] = DiscountApplicationConnection;
Types.types["DiscountApplicationEdge"] = DiscountApplicationEdge;
Types.types["DiscountApplicationTargetSelection"] = DiscountApplicationTargetSelection;
Types.types["DiscountApplicationTargetType"] = DiscountApplicationTargetType;
Types.types["DiscountCodeApplication"] = DiscountCodeApplication;
Types.types["Domain"] = Domain;
Types.types["Float"] = Float;
Types.types["HTML"] = HTML;
Types.types["ID"] = ID;
Types.types["Image"] = Image;
Types.types["ImageConnection"] = ImageConnection;
Types.types["ImageEdge"] = ImageEdge;
Types.types["Int"] = Int;
Types.types["MailingAddress"] = MailingAddress;
Types.types["ManualDiscountApplication"] = ManualDiscountApplication;
Types.types["Money"] = Money;
Types.types["MoneyV2"] = MoneyV2;
Types.types["Mutation"] = Mutation$1;
Types.types["Node"] = Node;
Types.types["Order"] = Order;
Types.types["OrderLineItem"] = OrderLineItem;
Types.types["OrderLineItemConnection"] = OrderLineItemConnection;
Types.types["OrderLineItemEdge"] = OrderLineItemEdge;
Types.types["PageInfo"] = PageInfo;
Types.types["PaymentSettings"] = PaymentSettings;
Types.types["PricingPercentageValue"] = PricingPercentageValue;
Types.types["PricingValue"] = PricingValue;
Types.types["Product"] = Product;
Types.types["ProductConnection"] = ProductConnection;
Types.types["ProductEdge"] = ProductEdge;
Types.types["ProductOption"] = ProductOption;
Types.types["ProductVariant"] = ProductVariant;
Types.types["ProductVariantConnection"] = ProductVariantConnection;
Types.types["ProductVariantEdge"] = ProductVariantEdge;
Types.types["ProductVariantPricePair"] = ProductVariantPricePair;
Types.types["ProductVariantPricePairConnection"] = ProductVariantPricePairConnection;
Types.types["ProductVariantPricePairEdge"] = ProductVariantPricePairEdge;
Types.types["QueryRoot"] = QueryRoot;
Types.types["ScriptDiscountApplication"] = ScriptDiscountApplication;
Types.types["SelectedOption"] = SelectedOption;
Types.types["ShippingRate"] = ShippingRate;
Types.types["Shop"] = Shop;
Types.types["ShopPolicy"] = ShopPolicy;
Types.types["String"] = String$1;
Types.types["URL"] = URL;
Types.types["UnitPriceMeasurement"] = UnitPriceMeasurement;
Types.types["UnitPriceMeasurementMeasuredType"] = UnitPriceMeasurementMeasuredType;
Types.types["UnitPriceMeasurementMeasuredUnit"] = UnitPriceMeasurementMeasuredUnit;
Types.types["UserError"] = UserError;
Types.queryType = "QueryRoot";
Types.mutationType = "Mutation";
Types.subscriptionType = null;

function recursivelyFreezeObject(structure) {
  Object.getOwnPropertyNames(structure).forEach(function (key) {
    var value = structure[key];
    if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
      recursivelyFreezeObject(value);
    }
  });
  Object.freeze(structure);
  return structure;
}

var types = recursivelyFreezeObject(Types);

// GraphQL
/**
 * The JS Buy SDK Client.
 * @class
 *
 * @property {ProductResource} product The property under which product fetching methods live.
 * @property {CollectionResource} collection The property under which collection fetching methods live.
 * @property {ShopResource} shop The property under which shop fetching methods live.
 * @property {CheckoutResource} checkout The property under which shop fetching and mutating methods live.
 * @property {ImageResource} image The property under which image helper methods live.
 */

var Client = function () {
  createClass$1(Client, null, [{
    key: 'buildClient',


    /**
     * Primary entry point for building a new Client.
     */
    value: function buildClient(config, fetchFunction) {
      var newConfig = new Config(config);
      var client = new Client(newConfig, Client$2, fetchFunction);

      client.config = newConfig;

      return client;
    }

    /**
     * @constructs Client
     * @param {Config} config An instance of {@link Config} used to configure the Client.
     */

  }]);

  function Client(config) {
    var GraphQLClientClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Client$2;
    var fetchFunction = arguments[2];
    classCallCheck$1(this, Client);

    var url = 'https://' + config.domain + '/api/' + config.apiVersion + '/graphql';

    var headers = {
      'X-SDK-Variant': 'javascript',
      'X-SDK-Version': version,
      'X-Shopify-Storefront-Access-Token': config.storefrontAccessToken
    };

    if (config.source) {
      headers['X-SDK-Variant-Source'] = config.source;
    }

    var languageHeader = config.language ? config.language : '*';

    headers['Accept-Language'] = languageHeader;

    if (fetchFunction) {
      headers['Content-Type'] = 'application/json';
      headers.Accept = 'application/json';

      this.graphQLClient = new GraphQLClientClass(types, {
        fetcher: function fetcher(graphQLParams) {
          return fetchFunction(url, {
            body: JSON.stringify(graphQLParams),
            method: 'POST',
            mode: 'cors',
            headers: headers
          }).then(function (response) {
            return response.json();
          });
        }
      });
    } else {
      this.graphQLClient = new GraphQLClientClass(types, {
        url: url,
        fetcherOptions: { headers: headers }
      });
    }

    this.product = new ProductResource(this.graphQLClient);
    this.collection = new CollectionResource(this.graphQLClient);
    this.shop = new ShopResource(this.graphQLClient);
    this.checkout = new CheckoutResource(this.graphQLClient);
    this.image = new ImageResource(this.graphQLClient);
  }

  /**
   * Fetches the next page of models
   *
   * @example
   * client.fetchNextPage(products).then((nextProducts) => {
   *   // Do something with the products
   * });
   *
   * @param {models} [Array] The paginated set to fetch the next page of
   * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the type provided.
   */


  createClass$1(Client, [{
    key: 'fetchNextPage',
    value: function fetchNextPage(models) {
      return this.graphQLClient.fetchNextPage(models);
    }
  }]);
  return Client;
}();

module.exports = Client;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: document, extend, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/**
 * SSR Window 2.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: May 12, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var doc = typeof document !== 'undefined' ? document : {};
var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
extend(doc, ssrDocument);

var win = typeof window !== 'undefined' ? window : {};
var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
};
extend(win, ssrWindow);




/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./app/resources/js/app.js ./app/resources/scss/main.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nazimshala/Documents/projects/neohtesting/app/resources/js/app.js */"./app/resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/nazimshala/Documents/projects/neohtesting/app/resources/scss/main.scss */"./app/resources/scss/main.scss");


/***/ })

},[[0,"/assets/manifest","/assets/vendor"]]]);