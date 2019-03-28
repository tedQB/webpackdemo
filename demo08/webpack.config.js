const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require('html-webpack-plugin');
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
        publicPath: "./", // 资源引用路径
    },
    mode: 'development', // 设置mode
    // resolve: {
    //     // 自动补全后缀，注意第一个必须是空字符串,后缀一定以点开头 
    //     // 指定extension之后可以不用在require或是import的时候加文件扩展名,会依次尝试添加扩展名进行匹配
    //    extensions: ["",".js",".css",".json"],
    //    alias: {
    //     }
    // },
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
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                    loader: "url-loader", // 解析图片
                    options: {
                        name: "[name]-[hash:5].min.[ext]",
                        limit: 10000, // size <= 20KB
                        publicPath: "static/",
                        outputPath: "static/"
                    }
                    }
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      name: "[name]-[hash:5].min.[ext]",
                      limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                      publicPath: "fonts/",
                      outputPath: "fonts/"
                    }
                  }
                ]
              },
              {    test: /\.(htm|html)$/i,
                use:[ 'html-withimg-loader'] 
           }
        ]
    },
    plugins: [
        // 压缩后CSS的名字
        new ExtractTextPlugin("app.[hash:8].min.css"),
        // 清除dist下
        //new CleanWebpackPlugin(['dist']),
        // 生成html,并且自动引入
        new htmlWebpackPlugin({
            title:"Hot Module Replacement",
            filename: "index.html",  //打包后的文件名
            template: path.join(__dirname , "./index.html")  // 可以指定模板，如果是自定义的模板需要下载对于loader
        }),
        // 热加载
        new webpack.HotModuleReplacementPlugin(), //HMR
        // 热加载更新时，返回更新的名字
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),  //启动路径
        host:'localhost',  //域名
        port: 8888,  //端口号
         // 声明为热替换
        hot: true,
        // 第一次打包时打开浏览器
        open: true,
        compress:true, //压缩,
        overlay: true // 浏览器显示错误
        //请求到 /api/users 现在会被代理到请求 http://localhost:9000/api/users。
        // proxy: {
        //     "/api": "http://localhost:9000",
        // }
    }
}