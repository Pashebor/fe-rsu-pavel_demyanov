function MusicCenter(name, voltage, plug) {
    'use strict';
    this.name = name;
    Device.call(this, name, voltage, plug);
}

MusicCenter.prototype = Object.create(Device.prototype);

MusicCenter.prototype.playMusic = function() {
    console.info(this.name + ' playing music')
};