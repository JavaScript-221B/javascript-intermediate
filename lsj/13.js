// 13. call, apply, bind

// call, apply, bind: 함수 호출 방식과 관계없이 this를 지정.

// call 모든 함수에 적용 가능. this를 특정 값으로 지정

const mike = {
  name: 'Mike',
};
const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
};

showThisName();  // 아무것도 안뜸. this = window
showThisName.call(mike);  // Mike, call()의 첫번째 인자는 this로 사용될 값, 그 뒤에 전달할 인수.

function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
};

update.call(mike, 1999, 'singer');
console.log(mike);  // {name: 'Mike', birthYear: 1999, occupation: 'singer'}

// apply : 함수 매개변수 처리 방법을 제외하고 call과 완전히 같음.
// apply는 매개변수를 배열로 받음.

update.apply(tom, [1999, 'singer'])
console.log(tom);  // {name: 'Tom', birthYear: 1999, occupation: 'singer'}


const nums = [3, 10, 1, 5, 4];
const minNum = Math.min.apply(null, nums)
console.log(minNum)  // 1

// bind : 함수의 this값을 영구히 바꿈.

const mike = {
  name: 'Mike',
};

function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
};

const updateMike = update.bind(mike);
updateMike(1980, 'police');
console.log(mike)  // {name: 'Mike', birthYear: 1980, occupation: 'police'}


const user = {
  name: 'Mike',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
}

user.showName();  // hello, Mike

let fn = user.showName;
fn();  // hello, 

fn.call(user)  // hello, Mike
fn.apply(user)  // hello, Mike

let boundFn = fn.bind(user);
boundFn();  // hello, Mike
