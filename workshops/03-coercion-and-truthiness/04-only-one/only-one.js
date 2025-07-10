// Here is my code
function onlyOne(a,b,c){
    let count = 0;
    if (a){
        count++;
    }
    if (b) count++;
    if (c)count++;
    
    if(count!==1){
        return false;
    }
    else{
        return true;
    }
        
}
