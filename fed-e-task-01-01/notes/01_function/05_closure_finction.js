// 闭包,  once函数就是
  // 本质： 函数在执行的时候会被放到一个执行栈上，当函数执行完毕后会从执行栈上移除，
        //  但是堆上的作用域成员因为被外部引用不能被释放，因此内部函数依然可以访问外部函数成员

function makeFn() {
  let msg = 'hello word'
  return function() {
    console.log(msg + '1')
  }
}
// 内部函数对外部函数变量进行引用，则允许完不会被释放
const fn = makeFn()
fn()
fn()
fn()


// 案例
 function makePower (power) {
   return function(number) {
     return Math.pow(number, power)
   }
 }
 let power2 = makePower(2)
 let power3 = makePower(3)
 console.log(power2(2))
 console.log(power3(2))


// 为不同级别的员工，生成计算工资的函数
//  getSalary(1200, 2000)
//  getSalary(1500, 3000)
//  getSalary(1500, 4000)

function makeSalary (base) {
  return function(performance) {
    return base + performance
  }
}
let salaryLever1 = makeSalary(12000)
let salaryLever2 = makeSalary(15000)
console.log(salaryLever1(2000))
console.log(salaryLever2(2000))