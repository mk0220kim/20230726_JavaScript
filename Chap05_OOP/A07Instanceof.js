console.log('----------------- Instanceof -----------------')

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`)
}

const nolbu = new Person('NolBu', 30)
nolbu.display()

// instanceof => 누구에 의해 만들어진 객체니? 프로토타입을 거슬러 올라가면서 체크한다
console.log(nolbu instanceof Person) // true
console.log(nolbu instanceof Object) // true
console.log(nolbu instanceof Array) // false

console.log('----------------- in -----------------')
