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

	
function opener(){
   
   		$(".container").animate({
   			
   			top: "20px"
   		}, function(){
   			
   			$(this).animate({
   				width:"100%"
   			},700, function() {
   				$(".nav-link").fadeIn();
   				$('.container').unbind("click" ,opener);
   			});
   		});
   		//preventDefault();
   
   }

   function chew(){
    		//$(document).ready(function(){
    	$("#loader").slideDown('slow', function(){
        	$('.nav-link').bind("click" ,eatIt);
      		});
     }; 	


   $('.nav-link').click(function(e){
   		
   		e.preventDefault();
   });


   $(".nav-link").hover(
   	function(){
   		

   },function(){

   });
	   

   function eatIt(){
			//$('.nav-link').fadeIn();
			//alert("hi");
			var linkCLicked = $(this);
			var url = $(this).attr("href");
			//buttonsGo();
			
			//$("#loader").show();
			//chew();
			//$("#loader").addClass("animated shake");	

			$("#loader").fadeOut( "slow", function(){
				History.pushState(null, null, url);

				$("#loader").delay(500).fadeIn("slow");

			});

			//$(".nav-link").unbind("click" ,eatIt);
			/*
			$("#loader").slideUp('slow', function(){
					//chew();
					//changeBox();
					
					//$('#loader').empty();

					//$("#main-content").load(url);
				});
			*/	
			//return false;
		//});
	};

	$('.nav-link').bind("click" ,eatIt);
	//$('.container').bind("click" ,opener);

});

