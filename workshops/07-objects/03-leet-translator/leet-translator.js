let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// here is my code

function leetTranslator(str) {
  //Fullstack
  debugger;
  str = str.toLowerCase(); //fullstack

  let finalTranslation = "";

  let obj = {};

  for (let i = 0; i < letters.length; i++) {
    obj[letters[i]] = leetChars[i];
  }
  for (let j = 0; j < str.length; j++) {
    let letter = str[j]; //f
    let leetChar = obj[letter]; //ph
    finalTranslation += leetChar;
  }

  return finalTranslation;
}
leetTranslator("Fullstack");
