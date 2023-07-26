// 브라우저의 console 탭에 표시
console.log('브라우저의 검색 => 콘솔에 표시됩니다');

var name = 'Nolbu';
var age = 20;

console.log(name);
console.log(age);
console.log(''); //한 칸 띄우기

console.log('log');
//console.trace('trace'); //지원 안함. Node 서버에서는 지원
console.info('info');
console.warn('warn');
console.error('error');
console.time('이 텍스트가 end와 반드시 동일해야 한다');

for (var i = 0; i < 100000; i++);

console.timeEnd('이 텍스트가 end와 반드시 동일해야 한다');
console.log('');

function onAdd(x, y) {
  return '${x}+${y}+${x + y}';
}

console.log(onAdd);
console.dir(onAdd);
console.log('');

var x = 10;
var y = 20;
console.log(x + y);

//JavaScript에서 문자(문자열)은 싱글(') 또는 더블(") 어느 것을 이용해서 묶어도 된다
console.log('문자열: ' + x);
console.log('문자열: ' + x + y);
console.log(x + y);
console.log(x + y + '문자열');
console.log('');

console.log(name, age, x, y); //console.log를 4번 기술한 것과 동일한 효과
console.log(name, age, x, y, age + x + y);
console.log('');

// 문자열은 싱글(') 또는 더블(") 어느 것도 이용이 가능하다.
// 이때 "" 안쪽에서 싱글(')은 이스케이프 없이 바로 사용 가능하다.

console.log("I'm a boy");
console.log('I"m a boy');

//세미콜론
//Javascript는 세미콜론에 대한 제약이 없다(알아서 붙여준다)
//표현식으로 가능할때까지 이서서 평가를 해 본다. 평가가 안되는 위치에 ;를 붙여준다.

var z
z
  =
  10
console.log(z);
console.log('');

const a = 10;
var b = x + y;
(x + y).toString()