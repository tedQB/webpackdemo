var babel = require("@babel/core");
require("babel-plugin-transform-runtime")

/*
var d1 = babel.transform("code();");

console.log(d1);


babel.transformFile("http.js", { }, function (err, result) {
    
    console.log(result);
    
});
*/
var d2 = babel.transformFileSync("http.js");

console.log('d2',d2);
