// ==UserScript==
// @name 投票
// @namespace Violentmonkey Scripts
// @grant none
// @include http://weixin.sntcm.edu.cn/weixin/toupiao.asp?oid=pLM--jv91DaDJX4LavaLvbbos*
// ==/UserScript==

var URL = document.URL;


function transfer(){
	var UR = 'http://weixin.sntcm.edu.cn/weixin/toupiao.asp?oid=pLM--jv91DaDJX4LavaLvbbos'
	var num = URL.substr(-3,4);
	var num2 = parseInt(num)+1;
	return UR+num2;
}

function get(){
	//alert('已启动');
	setTimeout(function () {
	document.all.xiangmu2.checked = true;
	document.getElementById('form1').submit();
	}, 120000000)
};

window.onload = function(){
	get();
};