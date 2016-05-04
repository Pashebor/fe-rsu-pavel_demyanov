function Device(name, volt, plug) {
    'use strict';
    this.name = name;
    this.volt = volt;
    this.plug = plug;
}

Device.prototype.getName = function () {
      return this.name;
};

Device.prototype.getVoltage = function () {
    if (this.plug === 'in') {
       return this.volt;
    } else if (this.plug === 'out'){
        return this.volt = 0;
    }
};

Device.prototype.findDevice = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info('"' + what + '" has been found in "' + this.getName() + '"');
    }
};