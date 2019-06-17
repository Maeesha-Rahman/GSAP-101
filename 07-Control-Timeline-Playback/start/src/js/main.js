(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Controlling Timeline Playback
	tl
		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(listItem, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

	tl.pause();

	$('#btnPlay').on('click', () => {
		tl.play();
	});

	$('#btnPause').on('click', () => {
		tl.pause();
	});

	$('#btnResume').on('click', () => {
		tl.resume();
	});

	$('#btnReverse').on('click', () => {
		tl.reverse();
	});

	$('#btnSpeedUp').on('click', () => {
		// speed up 8x
		tl.timeScale(8);
	});

	$('#btnSlowDown').on('click', () => {
		// normal speed is 1x so 0.5 is a reduction of 50%
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click', () => {
		// jump into another point in the timeline // jump 1s into timeline here
		tl.seek(1);
	});

	$('#btnProgress').on('click', () => {
		// set value b/t 0 and 1
		// 0 is beginnning and 1 is end
		// 0.5 will bring to middle of timeline
		tl.progress(0.5);
	});

	$('#btnRestart').on('click', () => {
		// restart timeline
		tl.restart();
	});

})(jQuery);






