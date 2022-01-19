
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
const initTabs = (id) => {

  $("#" + id + " li:first-child").addClass("active");
  $("." + id + "-content").hide();
  $("." + id + "-content:first").show();

  $("#" + id + " li").click(function () {
    $("#" + id + " li").removeClass("active");
    $(this).addClass("active");
    $("." + id + "-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
};
$(document).on("click", ".previewFile", function () {
  var url = $(this).attr("data-file");
  $("#viewverPDF").attr("src", url);
  window.setTimeout(() => {
    $("#previewModal").modal("show");
  }, 200);
});


const createPDFThumbnailsPreviews = (data) => {
  for (const x of data) {
    for (const s of x.sections) {
      var delay = 1;
      for (const p of s.files) {
        var item = `<div class="card archive-item m-1 wow fadeInUp" data-wow-delay="0.${delay}s">

            <div class="rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img class="card-img-top"
                        data-pdf-thumbnail-file="${p.file}"
                        src="/assets/PDF/pdf.gif" data-pdf-thumbnail-width="500">
                    <div class="archive-overlay">
                    <button class="previewFile btn btn-square btn-outline-light mx-1" data-file="${p.file}"><i class="fa fa-eye"></i></button>
                        <a class="btn btn-square btn-outline-light mx-1" href="${p.file}" download><i
                                class="fa fa-download"></i></a>
                    </div>
                </div>
                <div class="card-body m-3 acrobat-info">
                    <h4>${p.title}</h4>
                    <span>${p.autor}</span>
                </div>
            </div>

        </div>`;
        $("#" + s.refBody).append(item);
        if (delay == 3) {
          delay = 1;
        } else {
          delay++;
        }
      }
      $("#" + s.refTitle).html(s.title);
    }
  }
}

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
  slideSpeed: 6000,
  dotsSpeed: 2000,
  dragEndSpeed: 2000,
  autoplayTimeout: 8000,
  margin:0,
  dots: true,
});

