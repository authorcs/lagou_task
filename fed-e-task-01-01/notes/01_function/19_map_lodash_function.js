// lodash 和 lodash/fp 模块中 map 方法的区别

const _ = require('lodash')

// map 接收一定是元素，第二个是索引，第三个时元素
console.log(_.map(['23.3', '8', '10'], parseInt))
// parseInt('23', 0, array)


const fp = require('lodash/fp')
console.log(fp.map(parseInt ,['23', '8', '10']))