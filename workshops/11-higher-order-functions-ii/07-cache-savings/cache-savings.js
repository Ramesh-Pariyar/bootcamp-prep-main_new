// here is my code
function cacheSavings (callback){

    let cache = {}

    return function (argument){


        if (! (argument in cache) ){
            let callbackResult =  callback(argument)

            cache[argument] = callbackResult;
        }
        return cache[argument]
    }

}
