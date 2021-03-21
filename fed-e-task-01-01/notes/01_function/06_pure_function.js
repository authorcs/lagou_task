// 纯函数  ： 相同的输入始终会得到相同的输出

const { slice } = require("lodash")

// lodash 就是一个纯函数的库

// slice,  返回数组中的的指定部分，不改变原数组； 是纯函数
let  array = [1, 2, 3, 4]
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))


// splice , 会改变原数组, 不是纯函数
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))


// 纯函数
function getSum(n1, n2) {
  return n1 + n2
}
console.log(getSum(1, 2))
console.log(getSum(1, 2))