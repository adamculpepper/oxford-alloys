$(function() {
	$('#slider').slick({
		dots: true,
		//fade: true,
		//cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: `
			<div class="slick-arrow slick-prev">
				<i class="fas fa-chevron-circle-left"></i>
			</div>`,
		nextArrow: `
			<div class="slick-arrow slick-next">
				<i class="fas fa-chevron-circle-right"></i>
			</div>`,
	});

});
