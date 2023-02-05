document.write("Hello World <br>");
/*var a = prompt("a = ?");
var b = prompt("b = ?");
sum = Number(a) + Number(b);
document.write("The sum is : " + sum);


var text = "The ' character is called an apostrophe.";

console.log(text);

var x = 10;
var y = 2;

var tmp;
tmp = y;
y = x;
x = tmp;
document.write("Swap y and x <br> x : " + x + "<br> y : " + y);


var int1 = prompt("int1 = ?");
var int2 = prompt("int2 = ?");
var int3 = prompt("int3 = ?");

var tab = [int1,int2,int3];

document.write(tab.sort());

//Exercie 4
function linearSearch(array, search){
    
    for(var i = 0; i < array.length; ++i)
    {
        document.write(array.length);
        if(search === array[i])
        {
            
            return true;
        }
        else
        {
            return false;
        }
    }
}

//Exercice 5

function factorial(number){
    var tmp = number;
    var result = 1;
    while(tmp != 1){
        result *= tmp;
        tmp--
    }
    return result;
}


//Exercice 6

var one = prompt("Enter 1st value");
var two = prompt("Enter 2nd value");
var operator = prompt("Enter operator");

switch(operator){
    
    case "a":
        document.write( Number(one) + Number(two));
        break;
    
    case "s":
        document.write( Number(one) - Number(two));
        break;

    case "m":
        document.write( Number(one) * Number(two));
        break;

    case "d":
        document.write( Number(one) / Number(two));
        break;
    default:
        document.write( "false ");
        
}

 //Exercice 7

 function isPalindrome(word) {
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] === word[word.length - i - 1]) return false;
    }
    return true;
}

var word = prompt('Enter a word:');
if (isPalindrome(word)) {
    document.write("Yes, '" + word + "' is a palindrome.");
}
else {
    document.write("No, '" + word + "' is not a palindrome.");
}

//Exercice 8
function min(arr){
    var tmp = arr[0];

    for(var i = 0; i < arr.length; i++){

        if(arr[i] < tmp){
            tmp = arr[i];
            
        }
    }
    return tmp;
}

//Task
var binNum = "10110";
var hexNum = parseInt(binNum, 2).toString(16)

var test = 10

console.log(test.toPrecision(2), test.toFixed(2));

//Exercice 9

function betterPrecision(num,precision)
{
    var prec = num.toPrecision(precision)
    var index = prec.indexOf('e')
    if (index !== -1 && index < 5)
    {
        var exp = Number(prec.slice(index + 1));
        return(exp, Number(prec));
    }
    else{
        return(num.toPrecision(precision));
    }
}

//Exercice 10
function f(x) {return x ** 2 + 2 * x - 15}

function bisection(f,a,b){
    const epsilon = 0.0001;
    h = (b-a) /2;
    if(f(a) < 0 && f(a) < f(b) || f(b) < 0 && f(b) < f(a)){

        while(f(h) - epsilon >= 0){
            b = h;
            h = (b-a)/2
        }
        return(h);
    }

}
console.log(bisection(f,100, 1000));

console.log(Math.min(3, null, 10, 2));

//Exercice 11

function not(bin){
    var tmp;
    for(var i = 0; i < bin.length; i++){
        
        if(bin[i] === '0'){
            tmp += '1';
        }
        else{
            tmp += '0';
        }
    }
    return tmp;
}

//Exercice 12

function strToUpper(str){
    var up;
    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i) <= 91){
            up += str[i];
        }
    }
    return up;
}

//Exercice 13

function logLetterFrequency(str){
    var letterCount = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
   ];

   for(var i = 0; i < str.length; i++){
    
    if(str.charCodeAt(i) <= 91){
        letterCount[str.charCodeAt(i) - 65] += 1;
    }
    else{
        letterCount[str.charCodeAt(i) - 97] += 1;
    }
}
   return(letterCount);
}

//Task
function getAllIndexes(str,substr){
    var index = str.indexOf(substr);

    if(index === -1)return -1
    
    var indexes =[];
    while(index !== 1 ){
        indexes.push(index);
        index = str.indexOf(substr, i + 1);
    }
}

//Exercice 14

var hyphenated = prompt("Enter an hyphenated word");
function hyph(hyphenated){
    if(hyphenated.indexOf("-") === -1){
        alert("Invalid input !");
    }
    else{
        var split = hyphenated.split('-');
        for(var i = 0; i < split.length; i++){
            document.write(split[i] + '<br>');
        }
    }
}

hyph(hyphenated);

//Exercice 15

function endsWithPolyfill(str,substr,length){
    if(str[length - 1] === substr){
        return true;
    }
    else{
        return false;
    }
}

//Exercice 16

function toTitleCase(str){
    var uppers = str.split(' ');
    
    for(var i = 0; i < uppers.length; i++){
        uppers[i] = uppers[i].substr(0,1).toUpperCase() + uppers[i].substr(1);
        
        
    }
    
    return uppers;
}


//Exercice 17

function getWords(str){
    if(str === ' ')return [];

    var index = 0;
    var words = [];
    for(var i = 0; i < str.length; i++){
        if('A' <= str[i] && str[i] <= 'Z'){
            words.push(str.slice(index,i));
            index = i
        }
    }
    words.push(str.slice(index));
    return words;
    
}


var str = 'aZZZbZZZc';
console.log(str.split('ZZ'))

//Exercice 18

function grade(note){
    if(note < 40){
        return "Invalid input";
    }
    else if(note >= 40 && note <= 49){
        return "Grade E"
    }
    else if(note >= 50 && note <= 59){
        return "Grade D"
    }
    else if(note >= 60 && note <= 74){
        return "Grade C"
    }
    else if(note >= 75 && note <= 89){
        return "Grade B"
    }
    else if(note >= 90 && note <= 100){
        return "Grade A"
    }   
}
console.log(Boolean(false))

//Exercice 20

function gcd(num,num2){
    var divide;
    for(var i = 0; i < num; i++){
        if(num % i === 0 && num2 % i === 0){
            divide = i;
        }
    }
    return divide;
}


function selectionSort(arr) {
    var minIndex;
    var temp;
    var length = arr.length;
 
    for (var i = 0; i < length; i++) {
       minIndex = i;
 
       for (var j = i; j < length; j++) {
          if (arr[j] < arr[minIndex]) {
             minIndex = j;
          }
       }
 
       temp = arr[minIndex];
       arr[minIndex] = arr[i];
       arr[i] = temp;
    }
 }

//Exercice 21

function collatz(int){
    var nums = [int];
    while(int !== 1){
        if(int % 2 === 0){
            int = int / 2;
            nums.push(int);
        }
        else{
            int = 3*int + 1;
            nums.push(int);
        }
    }
    return(nums);
}

//Exercice 22

function arrayReverse(arr){
    var tmp = [];
    
    for(var i = arr.length - 1; i > -1; i--){
        console.log(i);
        tmp.push(arr[i]);
    }
    return tmp;
}


//Array splice method
var arr = [1, 50, -6, -20, 22];
console.log(arr.splice(2,2));
 

//Task
var nums = [1, 10, 5, 33, 198, 0, 5, 8];

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
}

console.log(nums.filter(isEven));
 
//Exercice 28
//Matrix addition/multiplication

function add(a,b){
    var sum = [];
    for(var i = 0; i < a.length; i++){
        sum.push([]);
        for(var j = 0; j < a[0].length; j++){
            sum[i][j] = a[i][j] + b[i][j];
        }
    }
    return sum;
}
a = [[1,2],[3,4]];
b = [[3,4],[3,4]];

function multiply(a, b) {
    var m = a.length,
        n = a[0].length,
        p = b[0].length;
 
    var product = []; // this represents a x b
 
    for (var i = 0; i < m; i++) {
       product.push([]);
       for (var j = 0; j < p; j++) {
          var sum = 0;
          for (var k = 0; k < n; k++) {
             sum += a[i][k] * b[k][j]
          }
          product[i].push(sum);
       }
    }
 }

//Exercice 29
//Matrix Rotation
a = [[1,2],[3,4]];

function rotateBy90(matrix) {
    var n = matrix.length;
    var matrixCopy = [];

    for (var i = 0; i < n; i++) {
        matrixCopy.push([]); // add a row
        for (var j = 0; j < n; j++) {
            matrixCopy[i].push(matrix[i][j]); // add new entry
        }
    }
                    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            matrix[i][j] = matrixCopy[n - j - 1][i];
        }
    }

    return matrix;
}
 
//Exercice 30
//Binary Search
function binarySearch(val, arr){
    arr.sort(function(a,b) {return a - b;});
    
    var left = 0;
    var right = arr.length - 1;
    var mid;

    while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(arr[mid] === val){
            return true;
        }
        else if(arr[mid] < val){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return false;
}

var test = Array(10);
console.log([1, 2] instanceof Array);

function f() {
    console.log(arguments);
 }
 
 f(10);
 f(10, 'Hello World!');
 f(10, 20, 'Hello World!');
 f(true, false, 50, 40, 30);

 var a = 'static';

function f1() {
   console.log(a);
}

function f2() {
   var a = 'dynamic';
   f1();
}
console.dir(f1);

//Exercice 33
//Euclidian Algorithm

function gcd(a,b){

    if(b === 0){
        return a;
    }

    else{
        return gcd(b, a % b);
    }
}

//Task
var point = { x: 0, y: 0 };

for (var p in point) {
   console.log(`${p} ` + ` => ` + point[p]);
}
//Exemple fonction setters
function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;

   this.setTo = function(x, y) {
      this.x = x;
      this.y = y;
   }
}

var p1 = new Point(-2, 8);

// Reposition p1 to (1, 5)
p1.setTo(1, 5);

console.log(p1);
*/