/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

var pluscounter = 0, negcounter = -1, plusdata = [10], negdata = [10], total = [10], i = 0, last = 0;

function count() {
    "use strict";
    
    $('.newbutton').click(function () {
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
        negdata[i] = negcounter - pluscounter;
        if (i === 0) {
            total[i] = negcounter * 10;
        } else {
            total[i] = Math.abs(negdata[i] - negdata[i - 1]) * 10;
        }
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

function getTotal() {
    "use strict";
    return total;
}

function getAve() {
    "use strict";
    return pluscounter / negcounter;
}