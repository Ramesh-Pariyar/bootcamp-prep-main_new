//Here is my 
console.log('ramesh');
function bacteriaTime(currentNum,targetNum){
    let reqTime = 0;
    if (currentNum>targetNum){
        return 'targetNum must be larger than currentNum'
    }
    for (let i=currentNum; i<targetNum; i*=2 ){
        reqTime +=20;
    }
    return reqTime;
}
console.log(bacteriaTime(200,3200));        