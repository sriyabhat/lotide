const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

