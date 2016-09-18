// ==UserScript==
// @name         Section M
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.2
// @description  Click none of the above and then select first 2
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=M
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $(function () {
        $('body').click(function (e) {
            if (e.shiftKey) {
                $('#M1200Z_noneoftheabove').click();
                $('#M1200A_wrapper').find('a[data-value="1"]').click();
                $('#M1200B_wrapper').find('a[data-value="1"]').click();
            }
        });

        $('body').keydown(function (e) {
            if (e.shiftKey && (e.keyCode === 78 || e.which === 78)) {
                var map = {
                    M0100A: 0,
                    M0100B: 0,
                    M0100C: 1,
                    M0150: 1,
                    M0210: 0,
                    M0900A: 0,
                    M1040Z: 1, //none of the above
                    M1200Z: 1, //first click none of the above
                    M1200A: 1, //then click yes to exceptions
                    M1200B: 1,
                    M1200H: 1,
                };

                for (var key in map) {
                    $('input[id="' + key + '"]').siblings('ul').find('a[data-value="' + map[key] + '"]').click();
                }

                $('#M1030').val(0);
            }
        });
    });
})();
