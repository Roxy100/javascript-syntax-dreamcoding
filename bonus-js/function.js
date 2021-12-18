const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result); // 3

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result2); // 3
// 위처럼 로직을 복잡하게 반복하지 않기 위해 함수사용.
// 함수를 만들게 되면, 로직을 재사용가능하게 만듬.

// 1. 함수선언
// 함수이름은 함수자체를 가리키고 있는 아이다.
// 이름은 함수를 가리키고 있는 주소(ref)를 가지고 있다.
// 인자(parameter)는 함수를 호출하는 사람으로부터 필요한 데이터를 받아오기 위해서
// 필요한 데이터를 받아올 때, 함수내부에서 우리가 이해하기 쉬운 의미있는 이름을 부여해놓는 것.
function add(num1, num2) {
  return num1 + num2;
}

function print(name, age) {
  console.log(`${name} ${age}`); // 8 33
}

function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(2, 3); // = add(2,3) or = divide(2,3)
  console.log(result); // 5 or 0.6666666666
}

// 2. 함수호출
// (1) 기본적인 호출
const sum = add(3, 4);
console.log(sum); // 7

// 함수를 호출하기 위해서 ()를 이용해서 필요한 데이터가 있다면 전달하면 된다.
print(8, 33);

// (2) 함수를 다른 변수에 할당
const doSomething = add;

const result3 = doSomething(2, 3);
console.log(result3); // 5
const result4 = add(2, 3);
console.log(result4); // 5

// (3) 함수를 다른 함수에 인자로 전달
surprise(add);
surprise(divide);
