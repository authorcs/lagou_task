// pointed 函子
  // Pointed函子实现了 of 静态方法的函子
  // of方法避免使用 new 来创建对象，深层次含义是 of方法用来把值放到上下文 Context(把值放到容器中，使用map来处理值)

class Container {
  static of (value) {
    return new Container(value)
  }
}

Container.of(2)
  .map(x => x+5)