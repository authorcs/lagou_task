// 高阶函数 ；用来抽象问题，屏蔽细节
  // 1、可以把函数作为参数传递给另一个函数；2、把函数作为另一个函数的返回结果

  function forEach (array, fn) {
    for(let i = 0; i < array.length; i++) {
      fn(array[i])
    }
  }

// 测试
  let arr = [1, 2, 3, 4, 5]

  forEach(arr, function(item) {
    console.log(item)
  })


  // filter
  function filter (array, fn) {
    let result = []
    for( let i = 0; i < array.length; i++){
      if(fn(array[i])) {
        result.push(array[i])
      }
    }
    return result
  }

  let newFilter = filter(arr, function(item) {
    return item % 2 ===0
  })
  console.log(newFilter)


  // 函数作为返回值

  function makeFn() {
    let msg = 'hello word'
    return function() {
      console.log(msg)
    }
  }

makeFn()()