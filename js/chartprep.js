var ctx;
ctx = document.getElementById("myChart").getContext('2d');
function drawingChartforTags(cleanJson,minimal,taggys,cA){

  //console.log("cleanJSON in charts"+cleanJson);
  console.log(minimal);
 ctx = document.getElementById("myChart").getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 300;
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: Object.keys(cleanJson),
        datasets: [{
            label: 'no of occurences',
            data: Object.values(cleanJson),
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255,255,0 ,0.6)',
                'rgba(51,105,30 ,0.6)',
                'rgba(33,150,243 ,0.6)',
                'rgba(216,27,96 ,0.6)',
                'rgba(213,0,249 ,0.6)',
                'rgba(38,50,56 ,0.6)',
                'rgba(198,255,0 ,0.6)',
                'rgba(0,150,136 ,0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    stepValue:minimal


                }
            }]
        },
        responsive:true,
        maintainAspectRatio: false
    }
});
ctx.canvas.onclick = function (evt) {
var activePoints = myChart.getElementsAtEvent(evt);
chartData = activePoints[0]['_chart'].config.data;
idx = activePoints[0]['_index'];

var label = chartData.labels[idx];
var value = chartData.datasets[0].data[idx];
drawModal(label,taggys,cA);
}
}
