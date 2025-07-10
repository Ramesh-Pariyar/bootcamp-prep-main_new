// YOUR CODE BELOW
function myJoin(array, seperator){
    if (seperator === undefined ){
        seperator = ",";
    }
    let finalString = '';

    for(let i=0; i< array.length ; i++){

        let element = array[i]

        if(i!==0){
            finalString += seperator;
        }
        if (element !== null  && element !== undefined){
        
            finalString += element;
        }
        
    }
    return finalString;
}
