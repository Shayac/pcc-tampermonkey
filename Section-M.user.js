// ==UserScript==
// @name         Section M
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  Click none of the above and then select first 2
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=M
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('#M1200Z_noneoftheabove').click();
        $('#M1200A_wrapper').find('a[data-value="1"]').click();
        $('#M1200B_wrapper').find('a[data-value="1"]').click();
    });
})();
