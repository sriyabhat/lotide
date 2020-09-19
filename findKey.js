const assertEqual = function(actual,expected) {
  let returnString = "";
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }
  return returnString;
};

const findKey = function(obj,callback) {
  for (let objkey of Object.keys(obj)) {
    if (callback(obj[objkey])) {
      return objkey;
    }
  }
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(assertEqual(result1,'noma'));
const result2 = findKey({
  "Tipsy": "cat",
  "kingFish": "fish",
  "Tommy": "dog",
  "Tuna": "fish"

}, x => x === 'fish');

console.log(assertEqual(result2,'kingFish'));


