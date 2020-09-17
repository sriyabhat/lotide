
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

const assertObjectsEqual = function(firstObject,secondObject) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObject,secondObject)) {
    console.log(` 😍 Assertion Passed: ${inspect(firstObject)}  === ${inspect(secondObject)}`);
  } else {
    console.log(` ☹ Assertion Failed: ${inspect(firstObject)}  === ${inspect(secondObject)}`);
  }
};

const ab =  {a:1, b:2};
const ba =  {b:2, a:1};
const abc = {a:1, b:2, c:3};
const ad = {a:1, d:4};
const abTwo = {a:1, b:34};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab,ba); //Pass
assertObjectsEqual(ab,abc); //fail
assertObjectsEqual(ab,ad); //fail
assertObjectsEqual(ab,abTwo); //fail
assertObjectsEqual(cd,dc); //pass
assertObjectsEqual(cd,cd2); //fail