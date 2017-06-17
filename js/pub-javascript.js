$(function() {

	// header-top-right 搜索框
	var oBt = document.querySelector("#header .right-view input");
	var searchPlace = oBt.placeholder;
	oBt.onfocus = function() {
		this.placeholder = '';
	}
	oBt.onblur = function() {
		this.placeholder = searchPlace;
	}
	// 主页左右导航效果
	var leftA = $('#content>.homepage>.left-app img');
	var rightB = $('#content>.homepage>.right-view');
	$(window).scroll(function() {
		var scrollT = document.documentElement.srcollTop || document.body.scrollTop;
//		console.log(scrollT);
		if(scrollT > 290) {
			rightB.css('display', 'block');
			leftA.css('display', 'block');
		} else {
			rightB.css('display', 'none');
			leftA.css('display', 'none');
		}
	});
	//一口价区域
	var aImg = $('#content .homepage .pirce .movePic');
//	for(let i = 0; i < aImg.length; i++) {
//		let topNum = 125 + 351 * i;
//		aImg.eq(i).css('top', topNum);
//	}

	/*
	 *锚点点击跳转
	 */
	let navGo = $('#content .right-view a');
	navGo.click(function() {
		console.log(this.pathname)
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

// 今夏必买
// 今夏必买
var _summerList = $('.summer .content1');
for(let i = 1; i <= 3; i++) {
	let listTitle = _summerList.append('<img  class="bgt" src="img/m_summer_t' + i + '.jpg" />');
	if(i == 1) {
		for(let j = 1; j < 11; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_summer_' + j + '.jpg" /></a>')
		}
	} else if(i == 2) {
		for(let j = 11; j < 25; j++) {
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_summer_' + j + '.jpg" /></a>')
		}
	} else {
		for(let j = 25; j <= 29; j++) {
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_summer_' + j + '.jpg" /></a>')
		}
	}
}
_summerList = $('.summer .content2');
for(let i = 1; i <= 2; i++) {
	let listTitle = _summerList.append('<img class="bgt" src="img/w_summer_t' + i + '.jpg" />');
	if(i == 1) {
		for(let j = 1; j < 13; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/w_summer_' + j + '.jpg" /></a>')
		}
	} else if(i == 2) {
		for(let j = 13; j < 25; j++) {
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/w_summer_' + j + '.jpg" /></a>')
		}
	}
}
//男士专场
//男士专场
var menList = $('.men .content1');
for(let i = 1; i <= 3; i++) {
	let listTitle = menList.append('<img  class="bgt" src="img/m_clothing_t' + i + '.jpg" />');
	if(i == 1) {
		for(let j = 1; j < 5; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_clothing_' + j + '.jpg" /></a>')
		}
	} else if(i == 2) {
		for(let j = 5; j < 15; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_clothing_' + j + '.jpg" /></a>')
		}
	} else {
		for(let j = 15; j <= 47; j++) {
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_clothing_' + j + '.jpg" /></a>')
		}
	}
}
mencloList = $('.men .choe');
for(let i = 1; i <= 6; i++) {
	let listTitle = mencloList.append('<img class="bgt" src="img/m_shoes_t' + i + '.jpg" />');
	if(i == 1) {
		for(let j = 1; j < 4; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_shoes_' + j + '.jpg" /></a>')
		}
	} else if(i == 2) {
		for(let j = 4; j < 7; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_shoes_' + j + '.jpg" /></a>')
		}
	} else if(i == 3) {
		for(let j = 4; j < 7; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_shoes_' + j + '.jpg" /></a>')
		}
	} else if(i == 4) {
		for(let j = 7; j < 15; j++) {
			j = format(j, 2);
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_shoes_' + j + '.jpg" /></a>')
		}
	} else if(i == 5) {
		for(let j = 15; j < 27; j++) {
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_shoes_' + j + '.jpg" /></a>')
		}
	} else if(i == 6) {
		for(let j = 27; j < 33; j++) {
			listTitle.append('<a class="movePic" href="#"><img class="bg" src="img/m_shoes_' + j + '.jpg" /></a>')
		}
	}
}
	$("img").lazyload({ effect: "fadeIn" });
//格式化
function format(index, num) {
	var str = index.toString();
	while(str.length < num) {
		str = '0' + str;
	}
	return str;
}

});