function Kettle(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug)
}

Kettle.prototype = Object.create(Device.prototype);