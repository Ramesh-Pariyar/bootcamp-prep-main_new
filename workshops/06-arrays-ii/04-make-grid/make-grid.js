// // YOUR CODE BELOW

// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// ```javascript
// makeGrid(3,4);
// /* => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
// */

function makeGrid (numColumns, numRows){

    let finalGrid = [];

    for (i = 0 ; i < numRows; i++){
        let semiFinalGrid = [];

        for (j= 0; j<numColumns; j++){
            semiFinalGrid.push(j+1)
        }

        finalGrid.push(semiFinalGrid)
    }
    return finalGrid;
}