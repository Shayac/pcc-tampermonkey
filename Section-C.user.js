// ==UserScript==
// @name         Section C
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  Shift-Click clicks last option
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=c
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('body').click(function(e){
            if(e.shiftKey) {
                var map = {
                    C0100: 1,
                    C0200: 3,
                    C0300A: 3,
                    C0300B: 2,
                    C0300C: 1,
                    C0400A: 2,
                    C0400B: 2,
                    C0400C: 2,
                };
                
                for (var key in map) {
                    $('input[id="' + key + '"]').siblings('ul').find('a[data-value="' + map[key] + '"]').click();
                }
            }
        });
    });
})();
