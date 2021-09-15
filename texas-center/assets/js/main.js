
  $(document).ready(function(){
    $(".tab-content").hide();
    $(".tab1").show();

    $(".map-points").click(function(){
        var name =  $(this).attr("data-filter");
        $(".tab-content").not("."+name).hide();
        $(".tab-content").filter("."+name).fadeIn();
    });
});


new WOW().init();