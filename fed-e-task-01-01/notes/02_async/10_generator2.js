// Generator 配合 promise 的异步方案

function ajax(url) {

}

function * main() {
  const users = yield ajax('/api/user')
  console.log(users)

  const posts = yield ajax('/api/post')
}

const g = main()
const result = g.next()  // 执行yield后面的方法

result.value.then(data => {
  const result2 = g.next(data)
  if(result2.done) return  // 如果没有yield的了  就结束了
  result2.value.then(data => {
    g.next(data)
  })
})