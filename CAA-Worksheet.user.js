// ==UserScript==
// @name         CAA-Worksheet
// @version      0.1
// @description  Add 'See Note Below'
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds/caaworksheet.xhtml*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('#txt_prob').val('See note below').keyup();
    });
})();
