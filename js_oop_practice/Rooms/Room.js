function Room(name, devices) {
    'use strict';
    this.devices = devices;
    Device.call(this, name);
}

Room.prototype = Object.create(Device.prototype);

Room.prototype.getVoltage = function () {
    'use strict';
    var totalVoltage = 0;
    var i;
    for (i = 0; i < this.devices.length; i += 1) {
        totalVoltage += this.devices[i].getVoltage();
    }
    return totalVoltage;
};
Room.prototype.getNames = function () {
    'use strict';
    var allDevices = [];
    var i;
    for (i = 0; i < this.devices.length; i += 1) {
        allDevices.push(this.devices[i].getName());
    }
    return allDevices;
};

Room.prototype.showVoltage = function () {
    'use strict';
    console.info('Voltage of ' + this.getName() + ' is ' + this.getVoltage());
};

Room.prototype.search = function (what) {
    'use strict';
    this.findDevice(what);

    this.devices.forEach(function (device) {
        device.findDevice(what);
    });
};

Room.prototype.getConnectedDevices = function () {
    'use strict';
    var connectedDevices = [];
    var  i;
    for (i = 0; i < this.devices.length; i += 1) {
        connectedDevices.push(this.devices[i].getPluged());
    }
    return connectedDevices;
};

Room.prototype.showDevicesInTheRoom = function () {
    'use strict';
    console.info('Devices in the ' + this.getName() + ' are ' + this.getNames().toString());
};

Room.prototype.showConnectedDevices = function () {
    'use strict';
    var i;
    var str = '';
    for (i = 0; i < this.getConnectedDevices().length; i += 1) {
        if (this.getConnectedDevices()[i] === null) {
            str += '';
        } else {
            str += this.getConnectedDevices()[i] + ',';
        }
        
    }
    str = str.slice(0, -1);
    console.info('Connected devices in the ' + this.getName() + ' are ' + str + '.');
};

