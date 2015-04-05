/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

function setMargin() {
    'use strict';
    var margin_left = Math.floor(Math.random() * 988), margin_top = Math.floor(Math.random() * 540), nums;
    nums = [margin_top + 'px', margin_left + 'px'];
    return nums;
}