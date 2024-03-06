// ==UserScript==
// @name         维基百科优先简体中文（或繁体）
// @version      0.15
// @description  Wikipedia 维基百科中文优先选择地区 简/繁 中文。
// @author       Erimus
// @include      http*://zh.wikipedia.org/*
// @namespace    https://greasyfork.org/users/46393
// ==/UserScript==

(function() {
    'use strict';

    // ==================================================
    // 请优先使用维基百科自带的语言选择功能，需要登陆账号。
    // 在参数设置里选择，不同的地区语言，链接可能不同。
    // https://zh.wikipedia.org/wiki/Special:参数设置
    // ==================================================

    console.log('自动切换维基语言')

    let target_lang = 'zh-cn'  // 在这里输入你需要的语言

    let url = document.URL
    console.log('Url:', url)

    // 当前语言非目标语言
    if (url.includes(target_lang)) {
        console.log('当前语言:', target_lang, '无需变更')
    } else {
        switch_to_target_lang()
    }

    function switch_to_target_lang() {
        let pieces = url.split('/'),
            lang = pieces[3],
            word = pieces[pieces.length - 1],
            new_url = 'https://zh.wikipedia.org/' + target_lang + '/' + word
        console.log('变更语言', lang, '->', target_lang)
        console.log('跳转到:', new_url)
        window.location = new_url
    }

})();
