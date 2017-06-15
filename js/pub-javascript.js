$(function (){
	
	// header-top-right 搜索框
	var oBt = document.querySelector("#header .right-view input");
	var searchPlace = oBt.placeholder;
	oBt.onfocus = function (){
		this.placeholder = '';
	}
	oBt.onblur = function (){
		this.placeholder = searchPlace;
	}
});
