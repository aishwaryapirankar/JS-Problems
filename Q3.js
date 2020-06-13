//

console.log("===============Q3================")

// ===========Method 1=============

//Declaring the function
let digitsum = (num) =>
{
    let sum = 0;
    let string = num.toString();
    for(let i = 0 ; i < string.length ; i++)
    {
        let num = parseInt(string[i]);
        sum = sum + num;
    }
    console.log(sum)
}
console.log("Method 1 of Sum of digits :")

// Calling the function
digitsum(192)


console.log("------------------------------")
// ===========Without using array method=============


var sum = 0;
var y = 0;

//Declaring the function
var digitSum = function(n){
    while ( n > 0){
        y = n % 10
        n = parseInt( n / 10 );
        sum = sum + y 
    }
    console.log(sum)
}
console.log("Method 2 of Sum of Digits :")

// Calling the function
digitSum(192)