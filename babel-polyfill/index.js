

require("babel-polyfill")

//优化，只引入一个
require('core-js/modules/es6.array.from');


var arr = Array.from("foo")

console.log(arr)