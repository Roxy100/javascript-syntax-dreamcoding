"use strict";

// Arrayπ

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // π
console.log(fruits[1]); // π
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // π <- λ§μ§λ§ λ°°μ΄μ μ°Ύκ³  μΆμ λ,

// 3. Looping over an array - arrayμμ λͺ¨λ  valueκ° μΆλ ₯
// print all fruits!!!

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. forEach
// callbackν¨μλ°©λ²
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// νμ΄νν¨μλ°©λ²
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy - μΆκ°, μ­μ , λ³΅μ¬
// push : add an item to the end
fruits.push("π", "π");
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop, push
// λ°°μ΄μμ κ°μ΄ μΆκ°λκ³  μ­μ λλ κ³Όμ μμ μ μ²΄ λ°°μ΄μ΄ μμ§μ¬μΌ νκΈ° λλ¬Έμ

// splice : remove an item by index position
fruits.push("π", "π", "π₯­");
console.log(fruits);
// fruits.splice(1);
// console.log(fruits); // μ­μ κ°μλ₯Ό μ§μ νμ§ μμΌλ©΄, μ§μ ν μμμ§μ μμ λͺ¨λ  λ°μ΄ν°λ₯Ό μ§μ΄λ€.
fruits.splice(1, 1);
console.log(fruits); // λ°λλλ§ μ§μμ§.
fruits.splice(1, 1, "π", "π₯");
console.log(fruits); // λ°λλκ° μ§μμ§ μλ¦¬μ π,π₯μΆκ°.

// combine two arrays
const fruits2 = ["π₯₯", "π"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // "π", "π", "π₯", "π", "π", "π₯₯", "π"

// 5. Searching - κ²μ
// find the index
console.log(fruits); // "π", "π", "π₯", "π", "π"
// indexOf : μ°Ύλ valueκ°μ μ²«λ²μ§Έ indexμμΉλ₯Ό μλ €μ€λ€ λ§μ½ κ°μ΄ μμκ²½μ° -1λ₯Ό λ°ν
console.log(fruits.indexOf("π")); // 0
console.log(fruits.indexOf("π₯")); // 2
console.log(fruits.indexOf("π₯")); // -1

// includes : μ°Ύλ valueκ°μ΄ λ°°μ΄μμ μλμ§ μλμ§ trueμ falseλ‘ μλ €μ€λ€
console.log(fruits.includes("π₯")); // true
console.log(fruits.includes("π₯")); // false

// lastIndexOf : μ°Ύλ valueκ°μ λ§μ§λ§ indexμμΉλ₯Ό μλ €μ€λ€
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π")); // 0
console.log(fruits.lastIndexOf("π")); // 5
