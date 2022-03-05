// 11. 클로저(Closure)

// JavaScript는 어휘적 환경(Lexical Environment)을 갖는다.

// 코드가 실행되면 선언된 변수들이 Lexical 환경에 올라감.
// let으로 선언된 변수는 초기화가 되지 않아, 사용이 불가능하지만,
// 함수선언문은 바로 초기화되므로 사용 가능.
// 함수 표현식은 안됨.

// 함수가 실행되는 순간 새로운 Lexical 환경이 만들어짐.
// 이 환경에 함수가 넘겨받은 매개변수와 지역변수가 저장.
// 이 환경을 내부 Lexical 환경, 외부에서 만들어진 환경을 전역 Lexical 환경.
// 내부 Lexical 환경은 전역 Lexical 환경을 참조를 가짐.
// 변수를 찾는 순서는 내부 => 외부 => 전역.


// 예시)
function makeAdder(x) {
  return function(y){
    return x + y;
  }
}

const add3 = makeAdder(3);
console.log(add3(2));

// 순서
// 코드 실행,
// 전역 Lexical 환경에 makeAdder 함수 선언, 초기화, add3 상수 선언.
// const add3 = makeAdder(3) line이 실행되면서 함수 실행.
// makeAdder Lexical 환경이 만들어지고, 넘겨받은 인자 x: 3이 저장
// 함수가 실행되고, 전역 Lexical 환경 add3에 function 할당.
// 마지막 줄 실행.
// add3(2)에서 익명함수 실행, 익명 함수 Lexical 환경 만들어지고, 넘겨받은 인자 y: 2 저장.
// x + y 연산을 위해 x와 y값을 찾아나감.
// 먼저 익명함수 Lexical 환경에서 y: 2찾음.
// x가 없으니 외부 makeAdder Lexical 환경에서 x: 3 찾음.
// 5

// Closure
// * 함수와 렉시컬 환경의 조합. 
// * 함수가 생성될 당시의 외부 변수를 기억.
// * 생성 이후에도 계속 접근 가능.
// 외부 함수 실행 종료로 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수 변수에 접근 가능

function makeCounter() {
  let num = 0;  // 은닉화

  return function () {
    return num++;
  }
}

let counter = makeCounter();

console.log(counter());  // 0
console.log(counter());  // 1
console.log(counter());  // 2