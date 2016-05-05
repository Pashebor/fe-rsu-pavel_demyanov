function Lamp(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug);
}

Lamp.prototype = Object.create(Device.prototype);