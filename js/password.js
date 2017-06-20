$(function() {
	$('#password .content .left ul li').click(function() {
		$(this).toggleClass('a1').siblings().toggleClass('a1');
	});
	$('#password .content .left ul li:nth-of-type(1)').click(function() {
		$('#password .content .left .iphone').css('display', 'block');
		$('#password .content .left .email').css('display', 'none');
	});
	$('#password .content .left ul li:nth-of-type(2)').click(function() {
		$('#password .content .left .email').css('display', 'block');
		$('#password .content .left .iphone').css('display', 'none');

	});

})