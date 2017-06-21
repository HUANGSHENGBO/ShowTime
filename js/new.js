$(function() {
	//	隐藏显示左边app
	var leftB = $('#new>.left-app img');
	$(window).scroll(function(e) {
		var scrollT = document.documentElement.srcollTop || document.body.scrollTop;
		if(scrollT > 20) {
			leftB.fadeIn(300);
		} else {
			leftB.fadeOut(300);
		}
	});
	//生成内容
	let aImg = $('#new .img ul');
	for(let i = 1; i <= 21; i++) {
		i = format(i, 2);
		aImg.append('<li><a href="#"><img data-original="../img/new/m_summer_' + i + '.jpg" alt="" /></a></li>')
	}
	for(let i = 1; i <= 20; i++) {
		i = format(i, 2);
		aImg.append('<li><a href="#"><img data-original="../img/new/w_summer_' + i + '.jpg" alt="" /></a></li>')
	}
	//格式化
	function format(index, num) {
		var str = index.toString();
		while(str.length < num) {
			str = '0' + str;
		}
		return str;
	}
	//懒加载
	$("img").lazyload({
		placeholder: '../img/imgload.jpg',
		effect: "fadeIn"
	});
});