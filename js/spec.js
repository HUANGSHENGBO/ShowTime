$(function() {
	//	背景居中

	for(let i = 1; i <= 24; i++) {
		if(i <= 8) {
			$('#spec ul').append(
				'<li class="clearfix left-f"><img data-original="../img/20170605-' + i + '.jpg" /><a href=""><img data-original="../img/20170605-' + i + '.png" /></a></li>');
		} else if(i > 8 && i <= 12) {
			let j = i - 8;
			$('#spec ul').append(
				'<li class="clearfix left-f"><img data-original="../img/h' + j + '.jpg" /><a href=""><img data-original="../img/h' + j + '.png" /></a></li>');
		} else {
			let k = i - 12;
			$('#spec ul').append(
				'<li class="clearfix left-f"><img data-original="../img/0525-' + k + '.jpg" /><a href=""><img data-original="../img/0525-' + k + '.png" /></a></li>');
		}

	}

	$('#spec div a').click(function() {

		for(let i = 1; i <= 24; i++) {
			if(i <= 8) {
				$('#spec ul').append(
					'<li class="clearfix left-f"><img data-original="../img/20170605-' + i + '.jpg" /><a href=""><img data-original="../img/20170605-' + i + '.png" /></a></li>');
			} else if(i > 8 && i <= 12) {
				let j = i - 8;
				$('#spec ul').append(
					'<li class="clearfix left-f"><img data-original="../img/h' + j + '.jpg" /><a href=""><img data-original="../img/h' + j + '.png" /></a></li>');
			} else {
				let k = i - 12;
				$('#spec ul').append(
					'<li class="clearfix left-f"><img data-original="../img/0525-' + k + '.jpg" /><a href=""><img data-original="../img/0525-' + k + '.png" /></a></li>');
			}

		}
	});

	let aImg = $('#spec ul li a');
	aImg.append('<i></i>');

	$("img").lazyload({
		placeholder: '../img/imgload.jpg',
		effect: "fadeIn",
	});
})