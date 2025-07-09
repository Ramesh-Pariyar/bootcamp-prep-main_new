// HERE IS MY CODE
function onlyOdds(number){
    debugger;
    let sum = 0;
    if(number<0) return 0;

    for (let i = 1; i<number; i++){
            if (i%2===1){
                sum= sum +i;
            }
    }
        return sum;
}
console.log(onlyOdds(6));