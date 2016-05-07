function Application() {
    'use strict';
}

Application.prototype.start = function () {
    'use strict';
    var flat666 = new House();
    flat666.openFlat();
    flat666.searchDevicesInRooms();
};