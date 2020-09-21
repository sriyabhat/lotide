const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  try {
    if(array === undefined) {
      throw new Error('No Array Passed');
    }
    if(array.length === 0) {
      throw new Error('Empty Array');
    }
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

  } catch(e) {
    return e.message;
  }

  
};

module.exports = middle;

