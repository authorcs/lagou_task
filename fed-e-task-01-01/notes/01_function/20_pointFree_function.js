// PointFree：处理定义过程与数据无关的合成运算，
  // 1、不需要指明处理的数据
  // 2、只需要合成运算过程
  // 3、需要定义一些辅助的基本运算函数


  // Hello World  => hello_world

  // 非 pointFree 模式
  function f(word) {
    return word.toLowerCase().replace(/\s+/g, '-')
  }

  // pointFree模式
  const fp = require('lodash/fp')
  const f = fp.flowRight(fp.replace(/\s+/g, '_') ,fp.toLower)

  console.log(f('hello-----world'))