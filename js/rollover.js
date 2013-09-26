$(document).ready(function(){

	$(".tooths").hover(function() {
		$(this).addClass('animated flipOutY');
	}, function() {
		$(this).removeClass('flipOutY');
		/* Stuff to do when the mouse leaves the element */
	});

});