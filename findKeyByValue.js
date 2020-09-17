const assertEqual = function(actual,expected) {
  let returnString = "";
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }
  return returnString;
};





const findKeyByValue = function(object, value) {

  for (let element of Object.keys(object)) {
    if (object[element] === value) {
      return element;
    }
  }
 
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expense"), "sci_fi"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));