/**
 * @file mip-xiazai188-down 组件
 * @author
 */

define(function (require) {
	var $ = require("jquery");

    var customElem = require('customElement').create();
	
	
	
	function buildHtml(){
		var element = this;
		var addHtml = "<div class='12345'></div>";
		$(element).append(addHtml);
	}
	
	
	 /* 生命周期 function list，根据组件情况选用，（一般情况选用 build、firstInviewCallback） start */
    // build 方法，元素插入到文档时执行，仅会执行一次
	customElem.prototype.build = function(){
		var element = this.element;
        var id = element.getAttribute('id') ;
		
		buildHtml.call(element);
	}
	// 创建元素回调
	customElem.prototype.createdCallback = function(){
		
	}
	 // 向文档中插入节点回调
	customElem.prototype.attachedCallback = function(){
		
	}
	// 从文档中移出节点回调
	customElem.prototype.detachedCallback = function(){
		
	}
	// 第一次进入可视区回调,只会执行一次，做懒加载，利于网页速度
	customElem.prototype.firstInviewCallback = function(){
		
	}
	 // 进入或离开可视区回调，每次状态变化都会执行
	customElem.prototype.viewportCallback = function(isInView){
		
	}
	// 控制viewportCallback、firstInviewCallback是否提前执行
    // 轮播图片等可使用此方法提前渲染
	customElem.prototype.prerenderAllowed = function(){
		return !!this.isCarouselImg;
	}

    return customElem;
});
