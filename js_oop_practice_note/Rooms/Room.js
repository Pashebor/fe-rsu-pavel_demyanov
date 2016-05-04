function Room(name, devices) {
    this.devices = devices;
    Device.call(this, name);
}

Room.prototype = Object.create(Device.prototype);

Room.prototype.getVoltage = function () {
    var totalVoltage = 0;
    var i;
    for (i = 0; i < this.devices.length; i += 1) {
        totalVoltage += this.devices[i].getVoltage();
    }
    return totalVoltage;
};
Room.prototype.getNames = function () {
    var allDevices = [];
    var i;
    for (i = 0; i < this.devices.length; i += 1) {
        allDevices.push(this.devices[i].getName());
    }
    return allDevices;
};

Room.prototype.showVoltage = function () {
    console.info('Voltage of ' + this.getName() + ' is ' + this.getVoltage());
};

Room.prototype.search = function (what) {
    this.findDevice(what);

    this.devices.forEach(function (device) {
        device.findDevice(what);
    })
};

Room.prototype.getConnectedDevices = function () {
    var connectedDevices = [];
    var  i;
    for (i = 0; i < this.devices.length; i += 1) {
        connectedDevices.push(this.devices[i].getPluged());
    }
    return connectedDevices;
};

Room.prototype.showDevicesInTheRoom = function () {
   console.info('Devices in the '+ this.getName() + ' are ' + this.getNames().toString());
};

Room.prototype.showConnectedDevices = function () {
    var str = this.getConnectedDevices().toString().replace(',', '');
    str = str.slice(0, -1);
    console.info('Connected devices in the ' + this.getName() + ' are ' + str + '.');
};

