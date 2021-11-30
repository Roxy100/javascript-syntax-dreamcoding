// 1. String concatenation
console.log("my" + " cat"); // my cat
console.log("1" + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3, 3

const postIncrement = counter;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3, 3

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 2, 2

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 2, 1

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // f
console.log(10 <= 6); // f
console.log(10 > 6); // t
console.log(10 >= 6); // t

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) - finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // or: true

// && (and) - finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // and: false

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😂");
  }
  return true;
}

// ! (not)
console.log(!value1); // false

// 7. Equality
const stringFive = "5";
const numberFive = 5;

//  == loose equality, with type conversion
// only 값만 본다!
// 비교하는 자료형이 다를 경우, 숫자형으로 바꾼다.
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion 추천!! (type을 신경써서)
// 값 + type 구별까지 본다!
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// object는 reference형태로 메모리에 저장하게 된다.
const roxy1 = { name: "roxy" };
const roxy2 = { name: "roxy" };
const roxy3 = roxy1;
console.log(roxy1 == roxy2); // false - 각각 다른 reference가 저장되어 있기 때문에
console.log(roxy1 === roxy2); // false - 똑같은 type or not, reference값이 달라서
console.log(roxy1 === roxy3); // true - roxy1 reference의 value를 roxy3으로 할당했기 때문에 -> 똑같은 reference라서

// equality - puzzler
console.log(0 == false); // true -> false의 값이 0
console.log(0 === false); // false -> 0 - typeof: number, false - typeof: boolean
console.log("" == false); // true -> "", false 의 값이 0
console.log("" === false); // false -> "" - typeof: string, false - typeof: boolean
console.log(null == undefined); // true -> null값이 0, undefined값은 NaN (둘다. "값이 없음")
console.log(null === undefined); // false -> null - typeof: object, undefined - typeof: undefined

// 8. Conditional operators: if
// if, else if, else
const name = "roxy";
if (name === "roxy") {
  console.log("Welcome, Roxy!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ? <--간단하게 할 때 사용!
// condition ? value1 : value2;
console.log(name === "roxy" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건문이 맞을 때만 블럭을 실행하고 싶다면,
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--; // while: 3 / while: 2 / while: 1
}

// do while loop, body code is executed first,
// then check the condition
// 블럭을 먼저 실행하고 싶다면,
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0); // do while: 0

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
} // for: 3 / for: 2 / for: 1

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
} // inline variable for: 3 / inline variable for: 1

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
