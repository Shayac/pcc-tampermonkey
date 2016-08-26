// ==UserScript==
// @name         Section P
// @namespace    https://www4.pointclickcare.com/clinical/mds3/section.xhtml
// @version      0.1
// @description  shift-click select 0
// @author       Shaya Cohen
// @include      https://www4.pointclickcare.com/clinical/mds3/section.xhtml?*&sectioncode=P
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('body').click(function(e){
        if(e.shiftKey) {
            $('ul.responses>li:first-child>a').click();
        }
    });
})();

/*

 const questions = $('.question_content').filter(function(){
             const div = this;
             const value = $(this).find('input:not([id^="ack"])').val();
            const hasValue = !isNaN(parseInt(value));
            if(!hasValue) {
                return true;
            }
            return false;
        });
    const links = questions.find('ul.responses>li>a[data-value="0"]');
    console.log(links);
    
    */
