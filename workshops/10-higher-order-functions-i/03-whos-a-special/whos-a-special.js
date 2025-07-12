//here is my code
function whosASpecial (arr){

    let finalString = ''

    arr.forEach(function (object,idx){

        finalString += `${object.name} the ${object.species} is very special!`

        if (idx < arr.length - 1){
            finalString += " "
        }
    })

    
    return finalString
    
}
