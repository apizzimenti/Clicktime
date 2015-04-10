/*jslint plusplus: true*/
/*jshint onevar: true*/
/*jshint undef: true*/

var getStrict = function () {
    "use strict";
};

var letters = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getColor() {
    "use strict";
    var j, first, newcolor = "#";
    for (j = 0; j < 6; j++) {
        first = Math.floor(Math.random() * letters.length);
        newcolor += letters[first].toString();
    }
    console.log(newcolor);
    return newcolor;
}

getColor();