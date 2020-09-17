const assertEqual = function(actual,expected) {
  let returnString = "";
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }
  return returnString;
};

const eqArrays = function(firstArray,secondArray) {
  

  //If both the arrays dont have the same number of elements then they are definitely not identical
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }

};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)); // => false


