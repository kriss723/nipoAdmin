(function($){
	"use strict";
	jQuery(document).on('ready', function () {

		

        // MixItUp Shorting
		$(function(){
            $('.shorting').mixItUp();
        });

        
        
        
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
        };

        // Feedback Slides
		$('.feedback-slides').owlCarousel({
			loop: true,
			nav: false,
            dots: false,
            items: 1,
			autoplayHoverPause: true,
			autoplay: true,
            navText: [
                "<i class='fas fa-angle-left'></i>",
                "<i class='fas fa-angle-right'></i>"
            ],
        });

    });

    // WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});

	

    

    
    
    
}(jQuery));