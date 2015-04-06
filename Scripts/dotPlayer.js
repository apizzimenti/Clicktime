/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    'use strict';
    
    $('#gamewindow > .play-outer').mousedown(function () {
        $('.play-outer').remove();
        
        $('.newbutton, .counter').css({'display': 'block'});
        countdown();
        dotChange();
        count();
        genData();
        removeGame();
        
        $('#reload').click(function () {
            location.reload();
        });
    });
});
