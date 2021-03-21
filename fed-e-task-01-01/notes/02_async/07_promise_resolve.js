// Promise静态方法

function ajax(url) {

}


Promise.resolve('foo')
  .then(function(value) {

  })
// == promis包装后等价于
new Promise(function(resolve, reject) {
  resolve('foo')
})


var promise = ajax('/api/user')
var promise2 = Promise.resolve(promise)
console.log(promise === promise2)  // true


Promise.resolve({
  then: function(onFuilled, onRejected) {
    onFuilled('foo')
  }
})
.then(function(value) {
  console.log(value)
})