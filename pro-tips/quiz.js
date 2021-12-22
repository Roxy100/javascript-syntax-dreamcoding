// Remove Duplicates!
// 배열은 중복을 허용하는 구조이다.
const array = ["🐶", "🐱", "🐈", "🐶", "🦮", "🐱"];
console.log(array);

// Set이라는 자료구조는 중복을 허용하지 않는다.
console.log([...new Set(array)]);
