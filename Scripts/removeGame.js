/*jslint browser: true*/
/*global $, jQuery, alert*/

function removeGame() {
    'use strict';
    
    window.setTimeout(function () {
        $('button').remove();
        $('#done').append('done.');
        $('#done').fadeIn(300);
    }, 30000);
    
}