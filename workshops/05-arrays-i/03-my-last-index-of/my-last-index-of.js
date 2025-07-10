//Here is my code
function myLastIndexOf(array,  searchValue, startIdx = array.length-1){

    if (searchValue === undefined){
        return -1;  
    }
    
    for(i = startIdx ; i >=0 ; i--){
        
        if (array[i] === searchValue){
            return i;
            
        }
    }
    return -1;
}
