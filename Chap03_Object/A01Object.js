/* eslint-disable prettier/prettier */
console.log('----------------- [335] Object -----------------')

// import $ from './jquery.min.js'

const nolbu = 'NolBu'
const kor = 100
const eng = 80
const total = kor + eng
const avg = total / 2
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다')
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`)

const bangja = {
  name: '방자',
  kor: 100,
  eng: 80,
  total: 0,
  avg: 0,
}

bangja.total = bangja.kor + bangja.eng
bangja.avg = bangja.total / 2
console.log(`${bangja.name}님의 총점은 ${bangja.total}이고 평균은 ${bangja.avg}입니다.`)
console.log('')

const hangDan = {
  name: '향단',
  'h-age': 20,
  kor: 100,
  0: 80,
  1: 70,

  info: function () {
    console.log(`${hangDan.name} / ${hangDan['h-age']}`)
  },
}

hangDan.info()
