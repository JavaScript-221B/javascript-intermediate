// 08. 배열 메소드2(sort, reduce)

// arr.sort() : 배열 재정렬, 배열 자체가 변경

let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);  // [1, 2, 3, 4, 5]

let arr = [13, 5, 4, 27, 3];
arr.sort();
console.log(arr);  // [13, 27, 3, 4, 5] => 문자열 기준 정렬이기 때문

let arr = [13, 5, 4, 27, 3];
arr.sort((a, b) => a - b);
console.log(arr);  // [3, 4, 5, 13, 27] => -를 이용해 암시적으로 숫자형 변환,
                   // 비교 함수의 결과값이 음수면 왼쪽이 앞, 0이면 변경하지 않음. 양수면 왼쪽이 뒤.

// Lodash를 이용, _.sortBy(Arr);

// arr.reduce() : (누적 계산값, 현재값) => { return 계산값 }, 초기값.
let arr = [1, 2, 3, 4, 5]
const result = arr.reduce((prev, cur) => prev + cur, 0);
console.log(result)  // 15


let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Tom', age: 18 },
  { name: 'Jane', age: 27 },
  { name: 'Sue', age: 26 },
  { name: 'Harry', age: 42 },
  { name: 'Steve', age: 60 },
]

const result = userList.reduce((prev, cur)=>{
  if(cur.age > 35){
    prev.push(cur.name)
  }
  return prev;
}, [])
console.log(result)  // ['Harry', 'Steve']