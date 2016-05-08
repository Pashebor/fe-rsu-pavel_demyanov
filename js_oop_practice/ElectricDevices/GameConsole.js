function GameConsole(name, voltage, plug) {
    'use strict';
    this.nameConsole = name;
    Device.call(this, name, voltage, plug);
}

GameConsole.prototype = Object.create(Device.prototype);

GameConsole.prototype.gamePad = function () {
    var name = this.nameConsole;
    function pushButtonA() {
        console.info('Button "A" of ' + name + ' is pushed');
    }
    function pushButtonB() {
        console.info('Button "B" of ' + name + ' is pushed');
    }
    function pushButtonX() {
        console.info('Button "X" of ' + name + ' is pushed');
    }
    function pushButtonY() {
        console.info('Button "Y" of ' + name + ' is pushed');
    }

    return {
        pushButtonA: pushButtonA,
        pushButtonB: pushButtonB,
        pushButtonX: pushButtonX,
        pushButtonY: pushButtonY
    }
};
