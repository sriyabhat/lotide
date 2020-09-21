const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(assertEqual(head([1,2,3,4,5,6]),2));
console.log(assertEqual(head([1,2,3,4,5,6]),1));
console.log(assertEqual(head(['Pizza','Donut','Burger','Cake']),'Cake'));
console.log(assertEqual(head(['Pizza','Donut','Burger','Cake']),'Pizza'));
console.log(assertEqual(head([]),'Pizza'));
console.log(assertEqual(head(['Cake']),'Pizza'));