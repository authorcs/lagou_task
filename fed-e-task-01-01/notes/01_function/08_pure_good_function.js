// 纯函数的好处
    // 可缓存:  因为纯函数相同的输入始终得到相同的输出，所以可以把结果缓存起来
    // memoize

    // 可测试；  方便并行处理


const _ = require('lodash')

function getArea(r) {
  console.log(r)  // 相同的r 只执行一次
  return Math.PI * r * r
}

// let getAreaWidthMemory = _.memoize(getArea)

// console.log(getAreaWidthMemory(4));
// console.log(getAreaWidthMemory(4));
// console.log(getAreaWidthMemory(4));


// 模拟  memoize 的实现

function memoize(fn) {
  let cache = {}   // { '{"0":4}': 50.26548245743669 }
  return function() {
    console.log('arg。。。', arguments)
    let key = JSON.stringify(arguments)
    console.log('key...', key)
    console.log(cache)
    console.log(cache[key])
    cache[key] = cache[key] || fn.apply(fn, arguments)
    return cache[key]
  }
}
let getAreaWidthMemory = memoize(getArea)
console.log(getAreaWidthMemory(4));
console.log(getAreaWidthMemory(4));
console.log(getAreaWidthMemory(4));