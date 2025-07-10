// // YOUR CODE BELOW
// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// ```javascript
// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// // zooInventory(myZoo);

function zooInventory(array){
    let finalSentence = []

    for(i = 0 ; i < array.length ; i++){

        let animal = array[i][0];
        let species = array[i][1][0]
        let age = array[i][1][1]
        let indSentence = `${animal} the ${species} is ${age}.`

        finalSentence.push(indSentence)
    }
    return finalSentence;
}