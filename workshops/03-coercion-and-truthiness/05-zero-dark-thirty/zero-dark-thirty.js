//here is my code
function zeroDarkThirty(aNumber){
    if (!aNumber){
        return NaN
    }
    let strVal = String(aNumber);
    let newVal = ''
    for(i=0; i<strVal.length;i++){

        if(strVal[i]==='0'){
                continue
        }
        newVal += strVal[i]
    }
    return Number(newVal)

}
console.log(zeroDarkThirty(12000122))