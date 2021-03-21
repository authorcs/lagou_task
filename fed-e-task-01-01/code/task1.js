// 1、将下面异步代码使用Promise的方式改进
function strPromise(str) {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			resolve(str)
			clearTimeout(timer)
		}, 10)
	})
}
strPromise('hello').then((str) => {
	return strPromise(str + ' lagou')
}).then((str) => {
	return strPromise(str + ' i love u')
}).then((res) => {
	console.log(res)
})


// 2
  // 使用函数组合fp.flowRight()重新实现函数
  const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
  isLastInStock(cars)

  // 使用fp.flowRight(),fp.prop()和fp.first()获取第一个car的name
  const getFirstCarName = fp.flowRight(fp.prop('name'), fp.first)
  getFirstCarName(cars)

  // 使用函数组合的方式重构averageDollarValue函数
  const averageDollarValue = fp.flowRight(_average, fp.map((v) => v.dollar_value))

  // 使用flowRight写一个sanitizeNames()函数
  const sanitizeNames = fp.flowRight(_underscore, fp.map(fp.toLowerCase, ['Hello World']))

// 3
  // 使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数ex1
  let ex1 = () => {
    fp.map(fp.add(1), MayBe.map(x => Container.of(x)))
  }

  // 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
  let ex2 = () => {
    fp.first(xs.map((x) => MayBe.of(x).map(x => x)))
  }

  // 实现一个函数ex3，使用safeProp和fp.first找到user的名字的首字母
  let ex3 = () => {
    return fp.first(safeProp(user, 'name').map((name) => Array.from(name)))
  }

  // 使用Maybe重写ex4，不要有if语句
  let ex4 = (n) => {
    return MayBe.of(n).map(n => n && parseInt(n))
  }

// 4  手写实现MyPromise源码

  const PENDING = 'pending'
  const FULFILLED = 'fulfilled'
  const REJECTED = 'rejected'

  class MyPromise {
    constructor(executor) {
      try {
        // 立即执行 new Promise 传入的函数，成功执行 resolve, 失败执行 reject
        executor(this.resolve, this.reject)
      } catch (e) {
        // 如果方法报错，直接执行 reject
        this.reject(e)
      }
    }

    // promise 的状态，默认是 pending 状态
    status = PENDING
    // resolve 方法的值
    value = undefined
    // reject 方法的值，失败原因
    reason = undefined

    // 成功和失败的回调，用于处理异步时候的 then 方法回调
    successCallback = []
    failCallback = []

    resolve = value => {
      // 状态只能从 pending 变成 fulfilled 或 rejected ，之后不可更改
      if (this.status !== PENDING) return
      this.status = FULFILLED

      // 将 resolve 的 value 保存起来，以便在 then 中使用
      this.value = value

      // 遍历异步情况下，多次调用 then 的情况
      while (this.successCallback.length) {
        this.successCallback.shift()()
      }
    }

    reject = reason => {
      // 状态只能从 pending 变成 fulfilled 或 rejected ，之后不可更改
      if (this.status !== PENDING) return
      this.status = REJECTED

      // 将 reject 的 reason 保存起来，以便在 then/catch 中使用
      this.reason = reason

      // 遍历异步情况下，多次调用 then 的情况
      while (this.failCallback.length) {
        this.failCallback.shift()()
      }
    }

    then(successCallback, failCallback) {
      // 给 then 的两个回调设置缺省实现，以保证直接调用 .then() 不传参依然可以继续后面的操作
      successCallback = successCallback || (v => v)
      failCallback = failCallback || ( r => { throw r })

      // 实现 then 的链式调用，每个 then 都返回一个 promise 实例
      let nextPromise = new MyPromise((resolve, reject) => {
        if (this.status === FULFILLED) {
          // setTimeout: 将代码块变为异步，以便拿到上面的 nextPromise 的值
          setTimeout(() => {
            try {
              let x = successCallback(this.value)
              resolvePromise(nextPromise, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        } else if (this.status === REJECTED) {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason)
              resolvePromise(nextPromise, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        } else {
          this.successCallback.push(() => {
            setTimeout(() => {
              try {
                let x = successCallback(this.value)
                resolvePromise(nextPromise, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
            }, 0)
          })
          this.failCallback.push(() => {
            setTimeout(() => {
              try {
                let x = failCallback(this.reason)
                resolvePromise(nextPromise, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
            }, 0)
          })
        }
      })
      return nextPromise
    }

    // 无论 Promise 执行成功还是失败，都执行 finally 方法
    // 执行完 callback 之后，根据 promise 的结果，返回成功值 value 或抛出异常 reason
    finally(callback) {
      return this.then(
        value => {
          return MyPromise.resolve(callback()).then(() => value)
        },
        reason => {
          return MyPromise.resolve(callback()).then(() => {
            throw reason
          })
        }
      )
    }

    // 跟 then 的第二个回调类似
    catch(failCallback) {
      return this.then(undefined, failCallback)
    }

    // Promise.all 函数，参数为数组，数组元素可以是普通值，也可以是 promise 对象
    static all(arr) {
      // 结果数组
      let result = []
      // 用于存储 arr 元素成功执行结果的个数
      let index = 0

      // 返回的依然是一个 promise 对象
      return new MyPromise((resolve, reject) => {
        function addData(key, value) {
          // 把相应的结果储存到相应的答案中去
          result[key] = value
          // 每次将 index 加一后，与 all 的入参元素数量相比对，如果相同，说明所有入参元素均执行完毕，调用 resolve, 结束 promise 返回结果
          index++
          if (index === arr.length) {
            resolve(result)
          }
        }
        // 遍历入参元素，如果是普通值，直接添加到返回结果中，如果是 promise 对象，等待执行结果：成功添加到返回结果；失败则直接报错
        for (let i = 0; i < arr.length; i++) {
          let cur = arr[i]
          if (cur instanceof MyPromise) {
            cur.then(
              value => addData(i, value),
              reason => reject(reason)
            )
          } else {
            addData(i, cur)
          }
        }
      })
    }

    // Promise.resolve 实现
    // 返回 promise 对象：如果入参本身就是 promise 对象，直接返回；如果不是，包装成一个必定成功的 promise 对象
    static resolve(value) {
      if (value instanceof MyPromise) {
        return value
      }
      return new MyPromise(resolve => resolve(value))
    }
  }

  // 如果 then 返回的 promise 对象，是原来的 promise 对象，则直接报错；
  // 如果 then 回调返回的是 promise 对象，则等待 then 方法执行完成，再根据成功失败调用相应方法
  // 如果 then 回调返回的是普通值，直接返回
  function resolvePromise(nextPromise, x, resolve, reject) {
    if (nextPromise === x) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if (x instanceof MyPromise) {
      x.then(resolve, reject)
    } else {
      resolve(x)
    }
  }