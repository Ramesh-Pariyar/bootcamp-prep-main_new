//My code is given below
function defaultGreet(firstName, lastName = 'Doe') {
    if (lastName !== 'Doe') {
        return `Hi ${firstName} ${lastName}!`;
    } else {
        return `Hi ${firstName} Doe!`;
    }
}
defaultGreet("Ramesh","Pariyar");