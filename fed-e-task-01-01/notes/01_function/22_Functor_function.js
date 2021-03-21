// 函子 Functor ：包含值和值的变形关系（这个变形关系就是函数）
  // 一个特殊的容器，通过一个普通对象来实现，该对象有map方法，map方法可以运行一个函数对值进行处理（变形关系）


//   class Container {
//     constructor (value) {
//       this._value = value
//     }

//     map(fn) {
//       return new Container(fn(this._value))
//     }
//   }

// let r =  new Container(5)
//     .map( x => x + 1)
//     .map( x => x * x)
// console.log(r)


class Container {
  static of (value) {
    return new Container(value)
  }
  constructor (value) {  // 函子内部位数的值，不对外公布
    this._value = value
  }

  map(fn) {  // 想处理内部的值，需要通过给map方法传递一个函数进行处理
    return new Container(fn(this._value))
  }
}
let r = Container.of(5)
        .map(x =>  x + 1)
        .map(x => x * x)
console.log(r)

// 函数式变成不直接操作值，而是由函子来完成
  // 1、 函子就是一个实现了 map 契约的对象
  // 2、 我们可以把函子想象成一个盒子，这个盒子里封装一个值
  // 3、 想要处理盒子中的值，我们需要给盒子的map方法传递一个处理值的函数，由函数对值进行处理
  // 4、 最终map方法返回一个包含新值的函子，可以链式编程