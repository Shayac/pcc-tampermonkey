// ==UserScript==
// @name         Sign Popup
// @namespace    https://www4.pointclickcare.com/clinical/mds3_popup*
// @version      0.1
// @description  shift-click select 0
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3_popup*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==


(function() {
    'use strict';
    $(function(){
        var pwd = '';
        $('input[name="password"]').val(pwd);
        $('input[name="ESOLpassword"]').val(pwd);
    })
})();
