function Flat(rooms) {
    'use strict';
    this.rooms = rooms;
}

Flat.prototype = Object.create(Room.prototype);

Flat.prototype.searchDevicesInRooms = function (searchDevice) {
    var roomsCount = searchDevice;
    var result = '';
    var i;
    var j;
    for (i = 0; i < this.rooms.length; i += 1){
        for (j = 0; j < this.rooms[i].devices.length; j += 1) {
            if(roomsCount === this.rooms[i].devices[j].getName()) {
                 result += this.rooms[i].getRoomName();   
            }
        }
    }
    
    console.info('The device is in the', result);
};
