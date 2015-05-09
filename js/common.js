head.ready(function() {

	$('.greet__form_item').change(function(){
		var $this = $(this);
		if($this.val().length) {
			$this.addClass('filled');
		} else {
			$this.removeClass('filled');
		}
	});
(function () {
    jQuery.each($('.footer__social .amount'), function(i, val){
    	if($(this).text().length == 1){
    	$(this).siblings('.fa').addClass('len-1');
	    console.log($(this).text());
    }

    });
 }());
});