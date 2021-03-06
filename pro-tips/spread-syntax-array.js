// Spread Syntax - Array
let fruits = ["π", "π", "π"];

// fruits.push('π');
fruits = [...fruits, "π"];
console.log(fruits);

// fruits.unshift('π');
fruits = ["π", ...fruits];
console.log(fruits);

const fruits2 = ["π", "π", "π"];

// λ°©λ² 1. concatμ¬μ©.
let combined = fruits.concat(fruits2);
// λ°©λ² 2.
combined = [...fruits, "π", ...fruits2];
console.log(combined);
