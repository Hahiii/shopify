var xDown = null;
var yDown = null;
var direction = null;
var debounce = false;


function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

// function handleTouchEnd(evt) {
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
    var yDiff = yDown - yUp;


    // let customEvent = new CustomEvent('swipeonce', {detail: {direction: direction}});
    // document.dispatchEvent(customEvent);

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
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
};

function sendEvent(direction) {
    if (!debounce) {
        let customEvent = new CustomEvent('swipeonce', {detail: {direction: direction}});
        document.dispatchEvent(customEvent);

        debounce = true;
        setTimeout(() => {
            debounce = false;
        }, 180);
    }
}


export default {
    init: function () {
        document.addEventListener('touchstart', handleTouchStart, false);
        // document.addEventListener('touchend', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);
    },
    destroy: function () {
        document.removeEventListener('touchstart', handleTouchStart, false);
        document.removeEventListener('touchmove', handleTouchMove, false);

    }
}