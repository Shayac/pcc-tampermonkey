// ==UserScript==
// @name         MDS Link
// @version      0.1
// @description  Add MDS link to NAV
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
        $('#topTabs').append('<li><a href="/care/chart/mds/mdslist.jsp?ESOLview=In Progress">MDS</a></li>')
    });
})();

