// ==UserScript==
// @name         Section N
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  Default input 0
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=N
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('div.questiongroup').find('input:not([type="hidden"])').each(function(index){
            // if input doesn't contains a value change val to 0
            if (!/[0-7]/.test($(this).val())){
                $(this).val(0);
            }
        });
    });
})();