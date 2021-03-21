// Promise的执行时序;  宏任务，微任务
  // Promise异步执行的时序特殊，属于微任务，在本轮执行完后会立即执行； 还有 MutationObserver, node中的 process.nextTick都是微任务
  // 普通回调队列中的任务称之为宏任务， 需要到回调队列里进行排队  ，大部分异步调用的API都是宏任务
      // 宏认为执行过程中可以临时加上一些额外需求，可以选择作为一个新的宏认为进到队列中排队，也可以作为当我任务的微任务，在当前任务执行完后立即执行，不需要重新排队

// 测试 1
console.log('start')
Promise.resolve()
  .then( () => {
    console.log('promise')
  })
console.log('end')
    //  输出： 'start'，'end'， 'promise'


// 测试 2
console.log('start')
Promise.resolve()
  .then( () => {
    console.log('promise1')
  })
  .then( () => {
    console.log('promise2')
  })
  .then( () => {
    console.log('promise3')
  })
console.log('end')
  //  输出： 'start'，'end'， 'promise1'， 'promise2'， 'promise3'


// 测试 3
console.log('start')
  setTimeout(() => {
    console.log('setTimeout')
  }, 0);
Promise.resolve()
  .then( () => {
    console.log('promise1')
  })
  .then( () => {
    console.log('promise2')
  })
  .then( () => {
    console.log('promise3')
  })
console.log('end')
  //  输出： 'start'，'end'， 'promise1'， 'promise2'， 'promise3', 'setTimeout'
