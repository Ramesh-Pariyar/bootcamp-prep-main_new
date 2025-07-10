//MY CODE IS HERE
function crazyCaps(strVal){
    let output = '';
    for(let i=0; i<strVal.length; i++){
        if (i===0){
            output = output + strVal[0].toLowerCase();
        }
        else {

            if (i%2){
                output = output + strVal[i].toUpperCase();
            }
            else{
                output = output + strVal[i].toLowerCase();
            }

        }
    }
return output;
}