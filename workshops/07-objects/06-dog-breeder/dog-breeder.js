//Here is my code
function dogBreeder (nameOriginal = "Steve", ageOriginal = 0){

    if (typeof nameOriginal === 'number'){
        ageOriginal = nameOriginal
        nameOriginal = 'Steve'

    }

    let obj = {
        name : nameOriginal,
        age : ageOriginal

    };

    return obj;
    
}
