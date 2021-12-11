"use strict";

// JavaScript is synchronous. 동기적이다.
// Execute the code block in order after hoisting. 호이스팅이 된 이후부터 코드가 나타나는 순서대로 실행된다.
// hoisting: var, function declaration (어느 곳에서나 선언가능)

// 동기 실행법
// console.log("1");
// console.log("2");
// console.log("3"); => 1, 2, 3

// 비동기 실행법
console.log("1"); // 동기 (1) 1 출력
setTimeout(() => console.log("2"), 1000); // 비동기 (1) 1초 뒤에 실행하는 2 출력
console.log("3"); // 동기 (2) 3 출력
// 13번째 줄 ~ 15번째 줄까지 실행했을 때 결과 : 1, 3, 2

// setTimeout은 웹API이기 때문에 브라우저에게 요청하게 됨. Callback => '나중에 다시 불러줘'라는 뜻으로 콜백함수라고 쓰인다.

// Synchronous callback : 즉각적으로, 동기적인 콜백함수
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); // 동기 (3) hello 출력
// 13번째 줄 ~ 23번째 줄까지 실행했을 때 결과 : 1, 3, hello, 2

// Asynchronous callback : 나중에, 예측할 수가 없는, 비동기적 콜백함수
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 비동기 (2) 2초 뒤에 실행하는 async callback 출력
// 13번째 줄 ~ 30번째 줄까지 실행했을 때 결과 : 1, 3, hello, 2, async callback

// Callback Hell example 콜백 지옥 예제
class UserStorage {
  // 사용자를 로그인하는 것.
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "roxy" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  // 사용자 데이터를 받아서 사용자마다 admin or guest의 역할을 가져와서 서버에게 요청해서 다시 받아가지고 올 때.
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "roxy") {
        onSuccess({ name: "roxy", role: "admin" });
      } else {
        onError(new Error("not access"));
      }
    }, 1000);
  }
}

// 코딩 시작!
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
