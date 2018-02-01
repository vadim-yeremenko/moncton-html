$(function() {

    'use strict';


    /*------------------------------------------
     Calling Functions
     ------------------------------------------*/

    $(document).ready(function () {
        includeFormStyler();
        switherToggle();
        sortingActivate();
    });


    /*------------------------------------------
     Defining Functions
     ------------------------------------------*/
    function includeFormStyler(){
        $('.styled-select, .styled-chk, .form-select, .file-styled').styler()
    }

    function switherToggle(){
        $('.switcher').on('click', function(){
            $(this).toggleClass('active');
        })
    }

    function sortingActivate(){
        $('.btn-sort').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('selected');
        })
    }
});