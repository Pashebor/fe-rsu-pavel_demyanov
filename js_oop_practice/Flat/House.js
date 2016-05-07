function House() {
    'use strict';
}

House.prototype = Object.create(Flat.prototype);

House.prototype.openFlat = function () {
    'use strict';
    var bedroom = new Bedroom();
    bedroom.showVoltage();
    bedroom.showDevicesInTheRoom();
    bedroom.showConnectedDevices();
    bedroom.showRoomName();
    console.info('----------------------');
    var kitchen = new Kitchen();
    kitchen.showVoltage();
    kitchen.search('Elenberg');
    kitchen.showDevicesInTheRoom();
    kitchen.showConnectedDevices();
    console.info('----------------------');
    var hall = new Hall();
    hall.showVoltage();
    hall.showDevicesInTheRoom();
    console.info('----------------------');
    Flat.call(this, [bedroom, kitchen, hall]);
}
