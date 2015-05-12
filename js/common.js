head.ready(function() {

	$('.greet__form_item').change(function(){
		var $this = $(this);
		if($this.val().length) {
			$this.addClass('filled');
		} else {
			$this.removeClass('filled');
		}
	});
	$('.js-nav-toggle').click(function(){
			$('body').toggleClass('is-menu');
	});

	$(window).scroll(function(event) {
		st = $(window).scrollTop();
		$header = $('.header');
		if(st>20){
			$header.addClass('is-atbottom');
		}
		else{
			$header.removeClass('is-atbottom');
		}
	});

	$('.dropdown,dropdown__menu').click(function(event) {
		$(this).toggleClass('is-active');
	});

	function visibility(){
			var window_top = $(window).scrollTop();
			var window_height = $(window).height();
			var start_visibility = window_top + window_height;
			
			$(".js-view").each(function(){
				
				var block_position = $(this).offset().top;
				
				if(start_visibility >= block_position){
					$(this).addClass('animated');
				}
			});
		}
		visibility();
		$(window).scroll(function(){
			visibility();
		});

	// main page nav
	
	function scrollNav(){
		$('.js-section').each(function(){
            var pos = $(this).offset().top;
            var id = $(this).attr('id');
            if( $(window).scrollTop() >= (pos - 71)){
                $('.nav__link a').removeClass('is-active');
                $('[href = #'+id+']').addClass('is-active');
            }
        });
	};
	scrollNav();	

	$('.nav__link a').on('click', function(){
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 500);
		return false;
	});

	$(window).scroll(function(){
		scrollNav();
	});

});

