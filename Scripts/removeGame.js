/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/


function removeGame() {
    'use strict';
    var pos = [], neg = [];
    window.setTimeout(function () {
        $('.newbutton').remove();
        $('#done').append('done.');
        $('#done').fadeIn(300);
        $('#graphs').fadeIn(300);
        pos = getPos();
        neg = getNeg();
    }, 30000);
    
    $('#graphs').click(function () {
        $('#frame').css({'display': 'inline-block'});
        var data = {
            labels: ['3s', '6s', '9s', '12s', '15s', '18s', '21s', '24s', '27s', '30s'],
            datasets: [
                {
                    label: "good clicks",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [pos[0], pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], pos[7], pos[8], pos[9]]
                },
                {
                    label: "bad clicks",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [neg[0], neg[1], neg[2], neg[3], neg[4], neg[5], neg[6], neg[7], neg[8], neg[9]]
                }
            ]
        };

        var ctx = document.getElementById("canvas").getContext("2d");
        window.myLine = new Chart(ctx).Line(data, {
            responsive: true
        });
    });
}