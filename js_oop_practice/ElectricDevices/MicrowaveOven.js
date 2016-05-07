function MicrowaveOven(name, voltage, plug) {
    'use strict';
    this.name = name;

    Device.call(this, name, voltage, plug);
}

MicrowaveOven.prototype = Object.create(Device.prototype);

MicrowaveOven.prototype.heat = function() {
      console.info('The microwave oven ' + this.name + ' is heating');
};
