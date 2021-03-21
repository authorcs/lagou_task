// 应该在代码中应该明确的去捕获每个异常


// 错误捕捉，只能捕捉到第一次的调用错误
ajax('/api/user.json').then(function(value) {
  console.log('resolve', value)
}, function(error) {
  console.log('rejected', error)
})


// 用catch方法，可以捕捉到任何一次，链式调用的时候用这种
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