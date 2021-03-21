// ES2015

// 生成器，在普通的函数钱多了个 *

function * foo() {
  console.log('start')

  try {
    const res = yield 'foo' // 向外的返回值，只是暂停了函数的执行，并不是结束，下一次调用next方法时，会从此位置继续执行
    console.log(res) // bar
  } catch (error) {
    console.log(error)
  }
}

// 调用时并不会立即执行函数，而是返回一个生成器对象
const generator = foo()
const result = generator.next() // 调用生成器的 next 方法才会执行
console.log(result) // 得到返回值

generator.next('bar')  // 传递的参数 会作为 yield的返回值，可以接收到的,并继续执行到下一个 yield 的位置


// 抛出异常， 用 try...catch进行捕获
generator.throw(new Error('generator error'))