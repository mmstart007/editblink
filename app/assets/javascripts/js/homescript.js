var rate = 3;
var textdefault ;
$(document).ready(function() {
	textdefault = $('textarea.job-input-box').val();
	//rate = $('.rate input').val().replace('¢','');
	$('input.rate').val(rate+"¢");
	$('textarea.job-input-box').click(function(e) {
		if ( $('textarea.job-input-box').val()== textdefault) {
			$('textarea.job-input-box').val("");
		}
  });
	$('textarea.job-input-box').focusout(function(e) {
    if ( $('textarea.job-input-box').val()== "") {
			$('textarea.job-input-box').val(textdefault);
		}
  });
	$(".pay input").click(function(e) {
    if ( $('textarea.job-input-box').val()== textdefault) {
			$('textarea.job-input-box').val("");
		}
		$('input.cost').val($('input.cost').val().replace('$','').replace(' ',''))
	});

	var input = 'textarea.job-input-box';
  var count = 'input.words';
  $(count).show();
  word_count(input, count);
  $(this).keyup(function() { word_count(input, count) });  

});
function word_count(field, count) {
  var number = 0;
	var textfield = $(field).val();
	if (textfield==textdefault) {
		textfield="";
	}
    var matches = textfield.match(/\b/g);
    if(matches) {
        number = matches.length/2;
    }
	if ( number>0){
    	$(count).val( number );
		$('input.cost').val("$ "+ (number*rate/100).toFixed(2));
		
	}
	else {
		$(count).val("");
		$('input.cost').val("");
	}

}