// JSON
// JavaScript Object Notation
// 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포맷
// - 텍스트를 기반으로 해 가볍다
// - 사람눈으로 읽기 편하다
// - [key : value]로 이루어져 있다.
// - 네트워크 연결 간 데이터의 직렬화 및 전송에 쓰인다
// - 프로그램언어와 플랫폼에 상관없이 쓸 수 있다.

// 1. Object -> JSON
// stringify(obj)
// - 적용할 수 있는 자료형은 객체, 배열, 문자형, 숫자형, true & false, null
// - 호출시 무시되는 property는 함수 property, Symbol형 property, 값이 undefined인 property (❌)
// replacer로 원하는 property만 직렬화할 수 있다.
// let json = JSON.stringify(value, [replacer, space])
// 예시 1. Boolean
let json = JSON.stringify(true);
console.log(json); // true

// 예시 2. 배열
json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple", "banana"]
// JSON의 규격사항때문에 더블쿼트로 자동변경된다

// 예시 3. Object 객체
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

// 방법 (1)
json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"White","size":null,"birthDate":"2021-05-06T16:03.25.582Z"}
// <설명>
// Date라는 Object가 string으로 변환되어서 JSON으로 만들어진다
// 함수는 object에 있는 데이터가 아니기 때문에 jump라는 함수는 JSON에 포함되지않는다
// symbol같은 Javascript에만 있는 특별한 데이터도 JSON에 포함되지 않는다

// 방법 (2) 내가 원하는 property만 골라서 정의를 하고 싶을 때
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json); // {"name":"tori","color":"White","size":null}
// 내가 원하는 property만 골라서 정의를 하면 해당하는 property JSON으로 변환된다

// 방법 (3) 세밀하게 통제하고 싶을 때 callback함수를 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`); // (1)
  return key === "name" ? "roxy" : value; // 이름을 변경할 수 있다
});
// (1)의 <결과>
// key: , value: [Object Object]
// ㄴ> 제일처음으로 전달되는 것은 rabbit object를 싸고 있는 제일 최상의 것이 전달
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-12-10T06:58.02.731Z
// key: jump, value: () => { console.log(`${this.name} can jump!`); }

console.log(json);
// {"name":"roxy","color":"White","size":null,"birthDate":"2021-12-10T06:58.40.941Z"}

// 2. JSON -> Object
//  parse(json)
// 원래 json형태로는,
json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"White","size":null, "birthDate": "2021-12-10T07:06:01.855Z"}

// object로 변환한다면,
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-12-10T07:11:04.128Z
// key: , value: [Object Object]
console.log(obj); // {name: 'tori', color: 'white', size: null, birthDate: Fri Dec 10 2021 16:12:08 GMT+0900 (한국 표준시)}

rabbit.jump(); // can jump!

// obj.jump(); // Error
// jump는 JSON으로 변환하면서 포함되지 않았기 때문에
// JSON으로부터 object를 만든것에는 함수가 포함되어있지 않아 오류가 발생된다

console.log(rabbit.birthDate.getDate()); // 10
console.log(obj.birthDate.getDate()); // 10
// JSON으로 변환하면서 Date가 string으로 변환되었기 때문에 그냥 출력하게 되면 오류가 발생된다
// 그러므로 callback함수를 이용해서 Date라는 Object를 다시 정의해준다
