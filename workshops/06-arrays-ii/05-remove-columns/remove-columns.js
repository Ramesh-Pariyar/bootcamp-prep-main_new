// YOUR CODE BELOW
function removeColumns(originalGrid,numColumns){
    let newArray = [];

    for (i = 0 ; i < originalGrid.length ; i ++){

        let trimmedOriginalGrid = originalGrid[i];

        let row = trimmedOriginalGrid.slice(0 , trimmedOriginalGrid.length-numColumns)

        newArray.push(row)
    }
    return newArray;
}