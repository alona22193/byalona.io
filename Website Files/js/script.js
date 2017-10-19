

$(document).ready(function(){
  $(window).scroll(function(){
  


  	var scroll = $(window).scrollTop();
	  if (scroll > 160) {
	    $(".navCustom").css("background" , "-webkit-gradient(linear,left top,left bottom,from(#36414F),to(#364F4C))");
	  }

	  else{
		  $(".navCustom").css("background" , "transparent");  	
	  }
  })
})


