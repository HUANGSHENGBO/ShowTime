$(function() {
	//	鼠标移入事件

	$('#loading .content .inpu .sel').hover(function() {
		$(this).addClass('color');
	}, function() {
		$(this).removeClass('color');
	});
	//	点击事件
	$('#loading .content .inpu .sel').click(function() {
		$(this).addClass('change').siblings().removeClass('change').hover(function() {
			$(this).addClass('color');
		}, function() {
			$(this).removeClass('color');
		});
	});
	//切换账号类型
	var form = $('#loading .content .inpu #form1 input:text');
	$('#loading .content .inpu .sel').eq(1).click(function(){
		$(':button').css('display','none');
		form.eq(0).attr('placeholder','手机/邮箱/用户名');
		form.eq(1).attr('placeholder','密码');
		form.eq(1).css('width',318);
		$('#loading .content .inpu #form1>i:nth-of-type(1)').html('');
		$('#loading .content .inpu #form1 a').html('注册账号');
	});
	$('#loading .content .inpu .sel').eq(0).click(function(){
		$(':button').css('display','block');
		form.eq(0).attr('placeholder','手机号码');
		form.eq(1).attr('placeholder','短信验证码');
		form.eq(1).css('width',185);
		$('#loading .content .inpu #form1 a').html('找回密码');
		$('#loading .content .inpu #form1 a').attr('href','landing.html');
	});
	let re = /[1-9]\d{10}/;
	form.eq(0).blur(function(){
		let bool = re.test($(this).val());
		if(!bool){
	$('#loading .content .inpu #form1>i:nth-of-type(1)').html('请输入有效的手机号码!');
		}else{
			$('#loading .content .inpu #form1>i:nth-of-type(1)').html('');
		}
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
	
	//连接背景
	$('#loading .content .inpu .lianjie').eq(0).css('background', 'url(../img/longding-qq.png)');
	$('#loading .content .inpu .lianjie').eq(1).css('background', 'url(../img/loading-weixin.png)');
	$('#loading .content .inpu .lianjie').eq(2).css('background', 'url(../img/loading-zhifu.png)');
	$('#loading .content .inpu .lianjie').eq(3).css('background', 'url(../img/londing-sina.png)');
	$('#loading .content .inpu .lianjie').eq(4).css('background', 'url(../img/loading-jinqian.png)');
	
	//更改登录模式
	$('#loading .content .inpu b').click(function() {
		$('#loading .content .inpu').css('display', 'none');
		$('#loading .content .inpu2').css('display', 'block');
	});
	$('#loading .content .inpu2 b').click(function() {
		$('#loading .content .inpu2').css('display', 'none');
		$('#loading .content .inpu').css('display', 'block');
	});
})