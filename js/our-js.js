  (function($){
	  $(document).ready(function(){
		  // mixitup
		    var container = document.querySelector('.galery');
		  
		  var mixer = mixitup(container, {
				selectors: {
					control: '[mixit-item]'
				},
				
			});
			
	  // owl-carousel
	        $(".owl-carousel").owlCarousel({
				
				  autoplay:true,
				  autoplayTimeout:2000,
				  smartSpeed:300,
				  loop:true,
			          responsive:{
						0:{
							items:1
						},
						600:{
							items:3
						},
						1000:{
							items:5
						}
					}
				
				});
	
	 // to-top
       $('.to-top a').click(function(){
	 
	     $('html,body').animate({scrollTop:0},1000);
		 return false;
	   });
	   
	  
	 $(window).scroll(function(){
		 if($(window).scrollTop()>500){
			 
			 $('.to-top a').fadeIn(2000);
		 }else{
			  $('.to-top a').fadeOut(2000);
			  
		   }
		 
	 });
	  
	 // menu-fixed 
	 
	$(window).scroll(function(){
		
	 var scrolling = $(this).scrollTop();
	
	 if(scrolling>100){
		
		$('.menu-bar').addClass('fixed');
	 }else{
		  $('.menu-bar').removeClass('fixed');
	 }
		
		
		
		
	});
	  
	  });
  })(jQuery)