const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)); // => false