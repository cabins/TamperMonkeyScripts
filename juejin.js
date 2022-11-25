// ==UserScript==
// @name         掘金综合脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Cabins
// @match        https://juejin.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=juejin.cn
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // 移除右侧的侧边栏
    GM_addStyle(`aside {display: none !important;}`);

    // 让内容区域的宽度展开到100%
    GM_addStyle(`div.timeline-entry-list {width: 100% !important;}`);
})();