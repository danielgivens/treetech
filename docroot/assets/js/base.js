scroll1Settings = {
    mouseWheel: true,
    probeType: 3,
    mouseWheelSpeed: 100,
    tap: true,
    click: true,
    bounce: false,
    scrollbars: true,
    fadeScrollbars: true,
    interactiveScrollbars: true,

};
scroll2Settings = {
    mouseWheel: true,
    probeType: 3,
    mouseWheelSpeed: 100,
    tap: true,
    click: true,
    bounce: false,
    scrollbars: true,
    fadeScrollbars: true,
    interactiveScrollbars: true,

};
$main = 0;
$(document).ready(function(){
	$(document).on('click','#tree .root',function(e){
		$this = $(e.target);
		if($this.parents('li').hasClass('open')){
			$('#tree ul.trunk').removeClass('active');
			$this.parents('li').removeClass('open');
		} else{
			$('#tree ul.trunk').addClass('active');
			$('.root').parents('li').removeClass('open');
			$this.parents('li').addClass('open')
		}
		scroller1.refresh();
	});
	$('#slides').cycle({
		slides: 'figure',
		fx: 'none',
		timeout:4000,
		speed: 0,
		log: false,
		random: true
	});	
    scroller1 = new IScroll('body', scroll1Settings);
	$('#spacer').click(function(){
		scroller1.scrollToElement($('#tree').get(0), 1000, null, null, IScroll.utils.ease.quadratic);
	});
    scroller2 = new IScroll('#content', scroll2Settings);
	$('#tree .branch').click(function(){
		$('body').addClass('show-content');
		$page = $(this).attr('data-page');
		scroller2.refresh();
		scroller1.disable();
		scroller2.scrollToElement($('#content .scroller #'+$page).get(0), 0, null, null, IScroll.utils.ease.quadratic);
	});
	scroller2.on('scrollStart',function(){
		scroller2.refresh();
	});
	$('#content #click-catch').on('click',function(){
		$('body').removeClass('show-content');
		scroller1.enable();
		//scroller1 = new IScroll('body', scroll1Settings);
		//scroller1.scrollTo(0, $main *-1, 1, IScroll.utils.ease.quadratic);
	});
	$('.stretched').anystretch();
	scroller1.on('scroll',function(){
		//$main =  parseInt(this.y>>0) *-1;
	});
	scroller1.disable();

});
$(window).load(function(){
	$('body').addClass('loaded');
	setTimeout(function(){
		scroller1.enable();	
	}, 1500);
});
$.fn.cycle.transitions.scrollVert = {
    before: function( opts, curr, next, fwd ) {
        opts.API.stackSlides( opts, curr, next, fwd );
        var height = opts.container.css('overflow','hidden').height();
        opts.cssBefore = { top: fwd ? -height : height, left: 0, opacity: 1, display: 'block', visibility: 'visible' };
        opts.animIn = { top: 0 };
        opts.animOut = { top: fwd ? height : -height };
    }
};