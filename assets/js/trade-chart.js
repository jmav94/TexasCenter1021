 
var lOne = document.getElementById("lineOne").getContext("2d");
var lineOne = new Chart(lOne, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: "rgba(97, 22, 45, 1)",
            backgroundColor: "rgba(97, 22, 45, 0.1)",
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: 'rgba(181, 163, 106, 1)',
            backgroundColor: 'rgba(181, 163, 106, 0.1)',
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

var lExportOne = document.getElementById("chart-export-one").getContext("2d");
var lExportOne = new Chart(lExportOne, {
    type: "treemap",
    data: {
      datasets: [
        {
        tree: [ {
            title: "33460",
            description: "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
            value: 1900074770,
          },
          {
            title: "34320",
            description: " Natural gas, in the gaseous state ",
            value:  605941408 ,
          },
          {
            title: "77642",
            description: " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
            value:   426794290  ,
          },
          {
            title: "78439",
            description: " Other parts and accessories ",
            value:  228291500  ,
          },
          {
            title: "75997",
            description: "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
            value:   224680384 ,
          },
          {
            title: "82119",
            description: "Parts of the seats of subgroup 821.1",
            value: 123281865,
          },
          {
            title: "77282",
            value:  84177056,
            description: "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
          },
          {
            title: "59899",
            value: 81052518 ,
            description: "Other chemical products and preparations ",
          },
          {
            title: "57431",
            value: 79260529,
            description: " Polycarbonates ",
          },
          {
            title: "69969",
            description: " Articles of iron or steel, n.e.s. ",
            value: 77659190 ,
          }],
        
          key: "value",
          groups: ['title'],
          spacing: -0.5,
          borderWidth: 0.5,
          fontColor: "white",
          backgroundColor: [
            "rgba(97, 22, 45, 1)",
            "rgba(97, 22, 45, 0.95)",
            "rgba(97, 22, 45, 0.80)",
            "rgba(97, 22, 45, 0.75)",
            "rgba(97, 22, 45, 0.65)",
            "rgba(97, 22, 45, 0.64)",
            "rgba(97, 22, 45, 0.63)",
            "rgba(97, 22, 45, 0.62)",
            "rgba(97, 22, 45, 0.61)",
            "rgba(97, 22, 45, 0.60)",
          ],
          borderColor: "#61162d",
          hoverBackgroundColor: "#61162d"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec"
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#FFF',
        titleFontSize: 16,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 16,
        displayColors: false,
        callbacks: {
          title: function(item, data) {
            var dataset = data.datasets[item[0].datasetIndex];
            var dataItem = dataset.tree[item[0].index];
            return "SITC CODE: "+dataItem.title;
            //return data.datasets[item[0].datasetIndex].key;
          },
          label: function(item, data) {
            var dataset = data.datasets[item.datasetIndex];
            var dataItem = dataset.tree[item.index];
             
            
            return 'Value: ' + dataItem.value;
          },
          afterLabel: function(item, data) {
            var dataset = data.datasets[item.datasetIndex];
            var dataItem = dataset.tree[item.index];
             
            
            return dataItem.description;
          }
        }
      }
    }

});

var lImportOne = document.getElementById("chart-import-one").getContext("2d");
var lImportOne = new Chart(lImportOne, {
    type: "treemap",
    data: {
      datasets: [
        {
        tree: [ {
            title: "89846",
            description: " Semiconductor media ",
            value: 906103444,
          },
          {
            title: "78439",
            description: " Other parts and accessories ",
            value: 767551658,
          },
          {
            title: "75997",
            description: "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
            value:  605486328 ,
          },
          {
            title: "71899",
            description: " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
            value:  575712968 ,
          },
          {
            title: "82119",
            description: " Parts of the seats of subgroup 821.1 ",
            value:  379578842 ,
          },
          {
            title: "78432",
            description: " Other parts and accessories of bodies (including cabs) ",
            value: 245192070,
          },
          {
            title: "71652",
            value: 245192070,
            description: " Other generating sets ",
          },
          {
            title: "93100",
            value: 198626123,
            description: " Special transactions and commodities not classified according to kind ",
          },
          {
            title: "71690",
            value: 177398821,
            description: " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
          },
          {
            title: "77121",
            description: "Static converters (e.g., rectifiers) ",
            value: 171717181,
          }],
        
          key: "value",
          groups: ['title'],
          spacing: -0.5,
          borderWidth: 0.5,
          fontColor: "black",
          backgroundColor: [
            "rgba(181, 163, 106, 1)",
            "rgba(181, 163, 106, 0.95)",
            "rgba(181, 163, 106, 0.85)",
            "rgba(181, 163, 106, 0.75)",
            "rgba(181, 163, 106, 0.65)",
            "rgba(181, 163, 106, 0.64)",
            "rgba(181, 163, 106, 0.63)",
            "rgba(181, 163, 106, 0.62)",
            "rgba(181, 163, 106, 0.61)",
            "rgba(181, 163, 106, 0.60)",
          ],
          borderColor: "#b5a36a",
          hoverBackgroundColor: "#b5a36a"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec"
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#FFF',
        titleFontSize: 16,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 16,
        displayColors: false,
        callbacks: {
          title: function(item, data) {
            var dataset = data.datasets[item[0].datasetIndex];
            var dataItem = dataset.tree[item[0].index];
            return "SITC CODE: "+dataItem.title;
            //return data.datasets[item[0].datasetIndex].key;
          },
          label: function(item, data) {
            var dataset = data.datasets[item.datasetIndex];
            var dataItem = dataset.tree[item.index];
             
            
            return 'Value: ' + dataItem.value;
          },
          afterLabel: function(item, data) {
            var dataset = data.datasets[item.datasetIndex];
            var dataItem = dataset.tree[item.index];
             
            
            return dataItem.description;
          }
        }
      }
    }

});

var lTwo = document.getElementById("lineTwo").getContext("2d");
var lineTwo = new Chart(lTwo, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lThree = document.getElementById("lineThree").getContext("2d");
var lineThree = new Chart(lThree, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lFour = document.getElementById("lineFour").getContext("2d");
var lineFour = new Chart(lFour, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lFive = document.getElementById("lineFive").getContext("2d");
var lineFive = new Chart(lFive, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lSix = document.getElementById("lineSix").getContext("2d");
lOne.height = 300;
var lineSix = new Chart(lSix, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lSeven = document.getElementById("lineSeven").getContext("2d");
var lineSeven = new Chart(lSeven, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lEight = document.getElementById("lineEight").getContext("2d");
var lineEight = new Chart(lEight, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lNine = document.getElementById("lineNine").getContext("2d");
var lineNine = new Chart(lNine, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lTen = document.getElementById("lineTen").getContext("2d");
var lineTen = new Chart(lTen, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lEleven = document.getElementById("lineEleven").getContext("2d");
var lineEleven = new Chart(lEleven, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lTwelve = document.getElementById("lineTwelve").getContext("2d");
var lineTwelve = new Chart(lTwelve, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var lThirteen = document.getElementById("lineThirteen").getContext("2d");
var lineThirteen = new Chart(lThirteen, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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


var l14 = document.getElementById("line14").getContext("2d");
var line14 = new Chart(l14, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l15 = document.getElementById("line15").getContext("2d");
var line15 = new Chart(l15, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l16 = document.getElementById("line16").getContext("2d");
var line16 = new Chart(l16, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l17 = document.getElementById("line17").getContext("2d");
var line17 = new Chart(l17, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l18 = document.getElementById("line18").getContext("2d");
var line18 = new Chart(l18, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l19 = document.getElementById("line19").getContext("2d");
var line19 = new Chart(l19, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l20 = document.getElementById("line20").getContext("2d");
var line20 = new Chart(l20, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l21 = document.getElementById("line21").getContext("2d");
var line21 = new Chart(l21, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l22 = document.getElementById("line22").getContext("2d");
var line22 = new Chart(l22, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l23 = document.getElementById("line23").getContext("2d");
var line23 = new Chart(l23, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l24 = document.getElementById("line24").getContext("2d");
var line24 = new Chart(l24, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l25 = document.getElementById("line25").getContext("2d");
var line25 = new Chart(l25, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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


var l26 = document.getElementById("line26").getContext("2d");
var line26 = new Chart(l26, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l27 = document.getElementById("line27").getContext("2d");
var line27 = new Chart(l27, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l28 = document.getElementById("line28").getContext("2d");
var line28 = new Chart(l28, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l29 = document.getElementById("line29").getContext("2d");
var line29 = new Chart(l29, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l30 = document.getElementById("line30").getContext("2d");
var line30 = new Chart(l30, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l31 = document.getElementById("line31").getContext("2d");
var line31 = new Chart(l31, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l32 = document.getElementById("line32").getContext("2d");
var line32 = new Chart(l32, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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

var l33 = document.getElementById("line33").getContext("2d");
var line33 = new Chart(l33, {
    type: 'line',
    data: {
      labels: ["2017-04", "2017-06" ,"2017-08", "2017-12", "2018-04", "2018-08", "2018-12", "2019-04", "2019-12", "2020-04", "2020-08", "2020-12"],
        datasets: [{
            label: 'Series 1',
            data: [300000000,600000000,900000000,800000000,500000000,400000000,100000000,200000000,500000000,400000000,240000000,400000000],
            borderColor: '#61162d',
            backgroundColor: '#61162d',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [500000000,800000000,600000000,700000000,600000000,800000000,200000000,400000000,600000000,700000000,340000000,300000000],
            borderColor: '#b5a36a',
            backgroundColor: '#b5a36a',
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
