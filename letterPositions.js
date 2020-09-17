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



const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }

  return results;
};

const result = letterPositions('hel lo');
console.log(result);

assertArraysEqual(result['h'],[0]);
assertArraysEqual(result['e'],[1]);
assertArraysEqual(result['l'],[2,3]);
assertArraysEqual(result['o'],[4]);
