
// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
// array method. However, mySplice should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method
// can actually take any number of values to add).

// Do not use .splice in your function.

function mySplice (array, startIdx = 0, deleteStep=0, value ){ // assignint defualt values

    let remainingArr1 = [];

    let deletedArr=[];
    
    for (let i =  0 ; i < startIdx ; i++){
        
       remainingArr1.push(array[i])

    }
    if (value !== undefined){
        remainingArr1.push(value)
    }

    for (let i = startIdx; i <startIdx+deleteStep; i++){
        
        deletedArr.push(array[i])
    }

    for (let i = startIdx + deleteStep ; i< array.length; i++){
        remainingArr1.push(array[i])
    }
    array.length = 0;
    for (let i = 0; i < remainingArr1.length ; i++){
        array.push(remainingArr1[i])
    }
    
    return deletedArr;

}

let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples') // => [2]

console.log(myArray)    // [1,'apples', 3]