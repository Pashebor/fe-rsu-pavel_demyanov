function Flat(rooms) {
    'use strict';
    this.rooms = rooms;
}

Flat.prototype = Object.create(Room.prototype);

Flat.prototype.searchDevicesInRooms = function () {
    var searching = prompt('Search Device');
    var roomsCount = searching;
    var result = '';
    var i;
    var j;
    if (searching == null) {
        alert('Nothing was entered');
        console.info('Nothing was entered');
   } else {
        for (i = 0; i < this.rooms.length; i += 1){
            for (j = 0; j < this.rooms[i].devices.length; j += 1) {
                if(roomsCount.toLowerCase() === this.rooms[i].devices[j].getName().toLowerCase()) {
                    result += this.rooms[i].getRoomName();
                }
            }
        }
        if (result === '') {
            alert('The device not found ' + result);
            console.info('The device not found ', result);
        } else {
            alert('This device is in the ' + result);
            console.info('This device is in the', result);
        }
    }
};


