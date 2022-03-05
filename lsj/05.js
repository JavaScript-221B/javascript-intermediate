
// 05. 숫자, 수학 method(Number, Math)

//   toString()
//   10진수 => 2진수/16진수

let num = 10;
num.toString();  // '10'
num.toString(2);  // '1010'

let num2 = 255;
num2.toString(16);  // 'ff'


// Math
// Math.ceil() : 올림
// Math.floor() : 내림
// Math.round() : 반올림

// 소수점 자릿수
let userRate = 30.1234;
Math.round(userRate * 100)/100

// toFixed()
let userRate = 30.1234;
userRate.toFixed(2);  // '30.12', 문자열!

// isNaN()
// 값이 NaN인지 판별하는 유일한 방법
let x = Number('x')
console.log(x == NaN)  // false
console.log(x === NaN)  // false
console.log(NaN == NaN)  // false


// parseInt()  문자열을 숫자로 바꿈.
// Number와 달리 문자가 들어있어도 사용 가능
// 읽을 수 있는 부분까지만 숫자로 바꿈.
let margin = '10px';
parseInt(margin);  // 10
Number(margin);  // NaN

let redColor = 'f3';
parseInt(redColor);  // NaN


// parseInt 두번째 인자로 10진수 <=> 2진수, 16진수 간 진수 변환 가능
let redColor = 'f3';
parseInt(redColor, 16);  // 243

parseInt('11', 2)  // 3


// parseFloat(), parseInt()와 비슷 부동 소수점 반환
let padding = '18.5%';
parseInt(padding); // 18
parseFloat(padding); // 18.5


// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
// 1 ~ 100 사이 임의의 숫자 뽑기
Math.floor(Math.random() * 100) + 1

// Math 메서드들
Math.max(1, 4, -1, 5, 10, 6, 9, 5.54)  // 10
Math.min(1, 4, -1, 5, 10, 6, 9, 5.54)  // -1
Math.abs(-1)  // 절댓값
Math.pow(n, m)  // 제곱, n^m
Math.sqrt()  // 제곱근