// 单页面，提取代码 需要通过代码分割和懒加载
// 使用import()或者require.ensure()
// import(/* webpackChunkName: 'subPageA'*/ "./subPageA").then(function(subPageA) {
//     console.log(subPageA);
//   });
  
// import(/* webpackChunkName: 'subPageB'*/ "./subPageB").then(function(subPageB) {
//     console.log(subPageB);
//   });
  
// import(/* webpackChunkName: 'lodash'*/ "lodash").then(function(_) {
//     console.log(_.join(["1", "2"]));
//   });

require.ensure(
  ["./subPageA.js", "./subPageB.js"],
  function () {
    var subPageA = require("./subPageA");
    var subPageB = require("./subPageB");
    console.log("subPage加载")
  },
  "subPage"
);

require.ensure(
  ["lodash"],
  function () {
    var _ = require("lodash");
    _.join(["1", "2"]);
  },
  "vendor"
);