$(function() {
	//	背景居中
    function adddataoriginal(){
    	for(let i = 1; i <= 24; i++) {
		if(i <= 8) {
			$('#spec ul').append(
				'<li class="clearfix left-f"><img src="../img/20170605-' + i + '.jpg" /><a href=""><img src="../img/20170605-' + i + '.png" /></a></li>');
		} else if(i > 8 && i <= 12) {
			let j = i - 8;
			$('#spec ul').append(
				'<li class="clearfix left-f"><img src="../img/h' + j + '.jpg" /><a href=""><img src="../img/h' + j + '.png" /></a></li>');
		} else {
			let k = i - 12;
			$('#spec ul').append(
				'<li class="clearfix left-f"><img src="../img/0525-' + k + '.jpg" /><a href=""><img src="../img/0525-' + k + '.png" /></a></li>');
		}

	   }
    let aImg = $('#spec ul li a');
	aImg.append('<i></i>');
    }
	
    adddataoriginal();
	$('#spec div a').click(function() {
		adddataoriginal();
		$('#spec ul img').attr('data-original',$('#spec ul img').attr('src'));
	});

    $('img').attr('data-original',$('img').attr('src'));
	$("img").lazyload({
		placeholder: '../img/imgload.jpg',
		effect: "fadeIn"
	});
})