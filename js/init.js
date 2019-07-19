/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */
    var width=Math.min($(window).width(),1020);
    var height=($(window).height()-width/6-100);
    
    var ratio=(Math.pow(400000/(height*width),1/2));
    ratio=Math.max(ratio,1);
    console.log('height: ' +height);
    console.log('width: ' + width);
    console.log('ratio: ' + ratio);
     setTimeout(function() {
/*	   $('h1').fitText(1.2, { minFontSize: '36px', maxFontSize: '96px' });
	   $('h2').fitText(1.2, { minFontSize: '28px', maxFontSize: '72px' });
	   $('h3').fitText(1.5, { minFontSize: '24px', maxFontSize: '52px' });
       $('h4').fitText(1.5, { minFontSize: '12px', maxFontSize: '24px' });    
	   $('.fit-p').fitText(1.5, { minFontSize: '12px', maxFontSize: '28px' });
	   $('.fit-p2').fitText(1.5, { minFontSize: '10px', maxFontSize: '20px' });
       $('.fit-p3').fitText(1.5, { minFontSize: '14px', maxFontSize: '32px' });
       $('.fit-p4').fitText(1.5, { minFontSize: '12px', maxFontSize: '20px' });
*/

        $('h1').css('font-size',72/ratio);
        $('h2').css('font-size',60/ratio);
        $('h3').css('font-size',48/ratio);
        $('h4').css('font-size',32/ratio);
        $('h5').css('font-size',26/ratio);
  	    $('.fit-p').css('font-size',22/ratio);
  	    $('.fit-p2').css('font-size',20/ratio);
  	    $('.fit-p3').css('font-size',18/ratio);
  	    $('.fit-p4').css('font-size',16/ratio);
        $('.fit-icon').css('font-size',48/ratio);

     $('.matchbox2').matchHeight();   
     $('.matchbox').matchHeight();
	 }, 100);
     

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('section').not('#call-to-action').css({ 'height': $(window).height()-5 });
   $(window).on('resize', function() {

        $('section').not('#call-to-action').css({ 'height': $(window).height()-5 });
        $('body').css({ 'width': $(window).width() });
            var width=Math.min($(window).width(),1020);
    var height=($(window).height()-width/6-100);
    
    var ratio=(Math.pow(400000/(height*width),1/2));
    ratio=Math.max(ratio,1);
    console.log('height: ' +height);
    console.log('width: ' + width);
    console.log('ratio: ' + ratio);
        $('h1').css('font-size',72/ratio);
        $('h2').css('font-size',60/ratio);
        $('h3').css('font-size',48/ratio);
        $('h4').css('font-size',32/ratio);
        $('h5').css('font-size',26/ratio);
  	    $('.fit-p').css('font-size',22/ratio);
  	    $('.fit-p2').css('font-size',20/ratio);
  	    $('.fit-p3').css('font-size',18/ratio);
  	    $('.fit-p4').css('font-size',16/ratio);
        $('.fit-icon').css('font-size',48/ratio);
        
        
        
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});



/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/



});








