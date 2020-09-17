const assertEqual = function(actual,expected) {
  let returnString = "";
  if (actual === expected) {
    returnString = ` 😍 Assertion Passed: ${actual}  === ${expected}`;
  } else {
    returnString = ` ☹ Assertion Failed: ${actual} !== ${expected}`;
  }
  return returnString;
};

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  
  for (let names of firstNames) {
    if (itemsToCount[names]) {
      if (!result[names]) {
        result[names] = 1;
      } else {
        result[names] = Number(result[names]) + 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
console.log(assertEqual(result1["Karl"], undefined));