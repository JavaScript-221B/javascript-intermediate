// 18. Generator
// Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

// function*로, 내부에 yield 키워드 사용
// yield에서 함수 실행 멈춤.
// 제너레이터 함수가 실행되면 제너레이터 객체가 반환, 함수 본문은 실행되지 않음.
// 제너레이터는 객체에는 next() 메소드가 있음.
// next() 메소드를 실행해, yield가 나오기 전까지 실행,
// yield 문에서 데이터 객체 반환
// 데이터 객체는 {value: , done: } 두 개의 속성을 가짐.
// value는 yield 키워드 오른쪽에 적은 값, 생략 시 undefined.
// done은 함수가 종료됐는지를 나타냄.

function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return 'finish';
}

const a = fn();
const res1 = a.next();  // 1
console.log(res1);      // {value: 1, done: false}

const res2 = a.next();  // 2
console.log(res2);      // {value: 2, done: false}

const res3 = a.next();  // 3  4
console.log(res3);      // {value: 3, done: false}

const res4 = a.next();
console.log(res4)       // {value: 'finish', done: true}

const res5 = a.next();
console.log(res5)       // {value: undefined, done: true}


// Generator의 next(), return(), throw()
// return() 메소드 호출 시 그 즉시 종료
// throw() 에러 전달 후 종료

// Generator는 Iterable이면서 Iterator
// Iterable
// * Symbol.iterator 메서드가 있음.
// * Symbol.iterator 는 iterator를 반환해야함.
// Iterator
// * next 메서드 가짐
// * next 메서드는 value와 done 속성을 가진 객체를 반환
// * 작업이 끝나면 done은 true가 됨.

// 짜잔, 사실 배열에도 Symbol.iterator가 있었음.
arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();   // => arr의 Prototype에 있는 Symbol.iterator를 실행한다는 의미
console.log(it)  // Array Iterator {}
it.next()  // {value: 1, done: false}


function* fn() {
  yield 4;
  yield 5;
  yield 6;
}

const a = fn();
a[Symbol.iterator]() === a;  // true
// 즉, a는 iterable인데, a[Symbol.iterator]()가 반환하는 iterator도 a임.

// iterator니까 for ... of를 사용할 수 있음.
for(let num of a){
  console.log(num);
}


// next()에 인수 전달
function* fn() {
  const num1 = yield '첫번째 숫자를 입력?';
  console.log(num1);

  const num2 = yield '두번째 숫자를 입력?';
  console.log(num2);

  return num1 + num2;
}

const a = fn();

a.next();  // {value: '첫번째 숫자를 입력?', done: false}
a.next(2);  
// 2
// {value: '두번째 숫자를 입력?', done: false}
a.next(3);
// 3
// {value: 5, done: true}


// Generator는 값을 미리 만들어 두지 않음. 메모리 측면의 효율성을 위해.
// 필요한 순간 값을 연산.
function* fn() {
  let index = 0;
  while(1) {
    yield index++;
  }
}
const a = fn();
a.next();  // {value: 0, done: false}
a.next();  // {value: 1, done: false}
a.next();  // {value: 2, done: false}
a.next();  // {value: 3, done: false}


// yield* 이용
function* gen1() {
  yield 'w';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen2() {
  yield 'Hello, ';
  yield* gen1();   // yield* 옆에는 반복가능한 객체가 올 수 있음.
  yield '!';
}

console.log(...gen2());  // Hello,  w o r l d !

// 제너레이터는 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분부터 이어서 실행
// ex) Redux Saga