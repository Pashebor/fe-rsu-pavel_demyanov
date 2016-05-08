function Device(name, volt, plug) {
    'use strict';
    this.name = name;
    this.volt = volt;
    this.plug = plug;
}

Device.prototype.getName = function () {
    'use strict';
    return this.name;
};

Device.prototype.getVoltage = function () {
    'use strict';
    if (this.plug === true) {
        return this.volt;
    } else if (this.plug === false) {
        return 0;
    }
};

Device.prototype.getPluged = function () {
    'use strict';
    if (this.plug === true) {
        return this.name;
    } else {
        return null;
    }
};

Device.prototype.findDevice = function (what) {
    'use strict';
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info('"' + what + '" has been found in "' + this.getName() + '"');
    }
};