/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

function countdown() {
    "use strict";
    var timer = 30, $div, $newNode, space;
    $('.counter > p').append(timer);
    
    window.setInterval(function () {
        timer--;
        $('.counter > p').empty();
        $('.counter > p').append(timer);
    }, 1000);
    
    if (timer === 0) {
        window.clearInterval();
    }
}