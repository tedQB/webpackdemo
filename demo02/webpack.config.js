const path = require("path")
// 使用babel编译ES6
module.exports = {
    entry: {
        app: "./index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 正则匹配以js结尾的文件
                use: {
                    loader: "babel-loader"
                    // option: { // babel-loader的具体配置信息写在根目录下的.babelrc中

                    // }
                },
                exclude: /node_modules/ // 排除依赖包
            }
        ]
    }
}