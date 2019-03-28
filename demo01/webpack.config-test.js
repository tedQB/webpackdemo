const path = require("path")
// 打包原生js
module.exports = {
    entry: {
        app: "./src/index.js" // 打包入口
    },
    output: {
        path: path.resolve(__dirname, "dist"),// 输出路径,path.resolve解析为绝对路径
        filename: "[name]-bundle.js", //可以使用占位符，确保唯一
    }
}