/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    "use strict";
    
    $('.play-outer').css({'display': 'none'});
    
    $('#small').click(function () {
        $('.newbutton').css({'height': '14px', 'width': '14px'});
        $('#small').css({'border': '1px solid red'});
        $('.chooser').fadeOut(300);
        window.setTimeout(function () {
            $('.play-outer').fadeIn(300);
        }, 300);
    });
    
    $('#med').click(function () {
        $('.newbutton').css({'height': '18px', 'width': '18px'});
        $('#med').css({'border': '1px solid red'});
        $('.chooser').fadeOut(300);
        window.setTimeout(function () {
            $('.play-outer').fadeIn(300);
        }, 300);
    });
    
    $('#large').click(function () {
        $('.newbutton').css({'height': '22px', 'width': '22px'});
        $('#large').css({'border': '1px solid red'});
        $('.chooser').fadeOut(300);
        window.setTimeout(function () {
            $('.play-outer').fadeIn(300);
        }, 300);
    });
});