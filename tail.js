const assertEqual = function(actual,expected) {
  let returnString = "";
  //let matchedCount = 0;
  
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }

  //Logic to compare Two Arrays
  /*if (!Array.isArray(actual) && !Array.isArray(expected)) {
    if (actual === expected) {
      returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
    } else {
      returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
    }
  } else {

    if (actual.length !== expected.length) {
      returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
    } else {
      for (let i = 0; i < actual.length; i++) {
        for (let j = 0; j < expected.length; j++) {
          if (actual[i] === expected[j]) {
            matchedCount++;
            break;
          }
        }
      }
      if (matchedCount === actual.length) {
        returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
      } else {
        returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
      }
    }
  }*/
  return returnString;
};


const tail = function(list) {
  let tailArray = list.slice(1);
  return tailArray;
};

let array = [1,2,3,4,5];
const result = tail(array);

console.log(` Tail of 1 Element array : ${tail(['Sriya'])}`);
console.log(` Tail of an Empty Array : ${tail([])}`);
console.log(assertEqual(array.length,5));
console.log(assertEqual(result.length,4));

/* Work around for console.log(assertEqual(["Labs","Lighthouse"], ["Lighthouse", "Labs"]));*/
let r = tail(["Sriya","Lighthouse","Labs"]);
console.log(assertEqual(r.length,2));
console.log(assertEqual(r[0],"Lighthouse"));
console.log(assertEqual(r[1],"Labs"));


