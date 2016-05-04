function Bedroom() {
    var floorLamp = new Lamp('IKEA', 20, 'out');
    var lg = new TVset('LG', 70, 'in');
    var xboxOne = new GameConsole('Xbox One', 30, 'in');
    var xbox360 = new GameConsole('Xbox 360', 60, 'out');
    Room.call(this, 'Bedroom', [lg, floorLamp, xboxOne, xbox360]);
}

Bedroom.prototype = Object.create(Room.prototype);