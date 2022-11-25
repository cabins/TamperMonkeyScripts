// ==UserScript==
// @name         微信读书优化插件
// @namespace    sunshine
// @version      0.1
// @description  优化微信读书的网页版体验
// @author       sunhaojie
// @match        *://weread.qq.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // 全局字体
    GM_addStyle(`* {font-family: 'Courier Prime', '霞鹜文楷 屏幕阅读版 R', 屏显臻宋 !important;}`);
    // 右侧的控制栏
    GM_addStyle(`.readerControls {margin-left:0px; left: inherit; right: 1%;}`);
    // 内容区域：文字阅读界面/书架界面的宽度
    GM_addStyle(`.app_content {max-width: 90% !important;}`);
    //顶部导航栏
    GM_addStyle(`.readerTopBar {max-width: 100% !important;}`);
})();