//My code is here
function myIncludes(Arr,searchValue){

    for (i = 0; i < Arr.length ; i++){
        
        if (Arr[i] === searchValue){
            return true;
        }
    }
    return false;
}