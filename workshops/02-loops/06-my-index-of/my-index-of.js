//Here is my code
debugger;
function mySlice(originalString, startIdx = 0 ,endIdx=originalString.length){
     
    let slicedString = ""

    for (let i = startIdx; i< endIdx; i++ ){
        slicedString += originalString[i]
    }
    return slicedString
}
console.log(mySlice("slice and dice",3,8))
