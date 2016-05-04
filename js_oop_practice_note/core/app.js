function Application() {

}

Application.prototype.start = function () {
   var bedroom = new Bedroom();
    bedroom.showVoltage();
    bedroom.search('LG');
    bedroom.showDevicesInTheRoom();
    bedroom.showConnectedDevices();
};