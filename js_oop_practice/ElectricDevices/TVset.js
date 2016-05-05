function TVset(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug);
}

TVset.prototype = Object.create(Device.prototype);