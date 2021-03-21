/**
 *  1、prmosie就是一个类，在执行的时候需要传递一个执行器进去，执行器会立即执行
 *  2、promise中有三种状态， 分别为 成功：fulfilled  ;  失败：rejected  ;  等待： pending
 *  3、 pending => fulfilled
 *      pending => rejected
 *      状态一旦确定就不可更改
 *  4、resolve，reject是用来更改状态的，
 *     resolve => fulfilled  ;参数就是成功后的值
 *     reject => rejected   ； 参数是失败的原因
 *  5、then方法内部做的事情就是判断状态  如果状态成功 调用成功的回调函数；如果状态失败，调用失败的回调函数
 *      then方法是被定义在原型对象上的方法
 *  6、then成功回调有一个参数，表示成功之后的值， then失败回调有个参数，表示失败的原因
 */

let promise = new Promise( (resolve, reject) => {
  // 函数执行进入后，遇到异步，将异步函数扔入异步队列，继续向下执行
  setTimeout(() => {
    resolve('成功')   // 进入resolve方法，根据回调函数是否存在执行
  }, 2000);
})
// 进入then函数继续执行同步代码  ，当运行到此处时，异步代码并没有执行，promise需要将传递的回调函数存储起来
promise.then( value => {
    console.log(value)
  }, 
  reson => {
    console.log(reson)
  }
)



// 多个then时,执行到代码时，需要将每个函数参数都存储起来
promise.then(value => {
  console.log(value)
})

promise.then(value => {
  console.log(value)
})

promise.then(value => {
  console.log(value)
})


// 链式调用
promise.then(value => {
  console.log(value)
  return 100
}).then( value => {
  console.log(value) // 100
})