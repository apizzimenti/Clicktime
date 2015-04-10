/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/


function removeGame() {
    'use strict';
    var pos = [], neg = [], tot = [], final;
    window.setTimeout(function () {
        $('.newbutton').hide();
        $('#done').fadeIn(300);
        $('#hits, #min, #reload, #accuracy').fadeIn(300);
        pos = getPos();
        neg = getNeg();
        tot = getTotal();
        final = getAve();
    }, 30000);
    
    $('#hits').click(function () {
        $('#canvas').remove();
        
        var $frame = document.getElementById('frame'), $canvas = document.createElement('canvas');
        $canvas.id = 'canvas';
        $frame.appendChild($canvas);
        var ctx = document.getElementById('canvas').getContext('2d');
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

        window.myLine = new Chart(ctx).Line(data, {responsive: true});
    });
    
    $('#min').click(function () {
        $('#canvas').remove();
        
        var $frame = document.getElementById('frame'), $canvas = document.createElement('canvas');
        $canvas.id = 'canvas';
        $frame.appendChild($canvas);
        var ctx = document.getElementById('canvas').getContext('2d');
        $('#frame').css({'display': 'inline-block'});
        
        var barchartdata = {
            labels: ['3s', '6s', '9s', '12s', '15s', '18s', '21s', '24s', '27s', '30s'],
            datasets: [
                {
                    label: "per minute",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [tot[0], tot[1], tot[2], tot[3], tot[4], tot[5], tot[6], tot[7], tot[8], tot[9]]
                }
            ]
        };
        window.myBar = new Chart(ctx).Bar(barchartdata, {responsive: true});
    });
    
    $('#accuracy').click(function () {
        var $div = document.getElementById('accuracyPane'), $newP = document.createElement('p'), $node = document.createTextNode(final);
        $newP.appendChild($node);
        $div.appendChild($newP);
        $('#accuracyPane').css({'display': 'block'});
    });
}