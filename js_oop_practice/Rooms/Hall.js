function Hall() {
    'use strict';
     var tableLamp = new Lamp('Spark', 20, true);
    Room.call(this, 'Hall', [tableLamp]);
}

Hall.prototype = Object.create(Room.prototype);