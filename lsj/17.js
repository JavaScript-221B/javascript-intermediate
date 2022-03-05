// 17. async, await
// Promise chaining의 가독성을 높이기 위한 문법.

// async 함수는 항상 Promise 객체 반환
async function getName() {
  return 'Mike';
}

console.log(getName())  // Promise {<fulfilled>: 'Mike'}

getName().then(name => {
  console.log(name)  // Mike
})


async function getName() {
  return Promise.resolve('Tom');
}

getName().then(name => {
  console.log(name)  // Tom
})

async function getName() {
  // return Promise.resolve('Tom');
  throw new Error('err...');
}

getName().catch(err => console.error(err))  // Error: err...


// await는 async 내부에서만 사용 가능
// await 뒤에는 Promise를 반환하는 함수가 적히고,
// Promise를 반환할 때까지 기다림.
function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName('Mike');
  console.log(result) 
}

showName();


// 16.js Promise chaining을 async/await로
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 완료');
    }, 1000)
  })
}
const f2 = (message) => {
  console.log(message)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2번 완료');
    }, 3000)
  })
}
const f3 = (message) => {
  console.log(message)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 완료');
    }, 2000)
  })
}

// async await에서는 try catch문을 이용
async function order() {
  console.log('시작')
  try{
    const res1 = await f1();
    const res2 = await f2(res1);
    const res3 = await f3(res2);
    console.log(res3);
  } catch(e) {
    console.log(e)
  }
  console.log('끝')
}
order()


// Promise.all() 사용
async function order() {
  console.log('시작')
  try{
    const result = await Promise.all([f1(), f2(), f3()])
    console.log(result);
  } catch(e) {
    console.log(e)
  }
  console.log('끝')
}
order()
