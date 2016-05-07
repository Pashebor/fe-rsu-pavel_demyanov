function TVset(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug);
}

TVset.prototype = Object.create(Device.prototype);

TVset.prototype.remoteController = function() {
    function changeChannel() {
        'use strict';
        console.info('Channel was changed');
    }
    function openApps() {
        'use strict';
        console.info('Went into the apps');
    }
    function powerOn() {
        'use strict';
        console.info('Power On');
    }
    function powerOff() {
        'use strict';
        console.info('Power Off');
    }

    return{
        changeChannel: changeChannel,
        openApps: openApps,
        powerOn: powerOn,
        powerOff: powerOff
    }
};
