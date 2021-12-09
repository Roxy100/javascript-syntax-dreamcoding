// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(",");
  console.log(result);
}
// Join : 배열 -> 문자열
// 배열이름.join() : 괄호안에 구분자를 넣어 설정할 수 있다.

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  console.log(result);
}
// Split : 문자열 -> 배열
// 배열이름.split(",") : 괄호안에 구분자를 넣지 않으면 문자열 통채로 배열에 들어가기 때문에, 구분자를 꼭 넣어야 한다!

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}
// Reverse : 배열을 내림차순으로 정렬
// 배열이름.reverse() : 배열자체를 변화시키고, return값도 변화된 배열자체를 return하게 해준다.

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // Splice 이용할 경우, (배열자체 수정)
  // const result = array.splice(0, 2);
  // console.log(result); // [1, 2]
  // console.log(array); // [3, 4, 5] // 원본배열의 값이 변화므로 ❌

  // Slice 이용해야 함. (배열에서 원하는 부분만 return에서 받아오고 싶을 때)
  const result = array.slice(2, 5); // 마지막 index는 배제되어지기 때문에, 4가 아니라 5라고 해야함.
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5] // 원하는 index에서부터 새로운 배열 생성 ⭕
}
// Splice : 배열자체를 수정해준다.
// Slice : 배열에서 원하는 부분만 return해서 받아오고 싶을 때

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
// Find : 배열안의 모든 요소들이 호출되어지며 호출되어지 요소가 true이면 값을 반환하고 종료

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
// Filter : 배열안의 모든 요소들이 호출되어지며 호출되어진 요소가 true인 값을 모아서 새로운 배열을 반환

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}
// Map : 배열안에 들어있는 모든 요소들을 return되어진 값들로 대체되어 새로운 배열을 반환

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // true
}
// Some : 배열의 요소 중 하나라도 조건이 충족되면 true
// Every : 배열의 요소 중 모든조건들이 충족되어야 true

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length); // 73.8
}
// Reduce : map, filter, find 함수로 구현할 수 있는 기능 모두 reduce 하나로 구현 가능.
// 원하는 시작점부터 모든 배열을 loop하면서 어떤 값을 누적할 때 쓰임.
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값)
// prev(누적값) : 이전에 callback함수에서 return된 값이 전달
// curr(현잿값) : 배열의 아이템을 순차적으로 전달
// '0' : 초기값

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 추가 result should be: '80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(",");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
// Sort : 정렬
