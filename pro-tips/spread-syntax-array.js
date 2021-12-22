// Spread Syntax - Array
let fruits = ["🍉", "🍊", "🍌"];

// fruits.push('🍓');
fruits = [...fruits, "🍓"];
console.log(fruits);

// fruits.unshift('🍇');
fruits = ["🍇", ...fruits];
console.log(fruits);

const fruits2 = ["🍈", "🍑", "🍍"];

// 방법 1. concat사용.
let combined = fruits.concat(fruits2);
// 방법 2.
combined = [...fruits, "🍒", ...fruits2];
console.log(combined);
