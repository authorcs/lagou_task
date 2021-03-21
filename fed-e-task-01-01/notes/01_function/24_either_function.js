// Either函子 ，两者中的任何一个，  类似 if...else...的处理
  // 异常会让函数变的不纯，Either函数可以用做异常处理

class Left {
  static of(value) {
    return new Left(value)
  }
  constructor (value) {
    this._value = value
  }
  map(fn) {
    return this
  }
}

class Right {
  static of(value) {
    return new Right(value)
  }
  constructor (value) {
    this._value = value
  }
  map(fn) {
    return Right.of(fn(this._value))
  }
}

// let r1 = Right.of(12).map( x => x + 2)
// let r2 = Left.of(12).map(x => x + 2)

// console.log(r1)
// console.log(r2)

function parseJSON (str) {
  try {
    return Right.of(JSON.parse(str))
  } catch (e) {
    return Left.of({error: e.message})
  }
}

let r = parseJSON('{name: zs}')
console.log(r)

let r1 = parseJSON('{"name": "zs"}')
    .map(x => x.name.toUpperCase())
console.log(r1)