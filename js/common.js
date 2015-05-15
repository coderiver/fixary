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
		$(this).toggleClass('is-open');
		$('html').toggleClass('is-menu');
		$('body').toggleClass('is-menu');
		$('.mob-nav').toggleClass('is-open');
	});

	function stickyHeader(){
		st = $(window).scrollTop();
		$header = $('.header');
		if(st>20){
			$header.addClass('is-atbottom');
		}
		else{
			$header.removeClass('is-atbottom');
			$('.nav__link a').removeClass('is-active');
		}
	}
	stickyHeader();

	$(window).scroll(function(event) {
		stickyHeader();
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
            if( $(window).scrollTop() >= (pos)){
                $('.nav__link a').removeClass('is-active');
                $('.mob-nav__link a').removeClass('is-active');
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
	$('.mob-nav__link a').on('click', function(){
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 500);
		return false;
	});

	$('.logo').on('click', function(){
		if($(this).is('div')){
			document.location.href="/";
		}
		else{
			$('html, body').animate({
				scrollTop: 0
			}, 500, function(){
				$('.nav__link a').removeClass('is-active');
			});
			return false;
		}
	});

	// location tooltips

	$('.js-close').on('click', function(){
		$(this).parents('.location__tooltip').removeClass('is-active');
	});
	$('.location__dot').on('click', function(){
		$('.location__tooltip').removeClass('is-active');
		$(this).parents('.location').find('.location__tooltip').addClass('is-active');
	});

	// password inputs

	$('.js-password').each(function(){
		$(this).find('.input').on('keyup', function(){
			if ($(this).val().length !== 0) {
				$(this).parent().find('.js-pass-switch').addClass('is-visible');
			}
			else {
				$(this).parent().find('.js-pass-switch').removeClass('is-visible');
			}
		});
	});
	$('.js-pass-switch').on('click', function(){
		if ($(this).hasClass('is-open')) {
			$(this).parent().find('.input').attr('type', 'password');
			$(this).removeClass('is-open');
		}
		else {
			$(this).parent().find('.input').attr('type', 'text');
			$(this).addClass('is-open');
		}
		
	});

	// dropdown
	$.fn.hasAttr = function(name) {
	   return this.attr(name) !== undefined;
	};

	$(document).click(function() {
        $(".js-dropdown").removeClass("is-active");
	    $(".js-dropdown-list").slideUp(100);
	    $('.js-dropdown-input').hide();
    });
	    
	$("body").on("click",".js-dropdown",function(event) {
	    event.stopPropagation();
	});
    $("body").on("click",".js-dropdown-text",function(event) {
    	var select = $(this).parents(".js-dropdown");
        if (select.hasClass("is-active")) {
            $(".js-dropdown").removeClass("is-active");
            $(".js-dropdown-list").slideUp(100);
        }
        else {
            $(".js-dropdown").removeClass("is-active");
            $(".js-dropdown-list").slideUp(100);
            select.toggleClass("is-active").find(".js-dropdown-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-dropdown-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-dropdown");
        var selectList = $(this).parents(".js-dropdown-list");
        
        if($(this).hasAttr('data-input')){
        	select.find('.js-dropdown-input').show().focus();
        	selectList.slideUp(100);
        }
        else {
        	select.find(".js-dropdown-text").text(text);
        	select.find("option").removeAttr("selected");
        	select.find('option[value="'+val+'"]').attr("selected", "selected");
        	selectList.find("li").removeClass("is-active");
        	$(this).addClass("is-active");
        	select.removeClass("is-active");
        	selectList.slideUp(100);
        }

        return false;
        
    });

    $('.js-dropdown-input').on('blur', function(){
    	var val = $(this).val();
    	$(this).parents('.js-dropdown').find('.js-dropdown-text').text(val);
    	$(this).parents('.js-dropdown').find('select option:last-child').attr('value', val);
    });

	// window scroll events
	$(window).scroll(function(){
		scrollNav();
	});

});

