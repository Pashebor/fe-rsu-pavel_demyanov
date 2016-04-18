(function() {
    'use strict';
    var originalArray = ['1', '2', '3', 'apple'];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();

    /*1. Current day*/
    function getDateDay() {
        var currentDay = date.getDay();
        return days[currentDay];
    }
    document.getElementById('div1').innerHTML = 'Today is: ' + getDateDay();
    /*2. Current Date*/

    function getCurrentDate() {
        var currentMonth = date.getMonth();
        return date.getDate() + ' ' + months[currentMonth] + ' ' + date.getFullYear() + '<br>';
    }

    document.getElementById('div2').innerHTML = 'Date is: ' + getCurrentDate();

    /*3. A Program which is looking for 1st January be a Sunday between 2014 and 2050*/
    function firstJanInSun() {
        var first = [], result;

        for (var year = 2014; year <= 2050; year++) {
            var dateNew = new Date(year, 0, 1);
            if (dateNew.getDay() === 0) {
                first.push('1st January is being a Sunday  ' + year + '<br>');
            }
        }
        result = first.toString().split(',').join(' ');
        return result;
    }

    document.getElementById('div3').innerHTML = firstJanInSun();

    /*4. Calculate days left until next year*/

    function daysLeft() {
        var newYear = new Date('January, 1, 2017');
        var day = 24 * 60 * 60 * 1000;
        var timeLeft = (newYear.getTime() - date.getTime());
        return Math.floor(timeLeft / day);
    }

    document.getElementById('div4').innerHTML = daysLeft() + ' days left until next year.';

    /*5. Array or not*/

    function is_array(value) {
        return value.constructor == Array;
    }

    console.log('Test Data:');
    console.log('console.log(is_array(qwe));');
    console.log("console.log(is_array([ '1', '2', '4', '0']));");
    console.log(is_array('qwe'));
    console.log(is_array(['1', '2', '4', '0']));

    /*6. Function to clone array*/

    (function cloneArray() {
        var clone = originalArray.slice(0);
        document.getElementById('div5').innerHTML = 'Original array: ' + originalArray;
        document.getElementById('div6').innerHTML = 'A cloned array: ' + clone;
        document.getElementById('div7').innerHTML = 'This is a different pointers: ' + (clone !== originalArray);
    })();

    /*7 Most frequent item in an array*/

    function frequentItem(){
        var array = ['1', '1', '2', '2', '3', '3', '3', '4', '5'];
        var frequency = {};
        var maxFrequency = 0;
        var  result;
        for(var i = 0; i < array.length; i++){
            frequency[array[i]] = (frequency[array[i]] || 0) + 1;
            if(frequency[array[i]] > maxFrequency){
                maxFrequency = frequency[array[i]];
                result = array[i];
            }
        }
        return result;
    }
   document.getElementById('div8').innerHTML = 'Most frequent item: ' + frequentItem();

    /*8. Invert case of letters*/
    function invertCaseOfLetters(){
        var string = "SoMe StrInG nEEd to Be InVerTed";
        var newString = '';
        var i = 0;
        var char = '';
        while(i < string.length){
              char  = string.charAt(i);
            if(char == char.toUpperCase()){
                newString += char.toLowerCase();
            }else if(char == char.toLowerCase()){
                newString += char.toUpperCase();
            }
            i++;
        }
        return newString;
    }
    document.getElementById('div9').innerHTML = 'Inverted string: "' + invertCaseOfLetters() + '"';

})();