// 14. 상속, 프로토타입(Prototype)
const user = {
  name: 'Mike'
}

user.name  // 'Mike'
user.hasOwnProperty('name')  // true
user.hasOwnProperty('age')   // false

// __proto__ : 프로토타입
// 객체에 해당 메소드나 속성이 없는 경우, 프로토타입에서 찾는다.

const car = {
  wheels: 4,
  drive() {
    console.log('부릉부릉...')
  }
}

const bmw = {
  color: 'red',
  navigation: 1,
};
const benz = {
  color: 'black'
};
const audi = {
  color: 'blue'
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw);  // {color: 'red', navigation: 1}
console.log(bmw.wheels);  // 4
bmw.drive();  // 부릉부릉...

const x5 = {
  color: 'white',
  name: 'x5',
};

x5.__proto__ = bmw;  // 상속은 계속 이어질 수 있음.
x5.name;  // 'x5'
x5.color;  // 'white'

for(p in x5){
  console.log(p);
}
// color
// name
// navigation
// wheels
// drive
// 상속받은 것까지 전부 출력됨.

Object.keys(x5);  // ['color', 'name']
Object.values(x5);  // ['white', 'x5']
// 여기선 안나옴.

// 생성자 함수를 이용한 예시
// const car = {
//   wheels: 4,
//   drive() {
//     console.log('부릉부릉...')
//   }
// }

const Bmw = function (color) {
  this.color = color;
}

// 이렇게 만들어도 되지만, 이렇게 만들면 constructor가 사라짐.
// 그래서 수동으로 constructor를 명시 => JavaScript는 명확한 constructor를 보장하지 않음. constructor가 언제든 개발자에 의해 바뀔 수 있음
Bmw.prototype = {
  constructor: Bmw,
  wheels: 4,
  navigation: 1,
  drive() {
    console.log('부릉부릉...')
  },
}

// 귀찮더라도 이쪽이 나음.
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log('부릉부릉...')
};
Bmw.prototype.navigation = 1;


const x5 = new Bmw('red');
const z4 = new Bmw('blue');

// x5.__proto__ = car;
// z4.__proto__ = car;


// A instanceof B : A 인스턴스가 B 생성자 함수에서 나온 게 맞는지 확인
z4 instanceof Bmw  // true

z4.constructor === Bmw;  // true

// Closure를 이용한 예시.

const Bmw = function (color) {
  this.color = color;
}

const x5 = new Bmw('red');
x5.color = 'black'
console.log(x5.color)  // black
// 누구든 x5.color 에 접근해 변경가능.
// 이를 방지하기 위해 Closure 이용
const Bmw = function (color) {
  const c = color;
  this.getColor = function() {
    return c
  }
}

const x5 = new Bmw('red');
x5.getColor()  // 'red'
// get만 가능해짐