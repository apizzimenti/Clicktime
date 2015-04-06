/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

function countdown() {
    "use strict";
    var timer = 30, $div, $newNode, space;
    $('.counter > p').append(timer);
    
    var final = window.setInterval(function () {
        timer--;
        $('.counter > p').empty();
        $('.counter > p').append(timer);
        if (timer === 0) {
            window.clearInterval(final);
        }
    }, 1000);
    
    return timer;
}