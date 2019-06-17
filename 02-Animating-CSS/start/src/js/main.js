(function($) {
    
	var img = $('img');
	h2 = $('h2');

	// Simple Tween
	// starting from x - 200 (left) and finishing on x 200 (right)
	// TweenLite.fromTo(img, 1, {x: -200}, {x: 200});
	// image slide
	TweenLite.from(img, 1, {x: -200});
	// authoalpha = 0 opactity will be 0 and visibility hidden 
	// table of content fading in - 1 sec to reach opaque after delay of 1 sec
	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});
	

})(jQuery);