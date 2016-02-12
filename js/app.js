;(function($){

 	$(function(){
  		var slider = $('.ba-slider');

  		slider.slick({
   			dots: false,
   			infinite:false,
			arrow:true

  		});


 	});

 	$(function(){
  		var sliderFeatured = $('.ba-featured-slider');

  		sliderFeatured.slick({
   			dots: true,
   			infinite:false,
			arrow:false,
			prevArrow: false,
			nextArrow:false

  		});


 	});

})(jQuery);

