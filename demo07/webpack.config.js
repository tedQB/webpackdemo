const path = require("path")
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        filename: "app.[hash:8].bundle.js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].chunk.js",
        publicPath: __dirname + "/dist/",
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: {
                loader: "style-loader", // 编译后使用style插入
                options: {
                  singleton: true
                }
              },
              use: {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              }
            })
          }
        ]
      },
    plugins: [
        new ExtractTextPlugin("app.[hash:8].min.css"),
        new PurifyCSS({
          paths: glob.sync([
            // 要做CSS Tree Shaking的路径文件
            path.join(__dirname, ".html"),
            path.join(__dirname, "src/*.js")
          ])
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    // plugins: [extractTextPlugin, purifyCSS],
    // 丑化js 自动
    mode: "production"
}
