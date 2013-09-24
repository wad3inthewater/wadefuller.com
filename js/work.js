$(document).ready(function(){

	$(".work-link").click(function(e){
		
		$(".work-link").children('img').fadeIn();
		$('section').fadeOut();

		var currentThumb = $(this);
		var section = currentThumb.attr('href');
		//alert(section);
		$(currentThumb).children('img').fadeOut();
		$(section).fadeIn();
		

		//currentThumb.next("img")slideUp();
		//currentThumb.next('section').show();
		e.preventDefault();
		
	});


});