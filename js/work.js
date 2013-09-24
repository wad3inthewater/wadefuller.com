$(document).ready(function(){
	var lastThumb;
	var lastSection;
	$(".work-link").click(function(e){

		//$(".work-link").children('img').fadeIn();
		$(lastThumb).children('img').fadeIn();
		$(lastSection).slideUp();
		/*if($('.section-content').css('display') == 'none'){
			alert("fade that");
		}*/

		var currentThumb = $(this);
		var currentSection = currentThumb.attr('href');
		lastThumb = currentThumb;
		lastSection = currentSection;
		//alert(section);
		//$(currentThumb).children('img').fadeOut();
		$(currentSection).slideDown();


		//currentThumb.next("img")slideUp();
		//currentThumb.next('section').show();
		e.preventDefault();

	});


});