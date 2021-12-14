// Callback Hell => Promise 식으로 바꿔보기
class UserStorage {
  // 사용자를 로그인하는 것.
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "roxy" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  // 사용자 데이터를 받아서 사용자마다 admin or guest의 역할을 가져와서 서버에게 요청해서 다시 받아가지고 올 때.
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "roxy") {
          resolve({ name: "roxy", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  // async 이용해보기
  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}

// 코딩 시작!
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role!`))
  .catch(console.log);

// async 이용해보기
userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then(console.log);
