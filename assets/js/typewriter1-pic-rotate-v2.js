$(document).ready(function() {

  typing( 0, $('.typewriter-text').data('text') );

  function typing( index, text ) {
    var link = "https://www.texascener.tamiu.edu";
    var campaign_img = "/assets/images/data.jpeg";
    var textIndex = 1;


    var tmp = setInterval(function() {
        if ( textIndex == 1){
            switch (text[index]) {
            	case 'Research.':
            	    link = "activity-report.html";
            	    campaign_img = "/assets/images/research.jpeg";
            		break;
            	case 'Data':
            	    link = "city-profiles.html";
            	    campaign_img = "/assets/images/data.jpeg";
            		break;
            	case 'Community.':
            	    link = "border-report.html";
            	    campaign_img = "/assets/images/community.jpeg";
            		break;
            	default:
            	    link = "city-profiles.html";
            	    campaign_img = "/assets/images/data.jpeg";
            }
            $('.typewriter-text').wrap('<a target="_blank" href="'+link+'"></a>');
            $('#campaign-img').wrap('<a target="_blank" href="'+link+'"></a>');
            $("#campaign-img").fadeOut(300, function() {
                $("#campaign-img").attr("src",campaign_img);
            }).fadeIn(300);

        }
      if ( textIndex < text[ index ].length + 1 ) {
				$('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );

				textIndex++;
			} else {
        setTimeout(function() { deleting( index, text ) }, 4000);
        clearInterval(tmp);
      }

		}, 150);

	}

	function deleting( index, text ) {

    var textIndex = text[ index ].length;

    var tmp = setInterval(function() {

      if ( textIndex + 1 > 0 ) {
        $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
        textIndex--;
      } else {
        index++;
        if ( index == text.length ) { index = 0; }
        typing( index, text );
        clearInterval(tmp);
      }
      if (textIndex == 0){

          $('.typewriter-text').unwrap();
          $('#campaign-img').unwrap();
      }
		}, 150)

  }

});



