// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "roxy";
}

const user = fetchUser();
user.then(console.log); // roxy
console.log(user); // > Promise {<fulfilled>: 'roxy'}

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍅"; // 1. (2)
}

// function getBanana() {
//  return delay(3000).then(() => "🍌");
// }
async function getBanana() {
  await delay(1000);
  return "🍌"; // 2. (2)
}

// await 사용 ❌
// function pickFruits() {
//  return getApple().then((apple) => {
//    return getBanana().then((banana) => `${apple} + ${banana}`);
//  });
// }

// await 사용 ⭕
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
// 결과적으로, apple과 banana는 1초씩 연달아 발생되기 되는 문제가 생긴다. 총 2초가 걸린다...

// await 효율적 사용 ⭕
// 서로 연관이 되어 있지 않은 데이터의 경우, 서로를 기다릴 필요가 없기 때문에, 병렬처리를 해줘야 효율적!!!
// applePromise와 bananaPromise를 만들면, promise가 실행된다.
async function pickFruits() {
  const applePromise = getApple(); // 1. (1)
  const bananaPromise = getBanana(); // 2. (1)
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log); // 🍅 + 🍌

// 3. Useful Promise APIs
// all : 병렬적으로 값을 전달. ✔
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log); // 🍅 + 🍌

// race : 배열에 전달된 promise중에서 가장 먼저 값을 return하는 값만 전달.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // 🍅
