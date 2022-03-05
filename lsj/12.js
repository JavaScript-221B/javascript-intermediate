// 12. setTimeout / setInterval

// setTimeout : 일정 시간이 지난 후 함수를 실행
// setInterval : 일정 시간 간격으로 함수를 반복

setTimeout(function() {  // 3초 뒤 3출력
  console.log(3);
}, 3000);


function showName(name) {
  console.log(name);
}

const tId = setTimeout(showName, 3000, 'Mike')  // 함수에 넘겨줄 매개변수는 3번째 인자로.
clearTimeout(tId);  // 스케줄링 취소


function showName(name) {
  console.log(name);
}
const tId = setInterval(showName, 3000, 'Mike')  // setTimeout과 사용법 비슷.
clearInterval(tId);  // 중단.

// delay = 0으로 적어도 바로 실행되지 않음.
// => 현재 스크립트가 종료된 이후 스케줄링 함수를 실행하기 때문.
// 브라우저는 기본적으로 4ms~ 정도의 대기 시간이 있음.


// 사용자 접속 시간을 5초동안 보여주는 코드
let num = 0;

function showTime() {
  console.log(`접속한지 ${num++}초가 지났습니다.`)
  if (num > 5){
    clearInterval(tId);
  }
}
const tId = setInterval(showTime, 1000);