
const tail = require('../tail');
const assertEqual = require('../assertEqual');


let array = [1,2,3,4,5];
const result = tail(array);

console.log(` Tail of 1 Element array : ${tail(['Sriya'])}`);
console.log(` Tail of an Empty Array : ${tail([])}`);
console.log(assertEqual(array.length,5));
console.log(assertEqual(result.length,4));

/* Work around for console.log(assertEqual(["Labs","Lighthouse"], ["Lighthouse", "Labs"]));*/
let r = tail(["Sriya","Lighthouse","Labs"]);
console.log(assertEqual(r.length,2));
console.log(assertEqual(r[0],"Lighthouse"));
console.log(assertEqual(r[1],"Labs"));