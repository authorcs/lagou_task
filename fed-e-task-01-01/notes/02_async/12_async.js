// Async 、 Await  ,标准的语法，扁平化的异步体验


async function main() {
  const users = await ajax('/api/user')
  console.log(users)

  const posts = await ajax('/api/post')
}

const promise = main()
// 返回的是标准的promise对象
promise.then(() => {
  console.log('all compolete')
})

