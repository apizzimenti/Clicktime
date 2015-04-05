/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    'use strict';
    
    var pluscounter = 0, negcounter = 0;
    
    $('#gamewindow > .play-outer').mousedown(function () {
        $('.play-outer').remove();
        var margins = setMargin();
        
        $('.newbutton, .counter').css({'display': 'block'});
        
        countdown();
        dotChange();
        removeGame();
        
    });
        
    $('button').click(function () {
        pluscounter++;
        dotChange();
    });
    
    $('#gamewindow').mousedown(function () {
        negcounter++;
    });
    
});
    
    
    