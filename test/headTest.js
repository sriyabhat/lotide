const head = require('../head');


const assert = require('chai').assert;

describe("Test Head of an Array", () => {
  it("returns 1 for [1,2,3,4,5,6]",() => {
    let array = [1,2,3,4,5,6];
    assert.strictEqual(head(array),1);
  });

  it("returns '5' for ['5']",() => {
    let array = ["5"];
    assert.strictEqual(head(array),'5');
  });

  it("returns 'No array is passed' when not passing any element to head",() => {    
    assert.strictEqual(head(),'No array is passed');
  });

  it("returns 'Empty Array' for [] ",() => {    
    let array = [];
    assert.strictEqual(head(array),'Empty Array');
  });

});



