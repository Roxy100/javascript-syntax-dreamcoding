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

  // π©
  const roxy2 = {
    name: name,
    age: age,
  };
  // β¨
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

  // π©
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level); // Anna 1
  }
  // β¨
  {
    const { name, level } = student;
    console.log(name, level); // Anna 1

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel); // Anna 1
  }

  // <Array>
  const animals = ["πΆ", "π¨"];

  // π©
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second); // πΆ π¨
  }
  // β¨
  {
    const [first, second] = animals;
    console.log(first, second); // πΆ π¨
  }
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
// object μμ λ€μ΄μλ μμ΄λ€μ νλμ© λ³΅μ¬νλ κ²μ΄ μλλΌ
// objectκ° κ°λ¦¬ν€κ³  μλ μ£Όμμ μ°Έμ‘°κ°λ§ λ³΅μ¬νκΈ° λλ¬Έμ,
// μλμ objectλ₯Ό λ³κ²½νκ² λλ©΄, (ex. obj1.key = 'newKey')
// μ λΆ λ€ μν₯μ΄ κ° μ μλ λ¬Έμ κ° μκΈ°λ κ²μ μ μν΄μΌ νλ€!
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // For array copy λ°°μ΄ λ³΅μ¬
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  // For object copy μ€λΈμ νΈ λ³΅μ¬
  const obj3 = { ...obj1 };
  console.log(obj3); // {key: 'newKey'}

  // array concatenation λ°°μ΄ μ°μ
  const fruits1 = ["π", "π"];
  const fruits2 = ["π", "π₯"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits); // (4)Β ['π', 'π', 'π', 'π₯']

  // object merge μ€λΈμ νΈ ν©μΉκΈ°
  const dog1 = { dog1: "πβπ¦Ί" };
  const dog2 = { dog2: "πΆ" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog); // {dog1: 'πβπ¦Ί', dog2: 'πΆ'}
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // π©
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
  // β¨ (μ΄κΈ°κ° μ§μ νκΈ°)
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello"); // helloμ²λΌ μΈμκ° μ λ¬λ  λ, λ°λ‘ μΈμμ κ°μ,
    printMessage(); // μΈμκ° μ λ¬λμ§ μμ λ, κΈ°λ³Έμ μΌλ‘ μ€μ λ μ΄κΈ°κ°μ.
  }
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;

  // π©
  {
    let component;
    if (isCat) {
      component = "πΊ";
    } else {
      component = "πΆ";
    }
    console.log(component); // πΊ
  }
  // β¨
  {
    const component = isCat ? "πΊ" : "πΆ";
    console.log(component); // πΊ
    console.log(isCat ? "πΊ" : "πΆ"); // πΊ
  }
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = "β";
  const temparature = "16Β°C";

  // π©
  console.log(
    "Today weather is " + weather + " and temparature is " + temparature + "."
  ); // Today weather is β and temparature is 16Β°C.
  // β¨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
} // Today weather is β and temparature is 16Β°C.
