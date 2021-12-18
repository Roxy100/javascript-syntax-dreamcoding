// 2. construct가 실행이 되는데,
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    // counter가 5가 될 때마다 (숫자가 5배속으로 증가될 때마다) 알고 싶다면,
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`yo! ${num}`);
}

function alertNum(num) {
  alert(`Wow! ${num}`);
}
// 1. class 만들게 되면, 2가지 함수를 이렇게 간단하게 각각 호출할 수 있다.
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
// 결과
// 1
// 2
// 3
// 4
// 5
// yo! 5
// 6
// 7
// 8
// 9
// 10
// yo! 10

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
// 결과
// 6
// 7
// 8
// 9
// 10
