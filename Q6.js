//  Write a function findElement to find the given element in the array 

console.log("===============Q6================")

// Declaring array
let array = [1,2,3,4,5,5,23,2,33];


// Declaring function
let findElement = (num , array) =>{
    if(array.length===0){
        console.log(null)
    }
    for(let i = 0 ; i < array.length ; i++){
       if(array[i]=== num){
           console.log(i)
       }
        
    }
}

// Calling the function
findElement(23, array)