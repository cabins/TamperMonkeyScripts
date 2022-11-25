// ==UserScript==
// @name         StackOverflow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // 去掉左侧的边栏
    GM_addStyle(`#left-sidebar {display:none !important;}`);
    // 去掉右侧的边栏
    GM_addStyle(`#sidebar {display:none !important;}`);
    // 中间的答案放宽到100%
    GM_addStyle(`#mainbar {width:100% !important;}`);
})();