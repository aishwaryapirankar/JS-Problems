// Wite a function factorial that calculates the factorial of a positive integer

console.log("===============Q2================")

//Declaring the function
let factorial = ( num ) => {  
    let f = 1
    for( i = num ; i >= 2 ; i-- ){
        f = f * i 
    }
    console.log(f)
}

// Calling the function
factorial(3) 