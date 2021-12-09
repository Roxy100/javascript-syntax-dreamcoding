"use strict";

// Array🎉

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍅", "🍌"];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍅
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 🍌 <- 마지막 배열을 찾고 싶을 때,

// 3. Looping over an array - array안의 모든 value값 출력
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
// callback함수방법
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// 화살표함수방법
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy - 추가, 삭제, 복사
// push : add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("🍒", "🍉");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop, push
// 배열앞에 값이 추가되고 삭제되는 과정에서 전체 배열이 움직여야 하기 때문에

// splice : remove an item by index position
fruits.push("🍐", "🍏", "🥭");
console.log(fruits);
// fruits.splice(1);
// console.log(fruits); // 삭제개수를 지정하지 않으면, 지정한 시작지점에서 모든 데이터를 지운다.
fruits.splice(1, 1);
console.log(fruits); // 바나나만 지워짐.
fruits.splice(1, 1, "🍋", "🥝");
console.log(fruits); // 바나나가 지워진 자리에 🍋,🥝추가.

// combine two arrays
const fruits2 = ["🥥", "🍇"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // "🍅", "🍋", "🥝", "🍏", "🍓", "🥥", "🍇"

// 5. Searching - 검색
// find the index
console.log(fruits); // "🍅", "🍋", "🥝", "🍏", "🍓"
// indexOf : 찾는 value값의 첫번째 index위치를 알려준다 만약 값이 없을경우 -1를 반환
console.log(fruits.indexOf("🍅")); // 0
console.log(fruits.indexOf("🥝")); // 2
console.log(fruits.indexOf("🥕")); // -1

// includes : 찾는 value값이 배열안에 있는지 없는지 true와 false로 알려준다
console.log(fruits.includes("🥝")); // true
console.log(fruits.includes("🥕")); // false

// lastIndexOf : 찾는 value값의 마지막 index위치를 알려준다
fruits.push("🍅");
console.log(fruits);
console.log(fruits.indexOf("🍅")); // 0
console.log(fruits.lastIndexOf("🍅")); // 5
