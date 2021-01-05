var values = [];
var velocityArr = [];
var valuesMaxLength = 11;
var velocityArrLength = 4;
var throttle = false;
var lastIsAcceleratingValue = false;
var prevTime = new Date().getTime();
// var currTime;
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
}

// function getAccelerationValue() {
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
    }
    // if largestValueINdex is the same as the smallestValue index, the acceleration is 0
    return largestValueIndex >= smallestValueIndex;

}

function wheelHandler(event) {
    if (throttle) return;
    throttle = true;
    // only including below because of safari's bugs
    var currTime = new Date().getTime();
    if (currTime - prevTime > 180) {
        values = [];
        velocityArr = [];
        lastIsAcceleratingValue = false;
    }
    prevTime = currTime;

    if (values.length >= valuesMaxLength) values.shift();
    var scrollValue = getScrollValue(event)

    var averageVelocity = getAverageVelocity();
    if (velocityArr.length >= velocityArrLength) velocityArr.shift();
    velocityArr.push(Math.abs(averageVelocity));


    var valuesLength = values.length;
    let switchInDirection = false;
    if (valuesLength > 0 && (scrollValue < 0 && values[valuesLength - 1] > 0) || (scrollValue > 0 && values[valuesLength - 1] < 0)) {
        switchInDirection = true;
        // values = [];
        // velocityArr = [];
        // lastIsAcceleratingValue = false;

    }

    values.push(scrollValue);


    // apply throttle...


    // var accelerationValue = getAccelerationValue(velocityArr);
    var isAccelerating = getIsAccelerating();
    if ((isAccelerating && !lastIsAcceleratingValue) || switchInDirection) {
        let direction = scrollValue >= 0 ? 'down' : 'up';
        let customEvent = new CustomEvent('wheelonce', {detail: {direction: direction}});

        document.dispatchEvent(customEvent);
        // throw event
    }
    lastIsAcceleratingValue = isAccelerating;
    //
    setTimeout(() => {
        throttle = false;
    }, 40);
}


export default {
    init: function () {
        document.addEventListener('wheel', wheelHandler, {passive: false});

    },
    destroy: function () {
        document.removeEventListener('wheel', wheelHandler, {passive: false});
    }
}