$(document).ready(function() {

  typing( 0, $('.typewriter-text').data('text') );

  function typing( index, text ) {
    var link = "https://www.tamiu.edu";
    var campaign_img = "https://www.tamiu.edu/edelmiro/marketing.jpg";
    var textIndex = 1;


    var tmp = setInterval(function() {
        if ( textIndex == 1){
            switch (text[index]) {
            	case 'Research.':
            	    link = "https://www.tamiu.edu/sole/greek-community.shtml";
            	    campaign_img = "https://www.tamiu.edu/edelmiro/find-your/grow.jpg";
            		break;
            	case 'Data':
            	    link = "https://www.tamiu.edu/newsinfo/2021/02/sevenrankings2082020.shtml";
            	    campaign_img = "https://www.tamiu.edu/edelmiro/find-your/thrive.jpg";
            		break;
            	case 'Community.':
            	    link = "https://www.tamiu.edu/newsinfo/2019/09/tamiuranking2091219.shtml";
            	    campaign_img = "https://www.tamiu.edu/edelmiro/find-your/move-on.jpg";
            		break;
            	default:
            	    link = "https://www.tamiu.edu/newsinfo/2021/04/tamiureskill42921.shtml";
            	    campaign_img = "https://www.tamiu.edu/edelmiro/find-your/next.jpg";
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



