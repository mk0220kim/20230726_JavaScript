

console.log('----------------- [105] let, const [ES2015(ES6)] -----------------');

var nickname = 'NolBu';
var nickname = 'HungBu';

{
  var nickaname = 'BangJa';
}
console.log('nickname: ' + nickname);
console.log('');

// let
// 동적 타입은 var과 동일하다 즉 값에 의해 타입이 결정된다

// 1. 같은 이름으로 변수의 중복 선언이 안된다
let age = 20;
console.log('age: ' + age + ', typeof: ' + typeof age);

// let age = true;
// var age = true;
// const age = true;


// 2. 모든 { }에서 변수의 범위를 갖는다
let num = 100;
console.log('num: ' + num + ', typeof: ' + typeof num);
console.log('');

if (age > 10) {
  // 이 변수는  } 를 만나면 가비지 컬렉션(사용하지 않는 변수 삭제) 대상이 되서 메모리에서 삭제된다.
  let num = 'Hello World';
  console.log('IN num: ' + num + ', typeof: ' + typeof num);
}
console.log('OUT num: ' + num + ', typeof: ' + typeof num);
console.log('');

// 9번 정상 출력된다.
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}
console.log('');

// Error 호이스팅이 발생하지 않는다
// console.log(alert);

// 3 Global 영역을 오염시키지 않는다
// let, const로 선언된 변수는 TDZ(선언과 초기화 사이) 이라는 영역에 선언된다
let alert = 'Hello World';
console.log('alert: ' + alert + ', typeof: ' + typeof alert);

// TDZ과 window에 같은 이름으로 존재한다면 window 속성은 반드시 "window.속성명" 을 붙여 참조해야 한다
//window.alert('NolBu');
console.log('');

const MY_PI = 3.14;
console.log('MY_PI: ' + MY_PI + ', typeof: ' + typeof MY_PI);

//1.한번 초기화 된 이후 값을 변경 할 수 없다
// const MY_PI = 30;
//2.선언된 변수 재 선언 안됨
//3. Global 영역을 오염시키지 않는다(let과 동일)

//사용상 주의
//1. 선언과 동시에 초기화 작업이 이루어져야 한다.
//2. 참조(레퍼런스)형 변수는 주의
//배열의 참조는 변수명[방번호]로 호출해야함
const arr = [10, 20, 'Hello World'];
console.log(arr[0]);
console.log(arr[2]);

arr[0] = 30;
arr[2] = 'World'

// console.log(arr[0]);
// console.log(arr[2]);
console.log(arr);
console.log('');

const user = { name: '흥부', age: 20 };
user.name = '놀부';
//Object 객체는 "객체명.속성명" 형태로 사용
console.log(user);
console.log(globalThis);