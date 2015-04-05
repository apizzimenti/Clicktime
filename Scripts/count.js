/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

var pluscounter = 0, negcounter = 0, plusdata = [10], negdata = [10], i = 0;

function count() {
    "use strict";
    
    $('button').click(function () {
        pluscounter++;
        dotChange();
    });

    $('#gamewindow').mousedown(function () {
        negcounter++;
    });
}

function genData() {
    "use strict";
    window.setInterval(function () {
        plusdata[i] = pluscounter;
        negdata[i] = negcounter;
        i++;
    }, 3000);
}

function getPos() {
    "use strict";
    return plusdata;
}

function getNeg() {
    "use strict";
    return negdata;
}

function getI() {
    "use strict";
    return i;
}