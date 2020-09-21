
const middle = require('../middle');
const assert = require('chai').assert;

describe('Test middle of an Array',() =>{
  it('returns [3] for [1,2,3,4,5]',()=> {
    const array =[1,2,3,4,5];
    assert.deepEqual(middle(array),[3]);
  });

  it('returns [3,4] for [1,2,3,4,5,6]',()=> {
    const array =[1,2,3,4,5,6];
    assert.deepEqual(middle(array),[3,4]);
  });

  it('returns [] for [1]',()=> {
    const array =[1];
    assert.deepEqual(middle(array),[]);
  });

  it('returns [] for [1,2]',()=> {
    const array =[1,2];
    assert.deepEqual(middle(array),[]);
  });
  
  it("returns 'Empty Array' for []",()=> {
    const array =[];
    assert.strictEqual(middle(array),"Empty Array");
  });

  it("returns 'No Array Passed' for when argument not passed to the middle Function",()=> {
    assert.strictEqual(middle(),"No Array Passed");
  });
  

});

