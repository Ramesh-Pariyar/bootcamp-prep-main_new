// here is my code
function myOr(a,b,c){
    if (a){
        return a
    }
    else if(b){
        return b
    }
    else {

        return c
    }
    
}
function myAnd(a,b,c){
    if (!a){
        return a
    }
    else if (!b){
        return b
    }
    else{
        return c
    }

}
console.log(myOr(1))
console.log(myAnd(2,'t',true))