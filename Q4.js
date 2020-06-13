// Write a function starPattern that prints the given pattern

console.log("===============Q4================")

// Declaring Function
let starPattern = (num) => {
    let a="";
    for(let i = 1 ; i <= num ; i ++){
        for(let j = 1 ; j <= i ; j++){
           a = a + (" * ")
        }
        console.log(a);
        a=""                                      
    }
}

//Calling the function
starPattern(5);