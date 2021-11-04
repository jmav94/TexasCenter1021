var chOne = document.getElementById("myChartOne").getContext("2d");
var myChartOne = new Chart(chOne, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(97, 22, 45)',
            backgroundColor: 'rgb(97, 22, 45)',
            borderWidth: 1
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
    }
});

var chTwo = document.getElementById("myChartTwo").getContext("2d");;
var myChartTwo = new Chart(chTwo, {
    type: 'bar',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(97, 22, 45)',
            backgroundColor: 'rgb(97, 22, 45)',
            borderWidth: 1
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
    }
});

var chThree = document.getElementById("myChartThree").getContext("2d");;
var myChartThree = new Chart(chThree, {
    type: 'doughnut',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(97, 22, 45)',
            backgroundColor: 'rgb(97, 22, 45)',
            borderWidth: 1
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
    }
});

var chFour = document.getElementById("myChartFour").getContext("2d");;
var myChartFour = new Chart(chFour, {
    type: 'radar',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(97, 22, 45)',
            backgroundColor: 'rgb(97, 22, 45)',
            borderWidth: 1
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(181, 163, 106)',
            backgroundColor: 'rgb(181, 163, 106)',
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
    }
});