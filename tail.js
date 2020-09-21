
const tail = function(list) {
  try{
    if(list === undefined) {
      throw new Error('No Array Passed');
    }
    if(list.length === 0) {
      throw new Error('Empty Array');
    }
    if(list.length === 1) {
      throw new Error('No Tail for a single Element Array');
    }
    let tailArray = list.slice(1);
    return tailArray; 

  } catch (e) {
    return e.message;
  }
  
};

module.exports = tail;


