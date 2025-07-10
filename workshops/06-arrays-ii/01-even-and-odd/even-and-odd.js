// YOUR CODE BELOW
// Define a function, `evenAndOdd`, that accepts an array.

// `evenAndOdd` should return a new array. The first element in the new array
// should be an array with all of the even numbers from the original array. The
// second element in the new array should be an array with all of the odd numbers
// from the original array.

// ```javascript
// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
// ```

function evenAndOdd(array){
    let arrEven= [];
    let arrOdd = [];

    for (i = 0 ; i < array.length ; i++){
        
        if (array[i] % 2 === 0){
            arrEven.push(array[i])
        }
        else {
            arrOdd.push(array[i])
        }
    }
    return [arrEven,arrOdd]
}