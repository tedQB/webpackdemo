// css
const path = require("path")
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]// 如果每个loader有配置，可以以对象形式书写
            }
        ]
    }
}