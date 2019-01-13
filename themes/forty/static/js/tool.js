(function($) {

    if ($('#excel2po').length > 0 ) {
 
        var convert = function() {
            var textarea = $("#source").val() ;
            var val = '';
            $.each(textarea.split(/\n+/), function(index, type) {

                var parts = type.trim().split("\t");
                if (parts.length == 1) {
                    parts = type.split(" ");
                }
                if (parts.length == 2) {
                    val += 'msgid "' + parts[0] + '"\n';
                    val += 'msgstr "' + parts[1] + '"\n';
                    val += '\n';
                }

            });
            console.log(val);
            $("#po").val(val); 
        }

        $("#convert").click(function() {
            convert();
        });

        convert();

    }

    // グラフの背景色を白にする
    Chart.plugins.register({
        beforeDraw: function(ch){
            var ctx = ch.chart.ctx;
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, ch.chart.width, ch.chart.height);
        }
    });

    // グラフの中にラベルを入れる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            // To only draw at the end of animation, check for easing === 1
            var ctx = chart.ctx;

            chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, index) {
                        // Draw the text in black, with the specified font
                        ctx.fillStyle = 'rgb(0, 0, 0)';

                        var fontSize = 12;
                        var fontStyle = 'normal';
                        var fontFamily = 'Helvetica Neue';
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                        // Just naively convert to string for now
                        // var dataString = dataset.data[index].toString();
                        var dataString = chart.data.labels[index] + '(' + dataset.data[index].toString() + ')';

                        // Make sure alignment settings are correct
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';

                        var padding = 5;
                        var position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                    });
                }
            });
        }
    });

    /**
     * ランダム色を取得する
     */
    function getRundomColor(){
        var clrArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        var clr = '#';
        for(i=0; i < 6; i++){
            clr = clr + clrArr[Math.floor( Math.random()*16)];
        }
        return clr;
    }

    if ($('#tsv2pichart-source').length > 0 ) {
 
        var render = function() {

            var data = [];
            var colors = [
                '#ff6347',
                '#ffa500',
                '#f0e68c',
                '#3cb371',
                '#4169e1'
            ];
            var labels = [];
            
            var textarea = $("#source").val() ;
            var val = '';
            var idx = 0;
            $.each(textarea.split(/\n+/), function(index, type) {

                var parts = type.trim().split("\t");
                if (parts.length == 1) {
                    parts = type.split(" ");
                }
                if (parts.length == 2) {
                    data.push(parts[1]);
                    labels.push(parts[0]);
                    if (colors.length <= idx) {
                        colors.push(getRundomColor());
                    }
                    idx++;
                }

            });

            data = {
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                  }],
                labels: labels
            };

            var width = 1000;
            var height = 1000;
            if ($('#tsv2pichart-source [name="chart_size"]').val()) {
                width = $('#tsv2pichart-source [name="chart_size"]').val();
                height = $('#tsv2pichart-source [name="chart_size"]').val();
            }
            var div = $('#tsv2pichart-chart');
            var canvas = $('#tsv2pichart-chart #chart-canvas');
            $(div).hide();
            $(div).width(width);
            $(div).height(height);
            $(div).show();
            var chart = new Chart(canvas, {
                    type: $('#tsv2pichart-source [name="chart_type"]').val(),
                    data: data,
                    options: { 
                        responsive: true,
                        pieceLabel: {
                            render: 'label',
                            position: 'outside'
                        }
                    }
            });
        }

        $("#tsv2pichart-source #render").click(function() {
            render();
        });

        $("#tsv2pichart-chart #download").click(function() {
            var canvas = $('#tsv2pichart-chart #chart-canvas')[0];
            canvas.toBlob(function(blob) {
                saveAs(blob,  'chart.png');
            });
        });

    }

})(jQuery);
