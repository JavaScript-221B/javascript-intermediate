/*
01. 변수, 호이스팅, TDZ(Temporal Dead Zone)

  변수 let, const, var의 비교

  * var 는 한번 선언된 변수 다시 선언 가능
  * var는 선언 전 사용 가능 ( 호이스팅 )
  * 선언은 미리 되지만 할당은 안 됨
  * let과 const 모두 호이스팅은 됨.

  호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동

  TDZ 영역에 있는 변수들은 사용할 수 없음
  let과 const는 TDZ 영향을 받음, 할당 전에는 사용할 수 없음
  => 코드를 예측 가능, 잠재적 버그 예방

  아래 코드는 에러를 발생시킴.
  호이스팅은 스코프 단위로 일어나기 때문.
   
*/
 
  let age = 30;
  function showAge() {
    console.log(age);  // Error
    let age = 20;
  }
  showAge()

/*

  변수의 생성과정

  1. 선언
  2. 초기화 (undefined를 할당해주는 단계)
  3. 할당

  var는 선언과 초기화가 동시에.

  let은 선언과 초기화가 분리. 호이스팅되면서 선언, 초기화는 코드에 도달했을 때.

  const는 선언, 초기화, 할당이 모두 동시에.

  스코프
  var : 함수 스코프 (유일하게 벗어나지 못하는 게 함수 블록)
  let, const : 블록 스코프

  var 대신 let과 const 사용이 권장.

*/