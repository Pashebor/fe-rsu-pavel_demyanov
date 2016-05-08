function Fridge(name, voltage, plug) {
    'use strict';
    this.name = name;
    Device.call(this, name, voltage, plug);
}

Fridge.prototype = Object.create(Device.prototype);

Fridge.prototype.ice = function(){
    console.info('The fridge ' + this.name + ' is freezing');
};