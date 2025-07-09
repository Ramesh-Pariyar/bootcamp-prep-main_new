// Edit the code below
debugger
let planet = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(city) {
      x = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + planet + ', ' +country  + ', ' + city + ', ' + x;
      }
    }
  }
}
console.log (fullstackHQ())