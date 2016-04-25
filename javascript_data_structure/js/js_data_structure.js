function my() {
    'use strict';
    var originalArray = ['1', '2', '3', 'apple'];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var arrayNaNUnndFalse = [NaN, 'mother', false, 'brother', '', 'sister', undefined, 'father', 0, 'son', null];
    var library = [
        {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
        {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    var user = {name: 'paul', phone: '+79209510573', age: '-1'};

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
        var first = [];
        var result;
        var year;
        var dateNew;
        for (year = 2014; year <= 2050; year += 1) {
            dateNew = new Date(year, 0, 1);
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
        return value.constructor === Array;
    }
    console.log('5. Array or not');
    console.log('Test Data:');
    console.log('console.log(is_array(qwe));');
    console.log("console.log(is_array([ '1', '2', '4', '0']));");
    console.log(is_array('qwe'));
    console.log(is_array(['1', '2', '4', '0']));

    /*6. Function to clone array*/

    function cloneArray() {
        var clone = originalArray.slice(0);
        document.getElementById('div5').innerHTML = 'Original array: ' + originalArray;
        document.getElementById('div6').innerHTML = 'A cloned array: ' + clone;
        document.getElementById('div7').innerHTML = 'This is a different pointers: ' + (clone !== originalArray);
    }
    cloneArray();

    /*7 Most frequent item in an array*/

    function frequentItem() {
        var array = ['1', '1', '2', '2', '3', '3', '3', '4', '5'];
        var frequency = {};
        var maxFrequency = 0;
        var result;
        var i;
        for (i = 0; i < array.length; i += 1) {
            frequency[array[i]] = (frequency[array[i]] || 0) + 1;
            if (frequency[array[i]] > maxFrequency) {
                maxFrequency = frequency[array[i]];
                result = array[i];
            }
        }
        return result;
    }
   document.getElementById('div8').innerHTML = 'Most frequent item: ' + frequentItem();

    /*8. Invert case of letters*/
    function invertCaseOfLetters() {
        var string = "SoMe StrInG nEEd to Be InVerTed";
        var newString = '';
        var i = 0;
        var char;
        while (i < string.length) {
              char = string.charAt(i);
            if (char === char.toUpperCase()) {
                newString += char.toLowerCase();
            } else if (char === char.toLowerCase()) {
                newString += char.toUpperCase();
            }
            i += 1;
        }
        return newString;
    }
    document.getElementById('div9').innerHTML = 'Inverted string: "' + invertCaseOfLetters() + '"';

  /*9. Remove duplicate string from string array*/
  function removeDuplicatesFromArray() {
      var originArray = ['antony', 'andrew', 'Serge', 'serge', 'banana', 'Banana', 'Vine', 'vine', 'Antony'];
      document.getElementById('div10').innerHTML = 'Original array: ' + originArray;
      var uniqueArray = [];
      var flag;
      var i;
      var j;
      for (i = 0; i < originArray.length; i += 1) {
          flag = false;
          for (j = 0; j < uniqueArray.length; j += 1) {
              if (originArray[i].toLowerCase() === uniqueArray[j].toLowerCase()) {
                  flag = true;
                  break;
              }
          }
          if (flag === false) {
              uniqueArray.push(originArray[i]);
          }
      }
      return uniqueArray;

  }
    document.getElementById('div11').innerHTML = 'Unique array: ' + removeDuplicatesFromArray();

  /*10. Shuffle an array*/
    function shuffle(array) {
        var j;
        var x;
        var i;
        for (i = array.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = array[i - 1];
            array[i - 1] = array[j];
            array[j] = x;
        }
        return array;
    }
    document.getElementById('div12').innerHTML = 'Array: ' + originalArray;
    document.getElementById('div13').innerHTML = 'Shuffled array: ' + shuffle(originalArray);
   /*11 Remove from array null, 0, "", false, undefined and NaN */

    function removeNilFromArray(array) {
       var index = -1;
       var arrayLength = array ? array.length : 0;
       var resultIndex = -1;
       var result = [];
       var value;
        while (index < arrayLength) {
            index += 1;
          value = array[index];

            if (value) {
                resultIndex += 1;
                result[resultIndex] = value;
            }
        }
        return result;
    }

    document.getElementById('div14').innerHTML = 'Array: [NaN,"mother", false, "brother", "", "sister", undefined, "father", 0,"son", null ]';
    document.getElementById('div15').innerHTML = 'Filtered Array: ' + removeNilFromArray(arrayNaNUnndFalse);

    /*12. Sorting array of the objects by TITLE*/
    function sortByTitle(a, b) {
        var titleA = a.title.toLowerCase();
        var titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return -1;
        } else if (titleA > titleB) {
            return 1;
        } else {
            return 0;
        }
    }
    function outputLibrary(library) {
       var printThis = '';
        var i;
        for (i = 0; i < library.length; i += 1) {
           printThis += library[i].author + ' | ' + library[i].title + ' | ' + library[i].libraryID + '<br>';
        }
       return printThis;
    }
    document.getElementById('div16').innerHTML = "Library:<br> " + outputLibrary(library);
    document.getElementById('div17').innerHTML = "Sorted by title:<br> " + outputLibrary(library.sort(sortByTitle));

    /*13 Merge two arrays and remove all duplicates*/
    function mergeTwoArrays() {
        var arr1 = ['Billy', 'Bobby', 'Thornton'];
        var arr2 = ['Smiley', 'Bobby', 'Woodrow', 'Billy'];
        var arr3 = arr1.concat(arr2);
        document.getElementById('div18').innerHTML = 'First Array: ' + "[" + arr1 + "]";
        document.getElementById('div19').innerHTML = 'First Array: ' + "[" + arr2 + "]";
           function unique(array) {
            var arrUnique = array;
            var i;
            var j;
            for (i = 0; i < arrUnique.length; i += 1) {
                for (j = i + 1; j < arrUnique.length; j += 1) {
                    if (arrUnique[i] === arrUnique[j]) {
                        arrUnique.splice(j--, 1);
                    }
                }
            }

            return arrUnique;
        }

        return unique(arr3);
    }
    document.getElementById('div20').innerHTML = "An array after merge : " + '[' + mergeTwoArrays() + ']';

    /*14 Remove a specific element from an array*/
    function removeSpecEl() {
        var array = ['apple', 'grapes', 'plum', 'specific element', 'melon'];
        var specEl = 'specific element';
        var i;
        document.getElementById('div21').innerHTML = 'Array: ' + '[' + array + '] , ' + ' Srecific element: ' + specEl;
        for (i = 0; i < array.length; i += 1) {
            if (array[i] === specEl) {
                array.splice(i, 1);
            }
        }
        return array;
    }
    document.getElementById('div22').innerHTML = 'Array with removed specific element: ' + '[' + removeSpecEl() + ']';

    /*15 Get a random item from an array*/
    function getRandItem(array) {
        var array = ['one', 'two', 'three', 'four', 'five'];
        document.getElementById('div23').innerHTML = 'Array: ' + array;
        var rand = Math.floor(Math.random() * array.length);
        return array[rand];
    }
    document.getElementById('div24').innerHTML = 'Random item: ' + getRandItem();

    /*16 Move an array element from one position to another */
    Array.prototype.moveElement = function(old_index, new_index) {
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        return this;
    };
    function arrayMoved() {
        var array = ['one', 'two', 'three', 'four', 'five'];
        document.getElementById('div25').innerHTML = 'Array: ' + '[' + array + ']';
        return array.moveElement(0, 1);
    }
    document.getElementById('div26').innerHTML = 'Move first element to next position:' + '[' + arrayMoved() + ']';

    /*17. Difference between two dates in days*/

    function getDatesDifference() {
        var date1 = new Date("4/19/2016");
        document.getElementById('div27').innerHTML = "First date: " + date1.getDate();
        var date2 = new Date("4/25/2016");
        document.getElementById('div28').innerHTML = "Second date: " + date2.getDate();
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }
    document.getElementById('div29').innerHTML = 'Difference between them: ' + getDatesDifference() + ' days';

    /*18. Get the maximum date from array of dates*/
    function maxDate(array) {
        var max = array[0];
        var maxDateObj = new Date(array[0]);

        array.forEach(function (date) {
            if (new Date(date) > maxDateObj) {
                max = date;
                maxDateObj = new Date(date);
            }
        });
        return max;
    }
    console.log('18. Get the maximum date from array of dates');
    console.log('Test Data: ');
    console.log('console.log(maxDate(["2015/02/01", "2015/02/02", "2015/01/03"]));');
    console.log('Output: ');
    console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
    document.getElementById('div30').innerHTML = 'Dates: ' + '2015/02/01' + ', ' + '2015/02/02' + ', ' + '2015/01/03';
    document.getElementById('div31').innerHTML = 'Max Date: ' + maxDate(['2015/02/01', '2015/02/02', '2015/01/03']);

    /*19 Split a string and convert it into an array of words*/
    function splitStringToArray(string) {
        return string.split(' ');
    }
    document.getElementById('div32').innerHTML = 'String is "How do you do? (also look to the console)"';
    document.getElementById('div33').innerHTML = 'Split and convert into array: ' + splitStringToArray('How do you do?');
    console.log('19 Split a string and convert it into an array of words');
    console.log('Array: ', splitStringToArray('How do you do?'));

    /*20. Capitalize the first letter of a string*/
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.getElementById('div34').innerHTML = 'String is "how do you do?"';
    document.getElementById('div35').innerHTML = 'Capitalized first letter: ' + capitalizeFirstLetter('how do you do?');

    /*21. JavaScript function to convert a string into camel case*/

    function camelize(string) {
        return string.replace(/\W+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
    }

    console.log('21. JavaScript function to convert a string into camel case');
    console.log('Test data: ');
    console.log('console.log(camelize("Java Script"));');
    console.log('console.log(camelize("java-script"));');
    console.log('console.log(camelize("Java Script Exercises"));');
    console.log('Output: ');
    console.log(camelize('Java Script'));
    console.log(camelize('java-script'));
    console.log(camelize('Java Script Exercises'));
    document.getElementById('div36').innerHTML = "Strings to convert: <br>" + 'Java Script<br>' + 'java-script<br>' + 'Java Script Exercises';
    document.getElementById('div37').innerHTML = 'Converted: <br>' + camelize('Java Script') + '<br>' + camelize('java-script') + '<br>' + camelize('Java Script Exercises');

    /*22. Find the highest value in an array*/
    function maxVal(array) {
        return Math.max.apply(null, array);
    }
    document.getElementById('div38').innerHTML = 'Array is [2, 3, 50, 40, 1]';
    document.getElementById('div39').innerHTML = 'Result: ' + maxVal([2, 3, 50, 40, 1]);

    /*23. Find the lowest value in an array*/
    function minVal(array) {
        return Math.min.apply(null, array);
    }
    document.getElementById('div40').innerHTML = 'Array is [2, 3, 50, 40, 1]';
    document.getElementById('div41').innerHTML = 'Result: ' + minVal([2, 3, 50, 40, 1]);

    /*24. Check whether a variable is numeric or not*/
    function numberOrNot(num) {
        var res;
      if (isNaN(num)) {
            res = '"' + num + '"' + " isn't a number";
        } else {
            res = '"' + num + '"' + ' is a number';
        }
        return res;
    }
    document.getElementById('div42').innerHTML = numberOrNot(42);
    document.getElementById('div43').innerHTML = numberOrNot('Hi');

    /*25. Calculate the sum of values in an array*/

    function sumElOfArr(arr) {
        var sum = 0;
        var i = 0;
        for (i ; i < arr.length; i += 1) {
            sum += arr[i];
        }
        return sum;
    }
    document.getElementById('div44').innerHTML = 'Array: [2, 3, 50, 40, 1]';
    document.getElementById('div45').innerHTML = 'Sum of elements: ' + sumElOfArr([2, 3, 50, 40, 1]);

    /*26. Get the length of a JavaScript object*/
    function sizeObj(obj) {
        var size = 0;
        var key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                size += 1;
            }
        }
        return size;
    }
    document.getElementById('div46').innerHTML = "Object is: " + JSON.stringify(user);
    document.getElementById('div47').innerHTML = "Length is: " + sizeObj(user);

    /*27. List the properties of a JavaScript object*/

    function getProperties(obj){
        var keys = [];
        for(var key in obj){
            keys.push(key);
        }
        return keys;
    }
    document.getElementById('div48').innerHTML = "Object is: " + JSON.stringify(user);
    document.getElementById('div49').innerHTML = "Properties: " + getProperties(user);

}
my();