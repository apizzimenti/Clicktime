/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    'use strict';
    
    $('#gamewindow > .play-outer').mousedown(function () {
        $('.play-outer').remove();
        var margins = setMargin();
        
        $('.newbutton, .counter').css({'display': 'block'});
        countdown();
        dotChange();
        count();
        genData();
        removeGame();
        
        $('#reload').click(function () {
            $('#reload, #min, #hits').css({'display': 'none'});
            $('#done').css({'display': 'none'});
            $('.newbutton, .counter').css({'display': 'block'});
            countdown();
            dotchange();
            count();
            genData();
            removeGame();
        });
    });
});
