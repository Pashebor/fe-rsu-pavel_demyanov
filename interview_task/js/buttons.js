window.onload = function () {
    'use strict';
    $$('#btn').addCssFeature('width: 100px; margin-left: calc(50% - 50px)');
    $$('#roll').addCssFeature('width: 100px; margin-left: calc(50% - 50px)');
    $$('#flip').addCssFeature('width: 100px; margin-left: calc(50% - 50px)');
    $$('#slide').addCssFeature('width: 100px; margin-left: calc(50% - 50px)');
    $$('#scale').addCssFeature('width: 100px; margin-left: calc(50% - 50px)');
    $$('#btn').addCssToTarget('.pic', '-webkit-animation: pictureAnimation 3s; animation: pictureAnimation 3s; animation-iteration-count: 1; -webkit-animation-iteration-count: 1; border-radius: 100px;');
    $$('#roll').addCssToTarget('.pic', '-webkit-animation: roll 3s; animation: roll 3s; animation-iteration-count: 1; -webkit-animation-iteration-count: 1; border-radius: 100px;');
    $$('#flip').addCssToTarget('.pic', '-webkit-animation: flip 3s; animation: flip 3s; animation-iteration-count: 1; -webkit-animation-iteration-count: 1; border-radius: 100px; transform: rotateY(180deg); -webkit-transform: rotateY(180deg);');
    $$('#slide').addCssToTarget('.pic', '-webkit-animation: flipX 3s; animation: flipX 3s; animation-iteration-count: 1; -webkit-animation-iteration-count: 1; border-radius: 100px; transform: rotateX(180deg); -webkit-transform: rotateX(180deg); margin-left: calc(50% + 100px);');
    $$('#scale').addCssToTarget('.pic', '-webkit-animation: scale 3s; animation: scale 3s; animation-iteration-count: 1; -webkit-animation-iteration-count: 1; border-radius: 100px; transform: scale(1.5); -webkit-transform: scale(1.5); margin-top: 50px;');
};