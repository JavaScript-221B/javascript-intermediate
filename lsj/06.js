// 06. 문자열 메소드(String methods)

// `은 여러줄 포함 가능
let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`

// length : 문자열 길이
let desc = '안녕하세요.';
desc.length;  // 6

// [i]로 특정 위치 접근, 변경 불가능
let desc = '안녕하세요.';
desc[2]  // '하'
desc[4] = '욤'
desc  // '안녕하세요.'

// toUpperCase() / toLowerCase() 대소문자 변경

// str.indexOf(text) : 해당 문자가 처음 등장하는 인덱스, 없으면 -1 반환
let desc = "Hi guys. Nice to meet you";

if(desc.indexOf('Hi') > -1){
  console.log('Hi가 포함된 문장.')
}

// str.slice(n, m) : n ~ m 인덱스 추출, m은 포함하지 않음. m 없으면 문자열 끝까지, 음수면 끝에서부터
let desc = 'abcdefg';
desc.slice(2)  // 'cdefg'
desc.slice(0, 5)  // 'abcde'
desc.slice(2, -2)  // 'cde'

// str.substring(n, m) : n과 m 사이 문자열 반환, n과 m을 바꿔도 동작, 음수는 0으로 인식
let desc = 'abcdefg';
desc.substring(2, 5)  // 'cde'
desc.substring(5, 2)  // 'cde'


// str.substr(n, m) : n부터 m개의 문자열 가져옴
let desc = 'abcdefg';
desc.substr(4, 2)  // 'ef'
desc.substr(-2, 3)  // 'fg'

// str.trim() : 앞 뒤 공백 제거

// str.repeat(n) : 문자열 n번 반복

// 문자열 비교, 아스키 코드 기준

'a'.codePointAt(0);  // 97
String.fromCodePoint(97)  // 'a'

// str.includes(text) : 문자열 포함 여부 확인