function GameConsole(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug);
}

GameConsole.prototype = Object.create(Device.prototype);