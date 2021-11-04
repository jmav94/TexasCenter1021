$(document).ready(function() {
	
	console.log('JS is loaded.');
	
	var active = 2;
	if ($(window).width() >= 768) {
	    active = 3;
    }
	
	var news_articles = $(".news-item");
	$('.news-item').removeClass('active');
	for (var initial = 0; initial < active; initial++){
		news_articles[initial].classList.add('active');
	}
	
	$(".news-arrows-item .fas").click(function(){
		var news_articles = $(".news-item");
		console.log("News Count: " + news_articles.length);
		var active_items = $(".news-item.active").length;
		console.log("Active Items:" + active_items)
		for(var i=news_articles.length-1; i>=0; i--){
		    var article=news_articles[i];
			if( article.classList.contains("active") ){
				var index = i;
				console.log("Index: "+index);
			}
		}
		
		
		$('.news-item').removeClass('active');
		console.log('CLEAR TEST. Active Count: '+ $(".news-item.active").length);
		
		
		if($(this).hasClass('fa-chevron-left') ){
			index = index - active_items;
			if (index < 0){
			    index = news_articles.length - active_items;
			}
			console.log("Active Start Index:" + index);
		}
		
		
		if ( $(this).hasClass('fa-chevron-right') ){
			index = index + active_items;
			if (index >= news_articles.length){
			    index=0;
			}
			console.log("Active Start Index:" + index);
		}
		
		
		for (var j = index; j < index+active_items; j++){
			news_articles[j].classList.add('active');
		}
	});
});