$(document).ready(function(){
	
	var lastThumb;
	var lastSection;

	$("#loader").delegate('.work-link', 'click', function(e) {
		
		//$(".work-link").children('img').fadeIn();
		$(lastThumb).show();
		
		if (lastSection != $(this).attr('href')){
			$(lastSection).slideUp();
		}
		//if($('.section-content').css('display') == 'none'){
		//	alert("fade that");
		//}

		var currentThumb = $(this);
		var this_img = $(currentThumb).children('img');
		var this_img_url = $(this_img).attr("src");

		$(this_img).animate({
			opacity: "0"
			},
			 function() {
				$(this_img).animate({
					opacity: "1"
				});
			/* stuff to do after animation is complete */
		});
			
			
			



		//alert(this_img_url);
		var currentSection = currentThumb.attr('href');

		lastThumb = currentThumb;
		lastSection = currentSection;
		//alert(section);
		//$(currentThumb).children('img').fadeOut();
		
		$(currentSection).slideToggle();



		//currentThumb.next("img")slideUp();
		//currentThumb.next('section').show();

		e.preventDefault();

		false
		

		
	}); 
	



});