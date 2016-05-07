function TVset(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug);
}

TVset.prototype = Object.create(Device.prototype);

TVset.prototype.remoteController = {
    changeChannel : function () {
        'use strict';
        console.info('Channel was changed');
    },
    openApps : function () {
        'use strict';
        console.info('Went into the apps');
    },
    powerOn : function () {
        'use strict';
        console.info('Power On');
    },
    powerOff : function () {
        'use strict';
        console.info('Power Off');
    }
};
