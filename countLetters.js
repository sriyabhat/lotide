const assertEqual = function(actual,expected) {
  let returnString = "";
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }
  return returnString;
};

const countLetters = function(line) {
  const wordCount = {};
  for (let letter of line) {
    if (letter !== ' ') {
      if (wordCount[letter]) {
        wordCount[letter] += 1;
      } else {
        wordCount[letter] = 1;
      }
    }
  }
  return wordCount;
};

console.log('Lighthouse in the house');
const result = countLetters('Lighthouse in the house');

console.log(assertEqual(result['L'] , 1));
console.log(assertEqual(result['i'] , 2));
console.log(assertEqual(result['g'] , 1));
console.log(assertEqual(result['h'] , 4));
console.log(assertEqual(result['t'] , 2));
console.log(assertEqual(result['o'] , 2));
console.log(assertEqual(result['u'] , 2));
console.log(assertEqual(result['s'] , 2));
console.log(assertEqual(result['e'] , 3));
console.log(assertEqual(result['n'] , 1));