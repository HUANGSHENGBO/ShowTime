$(function() {
	$('#show .myshow .list h3').click(function() {
		$(this).css('background','url(../img/myShow/myshow-down.png) no-repeat 210px 9px,#f0f0f0')
		$(this).next('ul').toggleClass('display');
	});
})