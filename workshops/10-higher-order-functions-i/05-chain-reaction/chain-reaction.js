// here is my code
function chainReaction (start, funcArr){
    for (let i = 0 ; i < funcArr.length ; i++){

        let element = funcArr[i]

        start = element(start)
        
    }
    return start;
}
