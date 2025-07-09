let counter = 0;

function incrementalChange (num){
    counter +=num;
    return counter;
}
console.log(incrementalChange(2))
console.log(incrementalChange(6))
console.log(incrementalChange(-1))