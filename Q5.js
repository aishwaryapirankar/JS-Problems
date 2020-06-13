// Write a function strReverse to reverse the string

console.log("===============Q5================")

// Declaring the Function
let strReverse = (input) => {
    string="";
    for(let i = input.length - 1 ; i >= 0 ; i-- ){
        string = string + input[i];
    }
    console.log(string);
}

//Calling the function
strReverse("awesome")