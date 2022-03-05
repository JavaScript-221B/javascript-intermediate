// 19. ES2021 자바스크립트에 추가된 새로운 기능들을 알아보자!

// 1. String.replaceAll(substr, newSubstr)
// substr에 해당되는 모든 문자를 newSubstr로 바꿔줌.

const str1 = 'Hello World!';
console.log(str1.replaceAll('l', '~'))  // He~~o Wor~d!

// String.replace()에서 정규표현식 /l/g로 전역을 뜻하는 g플래그로도 가능했음.

// 2. Promise.any
// Promise.race : 프로미스 중 가장 먼저 완료된 결과값으로 이행/거부
// Promise.any : 프로미스 중 가장 먼저 이행된 객체 반환, 모두 거부되면 catch문 실행


// 3. 논리 할당 연산자 Logical assignment operators
let name1 = 'Mike';
name1 &&= `Hello ${name1}`
console.log(name1)  // Hello Mike

let name2 = '';
name2 &&= `Hello ${name2}`
console.log(name2)  // 

let name3 = 'Tom';  
name ??= 'Mike';   // ?? : 앞의 값이 null이거나 undefined면 뒤의 값, null 병합 연산자,


// 4. Numeric separator
let billion = 1_000_000_000
console.log(billion)  // 1000000000


// 5. WeakRef
// Avoid where possible 웬만하면 쓰지 말자.
// JS에는 가비지 컬렉터가 있어서, 사용하지 않는 객체를 메모리에서 해제
// 참조가 걸려있으면 메모리에서 제거되지 않음.
// 약한 참조 = 가비지 컬렉터 대상, 언제든 삭제될 수 있음.
let user = {
  name: 'Mike',
  age: 30,
}

const weakUser = new WeakRef(user);
user = null;

const timer = setInterval(() => {
  const wUser = weakUser.deref();  // deref() 참조에 접근하기 위해 사용
  if(wUser){
    console.log(wUser.name);
  } else {
    console.log('제거되었습니다.')
    clearInterval(timer)
  }
}, 1000)
// (7) Mike
// 제거되었습니다.

// 일부러 잠시동안만 캐시하는 기능을 위해 사용할 수도 있음.
class MyCache {
  constructor() {
    this.cache = {};
  }

  add(key, obj) {
    this.cache[key] = new WeakRef(obj);
  }

  get(key) {
    let cacheRef = this.cache[key].deref();
    if(cacheRef){
      return cacheRef;
    } else {
      return false;
    }
  }
}