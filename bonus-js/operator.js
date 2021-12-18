// false : 0, -0, "", NaN, null, undefined
// true : -1, "hello", "false", []

let num = 8; // undefined
if (num) {
  console.log(num); // 8
}
num && console.log(num); // 8

let obj = {
  name: "roxy",
};
if (obj) {
  console.log(obj.name); // roxy
}
obj && console.log(obj.name); // roxy

// 이처럼, && 연산자를 이용하면 간단하게 if문을 쓸수 있다. !!!!
