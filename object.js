// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const roxy = { name: "roxy", age: 4 };
print(roxy); // roxy // 4

// with JavaScript magic (dynamically typed language)
// can add properties later
roxy.hasJob = true;
console.log(roxy.hasJob); // true

// can delete properties later
delete roxy.hasJob;
console.log(roxy.hasJob); // undefined

// 2. Computed properties
// key should be always string type
// 배열에서 데이터를 받아오는 것처럼 괄호와 쿼터([''])를 이용해서 object안의 property에 접근이 가능
// 정확하게 어떤key가 필요한지 모를 때, 실시간으로 원하는 key값을 받아오고 싶을 때 사용
console.log(roxy.name); // roxy  <- 코딩할 때는 그냥 . 을 사용하면 됨.
console.log(roxy["name"]); // roxy

roxy["hasJob"] = true;
console.log(roxy.hasJob); // true

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(roxy, "name"); // roxy
printValue(roxy, "age"); // 4

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("roxy", 25);
console.log(person4);

// Class가 없을 때 사용한 방법 (이전)
// key와 value의 이름이 동일하면 생략가능
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor Function (현재)
// 다른 계산을 하지 않고 순수하게 object를 생성하는 함수는 대문자로 시작
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
} // Person {name: 'roxy', age: 25}

// 5. In operator: property existence check (key in obj)
console.log("name" in roxy); // true
console.log("age" in roxy); // true
console.log("random" in roxy); // false
console.log(roxy.random); // undefined

// 6. For..in vs For..of
// for (key in obj)
// 모든 key들을 받아와서 일을 처리하고 싶을 때
for (key in roxy) {
  console.log(key);
} // name / age / hasJob

// for (value of iterable)
// array의 모든 값들이 value에 할당
// 블럭안에서 순차적으로 값을 출력하거나 계산할 수 있다.
const array = [1, 2, 3, 4, 5, 6];
for (value of array) {
  console.log(value);
} // 1 2 3 4 5 6

// 7. Fun Cloning
const user = { name: "roxy", age: "25" };
const user2 = user; // user와 user2는 같은 reference를 가짐.
// user2.name = "coder";
console.log(user); // {name: 'coder', age: '25'} - 복제 된게 아니기 때문에 name의 값이 coder로 변경되어 출력

// 이전 방법
const user3 = {}; // 텅텅 비어있는 object를 생성
for (key in user) {
  user3[key] = user[key];
  // for 루프를 돌면서 user안에 key에는 1.name, 2.age가 있는데,
  //   1. user3의 새로운 property(name)을 추가할 건데, 값은 기존에 있는 user의 key(roxy)
  //   2. user3의 새로운 property(age)을 추가할 건데, 값은 기존에 있는 user의 key(25)
}
console.log(user3); // {name: 'roxy', age: '25'}

// 새로운 방법
// Object.assign(dest, [obj1, obj2, obj3...])
// const user4 = {};
// Object.assign(user4,user);
const user4 = Object.assign({}, user);
console.log(user4); // {name: 'roxy', age: '25'}

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 2개의 source값
// 앞에 fruit1의 color값이 뒤에 fruit2의 color값으로 덮어지는 역할을 하기 때문에
console.log(mixed.color); // blue
console.log(mixed.size); // big
