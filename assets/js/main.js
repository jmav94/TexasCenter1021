
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


  $('#tabs-nav-m li:first-child').addClass('active');
  $('.tab-content-m').hide();
  $('.tab-content-m:first').show();

  $('#tabs-nav-m li').click(function(){
    $('#tabs-nav-m li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content-m').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });


  $('#tabs-nav-a li:first-child').addClass('active');
  $('.tab-content-a').hide();
  $('.tab-content-a:first').show();

  $('#tabs-nav-a li').click(function(){
    $('#tabs-nav-a li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content-a').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  $('#tabs-nav-c li:first-child').addClass('active');
  $('.tab-content-c').hide();
  $('.tab-content-c:first').show();

  $('#tabs-nav-c li').click(function(){
    $('#tabs-nav-c li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content-c').hide();

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

$(".hero-carousel").owlCarousel({
  items: 1,
  autoplay:true,
  loop:true,
  autoplaySpeed:4000,
  slideSpeed: 4000,
  dotsSpeed: 4000,
  dragEndSpeed: 4000,
  autoplayTimeout: 6000,
  margin:0,
  dots: true,
});
