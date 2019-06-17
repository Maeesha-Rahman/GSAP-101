(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	// Simple Tween
	// power is strength of ease - ranges 0-4
	// no ease
	// TweenLite.from(img, 1, {x: -200, ease:Power0.easeNone});

	// starts slow and finishes fast
	// TweenLite.from(img, 1, {x: -200, ease:Power1.easeIn});

	// start fast and finish slow
	// increase strength of curve using power - starts even faster and finishes even slower
	// TweenLite.from(img, 1, {x: -200, ease:Power4.easeOut});

	// TweenLite.from(img, 1, {x: -200, ease: SteppedEase.config(20)});
	TweenLite.from(img, 1, {x: -200, ease: RoughEase.ease.config({template: Power1.easeIn})});
	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

})(jQuery);