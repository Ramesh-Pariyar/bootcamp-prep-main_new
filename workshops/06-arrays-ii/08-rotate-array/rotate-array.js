// here is my code

function rotateArray(originalArry,rotationNum){

    let front = originalArry.slice (-rotationNum)
    let back = originalArry.slice(0,-rotationNum)
    finalRotatedArray = front.concat(back)
    return finalRotatedArray;
}
