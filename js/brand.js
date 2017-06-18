$(function() {

	//	点击事件
	//	点击事件
	$('#brand .nav .a a').hover(function() {
		$(this).addClass('color');
	}, function() {
		$(this).removeClass('color');
	});
	$('#brand .nav .a a').click(function() {
		$(this).addClass('change').siblings().removeClass('change').hover(function() {
			$(this).addClass('color');
		}, function() {
			$(this).removeClass('color');
		});
	});

	$('#brand .nav .b a').eq(0).addClass('bold');

	$('#brand .nav .b a').click(function() {
		$(this).addClass('bold').siblings().removeClass('bold');

		$('#brand .nav .b div').css('left', $(this).get(0).offsetLeft);
		$('#brand .nav .b div').css('width', $(this).get(0).clientWidth);

	});
	// 主页左右导航效果
	let rightB = $('#brand .fixed');
	console.log(rightB);
	$(window).scroll(function() {
		let scrollT = document.documentElement.srcollTop || document.body.scrollTop;
		console.log(scrollT);
		if(scrollT > 180) {
			rightB.css({
				'position': 'fixed',
				'top': 0,
				'left': '290px'
			})
		} else {
			rightB.css({
				'position': 'relative',
				'top': 0,
				'left': 0
			})
		}
	});
	$("img").lazyload({
		placeholder: '../img/imgload.jpg',
		effect: "fadeIn",
	});
})