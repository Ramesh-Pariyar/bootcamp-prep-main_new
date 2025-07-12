// here is my code
function finderFunction (Arr, callback){

    for (let i = 0 ; i < Arr.length ; i++){

        if ( callback(Arr[i])){
            return  i;
        }

    }
    return -1
    
}
