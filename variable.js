// 1. Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
"use strict";

//  2. Variable syntax, rw(read/write)
// let (added in ES6), Mutable
let globalName = "global name"; // 어느곳에서나 적용이 됨.
{
  let name = "roxy";
  console.log(name); // 적용 (O)
  name = "hello";
  console.log(name); // 적용 (O)
  console.log(globalName); // 적용 (O)
}
console.log(name); // 적용 (X)
console.log(globalName); // 적용 (O)

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// hoisting이란? 어디에서 선언했냐에 상관없이 항상 제일 위로 끌어올려주는 것을 말한다. 면접질문!!!
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only), Immutable
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container : single item들을 여러개로 묶어서 한박스로 관리해줄 수 있는 것
// function, first-class function : 변수에 할당이 되고, 함수에서 파라미터로 인자를 전달하고, return을 할 수 있는 곳.

const count = 17; // integer 정수
const size = 17.1; // decimal number 소수점
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; // template literals (string) using 백팁(`)
console.log(`value: ${helloBob}, type: ${typeof helloBOb}`); // value: hi brendan!, type: string
console.log("value: " + helloBob + "type: " + typeof helloBob); // value: hi brendan!, type: string

// boolean : 참과 거짓
// -false: 0, null, undefined, NaN, ""
// -true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null : 텅텅비어있는 empty값.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined : 선언은 했지만, 값이 지정되어있지 않다.
let x; // (let x= undefined);
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 동일한 String을 작성했어도, 다른 Symbol이 만들어진다.
// 주어지는 String에 상관없이 고유한 식별자를 만들 수 있을 때,
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
// String이 똑같다면, 동일한 Symbol을 만들고 싶을 때, Symbol.for("id")
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
// symbol 뒤에 '.description'을 꼭 붙여야 함.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// object, real-life object, data structure
const roxy = { name: "roxy", age: 20 };
roxy.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
