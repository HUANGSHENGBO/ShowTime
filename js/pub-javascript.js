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

	//背景加载有问题
	//背景加载有问题
	//背景加载有问题

	$('#header .bottom-nav ul li').click(function() {
		$(this).css('background', 'url(img/header-bottom-hover-bg.png) repeat-X left 40px').siblings().css('background', '')
		//		alert($(this).css('background'));
		//		console.log($(this).siblings());
	});

	// 主页左右导航效果
	var leftA = $('#content>.homepage>.left-app img');
	var rightB = $('#content>.homepage>.right-view');
	$(window).scroll(function(e) {
		var scrollT = document.documentElement.srcollTop || document.body.scrollTop;
		//		console.log(scrollT);
		if(scrollT > 290) {
			rightB.fadeIn(300);
			leftA.fadeIn(300);
		} else {
			rightB.fadeOut(300);
			leftA.fadeOut(300);
		}
	});
	//一口价区域
	var aImg = $('#content .homepage .pirce .movePic');
	/*
	 *锚点点击跳转
	 */
	let navGo = $('#content .right-view a');
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

	// 今夏必买
	// 今夏必买
	var _summerList = $('.summer .content1');
	let sum = '<a class="movePic" href="#"><img class="bg" data-original="img/m_summer_';
	for(let i = 1; i <= 3; i++) {
		let listTitle = _summerList.append('<img  class="bgt" data-original="img/m_summer_t' + i + '.jpg" />');
		if(i == 1) {
			for(let j = 1; j < 11; j++) {
				j = format(j, 2);
				listTitle.append( sum + j + '.jpg" /></a>')
			}
		} else if(i == 2) {
			for(let j = 11; j < 25; j++) {
				listTitle.append( sum + j + '.jpg" /></a>')
			}
		} else {
			for(let j = 25; j <= 29; j++) {
				listTitle.append( sum + j + '.jpg" /></a>')
			}
		}
	}
	_summerList = $('.summer .content2');
	let sumw = '<a class="movePic" href="#"><img class="bg" data-original="img/w_summer_';
	for(let i = 1; i <= 2; i++) {
		let listTitle = _summerList.append('<img class="bgt" data-original="img/w_summer_t' + i + '.jpg" />');
		if(i == 1) {
			for(let j = 1; j < 13; j++) {
				j = format(j, 2);
				listTitle.append( sumw + j + '.jpg" /></a>')
			}
		} else if(i == 2) {
			for(let j = 13; j < 25; j++) {
				listTitle.append( sumw + j + '.jpg" /></a>')
			}
		}
	}
	//男士专场
	//男士专场
	var menList = $('.men .content1');
	let menc = '<a class="movePic" href="#"><img class="bg" data-original="img/m_clothing_';
	for(let i = 1; i <= 3; i++) {
		let listTitle = menList.append('<img  class="bgt" data-original="img/m_clothing_t' + i + '.jpg" />');
		if(i == 1) {
			for(let j = 1; j < 5; j++) {
				j = format(j, 2);
				listTitle.append( menc + j + '.jpg" /></a>')
			}
		} else if(i == 2) {
			for(let j = 5; j < 15; j++) {
				j = format(j, 2);
				listTitle.append( menc + j + '.jpg" /></a>')
			}
		} else {
			for(let j = 15; j <= 47; j++) {
				listTitle.append( menc + j + '.jpg" /></a>')
			}
		}
	}
	mencloList = $('.men .choe');
	let mencho = '<a class="movePic" href="#"><img class="bg" data-original="img/m_shoes_';
	for(let i = 1; i <= 6; i++) {
		let listTitle = mencloList.append('<img class="bgt" data-original="img/m_shoes_t' + i + '.jpg" />');
		if(i == 1) {
			for(let j = 1; j < 4; j++) {
				j = format(j, 2);
				listTitle.append( mencho + j + '.jpg" /></a>')
			}
		} else if(i == 2) {
			for(let j = 4; j < 7; j++) {
				j = format(j, 2);
				listTitle.append( mencho + j + '.jpg" /></a>')
			}
		} else if(i == 3) {
			for(let j = 4; j < 7; j++) {
				j = format(j, 2);
				listTitle.append(mencho + j + '.jpg" /></a>')
			}
		} else if(i == 4) {
			for(let j = 7; j < 15; j++) {
				j = format(j, 2);
				listTitle.append(mencho + j + '.jpg" /></a>')
			}
		} else if(i == 5) {
			for(let j = 15; j < 27; j++) {
				listTitle.append(mencho + j + '.jpg" /></a>')
			}
		} else if(i == 6) {
			for(let j = 27; j < 33; j++) {
				listTitle.append( mencho + j + '.jpg" /></a>')
			}
		}
	}
	
	var men_bag = $(' .men .bag');
		let menb = '<a class="movePic" href="#"><img class="bg" data-original="img/men/m_bag_';
		men_bag.append('<img  class="bgt" data-original="img/m_bag_t.jpg" />');
	for(let i = 1; i <= 3; i++) {
		men_bag.append('<img  class="bgt" data-original="img/m_bag_t' + i + '.jpg" />');
		if(i == 1) {
			for(let j = 1; j < 7; j++) {
				j = format(j, 2);
				men_bag.append( menb + j + '.jpg" /></a>')
			}
		} else if(i == 2) {
			for(let j = 7; j < 13; j++) {
				j = format(j, 2);
				men_bag.append( menb + j + '.jpg" /></a>')
			}
		} else {
			for(let j = 13; j <= 20; j++) {
				men_bag.append( menb + j + '.jpg" /></a>')
			}
		}
	}
		var men_peishi = $(' .men .peishi');
		let menp = '<a class="movePic" href="#"><img class="bg" data-original="img/men/m_peishi_';
		men_peishi.append('<img  class="bgt" data-original="img/m_peishi_t.jpg" />');
	for(let i = 1; i <= 3; i++) {
		men_peishi.append('<img  class="bgt" data-original="img/m_peishi_t' + i + '.jpg" />');
		if(i == 1) {
			for(let j = 1; j < 5; j++) {
				j = format(j, 2);
				men_peishi.append( menp + j + '.jpg" /></a>')
			}
		} else if(i == 2) {
			for(let j = 5; j < 9; j++) {
				j = format(j, 2);
				men_peishi.append( menp + j + '.jpg" /></a>')
			}
		} else {
			for(let j = 9; j <= 13; j++) {
				j = format(j, 2);
				
				men_peishi.append( menp + j + '.jpg" /></a>')
			}
		}
	}
		var men_watch = $(' .men .watch');
		let menw = '<a class="movePic" href="#"><img class="bg" data-original="img/men/m_watch_';
		men_watch.append('<img  class="bgt" data-original="img/m_watch_t.jpg" />');
			for(let j = 1; j < 13; j++) {
				j = format(j, 2);
				men_watch.append( menw + j + '.jpg" /></a>')
			}
	
	//暂缓加载图片
	$("img").lazyload({
		placeholder: 'img/imgload.jpg',
		effect: "fadeIn"
	});

	//格式化
	function format(index, num) {
		var str = index.toString();
		while(str.length < num) {
			str = '0' + str;
		}
		return str;
	}

});