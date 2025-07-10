// YOUR CODE BELOW
function lastFridayNight (transections){
    let totalAmount = 0;

    for ( i = 0 ; i< transections.length; i++){

        let individualTransection = transections[i];
        
        totalAmount += individualTransection.amount;
    }
    return totalAmount;
}
