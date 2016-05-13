$(document).ready(function () {
    'use strict';
     var container = $('.container');
     var invisibleInvisibility = $('.invisibleInvisibility');
     var box = $('.box');
     var one = $('.one');
     var two = $('.two');
     var oneBefore = $('.oneBefore');

     container.css({'display' : 'flex', 'width' : '100%'});
     invisibleInvisibility.css('width', '38.5%');
     box.css({
     'width': '23%',
     'border': '4px solid #a0dfd1',
     'border-radius': '2px',
     'box-shadow': '0 0 5px rgba(0,0,0,0.5)'
     });
     one.css({
         'position': 'relative',
         'background-color' : '#ffcd00',
         'text-align' : 'left',
         'font-family' : 'sans-serif',
         'font-size' : '12pt',
         'padding' : '10px 10px',
         'color' : 'black'
     });
     two.css({
         'font-family' : 'sans-serif',
         'font-size' : '11pt',
         'color' : '#767d95',
         'padding' : '0px 10px 10px 10px',
         'overflow-wrap' : 'break-word',
         'margin-top' : '-13px'
     });
     oneBefore.css({
         'content' : '""',
         'display' : 'inline-block',
         'margin-left' : '20px',
         'margin-bottom' : '0px',
         'margin-top' : '0',
         'border' : '10px solid transparent',
         'border-top-color' :  '#ffcd00'
     });
});
