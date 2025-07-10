//Here is my code
function myLastIndexOf(array,  searchValue, startIdx = 0){
    let newArray = array.slice(startIdx)
    if (searchValue === undefined){
        return -1;  
    }
    
    for(let i = newArray.length-1; i >= 0 ; i--){
        
        if (array[i] === searchValue){
            return i;
        }
    }
    return -1;
}
