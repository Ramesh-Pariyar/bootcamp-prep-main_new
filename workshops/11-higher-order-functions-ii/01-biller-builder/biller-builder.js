// here is my fuction
function billerBuilder (name){

    if (name === 'NY'){
        return funcNY
    }
    return funcNJ



    function funcNY(price){

        price = price*1.03*1.04

        return price

    }
    


    function funcNJ(price){

        price = price*1.05*1.06625

        return price

    }
}

