// lodash中fp模块，提供了实用的对函数式编程友好的放好，已经对函数进行了柯里化
  // 函数优先，数据之后

const _ = require('lodash')


// lodash 模块
_.map(['a', 'b', 'c'], _.toUpper)
// => ['A', 'B', 'C']

_.map([['a', 'b', 'c']])
// => ['a', 'b', 'c']

_.split('hello world', '')


// lodash/fp 模块
const fp = require('lodash/fp')
fp.map(fp.toUpper, ['a', 'b', 'c'])
fp.map(fp.toUpper)(['a', 'b', 'c'])

fp.split(' ', 'hello world')
fp.split(' ')('hello world')


const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))