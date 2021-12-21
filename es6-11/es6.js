/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */
{
  const roxy1 = {
    name: "Roxy",
    age: 18,
  };

  const name = "Roxy";
  const age = "18";

  // 💩
  const roxy2 = {
    name: name,
    age: age,
  };
  // ✨
  const roxy3 = {
    name,
    age,
  };

  console.log(roxy1, roxy2, roxy3); // {name: 'Roxy', age: 18} {name: 'Roxy', age: '18'} {name: 'Roxy', age: '18'}
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
  // <Object>
  const student = {
    name: "Anna",
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level); // Anna 1
  }
  // ✨
  {
    const { name, level } = student;
    console.log(name, level); // Anna 1

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel); // Anna 1
  }

  // <Array>
  const animals = ["🐶", "🐨"];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second); // 🐶 🐨
  }
  // ✨
  {
    const [first, second] = animals;
    console.log(first, second); // 🐶 🐨
  }
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
// object 안에 들어있는 아이들을 하나씩 복사하는 것이 아니라
// object가 가리키고 있는 주소의 참조값만 복사하기 때문에,
// 원래의 object를 변경하게 되면, (ex. obj1.key = 'newKey')
// 전부 다 영향이 갈 수 있는 문제가 생기는 것을 유의해야 한다!
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // For array copy 배열 복사
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  // For object copy 오브젝트 복사
  const obj3 = { ...obj1 };
  console.log(obj3); // {key: 'newKey'}

  // array concatenation 배열 연쇄
  const fruits1 = ["🍓", "🍅"];
  const fruits2 = ["🍌", "🥝"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits); // (4) ['🍓', '🍅', '🍌', '🥝']

  // object merge 오브젝트 합치기
  const dog1 = { dog1: "🐕‍🦺" };
  const dog2 = { dog2: "🐶" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog); // {dog1: '🐕‍🦺', dog2: '🐶'}
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }

    printMessage("hello"); // hello
    printMessage(); // defalt message
  }
  // ✨ (초기값 지정하기)
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello"); // hello처럼 인자가 전달될 땐, 바로 인자의 값을,
    printMessage(); // 인자가 전달되지 않을 땐, 기본적으로 설정된 초기값을.
  }
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;

  // 💩
  {
    let component;
    if (isCat) {
      component = "😺";
    } else {
      component = "🐶";
    }
    console.log(component); // 😺
  }
  // ✨
  {
    const component = isCat ? "😺" : "🐶";
    console.log(component); // 😺
    console.log(isCat ? "😺" : "🐶"); // 😺
  }
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = "⛅";
  const temparature = "16°C";

  // 💩
  console.log(
    "Today weather is " + weather + " and temparature is " + temparature + "."
  ); // Today weather is ⛅ and temparature is 16°C.
  // ✨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
} // Today weather is ⛅ and temparature is 16°C.
