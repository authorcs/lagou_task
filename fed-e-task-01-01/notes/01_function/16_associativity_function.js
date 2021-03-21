// 函数结合律
  // 可以先把g和h组合，或先把g,f组合，是一样的

// let fn = compose(f, g, h)

// let associative = compose(compose(f, g), h) == compose(f, compose(g, h))

const _ = require('lodash')

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
// const f = _.flowRight(_.flowRight(_.toUpper, _.first) , _.reverse)
const f = _.flowRight(_.toUpper, _.flowRight(_.first , _.reverse))

console.log(f(['one', 'two', 'three']))


