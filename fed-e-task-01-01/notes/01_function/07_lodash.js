// lodash 纯函数库
// first / last / toUpper / reverse / each / includes / find / findIndex

const _ = require('lodash')

const array = ['jack', 'tom', 'mack', 'marry']

console.log(_.first(array))
console.log(_.last(array))

console.log(_.toUpper(_.first(array)))

console.log(_.reverse(array))

_.each(array, (item, index) => {
  console.log(item, index)
})

_.includes()