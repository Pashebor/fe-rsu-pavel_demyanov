/*Declaring two variables and show them*/
var one = 'One', two = 'Two';
document.write('First variable:' + one + ", " + "Second variable:" + two + "<br><br><br>");

/*The Heron's formula*/

function triangleArea(){
    var a = parseInt(document.getElementById('a').value),
        b = parseInt(document.getElementById('b').value),
        c = parseInt(document.getElementById('c').value);
    var p = (a + b + c)/2;
    var s = Math.sqrt(p* (p - a) * (p - b) * (p - c));
    alert("Area is: " + s.toFixed(4));

}

/*Through Base and Height*/
function triangleArea2(){
    var a = parseInt(document.getElementById('a2').value),
        h = parseInt(document.getElementById('b2').value),
        s = (a*h)/2;
    alert("Result: " + s)
}

/*Backward array "for loop"*/

var array = ['fork', 'cup', 'plate'];
function backwardFor(){
    alert('Normal: ' + array);
    for(var i = array.length - 1; i >= 0; i--){
        array.push(array[i]);
    }
    array.splice(0,3);
    alert('Reversed: ' + array);
}

/*Backward array "While loop"*/

function backwardWhile(){
    var i = array.length;
    alert('Normal: ' + array);
    while(i != 0){
        i--;
        array.push(array[i]);
    }
    array.splice(0,3);
    alert('Reversed: ' + array);
}

/*Backward array "Do While loop"*/

function backwardDoWhile(){
    var i = array.length;
    alert('Normal: ' + array);
    do{
        i--;
        array.push(array[i]);
    }while(i != 0);
    array.splice(0,3);
    alert('Reversed: ' + array);
}
/*Post and Pre-increment*/
function postIncr(){
    var i = 0;
    alert(i++);
}
function preIncr(){
    var i = 0;
    alert(++i);
}
/*Positive, Negative or 0*/
function posNegNull(){
    var number = parseInt(prompt('Введите число!'));
    var text;
    if(number > 0){
        text = 'Positive';
    }else if(number < 0){
        text = 'Negative';
    }else if(number == 0){
        text = 'Equals 0';
    }
    alert(text);
}

/*Factorial*/

function Factorial(){
    var factorial = parseInt(prompt("Enter a number:"));
    if(factorial < 0){
        alert("Factorial of a negative number doesn't exist!!!");
    }
    if(factorial == 0){
        alert("Factorial of " + factorial + " = 1");
    }
    if(factorial > 0)
    {
        var z = 1;
        for ( var i = 1; i <= factorial; i++)
            z = z * i;
    }
    alert('Факториал числа:' + factorial + ' = ' + z);
}
