$(function() {
	//点击收放详细列表
	$('#show .myshow .list h3').click(function() {
		$(this).css('background', 'url(../img/myShow/myshow-down.png) no-repeat 210px 9px,#f0f0f0')
		$(this).next('ul').toggleClass('display');
	});
	// 显示隐藏 主体内容
	$('#show .myshow h2').click(function() {
		$('#show .contain').css('display', 'block');
		$('#show .content').css('display', 'none');
	});
	$('#show .myshow .list ul li').click(function() {
		$('#show .contain').css('display', 'none');
	});
	$('#show .myshow .list ul:nth-of-type(1) li:nth-of-type(1) ').click(function() {
		$('#show .content').css('display', 'block');
		$('#show .title').html('您的位置：<a href="myShow.html" style="color:blue;text-decoration:underline;">我的走秀</a>>订单管理');
	});
	//查看订单详情
	$('.order p a').click(function() {
		$(this).addClass('change').siblings().removeClass('change');
	});
	//获取/失去光标效果
	$('.order .wel>input:nth-of-type(1)').focus(function() {
		$(this).val('');
	}).blur(function() {
		$(this).val('输入商品名称');
	});
	//更多/精简筛选条件
	let isShow = true;
	$('.order i').click(function() {
		$(this).next().toggleClass('display');
		isShow = !isShow;
		if(!isShow) {
			$(this).html('精简筛选条件&nbsp;&nbsp;&nbsp;&nbsp;');
			$(this).css('background','url(../img/myShow/myshow-order-bg.png) no-repeat top right')
		}else{
			$(this).html('更多筛选条件&nbsp;&nbsp;&nbsp;&nbsp;');
			$(this).css('background','url(../img/myShow/myshow-order-bg2.png) no-repeat top right')
			
		}

	});
	//隐藏日期
	$('.order input:date').val('');
})