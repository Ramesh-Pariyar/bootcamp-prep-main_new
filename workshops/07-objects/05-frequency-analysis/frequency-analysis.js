//Here is my code
function frequencyAnalysis (aString){
    let obj = {}
    
    
    for (i = 0; i < aString.length ; i++){

        if (!obj[aString[i]]){

            obj[aString [i]]= 1;
        }
        else{

            obj[aString[i]]+= 1;
       
        }
    }
    return obj
}
