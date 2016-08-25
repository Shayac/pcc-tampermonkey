// ==UserScript==
// @name         Section M
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  Default input 0
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=M
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('#M1200A_wrapper').find('a[data-value="1"]').click();
        $('#M1200B_wrapper').find('a[data-value="1"]').click();
    });
})();
