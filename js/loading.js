$(function() {
	//	鼠标移入事件
	//	点击事件
	$('#loading .content .inpu .sel').hover(function() {
		$(this).addClass('color');
	}, function() {
		$(this).removeClass('color');
	});
	$('#loading .content .inpu .sel').click(function() {
		$(this).addClass('change').siblings().removeClass('change').hover(function() {
			$(this).addClass('color');
		}, function() {
			$(this).removeClass('color');
		});
	});
	$('#loading .content .inpu .sel').eq(1).click(function(){
		$(':button').css('display','none');
		$('#loading .content .inpu #form1 input:text').eq(0).attr('placeholder','手机/邮箱/用户名');
		$('#loading .content .inpu #form1 input:text').eq(1).attr('placeholder','密码');
		$('#loading .content .inpu #form1 input:text').eq(1).css('width',318);
		$('#loading .content .inpu #form1 a').html('注册账号');
	});
	$('#loading .content .inpu .sel').eq(0).click(function(){
		$(':button').css('display','block');
		$('#loading .content .inpu #form1 input:text').eq(0).attr('placeholder','手机号码');
		$('#loading .content .inpu #form1 input:text').eq(1).attr('placeholder','短信验证码');
		$('#loading .content .inpu #form1 input:text').eq(1).css('width',185);
		$('#loading .content .inpu #form1 a').html('找回密码');
		$('#loading .content .inpu #form1 a').attr('href','landing.html');
	});
	
	
//	点击勾选
	let  isShow = true;
	$('#loading .content .inpu #form1 p').click(function() {
		isShow = !isShow;
		if(!isShow){
			$('#loading .content .inpu #form1 p i').html('√');
		}else{
			$('#loading .content .inpu #form1 p i').html('');
		}
	});

	$('#loading .content .inpu .lianjie').eq(0).css('background', 'url(../img/longding-qq.png)');
	$('#loading .content .inpu .lianjie').eq(1).css('background', 'url(../img/loading-weixin.png)');
	$('#loading .content .inpu .lianjie').eq(2).css('background', 'url(../img/loading-zhifu.png)');
	$('#loading .content .inpu .lianjie').eq(3).css('background', 'url(../img/londing-sina.png)');
	$('#loading .content .inpu .lianjie').eq(4).css('background', 'url(../img/loading-jinqian.png)');

	$('#loading .content .inpu b').click(function() {
		$('#loading .content .inpu').css('display', 'none');
		$('#loading .content .inpu2').css('display', 'block');

	});
	$('#loading .content .inpu2 b').click(function() {
		$('#loading .content .inpu2').css('display', 'none');
		$('#loading .content .inpu').css('display', 'block');

	});
})