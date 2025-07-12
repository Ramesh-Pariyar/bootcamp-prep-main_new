// here is my code
function myForEach (Arr, callback){
    
    for ( i = 0; i< Arr.length ; i++){
        callback(Arr[i],i)
    }
}   