$(document).ready(function() {
	console.log("sup");

	var History = window.History;
	if(!History.enabled){
		return false;
	}

	History.Adapter.bind(window,'statechange',function(){
    	var State = History.getState();

    	History.log(State.data, State.title, State.url);
    	$("#loader").load(State.url + " #main-content");
    	console.log("hello");
	});

	

   $('.tooths').click(function(e){
   		$(".container").animate({
   			width: "100%",
   			top: "0"
   		});
   		e.preventDefault();
   });

   function chew(){
   	 	$(".container").animate({
		top: "+=100",
		width: "50%",
		specialEasing: {
      		height: "easeOutBounce"
      	}
      });
	/*function(){
    		//$(document).ready(function(){
    	$("#loader").slideDown('slow', function(){
        	$('.tooths').bind("click" ,eatIt);
      		});
      	});*/
   };

   function eatIt(){
			//$('.tooths').fadeIn();
			var tooth = $(this);
			var url = $(this).attr("href");
			//buttonsGo();
			$(".tooths").unbind("click" ,eatIt);
			$("#loader").slideUp('slow', function(){
					chew();
					changeBox();
					History.pushState(null, null, url);
					//$('#loader').empty();

					//$("#main-content").load(url);
				});
			//return false;
		//});
	};

	//$('.tooths').bind("click" ,eatIt);

});

