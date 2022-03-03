/*
02. 생성자 함수

  객체 리터럴

*/

  let user = {
    name: 'Mike',
    age: 30
  }

// 객체를 여러 개 만들어야하는 상황에 쓸 수 있는게 생성자 함수

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  let user1 = new User('Mike', 30);
  let user2 = new User('Jane', 22);
  let user3 = new User('Tom', 18);

// - 생성자 함수의 첫 글자는 대문자
// - new 연산자를 사용해 호출


  // 생성 과정
  // 1. new 함수명(); 호출
  // 2. 함수 안에 this = {} 객체 생성
  // 3. this.name = name; 할당
  // 4. this 반환


  // 생성자 함수 내부 메서드

  function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(){
      console.log(this.name);
    }
  }

  let user5 = new User('Han', 40)
  user5.sayName();  // 'Han'


  function Item(title, price){
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
      console.log(`가격 : ${price}`);
    }

    // return this
  }

  const item1 = new Item('인형', 3000)
  const item2 = new Item('가방', 5000)
  const item3 = new Item('지갑', 10000)
  console.log(item1, item2, item3);

  item3.showPrice();
  // new를 빼면 undefined 반환. 그냥 함수라서 return undefined