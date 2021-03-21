
function ajax(url) {

}

function * main() {
  const users = yield ajax('/api/user')
  console.log(users)

  const posts = yield ajax('/api/post')
}

const g = main()


// 封装
function handleResult(result) {
  if(result.done) return
  result.value.then(data => {
    g.next(data)
    handleResult(g.next(data))
  }, error => {
    g.throw(error)
  })
}
handleResult(g.next())


// 封装处理生成器
function co(generator) {
  const g = generator()
  function handleResult(result) {
    if(result.done) return
    result.value.then(data => {
      g.next(data)
      handleResult(g.next(data))
    }, error => {
      g.throw(error)
    })
  }
  handleResult(g.next())
}
co(main)

// 社区中完善的库  co ， 让异步调用回归的扁平化