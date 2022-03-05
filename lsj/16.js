// 16. 프로미스(Promise)

const pr = new Promise((resolve, reject) => {
  // code
})

// 어떤 일이 완료되고 호출되는 함수 = 콜백함수
// Promise 객체는 state와 result를 property로 가짐.
// 어떤 일이 성공(resolve)되면 resolve(value) =>  state = fulfilled, result = value
// 어떤 일이 실패(reject)되면 reject(error) => state = rejected, result = error

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 3000)
});
// {state: pending, result: undefined} => {state: fulfilled, result: 'OK'}

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error...'))
  }, 3000)
});
// {state: pending, result: undefined} => {state: rejected, result: error}


///
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 3000)
});

pr.then(
  function(result){},  // 이행됐을 때 실행,
  function(err){}      // 거부됐을 때 실행,
)

pr.then(
  function(result){}
).catch(
  function(err){}  // 거부됐을 때 실행,
).finally(  
  function() {}    // 아무튼 실행,
)

// 콜백 지옥
const f1 = (callback) => {
  setTimeout(function () {
    console.log('1번 완료');
    callback();
  }, 1000)
}
const f2 = (callback) => {
  setTimeout(function () {
    console.log('2번 완료');
    callback();
  }, 3000)
}
const f3 = (callback) => {
  setTimeout(function () {
    console.log('3번 완료');
    callback();
  }, 2000)
}

console.log('시작');
f1(function() {
  f2(function() {
    f3(function() {
      console.log('끝')
    })
  })
})

// Promise chaining으로 변경
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

f1()
  .then(res => f2(res))
  .then(res => f3(res))
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('끝'))

// Promise.all(), 배열 안의 모든 작업이 종료된 후 then이 실행
Promise.all([f1(), f2(), f3()])
  .then(res => {
    console.log(res);
  })
// ['1번 완료', '2번 완료', '3번 완료']
// reject 되는 경우, 어떠한 데이터도 받을 수 없음.

// Promise.race(), 배열 안의 작업 중 하나라도 완료되면 끝냄.
Promise.race([f1(), f2(), f3()])
  .then(res => {
    console.log(res);
  })
// 1번 완료