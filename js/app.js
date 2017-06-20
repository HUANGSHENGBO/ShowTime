$(function() {
	//顶部标签切换
	$('#app .yidong').eq(0).addClass('yidong2');
	$('#app .yidong').click(function() {
		$(this).addClass('yidong2').siblings().removeClass('yidong2')
	});
	//页面内容切换
	$('#app .fixed a:nth-of-type(2)').click(function() {
		$('#app .content').css('display', 'block');
		$('#app .content2').css('display', 'none');
	});
	$('#app .fixed a:nth-of-type(3)').click(function() {
		$('#app .content2').css('display', 'block');
		$('#app .content').css('display', 'none');
	});

	//app下载

	$(window).scroll(function() {
	var scrollT = document.documentElement.srcollTop || document.body.scrollTop;
		if(scrollT) {
			$('#app .fixed ul').css('display', 'block');
		}else{
			$('#app .fixed ul').css('display', 'none');
			
		}
	});

	//生成主页背景
	let oBg = $('#app .content .bg');
	for(let i = 0; i < oBg.length; i++) {
		let j = i + 1;
		oBg.eq(i).css('background', 'url(../img/appimg/section-' + j + '.jpg)');
		//增加下箭头
		oBg.eq(i).append('<a class="next"href="#bg' + (j + 1) + '"></a>');

		$('#app .content').append('<a class="mao"href="#bg' + j + '"></a>');

		//增加右边导航
		$('#app .content .mao').eq(i).css('top', 310 + 20 * i);
		$('#app .content .mao').click(function() {
			$(this).addClass('white').siblings().removeClass('white');
		});
		//		右边导航随下箭头变化

		//		$('#app .content .bg').find('.next').click(function() {
		//			$('#app .content .mao').eq(i).addClass('white').siblings().removeClass('white');
		//		});

		oBg.eq(i).append('<img src="../img/appimg/section' + j + '_phone.png"/>');
	}
	oBg.eq(6).html('<img src="../img/appimg/section7_phone.png"/><div class="box"></div>');

	let oBg2 = $('#app .content2 .bg');
	oBg2.css('background', 'url(../img/appimg/mobg.jpg)');

	// 锚点点击跳转效果
	// 锚点点击跳转效果
	// 锚点点击跳转效果
	let navGo = $('#app .content  a');
	navGo.click(function() {
		console.log(this.pathname);
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
		}, 300);
	};

})

//页面小图位置
$(function() {
	let oBg = $('#app .content .bg>img');
	for(let i = 0; i < oBg.length; i++) {
		let j = i + 1;
		if(j % 2 == 1) {
			oBg.eq(i).css('top', '100px');
		} else {
			oBg.eq(i).css('top', '50px');
		}
	}

})