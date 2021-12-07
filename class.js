"use strict";
// Object-oriented programming
// class: template (데이터가 들어있지 않고 틀만 정의 / 연관있는 데이터를 한데 묶어놓는 컨테이너 같은 아이)
// object: instance of a class (class를 이용해서 실제로 데이터를 넣어서 만든 것)
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// this : 생성된 object

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields 속성
    this.name = name;
    this.age = age;
  }
  // methods 행동
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const roxy = new Person("roxy", 25);
console.log(roxy.name);
console.log(roxy.age);
roxy.speak();

// 2. Getter and setters
// 사용자가 class를 잘못사용해도 방어적인 자세로 만들 수 있도록 해준다.
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get 키워드를 이용해서 값을 return한다.
  // getter를 정의하면 메모리에 올라가있는 데이터를 읽어오는 것이 아니라 getter를 호출하게 됨.
  // fields 안에서 ('this.age' getter를 호출함.)
  get age() {
    return this._age;
  }

  // set 키워드를 이용해서 값을 설정 그래서 value를 받아와야 한다.
  // setter를 정의하면 값을 할당할 때 메모리의 값을 업데이트하는 것이 아니라 setter를 호출하게 되고,
  // fields 안에서 ('age;' setter를 호출함.)
  // 이것이 반복되서 call stack이 발생되는 문제가 됨!
  // 이를 방지하기 위해 getter와 setter안에서 쓰여지는 변수이름을 기호(_) 등을 이용함.
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // 0

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class Experiment {
  publicField = 2; // public field : field를 그냥 정의, 외부에서 접근 가능
  #privateField = 0; // private field : #field 라고 정의, class내부에서만 값이 보여지고 변경가능, 외부에서는 접근불가
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
// static 키워드를 사용하면 object와 상관없이 class자체에 연결
// 함수를 호출할 때 class 이름을 이용해서 호출
// 들어오는 데이터에 상관없이 공통적으로 class에서 쓸 때 사용
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
// 공통되어지는 부분을 일일히 작성하지 않아도 extends 키워드를 이용해서 재사용
// 유지보수가 용이
// 필요한 함수만 재정의(overriding) 해서 사용가능
// super를 사용하면 부모함수와 overriding을 같이 사용할 수 있다
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, "red");
triangle.draw(); // drawing red color of // 🔺
console.log(triangle.getArea()); //200
console.log(triangle.toString()); // Triangle: color: red

// 6. Class checking: instanceOf
// {object} instanceof {Class} - object가 Class를 이용해서 만들어낸건지 확인하기
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// 자바스크립트에서 만든 모든 object 클래스들은 자바스크립트에 있는 Object를 상속하는 것이라서 true!
