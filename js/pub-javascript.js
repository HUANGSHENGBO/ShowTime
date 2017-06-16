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
		console.log(scrollT);
		if(scrollT > 300) {
			rightB.css('display', 'block');
			leftA.css('display', 'block');
		} else {
			rightB.css('display', 'none');
			leftA.css('display', 'none');
		}
	});
	//一口价区域
	var aImg = $('#content .homepage .pirce .movePic');
	for(let i = 0; i < aImg.length; i++) {
		let topNum = 125 + 351 * i;
		aImg.eq(i).css('top', topNum);
	}

	$('#content .homepage .movePic').mouseover(function() {
		let topt = $(this).css("top");
		console.log($(this).css("top"));
		let num = parseInt(topt) - 5;
		$(this).animate({
			top: num
		}, 200);
	}).mouseout(function() {
		let topt = $(this).css('top');
		let num = parseInt(topt) + 5;
		$(this).animate({
			top: num
		}, 200);
	});

	//今夏必买
	//今夏必买

	$('#content .homepage .summer .movePic').mouseover(function() {
		let top = $(this).css("top");
		console.log($(this).css("top"));
		let num = parseInt(top) - 5;
		$(this).animate({
			top: num
		}, 200);
	}).mouseout(function() {
		let top = $(this).css('top');
		let num = parseInt(top) + 5;
		$(this).animate({
			top: num
		}, 200);
	});

	var _summerList = $('.summer .content1');
	for(let i = 1; i <= 3; i++) {
		let listTitle = _summerList.append('<img src="img/m_summer_t' + i + '.jpg" clss="bgt"/>');
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
		var _summerList = $('.summer .content2');
	for(let i = 1; i <= 2; i++) {
		let listTitle = _summerList.append('<img src="img/w_summer_t' + i + '.jpg" clss="bgt"/>');
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
	
		$('#content .homepage .summer .movePic').mouseover(function() {
		let top = $(this).css("top");
		console.log($(this).css("top"));
		let num = parseInt(top) - 5;
		$(this).animate({
			top: num
		}, 200);
	}).mouseout(function() {
		let top = $(this).css('top');
		let num = parseInt(top) + 5;
		$(this).animate({
			top: num
		}, 200);
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