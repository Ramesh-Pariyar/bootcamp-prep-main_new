//here is my code
function getDogBreeder (nameD = 'Steve' , ageD = 0){

    return function DogBreeder (newName = nameD,newAge = ageD ){

            if (typeof newName === "number"){
                newAge = newName
                newName = nameD
            }
            let  Dog = {
                name : newName,
                age : newAge
            };
            return Dog
    }
}

