
const head = function(array) {
  try{
    if (array === undefined){
      throw new Error('No array is passed');
    }
    if (array.length === 0) {
      throw new Error('Empty Array');
    }    
    return array[0];
  } catch (e) {
    return e.message;
  }
  
};

module.exports = head;