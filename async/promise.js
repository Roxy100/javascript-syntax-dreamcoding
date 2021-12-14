"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 1. State : pending => fulfilled or rejected
// 2. Producer vs Consumer

// 1. Producer : 원하는 기능을 수행해서 해당하는 데이터를 만들어 낸다.
// When new Promise is created, the executor runs automatically.!!!!! promise가 만들어진 순간 그 안에 전달한 executor 함수가 자동적으로 실행된다
// resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달.
// reject : 기능을 수행하다가 중간에 문제가 생기면 호출.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("roxy");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : 원하는 데이터를 소비하는 것.
// .then : 값이 정상적으로 수행되서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 이 값이 value의 파라미터로 전달.
//         값을 바로 전달해도 되고 또 다른 비동기인 promise를 전달해도 된다.
promise
  .then((value) => {
    console.log(value);
  }) // 앞에 resolve만 전달했을 때, roxy
  // .catch : 에러가 발행했을 때 처리 할 값.
  .catch((error) => {
    console.log(error);
  }) // 앞에 reject만 전달했을 때, Error 메시지호출 Error : no network at promise.js
  // .finally : 성공하든 실패하든 상관없이 무조건 마지막에 호출.
  .finally(() => {
    console.log("finally");
  }); // finally

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 결과 : 5

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`), 1000));
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// resolve만 호출될 경우, 🐔 => 🥚 => 🍳
getHen() // 한가지만 받아서 호출하는 경우에는 생략기 가능하다.
  .then((hen) => getEgg(hen)) // .then(getEgg) 로 생략 가능
  .then((egg) => cook(egg)) // .then(cook) 로 생략 가능
  .then((meal) => console.log(meal)); // .then(console.log) 로 생략 가능

// 만약, 중간에 reject를 이용해서 error날 경우,
// 계란을 받아오는 데 실패한다면, 그 다음 바로 catch를 이용해 대신 빵을 전달해준다. 🌭 => 🍳
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🌭";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
