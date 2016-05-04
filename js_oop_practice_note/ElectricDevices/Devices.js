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
    if (this.plug === true) {
       return this.volt;
    } else if (this.plug === false){
        return this.volt = 0;
    }
};

Device.prototype.getPluged = function () {
   if (this.plug === true){
       return this.name;
   } else {
       return '';
   }
};

Device.prototype.findDevice = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info('"' + what + '" has been found in "' + this.getName() + '"');
    }
};