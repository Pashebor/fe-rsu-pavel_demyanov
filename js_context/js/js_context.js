/*Calculator V1*/
function CalculatorV1(leftOperand) {

    this.getOperand = function() {
        return leftOperand;
    };
    this.multiply = function(number) {
        return leftOperand * number;
    };
    this.add = function(number) {
        return leftOperand + number;
    };
    this.subtract = function(number) {
      return leftOperand - number;
    };
    this.divide = function(number) {
       return leftOperand / number;
    };
}

/*Calculator V2*/
function CalculatorV2(leftOperand) {
    var res = leftOperand;
    this.multiply = function(number) {
        res = res * number;
        return this;
    };
    this.add = function(number) {
        res = res + number;
        return res;
    };
}

/*Calculator V3*/
function CalculatorV3(leftOperand) {
    var res = [];
    res.push(leftOperand);

    this.getOperand = function(leftOperand){
        return leftOperand;
    };

    this.multiply = function(){
        var i;
        for(i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
       return res.reduce( function (a, b) {
            return a * b;
        });
    };
    this.add = function(){
        var i;
        for(i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
       return res.reduce( function (a, b) {
            return a + b;
        });
    };
    this.subtract = function(){
        var i;
        for(i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
       return res.reduce( function (a, b) {
            return a - b;
        });
    };

}
var calcV1 = new CalculatorV1(12);
document.getElementById('calc1').innerHTML = 'Calculator V1 operand: ' + calcV1.getOperand();
document.getElementById('calc2').innerHTML = 'Multiply: '  + calcV1.multiply(2);
document.getElementById('calc3').innerHTML = 'Add: '  + calcV1.add(3);
document.getElementById('calc4').innerHTML = 'Subtract: '  + calcV1.subtract(1);
document.getElementById('calc5').innerHTML = 'Divide: '  + calcV1.divide(2);
var calcV2 = new CalculatorV2(12);
alert('Calculator V2 operand: ' + calcV2.multiply(2).add(3));
var calcV3 = new CalculatorV3(12);
document.getElementById('calc6').innerHTML = 'Calculator V3 operand: ' + calcV3.getOperand();
document.getElementById('calc7').innerHTML = 'Multiply: ' + calcV3.multiply(2, 2, 4, 5);
document.getElementById('calc8').innerHTML = 'Add: ' + calcV3.add(3, 1, 2);
document.getElementById('calc9').innerHTML = 'Add: ' + calcV3.subtract(1, 4, 2, 1);

