function Kitchen() {
     'use strict';
      var elenberg = new TVset('Elenberg', 10, true);
     Room.call(this, 'Kitchen', [elenberg])
}

Kitchen.prototype = Object.create(Room.prototype);