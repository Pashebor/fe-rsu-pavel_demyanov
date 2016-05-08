function Lamp(name, voltage, plug) {
    'use strict';
    this.name = name;
    Device.call(this, name, voltage, plug);
}

Lamp.prototype = Object.create(Device.prototype);

Lamp.prototype.shine = function() {
   console.info(this.name, 'is shining');
};