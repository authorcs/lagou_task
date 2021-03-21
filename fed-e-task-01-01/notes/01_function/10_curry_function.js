// 柯里化
  // 当函数存在多个参数的时候，我们可以对函数进行改造，调用函数的时候只传递部分的参数，并且
    // 让这个函数返回一个新的函数，这个新的函数接收剩余的参数，并返回结果

// function checkAge(age) {
//   let min = 18;
//   return age >= min
// }


// 普通的纯函数
function checkAge(min, age) {
  return age >= min
}
console.log(checkAge(18, 20))
console.log(checkAge(18, 22))
console.log(checkAge(18, 24))

// 当基准值 min 可能会经常不变，  会出现重复

function checkAge1(min) {
  return function(age) {
    return age >= min
  }
}

let checkAge18 = checkAge1(18)
let checkAge20 = checkAge1(20)

console.log(checkAge18(20))
console.log(checkAge18(17))
console.log(checkAge20(24))


// 箭头函数实现
let check = min => (age => age >= min)