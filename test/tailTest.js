
const tail = require('../tail');
const assert = require('chai').assert;

describe('Test Tail of an Array',() =>{
  it('returns [2,3,4,5] for [1,2,3,4,5]',()=> {
    const array =[1,2,3,4,5];
    assert.deepEqual(tail(array),[2,3,4,5]);
  });
  
  it("returns 'Empty Array' for []",()=> {
    const array =[];
    assert.strictEqual(tail(array),"Empty Array");
  });

  it("returns 'No Array Passed' for when argument not passed to the Tail Function",()=> {
    assert.strictEqual(tail(),"No Array Passed");
  });

  it("returns 'No Tail for a single Element Array' for [8]",()=> {
    const array = [8];
    assert.strictEqual(tail(array),"No Tail for a single Element Array");
  });

});


