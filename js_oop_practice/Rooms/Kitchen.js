function Kitchen() {
     'use strict';
      var elenberg = new TVset('Elenberg', 45, false);
      var braun = new Kettle('Braun', 30, false);
      var ariston = new Fridge('Ariston', 55, true);
      ariston.ice();
      var sinbo = new MicrowaveOven('Sinbo', 30, true);
      sinbo.heat();
     Room.call(this, 'Kitchen', [elenberg, braun, ariston, sinbo])
}

Kitchen.prototype = Object.create(Room.prototype);