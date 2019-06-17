(function($) {

	// const header = $('#header'),
	// 	h1 = $('h1'),
	// 	intro = $('.intro'),
	// 	firstItem = $('li:first-child'),
	// 	secondItem = $('li:nth-child(2)'),
	// 	lastItem = $('li:last-child');	

	const header = document.getElementById('header'),
	h1 = document.getElementsByTagName('h1'),
	intro = document.getElementsByClassName('intro'),
	firstItem = document.getElementsByClassName('list')[0].firstElementChild,
	secondItem = document.getElementsByClassName('list')[0].children[1],
	lastItem = document.getElementsByClassName('list')[0].lastElementChild;

    // animate header, duration = 1 sec, animate {}
	TweenLite.to(header, 1, {opacity: 0, y: 50});
	TweenLite.to(lastItem, 1, {opacity: 0, x: 50});

})(jQuery);