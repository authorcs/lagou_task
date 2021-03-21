//  回调函数，异步编程方案的根基
  // 将函数作为参数
  // 调用者进行定义，交给执行者去执行的行数

  // promise本质上也是使用回调函数，定义的异步任务结束后所需执行的任务

  function foo(callback) {
    setTimeout(() => {
      callback()
    }, 2000);
  }

  foo(function() {
    console.log('这是一个回调函数')
    console.log('调用者定义函数')
  })
