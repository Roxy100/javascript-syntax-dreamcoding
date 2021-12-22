// Promise -> Async/await

// async/await가 나오기 이전에는 then 콜백 안에 콜백을 넣지 않고 이렇게 콜백 밖에 then을 이어주는 것이 Promise의 정석이었습니다.

// 사실 Promise가 나오기 이전에는 then 메소드로 따로 빼지 않고 비동기 함수에서 콜백함수를 바로 인자로 받았는데요,
// 당시에는 연속되는 비동기 작업의 콜백함수도 그 콜백함수 안에 넣어서 함수가 깊어져 (시각적으로는 들여쓰기가 무한히 들어가) 가독성이 떨어지는 콜백 지옥에서 벗어나기 위해 연속된 콜백을 따로 빼는 Promise가 나온 것이지요.
// 따라서 Bad Code 예시처럼, then then then 들어가는 것은 금물입니다.

// ❌ Bad Code 💩
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// async/await을 사용하기 어려울 때 Promise를 깔끔하게 쓰고 싶다면
// 새로운 promise를 이전 promise의 then 콜백 함수(then의 인자로 들어가는 함수; Promise 작업이 완료되면 실행됨)에서 리턴해주고
// 이전 promise에서 then을 이어서 해당 콜백에서 새 promise 작업이 완료될 때 실행할 작업을 작성해 주면 됩니다.
function displayUser() {
  let user;
  fetchUser()
    .then((usr) => {
      user = usr;
      return fetchProfile(usr);
    })
    .then((profile) => updateUI(user, profile)); // profile 안에 user값이 포함되어 있다면 let으로 변수를 별도로 등록하는 대신 그것을 씁시다
}

// ✅ Good Code ✨
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
