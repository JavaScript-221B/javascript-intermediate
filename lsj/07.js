// 07. 배열 메소드1(Array methods)

// arr.splice(n, m) : 특정 요소 지움, n부터 m개, 지운 요소 반환

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);  // [2, 3]
console.log(arr);  // [1, 4, 5]

// arr.splice(n, m, x) : 특정 요소 지우고 추가

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200);
console.log(arr)  // [1, 100, 200, 5]

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 100);  // 두번째 인자 0이면 그냥 추가
console.log(arr)  // [1, 100, 2, 3, 4, 5]

// arr.slice(n, m) : n부터 m 까지 반환
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 4);  // [2, 3, 4]

let arr2 = arr.slice();  // 괄호에 아무것도 안넣으면 전체 복사
console.log(arr2);  // [1, 2, 3, 4, 5]

// arr.concat(arr2, arr3, ...) : 합쳐서 새배열 반환
let arr = [1, 2];
arr.concat([3, 4]);  // [1, 2, 3, 4]
arr.concat([3, 4], 5, 6)  // [1, 2, 3, 4, 5, 6]

// arr.forEach(fn) : 배열 반복하며 fn 함수 실행
let users = ['Mike', 'Tom', 'Jane']
users.forEach((item, index, arr) => {
  console.log(item, index)   // Mike 0
                             // Tom 1
                             // Jane 2
})

// arr.indexOf / arr.lastIndexOf : 해당 요소 인덱스 반환
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3);  // 2
arr.indexOf(3, 3);  // 7 , 두번째 인자는 시작 위치
arr.lastIndexOf(3);  // 7, 뒤에서부터 찾기 시작


// arr.includes() : 요소 포함 여부 확인
let arr = [1, 2, 3];
arr.includes(2);  // true
arr.includes(8);  // false

// arr.find(fn) / arr.findIndex(fn) : 함수 실행 결과가 true에 해당하는 첫번째 요소/인덱스 반환, 없으면 undefined 반환
let arr = [1, 2, 3, 4, 5];
const result = arr.find((item) => item % 2 === 0)
const result2 = arr.findIndex((item) => item % 2 === 0)
console.log(result, result2)  // 2 1

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Jane', age: 27 },
  { name: 'Tom', age: 10 },
];

const result = userList.find((user) => user.age < 19)
console.log(result)  // {name: 'Tom', age: 10}

const result = userList.findIndex((user) => user.age < 19)
console.log(result)  // 2


// arr.filter(fn) : 함수 실행 결과가 true에 해당하는 모든 요소 배열로 반환

let arr = [1, 2, 3, 4, 5];
const result = arr.filter((item) => item % 2 === 0)
console.log(result)  // [2, 4]


// arr.reverse() : 배열 역순, 호출한 배열을 반전하고, 원본 배열을 변형, 참조를 반환
let arr = [4, 1, 3]
const result = arr.reverse()
console.log(result)  // [3, 1, 4]
console.log(arr)     // [3, 1, 4]


// arr.map(fn) : 요소마다 함수 실행하고 실행 결과를 배열에 담아 반환

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Jane', age: 27 },
  { name: 'Tom', age: 10 },
];

const newUserList = userList.map((user, index) => {
  Object.assign({}, user, { 
    id: index + 1,
    isAdult: user.age > 19,
  })
})
console.log(newUserList);  
// [
//   {name: 'Mike', age: 30, isAdult: true},
//   {name: 'Jane', age: 27, isAdult: true},
//   {name: 'Tom', age: 10, isAdult: false}
// ]


// join : 배열을 문자열로 합침.
let arr = ['안녕', '나는', '성재야'];
let result = arr.join('');  // 인자가 구분자. default는 ,
console.log(result);  // 안녕나는성재야

// split : 구분자를 기준으로 문자열을 나눠 배열로.
let users = 'Mike,Jane,Tom,Tony';
const result = users.split(',');
console.log(result)  // ['Mike', 'Jane', 'Tom', 'Tony']

// Array.isArray(), 배열의 typeof는 Object임.
let userList = ['Mike', 'Tom', 'Jane']
console.log(typeof userList)  // object
console.log(Array.isArray(userList))  // true

