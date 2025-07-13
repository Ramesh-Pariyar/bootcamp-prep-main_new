// here is my code
function partial (callback,argA){

    return function (arg2){

        return callback(argA, arg2) 
    }
    
}
