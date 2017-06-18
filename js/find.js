$(function(e) {



	//轮播图
	$('#b').unslider({
		dots: true
	});

	//背景转换
	let bgtSrc = $('#find .radius-nav a img');
	bgtSrc.mouseover(function() {
		let abg = $(this).attr('src').split('');
		let num = abg.splice(11, 1);
		//		console.log(num);
		if(num == 'a') {
			let srcF = abg.splice(11, 1).join('');
			$(this).attr('src', srcF);
		} else if(num == '0') {
			let num1 = abg.splice(11, 1);
			if(num1 == '.') {
				abg.splice(11, 0, '0a.');
				let str = abg.join('');
				$(this).attr('src', str);
			}
		} else {
			abg.splice(11, 0, 'a.');
			let str = abg.join('');
			$(this).attr('src', str);
		}
	}).mouseout(function() {
		let abg = $(this).attr('src').split('');
		let num = abg.splice(11, 1);
		if(num == '0') {
			let num1 = abg.splice(11, 1);
			console.log(num1);
			if(num1 == 'a') {
				abg.splice(11, 1, '0.');
				console.log(abg);
				let srcF = abg.join('');
				$(this).attr('src', srcF);
				console.log(abg);
			}
		} else if(num == 'a') {
			let srcF = abg.join('');
			$(this).attr('src', srcF);
		} else {
			abg.splice(11, 0, 'a.');

			let str = abg.join('');

			$(this).attr('src', str);
		}

	});
	//	背景居中
	let aImg = $('#find .radius-nav a');
	aImg.append('<i></i>');
	//瀑布流布局
	//瀑布流布局
	imgLocation();

	function imgLocation() {
		var box = $('#find .pic .content .box');
		//获取盒子宽度
		var boxWidth = box.eq(0).width();
//		console.log(box.eq(4));
//		console.log(box.eq(0).width());
		
		//获取一行可摆放盒子数
		var num = Math.floor($('#find .pic .content').width() / boxWidth);
		//创建数组存储盒子高度
		var boxArr = [];
		//遍历盒子高度
		box.each(function(index, value) {
			//index表示下标
			//value 表示盒子对象
			//	console.log(index +"--"+value);
			//获取盒子高度
			var boxHeight = box.eq(index).height();  // 获取到的数据有问题// 获取到的数据有问题// 获取到的数据有问题
			//判断是否为第一行盒子
			if(index < num) {
				//将盒子高度存储到数组内
				boxArr[index] = boxHeight;
				//console.log(boxArr);
			} else {
				//第二行开始布局，从数组中获取最小高度
				var minboxHeight = Math.min.apply(null, boxArr);
				//console.log(minboxHeight);
				//获取最小高度盒子下标
				// $.inArray(value,Arr) 遍历数组对象，获取符合value的下标，无则返回-1;
				var minboxIndex = $.inArray(minboxHeight, boxArr);
				//console.log(minboxIndex);
				//设置盒子位置，放在第一行最小高度盒子的下面
				$(value).css({
					'position': 'absolute',
					'top': minboxHeight,
					'left': box.eq(minboxIndex).position().left
				});
				//重新获取该行高度
				boxArr[minboxIndex] += box.eq(index).height();
			}
		});
	}
	
		$("img").lazyload({ 
		 placeholder: '../img/imgload.jpg',
		 effect: "fadeIn",
	});
	
})