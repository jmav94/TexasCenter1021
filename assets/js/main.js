
$(document).ready(function(){

  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();
  
  $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
})


// new WOW().init();

$(".owl-carousel").owlCarousel({
  items: 1,
  loop:true,
  autoplay:true,
  autoplaySpeed:2000,
  autoplayTimeout:4000,
  margin:30,
  dots:false,
  nav:true,
  navText: ["<img src='assets/images/arrow.svg'>","<img src='assets/images/arrow.svg'>"]
});



var ctx = document.getElementById("myChartOne");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
    }
});

var ctx = document.getElementById("myChartTwo");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
    }
});

var ctx = document.getElementById("myChartThree");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
    }
});

var ctx = document.getElementById("myChartFour");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul", "Aug",	"Sep","Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Series 1',
            data: [100,	120,	200,	320,	300,	200,	120,	247,	120, 190, 370, 300],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
          },
          {
            label: 'Series 2', // Name the series
            data: [120,	220,	110,	300,	270,	150,	120,	200,	320, 160, 270, 320],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
            borderWidth: 2
        }]
    },
    options: {
      responsive: true, 
    }
});