// here is my code
function exponentiate(base,power){
    let result = 0;
    if (power == 1){
        result = 1;
    }
    else if (base==0 && power ==0){
        result = "undefined"
    }else{
        result = base ** power;
    }
    return result;
}
console.log(exponentiate(2,4))