// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]

function arrayFlattener (twoDimArray){
    let newArray = [];

    for (let i = 0 ; i < twoDimArray.length ; i++){

        
        if(Array.isArray(twoDimArray[i])){
            for(let j = 0; j< twoDimArray[i].length; j++ ){
                newArray.push(twoDimArray[i][j])
                
            }
        }
        else{
            newArray.push(twoDimArray[i]);
        }
    }
    return newArray;    
}
