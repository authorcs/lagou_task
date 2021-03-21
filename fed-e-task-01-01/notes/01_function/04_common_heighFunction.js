// forEach、map、filter、every、some、find/findIndex、reduce、sort..
// 共同特征： 函数作为参数


// map：对数组中的每个元素进行遍历，并对每个元素进行处理，处理完的结果返回到一个新的数组
const map = (array, fn) => {
  let results = []
  for (let value of array) {
    results.push(fn(value))
  }
  return results
}
// 测试
let arr = [1 ,2, 3, 4, 5]
arr = map(arr, v => v * v)
console.log(arr)

 

// every ;判断数组中的每个元素是否都符合指定的条件

const every = (array, fn) => {
  let result = true
  for(let value of array) {
    result = fn(value)
    if(!result) {
       break
    }
  }
  return result
}

// 测试
let r = every(arr, v =>  v < 30)
console.log(r)


// some; 是否有一个满足条件
const some = (array, fn) => {
  let result = false
  for( let value of array) {
    result = fn(value)
    if(result) {
      break
    }
  }
  return result
}

let s = some(arr, v => v > 30)
console.log(s)