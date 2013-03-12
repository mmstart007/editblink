var textdefault ;
$(document).ready(function() {
	 textdefault = $('.email input').val();
	 $('.email input').click(function(e) {
        if ( $('.email input').val()== textdefault) {
			$('.email input').val("");
		}
      });
	 $('.email input').focusout(function(e) {
        if ( $('.email input').val()== "") {
			$('.email input').val(textdefault);
		}
    });
	$('.submit input').click(function(e) {
         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		  if( !emailReg.test( $('.email input').val() ) ) {
		  alert("Invalid e-mail address");
			return false;
			
		  } else {
			return true;
		  }
    });
});
