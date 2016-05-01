(function () {
    'use strict';
    /*1*/
    var shape = {
            type: '',
        
            getType: function () {
                return this.type;
            },
            draw: function () {
                return this.getType() + ' is drawn';
            },
            getPerimeter: function () {
                var type = this.getType();
                switch (type) {
                case 'Square':
                    return this.a + this.b + this.c + this.d;
                case 'Triangle':
                    return this.a + this.b + this.c;
                case 'Rectangle':
                    return (this.height + this.width) * 2;
                case 'Circle':
                    return (2 * (this.r * Math.PI)).toFixed(3);
                default:
                    return 'Shape is none';
                }
                /*if (type === 'Square') {
                    return this.a + this.b + this.c + this.d;
                } else {
                    return this.a + this.b + this.c;
                }*/
            }
        };
    /*2*/
    function Triangle(a, b, c) {
        this.type = 'Triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }
    /*3*/
    function Square(a, b, c, d) {
        this.type = 'Square';
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    /*4*/
    function Rectangle(r_height, r_width) {
        this.type = 'Rectangle';
        this.height = r_height;
        this.width = r_width;
    }
    
    function Circle(radius) {
        this.type = 'Circle';
        this.r = radius;
    }
    
    Triangle.prototype = shape;
    Square.prototype = shape;
    var triangle = new Triangle(1,  2, 3);
    console.log('Type is: ', triangle.getType());
    console.log(triangle.draw());
    console.log('Perimeter is: ', triangle.getPerimeter());
    
    var square = new Square(5, 5, 5, 5);
    console.log('Type is: ', square.getType());
    console.log(square.draw());
    console.log('Perimeter is:', square.getPerimeter());
    
    Rectangle.prototype = Object.create(Square.prototype);
    Rectangle.prototype.constructor = Rectangle;
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    
    var rectangle = new Rectangle(5, 10);
    console.log('Type is: ', rectangle.getType());
    console.log(rectangle.draw());
    console.log('Perimeter is:', rectangle.getPerimeter());
    console.log('Area is:', rectangle.getArea());
    
    Circle.prototype = Object.create(Rectangle.prototype);
    Circle.prototype.constructor = Circle;
    Circle.prototype.getDiameter = function () {
        return this.r * 2;
    };
    
    var circle = new Circle(15);
    console.log('Type is: ', circle.getType());
    console.log(circle.draw());
    console.log('Perimeter is: ', circle.getPerimeter());
    console.log('Diameter is: ', circle.getDiameter());
    
}());
 
