// lodash中组合函数
  // flow() 或者 flowRight() 可以组合多个函数
  // 从左到右运行    从右到左运行

  const _ = require('lodash')

  const reverse = arr => arr.reverse()
  const first = arr => arr[0]
  const toUpper = arr => arr.toUpperCase()

  const f1 = _.flowRight(toUpper, first, reverse)

  const f2 = _.flow(reverse, first, toUpper)

  console.log(f1(['onde', 'two', 'three']))
  console.log(f2(['onde', 'two', 'three']))

  // 函数组合原理

  // 模拟从右到做
  function compose (...args) {
    return function(value) {
      return args.reverse().reduce(function(acc, fn) {
        return fn(acc)
      }, value)
    }
  }

  // 箭头函数

  const compose1 = (...args) => (value) => args.reverse().reduce((acc, fn) => fn(acc), value)
