$(document).ready(function(){
	
	var lastThumb;
	var lastPreview;
	var lastSection;
	var lastImg;

	var currentThumb;
	var currentPreivew;
	var currentH2;
	var currentSection;


//main click function for thumbnail: opens up the project div and sets variables for current and last project

	$("#loader").delegate('.work-link', 'click', function(e) {
		
		$(lastThumb).show();
		currentThumb = $(this);

		$(currentThumb).removeClass('thumb-fade');

		
		$(currentThumb).parent("div").children('h2').removeClass('title-fade');
		currentPreview = $(currentThumb).parent("div");
		currentH2 = $(currentPreview).children('h2');

		if (lastSection != $(this).attr('href')){
			closeSection();

		};
		
		var this_img = $(currentThumb).children('img');
		var this_img_url = $(this_img).attr("src");

		lastPreview = $(lastThumb).parent("div");

		$(currentThumb).animate({
			opacity: "0"
			},
			 function() {
				$(currentThumb).css({
					visibility: 'hidden'
					
				});
		});

		currentSection = currentThumb.attr('href');
		lastImg = this_img;
		lastThumb = currentThumb;
		lastSection = currentSection;
				
		$(currentSection).slideDown();

		e.preventDefault();

		false
		
	}); 

//close button function that collapses current open project section

		$("#loader").delegate('.close-btn', 'click', function(e) {

		$(currentSection).slideUp( function(){
			$(currentThumb).css({
				visibility: 'visible'
				
			});
			$(currentThumb).animate({
					opacity: '1'
				},
				function(){
					$(currentThumb).addClass('thumb-fade');
					$(currentH2).css({
						opacity: '0'
						
					});
					$(currentH2).addClass('title-fade');
				});
			});	
		});
	

//function that closes the last open section after clicking on a new section
	function closeSection(){

		$(lastSection).slideUp( function(){

			$(lastPreview).children('.work-link').css({
				visibility: 'visible'
			});

			$(lastPreview).children('.work-link').animate({
					opacity: '1'
				},
				function(){
					$(lastPreview).children('.work-link').addClass('thumb-fade');
					$(lastPreview).children('.section-title').css({
						opacity: '0'
					});					
					$(lastPreview).children('.section-title').addClass('title-fade');
			});		
		});

	};		


//hover function for thumbnails that deals with opacity for a tag and h2 title
	$(".preivew").hover(function() {
		var currentPreview = $(this);
		$(currentPreview).children('.title-fade').stop(1,1).animate({
			opacity: "1"
			});
		$(currentPreview).children('.thumb-fade').stop(1,1).animate({
			opacity: "0.1"
			});


	}, function() {
		var currentPreview = $(this);
		$(currentPreview).children('.title-fade').animate({
			opacity: "0"
			});		
		$(currentPreview).children('.thumb-fade').animate({
			opacity: "1"
			});		
	});
	

});