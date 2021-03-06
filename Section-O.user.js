// ==UserScript==
// @name         Section O
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  Default to none of the above
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=O
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('body').click(function(e){
            if(e.shiftKey) {
                $('[id$="2_wrapper"]').find('a[data-value="0"]').click();
                $('[id^="O0500"]').find('input[id^="O0500"]').val(0);
            }
        });
    });
})();

