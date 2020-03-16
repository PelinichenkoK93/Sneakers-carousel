$(document).ready(function(){

	function slider(item) {
		$('.slider__nav ul li a').removeClass('active');
		item.addClass('active');

		let path = item.attr('data-path');

		setTimeout(function(){
			$('.slider__top img').attr('src', path);
		}, 400);
	}

	$('body').on('click', '.slider__nav ul li a', function(e){
		e.preventDefault();

		let item = $(this);

		slider(item);
	});

});