function Bedroom() {
    'use strict';
    var floorLamp = new Lamp('IKEA lamp', 20, true);
    var lg = new TVset('LG', 70, true);
    var xboxOne = new GameConsole('Xbox One', 30, true);
    var xbox360 = new GameConsole('Xbox 360 ', 60, false);
    Room.call(this, 'Bedroom', [lg, floorLamp, xboxOne, xbox360]);
}

Bedroom.prototype = Object.create(Room.prototype);