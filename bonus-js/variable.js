// 변수를 만들 때는, let 키워드 사용

// primitive 타입 : number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number); // 2
console.log(number2); // 2

number2 = 3;
console.log(number2); // 3

// object : 위에 primitive 타입들을 제외한 모두 해당함.(배열, 리스트, 함수)
let obj = {
  name: "roxy",
  age: 20,
};
console.log(obj.name); // roxy

let obj2 = obj;
console.log(obj2.name); // roxy

console.log("--------------------");

obj.name = "james";
console.log(obj.name); // james
console.log(obj2.name); // james

console.log("----------------------------------");

// let a = 5;
// a = 4; <- let 키워드 이용하면 변경 가능 ⭕

// const b = 4;
// b = 3; <- const 키워드 이용하면 변경 불가능 ❌

const obj3 = {
  name: "ellie",
  age: 5,
};
obj.name = "james"; // object 안의 내용 변경 가능 ⭕

// obj3 = {
//    name : 'james'
//    age : 6
//} <- object 자체를 복사할 수 없어서 변경 불가능 ❌
