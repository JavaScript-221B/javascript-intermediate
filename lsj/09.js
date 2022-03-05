// 09. 구조 분해 할당 (Destructuring assignment)
// Destructuring assignment
// 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식


// 배열 구조 분해
let [x, y] = [1, 2];
console.log(x);  // 1
console.log(y);  // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

// 배열 구조 분해: 기본값
let [a, b, c] = [1, 2];
console.log(c);  // undefined

let [a=3, b=4, c=5] = [1, 2];
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 5

// 배열 구조 분해: 일부 반환값 무시
let [user1, ,user2] = ['A', 'B', 'C', 'D'];
console.log(user1);  // 'A'
console.log(user2);  // 'C'

// 배열 구조 분해: 바꿔치기
let a = 1;
let b = 2;
[a, b] = [b, a];


// 객체 구조 분해

let user = {name: 'Mike', age: 30};
let {name, age} = user;

console.log(name);  // 'Mike'
console.log(age);   // 30

let {age, name} = user;  // 키 값 따라가므로 순서 상관 x

console.log(name);  // 'Mike'
console.log(age);   // 30

// 객체 구조 분해: 새로운 변수 이름으로 할당
let user = {name: 'Mike', age: 30};
let {name: userName, age: userAge} = user;
console.log(userName);  // 'Mike'
console.log(userAge);   // 30


// 객체 구조 분해: 기본값
let user = {name: 'Mike', age: 30};
let {name, age, gender} = user;
console.log(gender);  // undefined

let {name='John', age='20', gender='male'} = user;
console.log(name);  // 'Mike'
console.log(age);   // 30
console.log(gender);  // 'male'


