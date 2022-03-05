// 10. 나머지 매개변수, 전개 구문(Rest parameters, Spread syntax)

function showName(name) {
  console.log(name);
}

showName('Mike');  // Mike
showName('Mike', 'Tom')  // Mike

// JavaScript 함수에 인수 개수 제한이 없음
// 함수의 인수를 얻는 방법, 1. arguments, 2. 나머지 매개변수
// 화살표 함수에는 arguments가 없음.

// arguments
// * 함수에 넘어온 모든 인수에 접근 가능
// * 함수 내에서 이용 가능한 지역 변수
// * length / index
// * Array 형태의 객체
// 배열의 내장 메서드 없음(forEach, map 등)

function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName('Mike', 'Tom');
// 2
// Mike
// Tom


// 나머지 매개변수(Rest parameters)  사용 권장
// 정해지지 않은 개수의 인수를 배열로 나타낼 수 있게 함.
// 나머지 매개변수는 항상 맨 뒤에 위치해야함.
function showName(...names) {
  console.log(names);
}

showName();  // []
showName('Mike');  // ['Mike']
showName('Mike', 'Tom');  // ['Mike', 'Tom']

function add(...numbers) {
  let result = 0
  numbers.forEach(num => result += num)
  console.log(result);
}

add(1, 2, 3);  // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  // 55


function User(name, age, ...skills){
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 25, 'English');

console.log(user1);  // {name: 'Mike', age: 30, skills: ['html', 'css']}
console.log(user2);  // {name: 'Tom', age: 20, skills: ['JS', 'React']}
console.log(user3);  // {name: 'Jane', age: 25, skills: ['English']}


// 전개 구문(Spread syntax): 배열

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];

console.log(result);  // [1, 2, 3, 4, 5, 6]

// 전개 구문(Spread syntax): 객체

let user = {name: 'Mike'};
let mike = {...user, age: 30};
console.log(mike);  // {name: 'Mike', age: 30}


// 전개 구문(Spread syntax): 복제

let arr = [1, 2, 3];
let arr2 = [...arr];  // [1, 2, 3]

let user = {name: 'Mike', age: 30};
let user2 ={...user}
user2.name = 'Tom'

console.log(user.name);  // Mike
console.log(user2.name);  // Tom
