// Write a function addElement to find the sum of given elements of the array

console.log("===============Q7================")

var arr = [ 1, 2, 3, 4, 10]

// Declaring the function
let addElement = (arr) => {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    console.log(sum)
}

// Calling the function
addElement(arr)