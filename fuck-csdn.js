// ==UserScript==
// @name         Fuck you, CSDN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.csdn.net/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // 去掉顶栏
    GM_addStyle(`#csdn-toolbar {display: none !important;}`)

    // 去掉底部的推荐
    GM_addStyle(`.recommend-box {display: none !important;}`)

    // 侧边栏只保留一个目录
    GM_addStyle(`#asideProfile,#asideCategory,#asideSearchArticle,#asideHotArticle,#asideNewComments,#asideNewNps,#asideArchive,.box-shadow, .kind-person, .aside-title, #kind_person_column {
                     display: none !important;
    }`)

    document.getElementById("asideArchive").remove()

    // 去掉底部的内容
    GM_addStyle(`#recommendNps, .template-box, .blog-footer-bottom {display: none !important;}`)

    // 去掉推荐关注
    GM_addStyle(`.more-toolbox-new {display: none !important;}`)

    // 悬浮栏
    GM_addStyle(`.csdn-side-toolbar {display: none !important;}`)
})();