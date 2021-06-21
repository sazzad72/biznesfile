$(window).scroll(function(){
		
	 var scrolling = $(this).scrollTop();
	
	 if(scrolling>100){
		
		$('.menu-bar').addClass('fixed');
	 }else{
		  $('.menu-bar').removeClass('fixed');
	 }
		
		
		
		
	});
	     // owl-carousel
	        $(".owl-carousel").owlCarousel({
				
				  autoplay:true,
				  autoplayTimeout:3000,
				  smartSpeed:300,
				  nav:true,
				  loop:true,
				  navText: ['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'],
			          responsive:{
						0:{
							items:1
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				
				});