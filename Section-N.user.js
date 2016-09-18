// ==UserScript==
// @name         Section N
// @version      0.2
// @description  Shift-Click default input 0
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=N
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('body').click(function (e) {
            if (e.shiftKey) {
                $('div.questiongroup').find('input:not([type="hidden"])').each(function(index){
                    // if input doesn't contains a value change val to 0
                    if (!/[0-7]/.test($(this).val())){
                        $(this).val(0);
                    }
                });
            }
        });
    });
})();
