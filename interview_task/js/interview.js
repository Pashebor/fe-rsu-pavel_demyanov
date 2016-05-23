function $$(arg) {
        'use strict';
            var element = document.querySelector(arg);
            /*this.getElementInnerHtml = function () {
                return console.log(arg);
            }*/
            function getElementInnerHtml() {
               console.log(element.innerHTML);
                return this;
            }
    
            function addCssFeature(stylesText) {
               element.style.cssText = stylesText;    
            }
    
            function addCssFeatureOnClick(style) {
                element.addEventListener('click', function () {
                    this.style.cssText = style;
                });
            }
            
            function addCssToTarget(target, style) {
                var targetThis = document.querySelector(target);
                var styleText = style;
                element.addEventListener('click', function() {
                    targetThis.style.cssText = styleText;
                });
            }
            return{
                getElementInnerHtml: getElementInnerHtml,
                addCssFeature: addCssFeature,
                addCssFeatureOnClick: addCssFeatureOnClick,
                addCssToTarget: addCssToTarget
            }
        };



