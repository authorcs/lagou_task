// Task异步执行
  // folkTale 一个标准的函数式编程库
    // 1、和lodash、ramda不同的是，他没有提供很多功能函数
    // 只提供了一些函数式处理的操作，例如： compose、curry等，一些函子 Task、Either、MayBe等

const { compose, curry } = require('folktale/core/lambda')
const { toUpper, first } = require('lodash/fp')

let f = curry(2, (x, y) => {
  return x + y
})

console.log(f(1, 2))
console.log(f(1)(2))


let f1 = compose(toUpper, first)
console.log(['one', 'two'])