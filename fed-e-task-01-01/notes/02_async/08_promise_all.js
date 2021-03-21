// promise 异步执行顺序，红任务、微任务（在程序结束后就执行了）

function ajax(url) {

}

ajax('/api/user.json')
ajax('/api/posts.json')


// 合并执行
// Promise.all 等待所有任务完成才结束

var promise = Promise.all([
  ajax('/api/user.json'),
  ajax('/api/posts.json')
])

promise.then(function(values) {
  console.log(values) // 返回的是数组
})
.catch(function(error) {
  console.log(error)
})



// url.json ,  提取所有要一起调用的接口
// {
//   "users": "/api/user.json",
//   "posts": "/api/posts.json"
// }
ajax('/api/url.json')
  .then(value => {
    const urls = Object.values(value)
    const tasks = urls.map(url => ajax(url))
    return Promise.all(tasks)
  })
  .then(values => {
    console.log(values)
  })

  // Promise.race() ，以第一个结束为准，就算完成了
