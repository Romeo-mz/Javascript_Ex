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
*/
//Exercice 10