// 异步任务的扁平化，不用出现回调嵌套的情况
  // 1、promise对象的then方法会返回一个全新的promise
  // 2、后面的then方法就是在为上一个then返回的Promise注册回调
  // 3、前面then方法中回调函数的返回值会作为后面then方法回调的参数
  // 4、如果回调中返回的是promise，那么then方法的回调就会等待它的结束
// promise最大的优势是链式调用

var promise = ajax('/api/user.json')

var promise2 = promise.then(function onFulFilled(value) {
  console.log('')
},function onRejected(error) {

})

// 返回的 promise2 是个全新的promise对象

ajax('/api/user.json')
  .then(function(value) {
    console.log(1111)
    return ajax('/api/urls1.json')
  })
  .then(function(value) {
    console.log(2222)
    return ajax('/api/urls2.json')
  })
  .then(function(value) {
    console.log(333)
    return ajax('/api/urls3.json')
  })
  .then(function(value) {
    console.log(333)
  })