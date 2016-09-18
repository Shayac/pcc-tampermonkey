// ==UserScript==
// @name         Save And Exit Button
// @version      0.1
// @description  Adds SaveAndExit button to bottom of page
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("<div id='mySave'>Save And Exit</div>").insertAfter($('div.questiongroup').last());
    var mySave = $('#mySave');
    mySave.css({
        height: '50px',
        lineHeight: '50px',
        borderRadius: '3px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 'large',

    });
    $('head').append('<style>#mySave { border : 1px solid grey; background-color: #67F967; }</style>');
    $('head').append('<style>#mySave:hover { border : 1px solid black; background-color: #5CE05C; }</style>');
    mySave.click(function(){
        $('#saveAndExitButton').click();
    });
})();