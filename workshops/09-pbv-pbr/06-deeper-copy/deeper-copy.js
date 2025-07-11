// YOUR CODE BELOW
function deeperCopy(array){

    let copyarray = []

    for (let i = 0; i < array.length ; i++){
        
        let element = array[i];

        if(Array.isArray(element)){

            let newEle = []

            for ( let j = 0; j < element.length ; j ++){

                newEle.push(element[j])
            }

            copyarray.push(newEle)

        }
        else{
            copyarray.push(element)
        }
    }
    return copyarray

}
console.log(deeperCopy([1,2,4,[1,2,],2,3]))