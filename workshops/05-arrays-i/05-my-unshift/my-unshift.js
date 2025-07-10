// YOUR CODE BELOW
// rite a function `unShift` that takes an array and a value of any type as arguments.

// `unShift` should return a new array, with the given value as the first element
// in the new array.

// ```javascript
// unShift([1, 2, 3], 0); / => [0, 1, 2, 3];

function myUnshift (array, value){
    let newArray = [value];

    for(let i = 0; i <array.length ; i++){
        newArray.push(array[i])
    }
    return newArray;
    
}