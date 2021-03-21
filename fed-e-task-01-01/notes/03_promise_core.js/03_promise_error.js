const { reject } = require("lodash");

const PENDING = 'pending'      // 等待
const FULFILLED = 'fulfilled'  // 成功
const REJECTED = 'rejected'    // 失败

class MyPromise {
  constructor (exectur) {
    try {
      exectur(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  // promise 状态
  status = PENDING

  // 成功之后的值
  value = undefined;
  // 失败后的原因
  reson = undefined;

  // 成功回调
  // successCallback = undefined;
  successCallback = [];   // 多个then时，需要存储多个回调函数
  // 失败回调
  failCallback = [];

  resolve = value => {    // resolve函数是直接调用的， 要用箭头函数是为了this指向内部对象
    // 如果状态不是等待  阻止程序向下指向, 保证状态一旦发生改变后，不再可修改
    if(this.status !== PENDING) return    
    this.status = FULFILLED;
    this.value = value
    // 判断成功回调是否存在，如果存在调用
    // this.successCallback && this.successCallback(this.value)

    // 多个then时，多个回调 
    while(this.successCallback.length) this.successCallback.shift()()
  }
  reject = reson => {
    if(this.status !== PENDING) return
    this.status = REJECTED
    this.reson = reson
    // 判断失败回调是否存在，如果存在调用
    // this.failCallback && this.failCallback(this.reson)

    // 多个then时，多个回调 
    while(this.failCallback.length) this.failCallback.shift()()
  }

  then(successCallback, errorCallback) {
    // then没传参数时，补上函数参数
    successCallback = successCallback ? successCallback : value => value;
    errorCallback = errorCallback ? errorCallback : reson => { throw reson};
    let promise2 = new MyPromise( (resolve, reject) => {
      if(this.status === FULFILLED) {
        setTimeout(() => {  // 将同步代码变成异步代码
          try {
            let x = successCallback(this.value)   // 将返回值传递给下一个then方法的成功回调，链式调用
            /**
             * 1、判断x的值是普通值还是promis 对象
             * 2、如果是普通值 直接调用resolve
             * 3、如果是promise对象查看promise对象返回的结果
             * 4、在根据promise对象返回的结果 决定调用resolve 还是reject
             */
            // resolve(x)
            resolvePromise(x, resolve, reject)
          } catch (error) {
            reject(error)
          }  
        }, 0)
      }else if(this.status === REJECTED) {   
        setTimeout(() => {  // 将同步代码变成异步代码
          try {
            let x = errorCallback(this.reson)   // 将返回值传递给下一个then方法的成功回调，链式调用
            resolvePromise(x, resolve, reject)
          } catch (error) {
            reject(error)
          }  
        }, 0)
      }else {
        // 等待， 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => { 
            try {
              let x = successCallback(this.reson) 
              resolvePromise(x, resolve, reject)
            } catch (error) {
              reject(error)
            }  
          }, 0)
        });
        this.failCallback.push( () => {
          setTimeout(() => { 
            try {
              let x = errorCallback(this.reson) 
              resolvePromise(x, resolve, reject)
            } catch (error) {
              reject(error)
            }  
          }, 0) 
        })
      }
    })
    return promise2
  }

}

function resolvePromise(x, resolve, reject) {
  if(promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise <Promise>'))
  }
  if(x instanceof MyPromise) {
    // promise对象
    // x.then(value => resolve(value), reson => reject(reson))
    x.then(resolve, reject)
  }else {
    // 普通值
    resolve(x)
  }
}