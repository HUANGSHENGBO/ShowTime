$(function() {

	//生成内容
	let clothing = $('#men .content #clothing');
	for(let i = 1; i <= 47; i++) {
		i = format(i, 2);
		clothing.append('<li><a href="#"><img data-original="../img/men/m_clothing_' + i + '.jpg" alt="" /></a></li>')
	}
		let bag = $('#men .content #bag');
	for(let i = 1; i <= 20; i++) {
		i = format(i, 2);
		bag.append('<li><a href="#"><img data-original="../img/men/m_bag_' + i + '.jpg" alt="" /></a></li>')
	}
		let shoes = $('#men .content #shoes');
	for(let i = 1; i <= 32; i++) {
		i = format(i, 2);
		shoes.append('<li><a href="#"><img data-original="../img/men/m_shoes_' + i + '.jpg" alt="" /></a></li>')
	}
		let peishi = $('#men .content #peishi');
	for(let i = 1; i <= 13; i++) {
		i = format(i, 2);
		peishi.append('<li><a href="#"><img data-original="../img/men/m_peishi_' + i + '.jpg" alt="" /></a></li>')
	}
		let watch = $('#men .content #watch');
	for(let i = 1; i <= 12; i++) {
		i = format(i, 2);
		watch.append('<li><a href="#"><img data-original="../img/men/m_watch_' + i + '.jpg" alt="" /></a></li>')
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
		/*
	 *锚点点击跳转
	 */
	let navGo = $('#men .img a');
	navGo.click(function() {
//		console.log(this.pathname)
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
						scrollTop: targetOffset
					},
					800);
				return false;
			}
		}
	});

	AnchorClick = function(obj) {
		var href = obj.attr("href");
		var pos = $(href).offset().top;
		$("html,body").animate({
			scrollTop: pos
		}, 400);
	};
});