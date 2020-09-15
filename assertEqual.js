const assertEqual = function(actual,expected) {
  let returnString = "";
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }
  return returnString;
};

console.log(assertEqual("LightHouse Labs","Bootcamp"));
console.log(assertEqual(1,3));
console.log(assertEqual(12,12));
console.log(assertEqual("Bootcamp","Bootcamp"));

