
function p1() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('p1')
    }, 2000);
  })
}

function p2() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('p1')
    }, 2000);
  })
}
Promise.all(['a', 'b', p1(), p2(), 'c']).then( result => {
  // result => ['a', 'b', 'p1', 'p2', 'c']
})
