$(function() {
	$('#app .yidong').eq(0).addClass('yidong2');
	$('#app .yidong').click(function() {
		$(this).addClass('yidong2').siblings().removeClass('yidong2')
	});

	let oBg = $('#app .content .bg');
	for(let i = 0; i < oBg.length; i++) {
		let j = i + 1;
		oBg.eq(i).css('background', 'url(../img/appimg/section-' + j + '.jpg)');

		oBg.eq(i).append('<a class="next"href="#bg' + (j + 1) + '"></a>');

		$('#app .content').append('<a class="mao"href="#bg' + j + '"></a>');
		$('#app .content .mao').eq(i).css('top', 310 + 20 * i);
		$('#app .content .mao').click(function() {
			$(this).addClass('white').siblings().removeClass('white');

		});

		oBg.eq(i).append('<img src="../img/appimg/section' + j + '_phone.png"/>');
	}
	oBg.eq(6).html('<img src="../img/appimg/section7_phone.png"/>');

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
		}, 400);
	};

})
$(function() {
	let oBg = $('#app .content .bg img');
			for(let i = 0; i < oBg.length; i++) {
				let j = i+1;
				if(j % 2 == 1) {
					oBg.eq(i).css('top', '100px');
				} else {
					oBg.eq(i).css('top', '50px');
				}
			}
		})