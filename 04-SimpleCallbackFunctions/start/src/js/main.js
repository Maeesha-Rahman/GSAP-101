(function($) {
    
	var img = $('img'),
		h2 = $('h2');
		i = 0;

	// Simple Callback Functions
	TweenLite.from(img, 1, {
		x: -200, 
		ease:Power1.easeInOut, 
		onStart: onStart,
		onUpdate: onUpdate,
		onComplete: onComplete,
	});
	// Can name function w/e you want ^
	function onStart() {
		console.log('animate started');
	}

	function onUpdate() {
		console.log('animate is in progress');
		// increase i everytime first tween happens
		// text will output numbers 
		h2.text(i++);
	}

	function onComplete() {
		console.log('animate completed');
	}

})(jQuery);