//Array
//Joining arrays together using concat()
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];

var joinedArray = firstArray.concat(secondArray);

console.log(joinedArray); // [1, 2, 3, 4, 5, 6]

//Filling an array using fill()
var array = [1, 2, 3, 4, 5];

array.fill(0, 2, 4);

console.log(array); // [1, 2, 0, 0, 5]

//Using slice() to slice an array
var array = [1, 2, 3, 4, 5];

var slicedArray = array.slice(1, 3);

console.log(slicedArray); // [2, 3]

//Adding/removing elements at the end — push() and pop()
var array = [1, 2, 3, 4, 5];

array.push(6);

console.log(array); // [1, 2, 3, 4, 5, 6]

array.pop();

console.log(array); // [1, 2, 3, 4, 5]

//Adding/removing elements at the start — unshift() and shift()
var array = [1, 2, 3, 4, 5];

array.unshift(0);

console.log(array); // [0, 1, 2, 3, 4, 5]

array.shift();

console.log(array); // [1, 2, 3, 4, 5]

//Adding/removing elements at an arbitrary index — splice()
var array = [1, 2, 3, 4, 5];

array.splice(2, 0, 6);

console.log(array); // [1, 2, 6, 3, 4, 5]

array.splice(2, 1);

console.log(array); // [1, 2, 3, 4, 5]

//Reversing an array using reverse()
var array = [1, 2, 3, 4, 5];

array.reverse();

console.log(array); // [5, 4, 3, 2, 1]

//Finding the index of an element using indexOf() and lastIndexOf()
var array = [1, 2, 3, 4, 5];

var index = array.indexOf(3);

console.log(index); // 2

var lastIndex = array.lastIndexOf(3);

console.log(lastIndex); // 2

//Existential and universal quantification using some() and every()
var array = [1, 2, 3, 4, 5];

var isExists = array.some(function(element) {
  return element > 3;
});

console.log(isExists); // true

var areAllGreaterThanZero = array.every(function(element) {
  return element > 0;
});

console.log(areAllGreaterThanZero)

//Filtering items via filter()
var numbers = [1, 2, 3, 4, 5];

// Filter: Returns a new array with all elements that pass the test
var evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//Joining array elements using join()
var words = ["Hello", "world"];

// Join: Returns a string joined by a separator
var sentence = words.join(" ");
console.log(sentence); // "Hello world"

//Mapping to a new array via map()
var numbers = [1, 2, 3, 4, 5];

// Map: Returns a new array with the results of calling a provided function on every element
var doubledNumbers = numbers.map(function(element) {
  return element * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Sorting an array using sort()
var numbers = [3, 1, 5, 2, 4];

// Sort: Sorts the elements of an array in place and returns the array
var sortedNumbers = numbers.sort(function(a, b) {
  return a - b;
});
console.log(sortedNumbers); // [1, 2, 3, 4, 5]

//Reduce : reduce an array to a single data

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10


//Object proprety Attributes
/*

    When a property is writable (regardless of the value of other attributes), 
    we could change its [[Value]] manually or via a property assignment expression, for e.g. o.p = 10. Simple!

    When a property is non-writable (regardless of the value of other attributes), 
    we could not change its [[Value]] via a property assignment expression, for e.g. o.p = 10. Simple!

    When a property is configurable and writable, 
    essentially all operations are possible on the property. Simple!

    When a property is configurable but non-writable, 
    we couldn't use a property assignment expression, 
    for e.g. o.p = 10, to change its value. This follows from 2). 
    However, all other operations are still possible on the property 
    including manually changing [[Value]] using Object.defineProperty(). 
    This follows from 3). Simple!

    When a property is non-configurable and an accessor property,
    no attribute could be changed. Simple!

    When a property is non-configurable and non-writable, 
    no attribute could be changed. Simple!

    When a property is non-configurable but writable, 
    no attribute could be changed except for [[Value]], as mentioned in 1), 
    and [[Writable]], to make the property even more strict. Simple!
*/