$(document).ready(function () {
    'use strict';
    var clicks = 1;
    var topMenu = $('#top_menu');
    var menu = $('#menu');
    var list = $('li');
    topMenu.css({
        'display' : 'block',
        'margin-top' : '-10px',
        'margin-left' : 'calc(50% - 60px)',
        'width' : '100px',
        'background-color' : '#35baf6',
        'border-bottom' : '2px solid #0cacf4',
        'border-left' : '2px solid #0cacf4',
        'border-right' : '2px solid #0cacf4',
        'font-family' : 'serif',
        'text-align' : 'center',
        'font-size' : '12pt',
        'padding' : '10px',
        'font-weight' : '400',
        'color': 'white',
        'border-radius' : '0 0 10px 10px',
        'cursor': 'pointer'
    });
    menu.css('display', 'none');
    topMenu.hover(function() {
        $(this).css('box-shadow', '0 5px 20px -2px #9fdefb, -5px 0 20px -2px #9fdefb, 5px 0 20px -2px #9fdefb');
    },
    function(){
        $(this).css('box-shadow', 'none');
    });
    function makeList() {
        list.css({
            'list-style' : 'none',
            'width' : '120px',
            'height' : '20px',
            'text-align' : 'center',
            'cursor' : 'pointer',
            'line-height' : '10px',
            'margin-top' : '-20px',
            'padding-top' : '15px',
            'padding-bottom': '15px',
            'background-color' : '#35baf6',
            'margin-bottom' : '-20px',
            'border-left' : '2px solid #0cacf4',
            'border-right' : '2px solid #0cacf4',
            'margin-left' : 'calc(50% - 60px)'
        });
    }

    function listHover() {
        list.hover(
            function() {
                $(this).css({'list-style' : 'none', 'width' : '120px', 'height' : '20px', 'text-align' : 'center', 'cursor' : 'pointer', 'line-height': '10px', 'background-color' : '#03a9f4', 'border-left' : '2px solid #03a9f4', 'border-right' : '2px solid #03a9f4', 'margin-left' : 'calc(50% - 60px)', 'padding-top' : '15px', 'padding-bottom': '15px', 'margin-bottom' : '-20px'});
            },
            function() {
                $(this).css({'list-style': 'none', 'width': '120px', 'height': '20px', 'text-align': 'center', 'cursor': 'pointer', 'line-height': '10px', 'background-color': '#35baf6', 'border-left': '2px solid #35baf6', 'border-right': '2px solid #35baf6', 'margin-left': 'calc(50% - 60px)', 'padding-top' : '15px', 'padding-bottom': '15px', 'margin-bottom' : '-20px'});
            }
        );


    }

    function isEven(number) {
        return number % 2 === 0;
    }
   topMenu.on('click', function() {
       clicks += 1;
       console.log(clicks);
       console.log(isEven(clicks));
       if (isEven(clicks)) {
           console.log('Ok');
           makeList();
           listHover();
           topMenu.css('border-top', '2px solid darkgray');
           menu.css({
               'display' : 'block',
               'font-size' : '12pt',
               'font-weight' : '400',
               'font-family' : 'serif',
               'color' : 'white',
               'padding' : '0'
           });
       } else if (!isEven(clicks)) {
           console.log('not');
           menu.css({
               'display' : 'none',
               'font-size' : '12pt',
               'font-weight' : '400',
               'font-family' : 'serif',
               'color' : 'white',
               'padding' : '0'
           });
       }
   });

});