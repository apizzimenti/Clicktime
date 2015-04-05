/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    'use strict';
    
    var pluscounter, negcounter;
    
    $('#gamewindow > .play-outer').mousedown(function () {
        $('.play-outer, .chooser').remove();
        countdown();
        var margins = setMargin();
        $('button').css({'display': 'block'});
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
    
    
    