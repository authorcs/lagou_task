// 传值出现异常的副作用，  如 传入null， Container.of(null)

// MayBe函子

class MayBe {
  static of (value) {
    return new MayBe(value)
  }

  constructor (value) {
    this._vaule = value
  }

  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._vaule))
  }

  isNothing () {
    return this._vaule === null || this._vaule === undefined
  }
}

// let r = MayBe.of('hello world')
//   .map(x => x.toUpperCase())
// console.log(r)

// let r = MayBe.of(null)
//   .map(x => x.toUpperCase())
// console.log(r)

let r = MayBe.of(null)
  .map(x => x.toUpperCase())
  .map(x => null)
  .map(x => x.split(' '))
console.log(r)
// 可以解决null的问题，多次调用的时候不知道是哪次出现的null问题