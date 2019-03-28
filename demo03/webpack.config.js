
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path")

// 多页面打包，提取公共代码
module.exports = {
    entry: {
        a: './a.js',
        b: './b.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[name].chunk.js", // 非入口打包文件
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: { //抽取公共模块
                name: 'common', // 提取公共chunk的名字
                priority: 0, // 缓存优先级
                chunks: 'initial', // 作用范围
                minChunks: 2,//最小引用2次
                minSize: 0 // 只要超出0字节就生成一个新包
              },
              vendor: { //抽取公共库
                name: "vendor",
                test: /node_modules/,
                chunks: "initial",
                priority: 10,
                chunks: 'all'
              }
          }
        }
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}