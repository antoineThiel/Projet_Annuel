var $ = require('jquery');

let ctx = $('#rank_display');

let dataLabels = [];
let data = [];

$.ajax({
    url: '/ajax/ranks_homepage',
    method: 'GET',
    success: function (response) {
        ctx.siblings('.loader').removeClass('loader');
        dataLabels = response.labels;
        data       = response.quantities;

        let myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: dataLabels,
                datasets: [{
                    label: 'Répartition des rangs',
                    data: data,
                    backgroundColor: [
                        'rgb(210,105,30)',
                        'rgb(134,137,146)',
                        'rgb(239,216,7)',
                        'rgb(185,242,255)',
                    ],
                    borderColor: [
                        'rgb(210,105,30)',
                        'rgb(134,137,146)',
                        'rgb(239,216,7)',
                        'rgb(185,242,255)',
                    ],
                    borderWidth: 0.5
                }]
            },
            options: {
                cutoutPercentage: 15,
                scales: {
                    xAxes: [{
                        display:false,
                    }],
                    yAxes: [{
                        display:false
                    }]
                },
                legend:{
                    labels: {
                        fontSize: 14,
                    }
                },
                ratio:5,
            }
        });
    }
});


