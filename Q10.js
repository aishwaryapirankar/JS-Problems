// Write a function sort that sorts the given array in ascending order

console.log("===============Q10================")

// Declaring the function
let sort = (arr) =>{
    let temp = [];
    for(let i = 0 ; i < arr.length ; i++){
        for(j = 0 ; j < arr.length ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr) 
}

// Calling the function
sort([5, 2 , 1, 4, 3 ])