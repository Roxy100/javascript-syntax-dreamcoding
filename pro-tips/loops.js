// Looping
const items = [1, 2, 3, 4, 5, 6];

// ❌ Bad Code 💩
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// ✅ Good Code ✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// ✅ Good Code ✨
// 루프를 3번 돌기 때문에 썩 좋은 코드는 아니다.
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);

// ✅ Better Code ✨
// 루프는 최소화시켜서 한번만 돌리는 것이 더 좋다. 꼭 재활용이 필요하지 않는다면 배열 API도 하나만 쓰는 것이 좋다!!!
// 각 원소별로 2의 나머지가 있는지 확인하고 2의 나머지(1)가 있는 홀수는 더하지 않고 기존 합을 그대로 다음 원소로 넘기고 나머지(0)가 없는 짝수는 합에서 원소에 4를 곱한 값을 더하고 넘깁니다.
// 2번째 인자의 0은 초기값으로 첫 원소에서는 합의 값을 0으로 받습니다. 초기값을 설정하지 않으면 첫 원소가 합으로 넘어가서 두번째 원소부터 반복을 돕니다.
// 마지막 원소까지 연산이 끝나면 마지막에 넘긴 값이 반환됩니다.
const result = items.reduce((sum, num) => (num % 2 ? sum : sum + num * 4), 0);
console.log(result);
