/*jshint onevar: true*/
/*global $, jQuery, alert*/

function dotChange() {
    'use strict';
    var margins = setMargin(), setcolor = getColor();
    $('.newbutton').css({'margin-top': margins[0], 'margin-left': margins[1], 'background-color': setcolor});
}