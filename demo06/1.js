const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: "style-loader" // css编译后用什么来提取的loader
                    },
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true // 是否压缩
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].min.css")
        // new ExtractTextPlugin({
        //     filename: "[name].min.css", // 压缩后的名字
        // })
    ]
}