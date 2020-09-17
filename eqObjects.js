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

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let element of Object.keys(object1)) {
      if (Array.isArray(object1[element]) && (Array.isArray(object2[element]))) {
        if (!eqArrays(object1[element],object2[element])) {
          return false;
        }

      } else {
        if (object2[element] !== object1[element]) {
          return false;
        }
      }
      
    }
    return true;
  } else {
    return false;
  }
  
};

const ab =  {a:1, b:2};
const ba =  {b:2, a:1};
const abc = {a:1, b:2, c:3};
const ad = {a:1, d:4};
const abTwo = {a:1, b:34};

console.log(assertEqual(eqObjects(ab,ba),true)); //true
console.log(assertEqual(eqObjects(ab,abc),false)); //false
console.log(assertEqual(eqObjects(ab,ad),false));//false
console.log(assertEqual(eqObjects(ab,abTwo),false));//false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, dc),true));
console.log(assertEqual(eqObjects(cd, cd2),false));
