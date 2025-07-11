// here is my code
function reverseArray (array){
    const rev = [];

    for(let i = array.length-1 ; i >= 0 ; i--){
        rev.push(array[i])
    }
    array.length = 0

    for(let j = 0; j< rev.length; j++){
        array.push(rev[j]);
    }
    return array;
}