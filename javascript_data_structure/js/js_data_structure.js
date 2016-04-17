'use strict'
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();

/*1. Current day*/
function getDateDay(){
    var currentDay = date.getDay();
    return days[currentDay];
}
document.write('<h4>1. Current day</h4>');
document.write('Today is: ' + getDateDay() + '<br>');

/*2. Current Date*/

function getCurrentDate(){
    var currentMonth = date.getMonth();
    var fullDate = date.getDate()+ ' ' + months[currentMonth] + ' ' + date.getFullYear() + '<br>';
    return fullDate;
}
document.write('<h4>2. Current Date</h4>');
document.write('Date is: ' + getCurrentDate());

/*3. A Program which is looking for 1st January be a Sunday between 2014 and 2050*/
function firstJanInSun() {
var first = [], result;

    for (var year = 2014; year <= 2050; year++) {
        var dateNew = new Date(year, 0, 1);
        if (dateNew.getDay() == 0) {
             first.push('1st January is being a Sunday  ' + year + '<br>');
        }
    }
    result = first.toString().split(',').join(' ');
    return result;
}
document.write('<h4>3. A Program which is looking for 1st January be a Sunday between 2014 and 2050</h4>');
document.write(firstJanInSun());

/*4. Calculate days left until next year*/

function daysLeft(){
    var newYear = new Date('January, 1, 2017');
    var day = 24 * 60 * 60 * 1000;
    var timeLeft = (newYear.getTime() - date.getTime());
    var dayLeft = Math.floor(timeLeft/day);
    return dayLeft;
}

document.write('<h4>4. Calculate days left until next year</h4>');
document.write(daysLeft() + ' days left until next year.');

/*5. Array or not*/

function is_array(value){
    var arrayOrNot = value;
    return arrayOrNot.constructor == Array;
}
document.write('<h4>5. Array or not (open a console)</h4>');
console.log('Test Data:');
console.log('console.log(is_array(qwe));');
console.log("console.log(is_array([ '1', '2', '4', '0']));");
console.log(is_array('qwe'));
console.log(is_array([ '1', '2', '4', '0']));

/*6. Function to clone array*/

function cloneArray(array){

}