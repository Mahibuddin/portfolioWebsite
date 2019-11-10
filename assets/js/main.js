	$(document).ready(function() {

		// Homepage Slider Carousel Section

		// $(".homepage-slides").owlCarousel({
		// 	items:1,
		// 	dots:false,
		// 	nav:false,
		// 	autoplay:true,
		// 	loop:true
		// });

		
		// Animated Projects Statistics
			$.fn.jQuerySimpleCounter = function( options ) {
			    var settings = $.extend({
			        start:  0,
			        end:    100,
			        easing: 'swing',
			        duration: 400,
			        complete: ''
			    }, options );

			    var thisElement = $(this);

			    $({count: settings.start}).animate({count: settings.end}, {
					duration: settings.duration,
					easing: settings.easing,
					step: function() {
						var mathCount = Math.ceil(this.count);
						thisElement.text(mathCount);
					},
					complete: settings.complete
				});
			};

		$('#number1').jQuerySimpleCounter({end: 25,duration: 4000});
		$('#number2').jQuerySimpleCounter({end: 1465,duration: 3000});
		$('#number3').jQuerySimpleCounter({end: 12,duration: 4100});
		$('#number4').jQuerySimpleCounter({end: 5,duration: 4300});


		// Magnific Popup
		/*$('.single-portfolio-item').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
  			type: 'image',
		gallery: {
			enabled: true
		}
		});
*/
		// Testimonial Carousel Section

		$(".testimonial-carousel").owlCarousel({
			items:2,
			dots:false,
			nav:false,
			autoplay:true,
			margin:20,
			loop:true
		});


		// Initialize material-scrolltop

		 $('body').materialScrollTop();

		// Portfolio Section Isotope Activation

		$(".portfolio-item").isotope();

		// Active Class Changing for Portfolio Section

		  $(".portfolio-list li").on('click',function(){
				$(".portfolio-list li.active").removeClass('active');
				$(this).addClass('active');

				// Isotope Filtering Activation

			  	var selector = $(this).attr('data-filter');
			    $(".portfolio-item").isotope({
			        filter: selector
			    });

		});

	});


	

    $(window).scroll(function() {

    	// Animated Progress Bar on Skills Section

        var hT = $('#skill-bar-wrapper').offset().top,
            hH = $('#skill-bar-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-1.4*wH)){
            jQuery(document).ready(function(){
                jQuery('.skillbar-container').each(function(){
                    jQuery(this).find('.skills').animate({
                        width:jQuery(this).attr('data-percent')
                    }, 5000); // 5 seconds
                });
            });
        }

		// Color changeing script for header on scrolling

        var scroll = $(window).scrollTop();
          if (scroll > 415) {
            $(".header-area").css("background" , "#2cc990");
          } else{
             $(".header-area").css("background" , "transparent");  	
          }

     });

  
	// Typed.js Installation and Options:

	  var typed3 = new Typed('.type-text', {
	    strings: [
		    		'Web Designer',
		    		'Web Developer', 
		    		'WordPress Developer',
		    		'Tech Enthusiast', 
		    		'Coder',
		    		'Dreamer'
	    		],
	    typeSpeed: 200,
	    backSpeed: 70,
	    smartBackspace: true, // this is a default
	    loop: true
	  });




// Contact Form







// FORM VALIDATION
// Worked using JSON Server and Ajax. All the data are calling from server
// Gathered experience of handling / working with 'promise'
// Advance level of working with 'Fetch API'


 // REGISTATION FORM VALIDATION
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const output = document.querySelector('.output');
const textarea = document.querySelector('#chat')
const btn = document.querySelector('.submit')

// SUBMIT BUTTON EVENT

// VALIDATION FUNCTION
function validation(e) {
	e.preventDefault()
    if(name.value == '' || name.value == null) {
        output.innerHTML = `Name can't be Empty`;
        output.classList.add('err')
    } else if(email.value == '' || email.value == null) {
    	output.innerHTML= "Email Can't be Empty"
    	output.classList.add('err')
    }  else if(textarea.value == '' || textarea.value == null) {
    	output.innerHTML= "Write your message"
    	output.classList.add('err')
    } else {
        // IF EVERYTHING IS VAILED, DATA WILL BE STORED IN DATABASE
       		name.value = '';
            email.value = ''
            textarea.value = ''
            // to display output on browser:
            output.innerHTML = `Congratulations !!  Your message send successfully`
            output.classList.remove('err')
    }
}

btn.addEventListener('click' , validation);

