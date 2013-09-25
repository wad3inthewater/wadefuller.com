$(document).ready(function(){
	var lastThumb;
	var lastSection;
	$(".work-link").click(function(e){

		//$(".work-link").children('img').fadeIn();
		$(lastThumb).children('img').fadeIn();
		
		if (lastSection != $(this).attr('href')){
			$(lastSection).slideUp();
		}
		/*if($('.section-content').css('display') == 'none'){
			alert("fade that");
		}*/

		var currentThumb = $(this);
		var currentSection = currentThumb.attr('href');
		lastThumb = currentThumb;
		lastSection = currentSection;
		//alert(section);
		//$(currentThumb).children('img').fadeOut();
		$(currentSection).slideToggle();


		//currentThumb.next("img")slideUp();
		//currentThumb.next('section').show();
		e.preventDefault();

	});


});