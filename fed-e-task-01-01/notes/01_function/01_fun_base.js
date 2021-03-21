// 函数式编程；用来描述数据和函数之间的映射；y -> x
// 面向对象的思维编程： 把世界中的事物抽象成程序世界的类和对象、通过封装、继承和多态来演示事物间的联系

// 纯函数： 相同的输入始终要得到相同的输出

// 函数是一等公民： 1、可以存储在变量中； 2、可以作为参数； 3、函数作为返回值

// js中函数就是一个对象(new Function())


// 1、 函数赋值给变量
let fn = function() {
  console.log('this is a function')
}
fn()

// 2、示例
const Controller = {
index(posts) {return Views.index(posts)},
show(posts) {return Views.show(posts)},
create(posts) {return Db.create(posts)},
update(posts) {return Db.update(posts)}
}

// 优化, 将函数直接赋值
const Controller = {
index: Views.index,
show: Views.show,
create: Db.create,
update: Db.update
}
