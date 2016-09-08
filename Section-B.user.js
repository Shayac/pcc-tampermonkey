// ==UserScript==
// @name         Section B
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  Shift-Click selects 0 for all
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=b
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('body').click(function(e){
            if(e.shiftKey) {
                $('a[data-value="0"]').each(function(){this.click()});
            }
        });
    });
})();
