//  回调函数，异步编程方案的根基
  // 将函数作为参数

  function foo(callback) {
    setTimeout(() => {
      callback()
    }, 2000);
  }

  foo(function() {
    console.log('这是一个回调函数')
    console.log('调用者定义函数')
  })
