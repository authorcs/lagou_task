const _ = require('lodash')

var arr = [1,2,3,4,5,6,7]
console.log(_.chunk(arr, 2))  // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
console.log(_.chunk(arr, 3))  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]


var arr1 = [1,2,false, 0 ,null, undefined]
console.log(_.compact(arr1))

console.log(_.now())

