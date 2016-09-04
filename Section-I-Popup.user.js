// ==UserScript==
// @name         Section I Popup
// @version      0.1
// @description  Do stuff to popup
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/care/chart/mds/mdsdiagwizard.jsp*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $(function () {
        $('body').click(function (e) {
            if (e.shiftKey) {
                $('a:contains("admit date")').click(function () { console.log('clicked'); });
                $($('a:contains("admit date")')).each(function () { this.click(); });
                $('select[name*="rank_"] option:contains("Secondary")').prop('selected', true);
                $('select[name*="class"] option:contains("Admission")').prop('selected', true);
            }
        });
    });
})();
