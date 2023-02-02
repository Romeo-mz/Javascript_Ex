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

console.log(areAllGreaterThanZero

//Filtering items via filter()

//Joining array elements using join()

//Mapping to a new array via map()

//Sorting an array using sort()
