

$(document).ready(function(){
  $(window).scroll(function(){
  


  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $(".navCustom").css("background" , "-webkit-gradient(linear,left top,left bottom,from(#0d505a),to(#106470))");
	  }

	  else{
		  $(".navCustom").css("background" , "transparent");  	
	  }
  })
})


