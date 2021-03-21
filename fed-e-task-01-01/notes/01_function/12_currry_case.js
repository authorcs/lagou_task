// 柯里化案例

const _ = require('lodash')



// 对字符串是否有匹配
const match =  _.curry(function(reg ,str) {
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

// console.log(haveSpace('hello word'))
// console.log(haveNumber('hello word'))


const filter = _.curry(function(func, array) {
  return array.filter(func)
})
console.log(filter(haveSpace, ['jone manc', 'jsf']))

const findSapce = filter(haveSpace)
console.log(findSapce(['jone manc', 'jsf']))