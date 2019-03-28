
// babel-loader使用@babel/core进行转换 仅仅是语法,@babel/presets-env表示语法遵循的规则
// @babel/runtime配合 @babel/plugin-transform-runtime，自动按需引入polyfill
let a = 1
let b = 2
console.log(a + b)
let d = [1, 1, 2, 2, 3, 3, 4, 4]
let newArr = Array.from(new Set(d))
console.log(newArr)
console.log(Array.from("foo"))

import { parse } from 'babylon'