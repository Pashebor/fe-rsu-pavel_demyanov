function Hall() {
    'use strict';
     var tableLamp = new Lamp('Spark', 20, true);
     var lg = new MusicCenter('LG music center', 60, true);
     lg.playMusic();
     var samsung = new TVset('Samsung TV', 40, true);
     samsung.remoteController().openApps();
    Room.call(this, 'Hall', [tableLamp, lg, samsung]);
}

Hall.prototype = Object.create(Room.prototype);