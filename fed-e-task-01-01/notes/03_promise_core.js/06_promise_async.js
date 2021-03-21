const PENDING = 'PENDING';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

// promise,同步、异步
class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  status = PENDING;
  value = undefined;
  error = undefined;
  successCalback= [];
  failCallBack = [];
  resolve = value => {
    if(this.status !== PENDING) return
    this.status = FULFILLED
    this.value = value;
    while(this.successCalback.length) this.successCalback.shift()(this.value)
  }
  reject = error => {
    if(this.status !== PENDING) return
    this.status = REJECTED;
    this.error = error;
    while(this.failCallBack.length) this.failCallBack.shift()(this.error)
  }
  then(successCalback, failCallBack) {
    if(this.status === FULFILLED) {
      successCalback(this.value)
    }else if(this.status === REJECTED) {
      failCallBack(this.error)
    }else {
      this.successCalback.push(successCalback)
      this.failCallBack.push(failCallBack)
    }
  }
}

let promise = new MyPromise( (resolve, reject) => {
  setTimeout(() => {
    resolve('成功.....')
    // reject('失败')
  }, 2000);
  // resolve('成功')
})
console.log('1')
promise.then(res => {
  console.log('res1', res)
}, error => {
  console.log('error1', error)
})

promise.then(res => {
  console.log('res2', res)
}, error => {
  console.log('error2', error)
})

promise.then(res => {
  console.log('res3', res)
}, error => {
  console.log('error3', error)
})
console.log('2')