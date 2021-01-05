var isTouchDevice = require('is-touch-device');

let isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0) || isTouchDevice()) && window.innerWidth < 960;
//this is a touch device you can any action here

export default function () {
    return isTouch;
}
