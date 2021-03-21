function makeFn() {
  let msg = 'hello word'
  return function() {
    console.log(msg + '1')
  }
}
const fn = makeFn()
fn()
fn()
fn()


function makePower(power) {
  return function(number) {
    return Math.pow(number, power)
  }
}