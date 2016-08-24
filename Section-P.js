// ==UserScript==
// @name         Section P
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  shift-click select 0
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=P
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('body').click(function(e){
        if(e.shiftKey) {
            $('ul.responses>li:first-child>a').click();
        }
    });
})();