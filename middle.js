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

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else {
    let index = Math.floor(array.length / 2);   
    let middleArray = [];
    if (array.length % 2 === 0) {
     middleArray.push(array[index - 1]);    
    } 
    middleArray.push(array[index]);
    return middleArray;
  }  
};

assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);