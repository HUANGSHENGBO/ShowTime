$(function() {

	var jsList = {
		fenlei: {
			leix: '分类',
			list: ['上装', '夏装', '户外运动', '套装', '内衣/袜子']
		},
		brand: {
			leix: '品牌',
			list: [
				'3.1 Phillip Lim',
				'4US Cesare Paciotti',
				'Armani Jeans',
				'Armani Collezioni',
				'Alexander McQueen',
				'Adidas Originals',
				'Ami',
				'Alpha Industries',
				'American Eagle Outfitters',
				'A.P.C.'

			]
		},
		pirce: {
			leix: '价格',
			list: [
				'0-500元',
				'500-1000元',
				'1000-3000元',
				'3000-5000元',
				'5000-8000元',
				'8000元以上'
			]
		},
		size: {
			leix: '尺码',
			list: [
				'XS及以下',
				'S',
				'M',
				'L',
				'XL',
				'XXL',
				'XXXL及以上',
				'26',
				'27',
				'28及以下',
				'28',
				'29',
				'30',
				'31',
				'32',
				'33',
				'34',
				'35',
				'36',
				'37',
				'38',
				'39',
				'40及以上',
				'均码',
				'其他'
			]
		},
		color: {
			leix: '价格',
			list: [
				'蓝色',
				'黑色',
				'白色',
				'灰色',
				'绿色',
				'红色',
				'多色',
				'其他',
				'黄色',
				'棕色',
				'米色',
				'拼色',
				'橙色',
				'粉色',
				'紫色',
				'卡其色',
				'咖啡色',
				'银色',
				'金色',
				'象牙色'
			]
		}
	};
	for(key in jsList) {
		$('#shopping .select').append('<div class="clearfix"><div class="b">' + jsList[key].leix + '：' + '</div></div>');
		for(var k = 0; k < jsList[key].list.length; k++) {
			$('#shopping .select>div:nth-last-child(1)').append('<a href="#">' + jsList[key].list[k] + '</a>');
		}
	}
	//精简/更多选项
	$('#shopping .select>div:gt(3)').css('display', 'none');
	var isShow = true;
	$('#shopping .select .shousuo').click(function() {
		isShow = !isShow;
		if(!isShow) {
			$('#shopping .select>div:gt(3)').css('display', 'block');
			$(this).html('精简选项');
			$(this).css('background', 'url(../img/myShow/myshow-up.png) no-repeat 260px 9px ,#efefef');
		} else {
			$('#shopping .select>div:gt(3)').css('display', 'none');
			$(this).html('更多选项（颜色、尺码等）');
			$(this).css('background', 'url(../img/myShow/myshow-down.png) no-repeat 260px 9px ,#efefef');
		}
	});
	//移入显示下拉列表：
	$('#shopping .title .list').mouseover(function() {
		$('#shopping .title .list .change a').addClass('hover')
		$('#shopping .title .list ul').css('display', 'block');
	}).mouseout(function() {
		$('#shopping .title .list .change a').removeClass('hover')
		$('#shopping .title .list ul').css('display', 'none');
	});
	// 鼠标移入改变排序方式
	$('#shopping .choose .list a').hover(function() {
		$(this).css('color', '#F76F29');
		$(this).find('img').attr('src', '../img/shopping/shopping-choose-img2.png');
	}, function() {
		$(this).css('color', 'black');
		$(this).find('img').attr('src', '../img/shopping/shopping-choose-img.png');
	});

	//点击改变排序样式
	let is = true;
	$('#shopping .choose .list a').click(function() {
		is = !is;
		console.log(is);
		if(!is) {
			$(this).css('color', '#F76F29');
			$(this).find('img').attr('src', '../img/shopping/shopping-choose-img1.png');
		} else {
			$(this).css('color', 'black');
			$(this).find('img').attr('src', '../img/shopping/shopping-choose-img2.png');
		}
	});
	// 鼠标移入改变样式
	$('#shopping .choose .next a:nth-of-type(1)').hover(function() {
		$(this).css('color', '#F76F29');
		$(this).find('img').attr('src', '../img/shopping/shopping_last1.png');
	}, function() {
		$(this).css('color', 'black');
		$(this).find('img').attr('src', '../img/shopping/shopping_last.png');
	});
	$('#shopping .choose .next a:nth-of-type(2)').hover(function() {
		$(this).css('color', '#F76F29');
		$(this).find('img').attr('src', '../img/shopping/shopping_next.png');
	}, function() {
		$(this).css('color', 'black');
		$(this).find('img').attr('src', '../img/shopping/shopping_next1.png');
	});
})