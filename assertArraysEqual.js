const eqArrays = function(firstArray,secondArray) {
  let matchedCount = 0;

  //If both the arrays dont have the same number of elements then they are definitely not identical
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        matchedCount++;
      } else {
        break;
      }
    }
    
//If all the elements are equal then the matched count will be equal to the length of the array. 
    if (matchedCount === firstArray.length) {
      return true;
    } else {
      return false;
    }
  }

};
const assertArraysEqual = function(firstArray,secondArray) {

  if (eqArrays(firstArray,secondArray)) {
    console.log(` 😍 Assertion Passed: ${firstArray}  === ${secondArray}`);
  } else {
    console.log(` ☹ Assertion Failed: ${firstArray}  === ${secondArray}`);
  }
};

assertArraysEqual(["Labs","Lighthouse"], ["Lighthouse", "Labs"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
