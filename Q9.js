// Write a function findRepeat to return the repeated character in the string 

console.log("===============Q9================")

let findRepeat = (str) => {
    for(let i = 1 ; i < str.length ; i++){
        if(str[0]===str[i]){
            console.log(str[0]);
        }
    }
}

findRepeat("heythere")