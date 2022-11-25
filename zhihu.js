// ==UserScript==
// @name         知乎
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // 去掉右侧边栏，并将内容区展开宽度
    GM_addStyle(`div.css-1qyytj7 {display: none !important;} div[class$="-mainColumn"], div.ListShortcut {width: 100% !important;}`);
})();