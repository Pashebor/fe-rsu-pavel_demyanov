function task1() {
    'use strict';
    var i;
    var container = document.getElementsByClassName("container");
    var invisibleInvisibility = document.getElementsByClassName('invisibleInvisibility');
    var box = document.getElementsByClassName('box');
    var one = document.getElementsByClassName('one');
    var two = document.getElementsByClassName('two');
    var oneBefore = document.getElementsByClassName('oneBefore');

    container[0].style.cssText = 'display: flex; width: 100%;';
    for (i = 0; i < invisibleInvisibility.length; i += 1) {
        invisibleInvisibility[i].style.cssText = 'width: 38.5%;';
    }
    box[0].style.cssText = 'width: 23%;border: 4px solid #a0dfd1; border-radius: 2px; box-shadow: 0 0 5px rgba(0,0,0,0.5);';
    one[0].style.cssText = 'position: relative; background-color: #ffcd00; text-align: left; font-family: sans-serif; font-size: 12pt; padding: 10px 10px; color: black;';
    two[0].style.cssText = 'font-family: sans-serif; font-size: 11pt; color: #767d95; padding: 0px 10px 10px 10px; overflow-wrap: break-word; margin-top: -13px;';
    oneBefore[0].style.cssText = 'content: ""; display: inline-block;  margin-left: 20px; margin-bottom: 0px; margin-top: 01; border: 10px solid transparent; border-top-color:  #ffcd00;';
}

    window.onload = function () {
        task1();
    };

