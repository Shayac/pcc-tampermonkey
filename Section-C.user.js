// ==UserScript==
// @name         Section C
// @version      0.2
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
                    C1300A: 0,
                    C1300B: 0,
                    C1300C: 0,
                    C1300D: 0,
                    C1600: 0,
                };
                
                for (var key in map) {
                    $('input[id="' + key + '"]').siblings('ul').find('a[data-value="' + map[key] + '"]').click();
                }
            }
        });
    });
})();
