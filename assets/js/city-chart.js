var b1 = document.getElementById("bChartOne").getContext("2d");
var bChartOne = new Chart(b1, {
    type: 'bar',
    data: {
        labels: ['USA', 'Texas', 'Laredo', ],
        datasets: [{
            label: 'votes',
            data: [250, 375, 500],
            backgroundColor: '#00274C',
            borderColor: '#00274C',
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
        labels: ['USA', 'Texas', 'Laredo', ],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#00274C',
            borderColor: '#00274C',
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
        labels: ['USA', 'Texas', 'Laredo', ],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#17770F',
            borderColor: '#17770F',
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
        labels: ['USA', 'Texas', 'Laredo', ],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#00274C',
            borderColor: '#00274C',
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
var b5 = document.getElementById("bChartFive").getContext("2d");
var bChartFive = new Chart(b5, {
    type: 'bar',
    data: {
        labels: ['USA', 'Texas', 'Laredo'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#7a7a7a',
            borderColor: '##7a7a7a;',
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

var b6 = document.getElementById("bChartSix").getContext("2d");
var bChartSix = new Chart(b6, {
    type: 'bar',
    data: {
        labels: ['USA', 'Texas', 'Laredo'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#61162d',
            borderColor: '#61162d',
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

var b7 = document.getElementById("bChartSeven").getContext("2d");
var bChartSeven = new Chart(b7, {
    type: 'bar',
    data: {
        labels: ['USA', 'Texas', 'Laredo', ],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#17770F',
            borderColor: '#17770F',
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

var b8 = document.getElementById("bChartEight").getContext("2d");
var bChartEight = new Chart(b8, {
    type: 'bar',
    data: {
        labels: ['USA', 'Texas', 'Laredo'],
        datasets: [{
            label: 'votes',
            data: [20, 125, 250],
            backgroundColor: '#7a7a7a',
            borderColor: '##7a7a7a;',
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
            backgroundColor: '#00274C',
            borderColor: '#00274C',
            borderWidth: 2
          }]
    },
    options: {
      responsive: true, 
    }
});
var lCh2 = document.getElementById("lChartTwo").getContext("2d");
var lChartTwo = new Chart(lCh2, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            backgroundColor: '#00274C',
            borderColor: '#00274C',
            borderWidth: 2
          }]
    },
    options: {
      responsive: true, 
    }
});

var pie = document.getElementById("pieChart").getContext("2d");
var pieChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        labels: ['Men','Women'],
        datasets: [{
            label: 'My First Dataset',
            data: [51.5, 48.5],
            backgroundColor: [
              '#00274C',
              '#4478b5',
            ],
            hoverOffset: 10,
        }]
    },
});

var pie1 = document.getElementById("pieChartOne").getContext("2d");
var pieChartOne = new Chart(pie1, {
    type: 'doughnut',
    data: {
        labels: ['Men','Women'],
        datasets: [{
            label: 'My First Dataset',
            data: [51.5, 48.5],
            backgroundColor: [
              '#00274C',
              '#4478b5',
            ],
            hoverOffset: 10
        }]
    },
});



var chOne = document.getElementById("myChartOne").getContext("2d");
var myChartOne = new Chart(chOne, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: '#00274C',
            backgroundColor: '#00274C',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: '#7a7a7a',
            backgroundColor: '#7a7a7a',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
      scales: {
        y: {
            beginAtZero: true
        }
    }
    }
    
});

var chTwo = document.getElementById("myChartTwo").getContext("2d");
var myChartTwo = new Chart(chTwo, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: '#00274C',
            backgroundColor: '#00274C',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: '#7a7a7a',
            backgroundColor: '#7a7a7a',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
      scales: {
        y: {
            beginAtZero: true
        }
    }
    }
    
});
var chThree = document.getElementById("myChartThree").getContext("2d");
var myChartThree = new Chart(chThree, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: '#00274C',
            backgroundColor: '#00274C',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: '#7a7a7a',
            backgroundColor: '#7a7a7a',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
      scales: {
        y: {
            beginAtZero: true
        }
    }
    }
    
});