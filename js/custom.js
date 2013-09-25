$(document).ready(function() {
	console.log("sup");
	var History = window.History;

	if(!History.enabled){
		return false;
	}

	History.Adapter.bind(window,'statechange',function(){
    	var State = History.getState();

    	History.log(State.data, State.title, State.url);
    	//alert(State.url);

    	$("#main-content").load(State.url + " #main-content");

    	console.log("hello");

    	//$('.tooths').bind("click" ,eatIt);
	});

   $('.tooths').click(function(e){
   		e.preventDefault();
   		//var url= $(this).attr('href');
   });


   function chew(){
   	 	$("footer").animate({
		top: "+=100",
		specialEasing: {
      		top: "easeOutBounce"
      	},
	}).animate({
      	top: "-=100"
    }).animate({
    	top: "+=50"
    }).animate({
    	top: "-=50"
    },function(){
    		//$(document).ready(function(){
    			$("#main-content").slideDown('slow', function(){
      				$('.tooths').bind("click" ,eatIt);
      				changeBox();

      			});
    		//});
      });
   };

function buttonsGo(){
	if($('.tooths').css('background' , '#000000')){
		//alert("black");
	}
}
function  changeBox(){

 	 	if ($('#box').css('background-color') === 'rgb(0, 0, 0)') {
 	 		//alert("black")
			$('#box').css('background-color' , 'rgb(225, 0, 0)');
		}
		else{
			$('#box').css('background-color' , 'rgb(0, 0, 0)');
		}
}

   function eatIt(){
		//$("nav a").click(function(e){
			//	.preventDefault();
			$('.tooths').fadeIn();
			var tooth = $(this);
			var url = $(this).attr("href");
			//buttonsGo();
			//History.pushState({state:$(this).attr('data-state'),content:$('#main-content').html()}, null, url);

			$(".tooths").unbind("click" ,eatIt);
			$("#main-content").slideUp('slow', function(){
					chew();
					changeBox();
                    $('#main-content').empty();
					History.pushState(null, null, url);
					//$("#main-content").load(url);
				});
			//return false;
		//});
	};

	$('.tooths').bind("click" ,eatIt);

});

