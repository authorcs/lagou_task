// once函数，使函数只执行一次; 例如支付的时候

// arguments ,类数组对象;arguments对象是所有（非箭头）函数中都可用的局部变量
  // 伪数组转换为数组
    // var args = Array.prototype.slice.call(arguments);
    // var args = [].slice.call(arguments);

    // ES2015
    // const args = Array.from(arguments);
    // const args = [...arguments];


function once(fn) {
  let done = false
  return function() {
    if(!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function(money) {
  console.log('支付了...', money)
})
pay(5)
pay(5)

