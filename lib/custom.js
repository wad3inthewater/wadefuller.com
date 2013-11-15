$(document).ready(function() {
	console.log("sup");

	var History = window.History;
	if(!History.enabled){
		return false;
	}

	History.Adapter.bind(window,'statechange',function(){
    	var State = History.getState();

    	History.log(State.data, State.title, State.url);
    	$("#loader").load(State.url + " #main-content", function(){
            $("#loader").delay(400).fadeIn("slow");
            //alert("done");
        });
    	console.log("hello");
	});



   function chew(){
    		//$(document).ready(function(){
    	$("#loader").slideDown('slow', function(){
        	$('.nav-link').bind("click" ,eatIt);
      		});
     };


   $('.nav-link').click(function(e){

   		e.preventDefault();
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

				//$("#loader").delay(500).fadeIn("slow");
			});

	};

	$('.nav-link').bind("click" ,eatIt);



});

