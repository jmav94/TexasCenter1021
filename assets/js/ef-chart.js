var b1 = document.getElementById("bChartOne").getContext("2d");
var bChartOne = new Chart(b1, {
    type: 'bar',
    data: {
        labels: ['2009', '2011', '2013', '2015', '2018'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250, 375, 500],
            backgroundColor: 'rgb(181, 163, 106)',
            borderColor: 'rgb(181, 163, 106)',
            borderWidth: 1
        },{
            label: 'votes',
            data: [10, 122, 220, 335, 300],
            backgroundColor: 'rgb(97, 22, 45)',
            borderColor: 'rgb(181, 163, 106)',
            borderWidth: 1

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var b2 = document.getElementById("bChartTwo").getContext("2d");
var bChartTwo = new Chart(b2, {
    type: 'bar',
    data: {
        labels: ['2009', '2011', '2013', '2015', '2018'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250, 375, 500],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 1
        },{
            label: 'votes',
            data: [10, 122, 220, 335, 300],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(97, 22, 45)',
            borderWidth: 1

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var b3 = document.getElementById("bChartThree").getContext("2d");
var bChartThree = new Chart(b3, {
    type: 'bar',
    data: {
        labels: ['2009', '2011', '2013', '2015', '2018'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250, 375, 500],
            borderColor: 'rgb(97, 22, 45)',
            backgroundColor: 'rgb(97, 22, 45)',
            borderWidth: 1
        },{
            label: 'votes',
            data: [10, 122, 220, 335, 300],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 1

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var b4 = document.getElementById("bChartFour").getContext("2d");
var bChartFour = new Chart(b4, {
    type: 'bar',
    data: {
        labels: ['2009', '2011', '2013','2014', '2015', '2017' , '2018' , '2020','2021'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250, 375, 480, 300, 100, 10, 200],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106))',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var lCh = document.getElementById("lChart").getContext("2d");
var lChart = new Chart(lCh, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 2
          }]
    },
    options: {
      responsive: true,
    }
});
