// 应该在代码中应该明确的去捕获每个异常


// 错误捕捉，只能捕捉到第一次的调用错误
ajax('/api/user.json').then(function(value) {
  console.log('resolve', value)
}, function(error) {
  console.log('rejected', error)
})


// 用catch方法，可以捕捉到任何一次，链式调用的时候用这种

// then 和 catch 方法捕获异常的不同
  // 链式调用的catch是给前面then方法返回的promise对象指定失败回调，并不是给第一个指定的，只是因为这是promise链条
        // 前面的promise异常会被一直往后传递，所有可以在catch中可以捕获前面的异常
  // then中的第二个参数捕获异常，只能捕获当前的then方法失败回调
ajax('/api/user.json').then(function(value) {
  console.log('resolve', value)
  return ajax('/api/stu.json')
})
.then(res => {
  
})
.catch(function(error) {
  console.log('error', error)
})


// 相当于
ajax('/api/user.json').then(function(value) {
  console.log('resolve', value)
})
.then(undefined, function(error) {
  console.log('rejected', error)
})


// unhandledRejection 全局注册捕获异常，一般不用
process.on('unhandledRejection', (reason, promise) => {
  // reason => Promise 失败原因，一般是错误对象
  // promise  => 出现异常的promise对象
})