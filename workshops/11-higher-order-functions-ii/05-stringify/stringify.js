// here is my code
function stringify(callback){

    return function (){

        let result = callback ()

        result = String(result)
        
        return result
    }
}
