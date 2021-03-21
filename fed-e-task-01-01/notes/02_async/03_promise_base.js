// 回调函数的嵌套过多，会出现成回调地域的情况

// Promise  -- Pending  -- Fulfilled / Rejected     一旦明确结果就不能发生改变了

// ES2015提供的全局类 Promise

const promise = new Promise(function(resolve, reject) {
  // 兑现承诺的逻辑
  resolve(100)    // 承诺打成
  reject(new Error('promise reject'))        // 承诺失败
})

promise.then(function(value) {
  console.log('resolve', value)
}, function(error) {
  console.log('rejected', error)
})