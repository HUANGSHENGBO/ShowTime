$(function() {
	$('#app .yidong').eq(0).addClass('yidong2');
	$('#app .yidong').click(function() {
			$(this).addClass('yidong2').siblings().removeClass('yidong2')
	});
})