// ==UserScript==
// @name 返回投票页面
// @namespace Violentmonkey Scripts
// @grant none
// @include http://weixin.sntcm.edu.cn/weixin/toupiaotj.asp
// ==/UserScript==

var UR = 'http://weixin.sntcm.edu.cn/weixin/toupiao.asp?oid=pLM--jv91DaDJX4LavaLvbbos'
function transfer(){
	var count = document.getElementsByTagName('a').length
	var allA = document.getElementsByTagName('a');

	for(var i = 0 ; i< count ; i++ )
	{
		URL = allA[i].href;
	}
	var num = URL.substr(-3,4);
	var num2 = parseInt(num)+1;
	return UR+num2;
}

function get(){
	//alert('已启动');
	var url = transfer();
	//alert(url);
	window.location.replace(url);
}

get();