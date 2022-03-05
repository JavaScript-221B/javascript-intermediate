// 04. 심볼(Symbol)

// property key : 문자형

const obj = {
  1: '1입니다.',
  false: '거짓',
}

Object.keys(obj)  // ['1', 'false']

// 접근도 문자형
obj['1']  // '1입니다.'
obj['false']  // '거짓'


// Symbol, 유일한 식별자를 만들 때 사용

const a = Symbol();  // new 안 붙임.
const b = Symbol();

console.log(a)  // Symbol()
console.log(b)  // Symbol()
console.log(a == b)  // false


const id = Symbol('id');  // new 안 붙임.
const id2 = Symbol('id');

console.log(id)  // Symbol(id)
console.log(id2)  // Symbol(id)
console.log(id == id2)  // false



// property key : 심볼형

const id = Symbol('id');
const user = {
  name: 'Mike',
  age: 30,
  [id]: 'myid',
}

console.log(user)  // {name: 'Mike', age: 30, Symbol(id): 'myid'}

Objects.keys(user);  // ['name', 'age']
// Objects.values(), Objects.entries() 전부 Symbol로 만든 키는 건너뜀
// for in 도 건너뜀

// 어디다 쓸까? 특정 객체의 원본 데이터를 해치지 않고 속성 추가 가능
// 남의 객체를 쓸 때, 나만의 값을 넣어 사용 가능. 다른 코드에서도 내가 추가한 심볼키는 나타나지 않음.

// Symbol.for() : 전역 심볼
// - 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1 === id2)  // true

Symbol.keyFor(id1)   // 'id', 전역 심볼만 사용 가능.


// description
const id = Symbol('id입니다.');
id.description;  // 'id입니다.'


// 숨겨진 Symbol key 보는 법
const id = Symbol('id');
const user = {
  name: 'Mike',
  age: 30,
  [id]: 'myid',
}
Object.getOwnPropertySymbols(user);  // [Symbol(id)]
Reflect.ownKeys(user);  // ['name', 'age', Symbol(id)], 심볼형을 포함한 모든 키 보여줌.


// 다른 개발자가 만들어 놓은 객체
const user = {
  name: 'Mike',
  age: 30,
};

// 내가 작업
user.showName = function() {};  // 이러면 안됨! for ... in 문에서 함수가 찍힘.

const showName = Symbol('show name');
user[showName] = function() {
  console.log(this.name);
};

user[showName]();  // Mike, 내가 추가한 메서드 동작

// 사용자가 접속하면 보는 메시지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`)
}
