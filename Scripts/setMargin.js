/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

function setMargin() {
    'use strict';
    var margin_left = Math.floor(Math.random() * 1000), margin_top = Math.floor(Math.random() * 528), nums;
    nums = [margin_top + 'px', margin_left + 'px'];
    return nums;
}