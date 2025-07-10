//My code is here
function oddCouple(Arr){
    let newArr = [];
    for (i = 0; i<Arr.length; i++){
        if (Arr[i]%2){
            newArr.push(Arr[i])
        }
        if (newArr.length ===2){
            break;
        }
    }
    return newArr;
}
