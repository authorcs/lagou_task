// _.curry(fn)
  // 创建一个函数，该函数接收一个或多个func的参数，如果func所需的参数都被提供则，执行func并返回执行结果，
    // 否则继续返回该函数并等待接收剩余的参数

    // 柯里化最终会将多元函数转变成一元函数

const _ = require('lodash')

function getSum(a, b, c) {
  return a + b + c
}

const curried = _.curry(getSum)

// console.log(curried(1 ,2 ,3))

console.log(curried(1, 2)(3))

console.log(curried(1)(2)(3))