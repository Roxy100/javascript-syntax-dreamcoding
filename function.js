// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

// 파라미터로 유용하게 쓰여지는 함수를 만들 경우,
function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const roxy = { name: "roxy" };
changeName(roxy);
console.log(roxy); // { name : "coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi"); // Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // 방법1. 일반 for문
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  //  방법2. for of 문
  for (const arg of args) {
    console.log(arg);
  }
  //  방법3. forEach문
  args.forEach((arg) => console.log(arg));
}
printAll("roxy", "is", "life");
// roxy
// is
// life

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다!!
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable //hello
  console.log(globalMessage);
  function printAnother() {
    console.log(message); // hello
    let childMessage = "hello";
  }
  // console.log(childMessage); // error <- 자식안(printAnother함수)의 정의된 childMessage는 부모상위에서 보려고 한다면, 에러남.
  // return undefined; 생략가능
}
printMessage();
// hello
// global

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`); // sum: 3

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; //조건이 맞지 않을 경우, return한다.
  }
  // long upgrade logic... // 조건이 맞을 경우, logic을 작성한다.
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable 변수에 할당이 되고,
// can be passed as an argument to other functions. 함수에 파라미터로 전달되며,
// can be returned by another function 리턴값으로 리턴된다.

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) 어느곳에서나 할당 가능.
// a function expression is created when the execution reaches it. 할당된 다음에 호출이 가능.
const print = function () {
  // anonymous function
  console.log("print");
};
print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions 재귀함수
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo); // no!
randomQuiz("love you", printYes, printNo); // yes!

// Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint!");

// 주석으로 처리한 function expression식
// const simplePrint = function () {
//   console.log("simplePrint!");
// };

// 간단한 한 줄로 완성가능!
const add = (a, b) => a + b;
// 여러 일이 필요한 block이 필요하다면, 이 방식으로 쓸 것! (단,return이 필요!)
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// 즉시실행함수표현: Immediately Invoked Function Expression
(function hello() {
  console.log("Immediately Invoked Function Expression");
})(); // Immediately Invoked Function Expression

// Fun Quiz Time❤
// function calculate(command,a,b)
// command: add, subtract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 2, 3));
