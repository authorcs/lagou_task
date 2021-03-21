// 模拟柯里化
  // 柯里化可以让我们给一个函数传递较少的参数，得到一个已经记住了某些固定参数的新函数
  // 使用了闭包，这是一种函数参数的‘缓存’
  // 让函数更灵活，粒度更小
  // 可以把多远函数转换成一元函数

function curry(func) {
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if(args.length < func.length) {
      return function() {
        return curriedFn(args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}