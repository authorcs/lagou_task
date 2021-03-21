// 函数组合
  //  _.toUpper(_.first(_.reverse(array))

  // 如果一个函数需要经过多个函数处理才能得到最终值，可以把中间过程的函数合并成一个函数

  // fn = compose(f1, f2, f3)
  // b = fn(a)


  // 函数组合里参数函数是从右到左执行的

  function compose (f, g) {
    return function(value) {
      return f(g(value))
    }
  }

  function reverse(array) {
    return array.reverse()
  }
  function first(array) {
    return array[0]
  }

  const last = compose(first, reverse)

  console.log(last(['jack', 'mac', 'ios']))