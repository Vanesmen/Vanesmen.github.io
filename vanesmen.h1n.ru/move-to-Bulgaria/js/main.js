$(function() {
	$('.slider__box').slick({
		infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
  		autoplaySpeed: 4000,
        dots: true,
        prevArrow: '<span class="gallery__span gallery__span_prev"><i class="fa fa-angle-left gallery__span_arrow"></i></span>',
        nextArrow: '<span class="gallery__span gallery__span_next"><i class="fa fa-angle-right gallery__span_arrow"></i></span>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false              
                }
            }
        ]
	});
});