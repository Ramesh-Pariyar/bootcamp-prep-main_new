// here is my code

function callCount (){

    let count = 0

    return function (){
        count++
        return count
    }

}
