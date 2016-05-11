function task2() {
    'use strict';
    var clicks = 1;
    var topMenu = document.getElementById('top_menu');
    var menu = document.getElementById('menu');
    var list = document.getElementsByTagName('li');
    topMenu.style.cssText = 'display: block; margin-top: -10px;' +
        'margin-left: calc(50% - 60px); width: 100px; background-color: #35baf6; ' +
        'border-bottom: 2px solid #0cacf4; border-left: 2px solid #0cacf4;' +
        'border-right: 2px solid #0cacf4; font-family: serif; text-align: center; font-size: 12pt; ' +
        'padding: 10px; font-weight: 400; color: white; border-radius: 0 0 10px 10px; cursor: pointer;';
    menu.style.cssText = 'display: none;';
    function makeList() {
        var i;
        list[0].style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; margin-top:-20px; padding-top: 10px; background-color: #35baf6; border-left: 2px solid #0cacf4; border-right: 2px solid #0cacf4; margin-left: calc(50% - 60px);';
        for (i = 1; i < list.length - 1; i += 1) {
            list[i].style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; padding-top: 10px; background-color: #35baf6; border-left: 2px solid #0cacf4; border-right: 2px solid #0cacf4; margin-left: calc(50% - 60px);';
        }
        list[4].style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; padding-top: 10px; padding-bottom: 5px; background-color: #35baf6; border-left: 2px solid #0cacf4; border-right: 2px solid #0cacf4; margin-left: calc(50% - 60px); margin-bottom:-18px;';
    }
    function listHover() {
        var i;
        list[0].onmouseover = function () {
            this.style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; margin-top:-20px; padding-top: 10px; background-color: #03a9f4; border-left: 2px solid #03a9f4; border-right: 2px solid #03a9f4; margin-left: calc(50% - 60px);';
        };
        list[0].onmouseout = function () {
            this.style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; margin-top:-20px; padding-top: 10px; background-color: #35baf6; border-left: 2px solid #35baf6; border-right: 2px solid #35baf6; margin-left: calc(50% - 60px);';
        };
        for (i = 1; i < list.length - 1; i += 1) {
            list[i].onmouseover = function () {
                this.style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; padding-top: 10px; background-color: #03a9f4; border-left: 2px solid #03a9f4; border-right: 2px solid #03a9f4; margin-left: calc(50% - 60px);';
            };
            list[i].onmouseout = function () {
                this.style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; padding-top: 10px; background-color: #35baf6; border-left: 2px solid #35baf6; border-right: 2px solid #35baf6; margin-left: calc(50% - 60px);';
            };
        }
        list[4].onmouseover = function () {
            this.style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; padding-top: 10px; padding-bottom: 5px; background-color: #03a9f4; border-left: 2px solid #03a9f4; border-right: 2px solid #03a9f4; margin-left: calc(50% - 60px); margin-bottom:-18px;';
        };
        list[4].onmouseout = function () {
            this.style.cssText = 'list-style: none; width: 120px; height: 20px; text-align: center; cursor: pointer; line-height: 10px; padding-top: 10px; padding-bottom: 5px; background-color: #35baf6; border-left: 2px solid #35baf6; border-right: 2px solid #35baf6; margin-left: calc(50% - 60px); margin-bottom:-18px;';
        };
    }

    topMenu.onmouseover = function () {
        topMenu.style.boxShadow = '0 5px 20px -2px #9fdefb, -5px 0 20px -2px #9fdefb, 5px 0 20px -2px #9fdefb';
    };
    topMenu.onmouseout = function () {
        topMenu.style.boxShadow = 'none';
    };
    function isEven(number) {
        return number % 2 === 0;
    }

    topMenu.onclick = function () {
        clicks += 1;
        console.log(clicks);
        console.log(isEven(clicks));
        if (isEven(clicks)) {
            console.log('Ok');
            makeList();
            listHover();
            topMenu.style.borderTop = '2px solid darkgray';
            menu.style.cssText = 'display: block; font-size: 12pt; font-weight: 400; font-family: serif; color: white; padding: 0; ';
        } else if (!isEven(clicks)) {
            console.log('not');
            menu.style.cssText = 'display: none; font-size: 12pt; font-weight: 400; font-family: serif; color: white; padding: 0;';
        }
    };

}

window.onload = function () {
    'use strict';
    task2();
};
