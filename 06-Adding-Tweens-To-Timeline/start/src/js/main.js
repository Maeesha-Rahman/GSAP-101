(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Adding Tweens To A Timeline

	// +=1 will act like a delay of 1s

	// 3 - absolute position on image to get a 3s delay
	// this changes the order of the timeline since we inlucded delay in absolute position 
	// tl
	// 	.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
	// 	.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '+=1')
	// 	.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 3)
	// 	.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 2)
	// 	.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 2.5);
	
	
	// labels
	// adding the same label to different elements ensures they start animating at the same time
	// you can also add delay on label

	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('intro')
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro');

})(jQuery);