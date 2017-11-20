

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

 
/* Bootstrap has-error around divs */

function validateText(id) {
	if($("#"+id).val()==null || $("#"+id).val()=="")
	{
		
		var div = $("#"+id).closest("div");
		div.addClass("has-error");		
		return false;
	}
	else {
		var div = $("#"+id).closest("div");
		div.removeClass("has-error");		
		return true;
	}
	
}

$(document).ready(
	function()
	{
		$("#submit").click(function()
		{
			if(!validateText("inputName"))
			{
				return false;		
			}			

			if(!validateText("inputEmail"))
			{
				return false;				
			}

			if(!validateText("inputComments"))
			{
				return false;				
			}

			$("form#contactform").submit();
	}

	)})


