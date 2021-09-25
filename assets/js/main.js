
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