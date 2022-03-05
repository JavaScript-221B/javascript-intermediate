// 15. 클래스(Class)
// ES6에 추가됨

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {  // 클래스 내 정의된 함수는 prototype에 저장됨.
    console.log(this.name);
  }
}

const tom = new User('Tom', 19);  // 기존 생성자 함수와 사용법이 동일. constructor가 class로 명시
console.log(tom)  // {name: 'Tom', age: 19}
tom.showName();  // Tom

const tom = User('Tom', 19);  // TypeError, new 없이 실행할 수 없음.

for(const p in tom) {
  console.log(p)
;}
// name
// age
// 클래스의 메서드는 for in문에서 제외


// 상속 extends
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log('부릉...');
  }
  stop() {
    console.log('Stop');
  }
}

class Bmw extends Car {
  park() {
    console.log('Park');
  }
  stop() {  // 메소드 오버라이딩
    super.stop();
    console.log('끼익')
  }
}

const z4 = new Bmw('blue');
console.log(z4);  // Bmw {color: 'blue', wheels: 4}

z4.stop();
// Stop
// 끼익


// 오버라이딩
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log('부릉...');
  }
  stop() {
    console.log('Stop');
  }
}

class Bmw extends Car {
  constructor(color) {  // 부모 constructor 인자를 사용해야함.
    super(color);  // 없으면 ReferenceError, 부모 consturtor를 먼저 실행해야함.
              // 상속 받으면 this에 빈 객체 할당하는 걸 건너뜀.
    this.navigation = 1;
  }
  park() {
    console.log('Park');
  }
}

const z4 = new Bmw('blue')  
console.log(z4)  // Bmw {color: 'blue', wheels: 4, navigation: 1}

class Bmw extends Car {
  // 명시적인 constructor가 없는 경우, 내부적으로 아래와 같이 동작.
  constructor(...args) {
    super(...args);
  }
  park() {
    console.log('Park');
  }
}