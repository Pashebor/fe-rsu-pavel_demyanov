var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
var user = {name: 'paul', phone: '+79209510573', age: '-1'};
var result = 0;

var init = (function () {
    'use strict';

    Array.prototype.moveElement = function (old_index, new_index) {
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        return this;
    };

    function findSpecElement(array, element) {
        var i;
        for (i = 0; i < array.length; i += 1) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
        return array;
    }

    function uniqueArray(array) {
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

    function printOriginObj(object) {
        var printThat = '';
        var i;
        for (i = 0; i < object.length; i += 1) {
            printThat += object[i].author + ' | ' + object[i].title + ' | ' + object[i].libraryID + '<br>';
        }
        return printThat;
    }
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

    function compareArraysOnDuplicates(array, uniqueArray) {
        var flag;
        var i;
        var j;
        for (i = 0; i < array.length; i += 1) {
            flag = false;
            for (j = 0; j < uniqueArray.length; j += 1) {
                if (array[i].toLowerCase() === uniqueArray[j].toLowerCase()) {
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }

    /*You must input a number of task in test method as argument*/
    function test(number) {

      switch (number) {
          /*1. Array or not function*/
          case 1:
              return function is_array(value) {
                  var result = '';
                  document.getElementById('div1').innerHTML = ('Value is: ' + '[' + value + ']');
                  if (value.constructor === Array) {
                      result = 'This is an array';
                  } else {
                      result = 'Not an array';
                  }
                  return result;
              };

          /*2. Deep clone an array using recursion*/
          case 2:
              return function cloneArray(value) {
                  var clone = [];
                  var i;
                  if (value.constructor === Array) {
                      clone = value.slice(0);
                      for (i = 0; i < clone.length; i += 1) {
                          clone[i] = cloneArray(clone[i]);
                      }
                      document.getElementById('div5').innerHTML = "Are they the same: " + (clone === value);
                      return clone;
                  } else if (typeof  value === 'object') {
                      throw 'Array of objects';
                  } else {
                      return value;
                  }
              };
          /*3. Find the most frequent item in array*/
          case 3:
              return function mostFrequentItem(array) {
                  document.getElementById('div6').innerHTML = 'An array: ' + '[' + array + ']';
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
              };

          /*4. Remove duplicate strings from a string array*/
          case 4:
              return function removeDuplicatesFromArray(array) {
                  document.getElementById('div8').innerHTML = 'Original array: ' + '[' + array + ']';
                  var uniqueArray = [];
                  return compareArraysOnDuplicates(array, uniqueArray);
              };
          /*5. Shuffle an array*/
          case 5:
              return function shuffleArray(array) {
                  document.getElementById('div10').innerHTML = 'Array: ' + '[' + array + ']';
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
              };
          /*6. Sort an array of objects by title*/
          case 6:
              return function outputSortedLibrary(obj, sameObj) {
                  document.getElementById('div12').innerHTML = "Object: <br>" + printOriginObj(sameObj);
                  obj.sort(sortByTitle);
                  var printThis = '';
                  var i;
                  for (i = 0; i < obj.length; i += 1) {
                      printThis += obj[i].author + ' | ' + obj[i].title + ' | ' + obj[i].libraryID + '<br>';
                  }
                  return printThis;
              };
          /*7. Merge two arrays and removes all duplicates elements*/
          case 7:
              return function mergeTwoArrays(arr1, arr2) {
                  document.getElementById('div14').innerHTML = 'First Array: ' + "[" + arr1 + "]";
                  document.getElementById('div15').innerHTML = 'Second Array: ' + "[" + arr2 + "]";
                  var arr3 = arr1.concat(arr2);
                  return uniqueArray(arr3);
              };

          /*8. Remove a specific element from an array*/
          case 8:
              return function removeSpecEl(array, special_element) {
                  document.getElementById('div17').innerHTML = 'Array: ' + '[' + array + '] , ' + ' Srecific element: ' + special_element;
                  return findSpecElement(array, special_element);
          };

          /*9. Get a random item from an array*/
          case 9:
              return function getRandomElement(array) {
                  var rand = Math.floor(Math.random() * array.length);
                  document.getElementById('div19').innerHTML = 'Array: ' + array;
                  return array[rand];
              };

          /*10. Move an array element from one position to another*/
          case 10:
              return function arrayMoved(array) {
                  document.getElementById('div21').innerHTML = 'Array: ' + '[' + array + ']';
                  return array.moveElement(0, 1);
              };
          /*11. Split a string and convert it into an array of words*/
          case 11:
              return function splitStringToArray(string) {
                  document.getElementById('div23').innerHTML = 'String is: ' + string;
                  return string.split(' ');
              };

          /*12. Capitalize the first letter of a string*/
          case 12:
              return function capitalizeFirstLetter(string) {
                  document.getElementById('div25').innerHTML = 'String is: ' + '"' + string + '"';
                  return string.charAt(0).toUpperCase() + string.slice(1);
              };

          /*13. JavaScript function to convert a string into camel case*/
          case 13:
              return function camelize(string) {
                  return string.replace(/\W+(.)/g, function (match, chr) {
                      return chr.toUpperCase();
              });
              };

          /*14. Iterate an array and sum his elements*/
          case 14:
              return function iterateArray(array, callback){
                  document.getElementById('div29').innerHTML = "Array is: " + '[' + array + ']';
                  var i;
                  var sum = 0;
                  if (array.constructor === Array) {
                      for (i = 0; i < array.length; i += 1) {
                          sum += array[i];
                      }
                      if (typeof callback == "function")
                          callback(sum);
                  } else {
                      document.getElementById('div29').innerHTML = "First argument does not an array";
                  }
              };

          /*15. Get the length of an JavaScript object*/
          case 15:
              return function sizeObj(obj) {
               document.getElementById('div31').innerHTML = "Object is: " + JSON.stringify(user);
                var size = 0;
                var key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        size += 1;
                   }
                }
              return size;
              };
          default : console.log('ok');
      }
    }

    return {
        test: test
    };
}());
var test1 = init.test(1);
var test2 = init.test(2);
var test3 = init.test(3);
var test4 = init.test(4);
var test5 = init.test(5);
var test6 = init.test(6);
var test7 = init.test(7);
var test8 = init.test(8);
var test9 = init.test(9);
var test10 = init.test(10);
var test11 = init.test(11);
var test12 = init.test(12);
var test13 = init.test(13);
var test14 = init.test(14);
var test15 = init.test(15);
document.getElementById('div2').innerHTML = test1([2, 4]);
document.getElementById('div3').innerHTML = 'Array: ' + '[' + test2([[1, 3, 4], [5, 6, 7]]) + ']';
document.getElementById('div4').innerHTML = 'Cloned: ' + '[' + test2([[1, 3, 4], [5, 6, 7]]) + ']';
console.log('Deep clone an array using recursion');
console.log('Array: ', test2([[1, 3, 4], [5, 6, 7]]));
console.log('Cloned: ', test2([[1, 3, 4], [5, 6, 7]]));
document.getElementById('div7').innerHTML = 'The most frequent item: ' + test3([1, 2, 2, 3, 20, 20, 20]);
document.getElementById('div9').innerHTML = 'Array with removed duplicates: ' + '[' + test4(['item', 'item', 'second item']) + ']';
document.getElementById('div11').innerHTML = 'Shuffled array' + '[' + test5(['one', 'two', 'three', 'four']) + ']';
document.getElementById('div13').innerHTML = 'Sorted by title: <br>' + test6(library, library);
document.getElementById('div16').innerHTML = 'Merged array: ' + '[' + test7(['Den', 'Niko', 'Pavel'], ['Alexander', 'Pavel', 'Den', 'Viktor']) + ']';
document.getElementById('div18').innerHTML = 'Array with deleted special element: ' + '[' + test8(['male', 'female', 'thing'], 'thing') + ']';
document.getElementById('div20').innerHTML = 'Random item from array: ' + test9(['Niko', 'Pavel', 'Sylvester', 'Antony']);
document.getElementById('div22').innerHTML = 'Moved items in array: ' + '[' + test10(['Alex', 'Georgy', 'Arnold', 'Angel']) + ']';
document.getElementById('div24').innerHTML = 'Split and convert into array: ' + '[' + test11('Soon it will end') + ']';
document.getElementById('div26').innerHTML = 'Capitalize first letter of a string: ' + '"' + test12('does not ends') + '"';
document.getElementById('div27').innerHTML = 'Strings: <br>' + '"Java Script"<br>' + '"java-script"<br>' + '"Java Script Exercises"';
document.getElementById('div28').innerHTML = 'Result: <br>' + '"' + test13('Java Script') + '"<br>' + '"' + test13('java-script') + '"<br>' +
        '"' + test13('Java Script Exercises') + '"';
test14([2, 3, 10, 20], function (el) {
        result += el;
        document.getElementById('div30').innerHTML = 'Sum is: ' + result;
    });
document.getElementById('div32').innerHTML = 'Size of object: ' + test15(user);

