// 03. 객체 메소드(Object methods), 계산된 프로퍼티(Computed property)


// 계산된 프로퍼티
let a = 'age';

const user = {
  name: 'Mike',
  [a] : 30,  // age: 30 과 같음
}

const user = {
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "Hello"
}

console.log(user) // {5: 5, 안녕하세요: "Hello"}

// 객체 메서드
// Object.assign() : 객체 복제

const user = {
  name: 'Mike',
  age: 30
}

const cloneUser = user;  // 복제 아님 X, 참조임 O
const newUser = Object.assign({}, user);  // {} + { name: 'Mike', age: 30 } 으로 복제

// 새로운 키
Object.assign({ gender: 'male' }, user)  // { gender: 'male', name: 'Mike', age: 30 }

// 기존 키는 덮어씀
Object.assign({ name: 'Tom' }, user)  // { name: 'Tom', age: 30 }

// 이것도 가능
Object.assign({ name: 'Mike' }, { age: 30 }, { gender: 'male' })


// Object.keys() : 키 배열 반환

const user = {
  name: 'Mike',
  age: 30,
  gender: 'male'
}
Object.keys(user)  // ['name', 'age', 'gender']


// Object.values() : 값 배열 반환

const user = {
  name: 'Mike',
  age: 30,
  gender: 'male'
}
Object.values(user)  // ['Mike', 30, 'male']


// Object.entries() : 키/값 배열 반환

const user = {
  name: 'Mike',
  age: 30,
  gender: 'male'
}
Object.entries(user)
// [
//   ['name', 'Mike'],
//   ['age', 30],
//   ['gender', 'male']
// ]


// Object.fromEntries() : 키/값 배열을 객체로
const arr = 
  [
    ['name', 'Mike'],
    ['age', 30],
    ['gender', 'male']
  ]
Object.fromEntries(arr)  // {name: 'Mike', age: 30, gender: 'male'}


// 어떤 게 키로 들어올지 모를 때 유용.
function makeObj(key, value) {
  return {
    [key]: value
  }
}

const obj = makeObj('나이', 30)

console.log(obj)  // {나이: 30}
