console.log('---------------- [431] Map [ES2015] -----------------')
const oneArray = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
]

const twoArray = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
]

const myMap = new Map([
  ['one', oneArray],
  ['two', twoArray],
])

console.log(myMap)

const one = myMap.get('one')
console.log(one)
console.log(one[0].name)

console.log(myMap.size)
console.log('')

const keys = myMap.keys()
console.log(keys.next())

const values = myMap.values()
console.log(values.next())

const ent = myMap.entries()
console.log(ent.next())

myMap.clear()
console.log(myMap)
