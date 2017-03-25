$(document).ready(function(){
	$('#tree .root').click(function(){
		if($(this).parents('li').hasClass('open')){
			$('#tree ul.trunk').removeClass('active');
			$(this).parents('li').removeClass('open');
		} else{
			$('#tree ul.trunk').addClass('active');
			$('.root').parents('li').removeClass('open');
			$(this).parents('li').addClass('open')
		}
	});
	$('#intro .marquee').marquee({
		duration: 10000,
		gap: 0,
		delayBeforeStart: 0,
		startVisible: true,
		duplicated: true
	});
});