(function ($) {
"use strict";

// preloader
setTimeout(function(){
    $('.preloader').fadeToggle();
  });

// main-menu-page-active


  $(document).ready(function(){
	$(".dashboard-main-menu ul li").click(function(){
	  $(".main-dashboard-wrapper").addClass("main-dashboard-wrapper-hide");
	});
  });


  
// main-menu-hover-acitve

  $(document).ready(function(){
	$('.dashboard-main-menu ul li').click(function(){
	  $('li').removeClass("main-menu-hover-active");
	  $(this).addClass("main-menu-hover-active");
  });
  });


// albums-postion-icon-active

$(document).ready(function(){
	$(".albums-icon-1").click(function(){
	  $(".albums-icon-1").toggleClass("albums-icon-active");
	});
  });

  $(document).ready(function(){
	$(".albums-icon-2").click(function(){
	  $(".albums-icon-2").toggleClass("albums-icon-active");
	});
  });

  $(document).ready(function(){
	$(".albums-icon-3").click(function(){
	  $(".albums-icon-3").toggleClass("albums-icon-active");
	});
  });

  $(document).ready(function(){
	$(".albums-icon-4").click(function(){
	  $(".albums-icon-4").toggleClass("albums-icon-active");
	});
  });

  $(document).ready(function(){
	$(".albums-icon-5").click(function(){
	  $(".albums-icon-5").toggleClass("albums-icon-active");
	});
  });

  $(document).ready(function(){
	$(".albums-icon-6").click(function(){
	  $(".albums-icon-6").toggleClass("albums-icon-active");
	});
  });


// albums-favorites-active

  $(document).ready(function(){
	$(".albums-favorite-icon").click(function(){
	  $(".albums-favorite-icon").toggleClass("favorite-icon-active");
	});
  });


  $(document).ready(function(){
	$(".albums-favorite-icon").click(function(){
	  $(".albums-showhide").toggleClass("albums-showhide-active");
	});
  });










sliderActive();
projectSlider();
testimonialActive();
recentProjectActive();
sliderTestimonialActive();
brandActive();


})(jQuery);