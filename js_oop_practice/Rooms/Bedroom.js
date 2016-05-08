function Bedroom() {
    'use strict';
    var floorLamp = new Lamp('IKEA lamp', 20, true);
    var lg = new TVset('LG', 70, true);
    var xboxOne = new GameConsole('Xbox One', 30, true);
    xboxOne.gamePad().pushButtonA();
    var xbox360 = new GameConsole('Xbox 360 ', 60, false);
    xbox360.gamePad().pushButtonX();
    Room.call(this, 'Bedroom', [lg, floorLamp, xboxOne, xbox360]);
}

Bedroom.prototype = Object.create(Room.prototype);