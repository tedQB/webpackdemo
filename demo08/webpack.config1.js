const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = { 
    entry:{ 
        app:'./src/app.js'
    },
    output:{ 
        filename:'app.[hash:8].bundle.js',
        path:path.resolve(__dirname,'dist'),
        chunkFilename:'[name].chunk.js',
        publicPath:'./'
    },

    module:{ 
        rules:[
            { 
                test:/\.css$/,
                use:ExtractTextPlugin.extract({ 
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            { 
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    { 
                        loader:'url-loader',
                        options:{ 
                            name:'[name]-[hash:5].min.[ext]',
                            limit:10000,
                            publicPath:'/static',
                            outputPath:'/static'
                        }
                    }
                ]
            },
            { 
                test:/\.(eot|woff2?|ttf|svg)$/,
                use:[
                    { 
                        loader:'url-loader',
                        options:{ 
                            name:'[name]-[hash:5].min.[ext]',
                            limit:5000,
                            publicPath:'fonts/',
                            outputPath:'fonts/'
                        }
                    }
                ]
            },
            { 
                test:/\.(htm|html)/i,
                use:['html-withimg-loader']
            }
        ]
    },
    plugins:[ 
        // 压缩后CSS的名字
        new ExtractTextPlugin("app.[hash:8].min.css"),
        
        new htmlWebpackPlugin({ 
            filename:'index.html',
            template:path.join(__dirname,'./index.html')
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()

    ],
    devServer:{ 

        contentBase: path.join(__dirname, 'dist'),  //启动路径
        host: 'localhost',  //域名
        port: 8888,  //端口号
        // 声明为热替换
        hot: true,
        // 第一次打包时打开浏览器
        open: true,
        compress: true, //压缩,
        overlay: true // 浏览器显示错误
        //请求到 /api/users 现在会被代理到请求 http://localhost:9000/api/users。
        // proxy: {
        //     "/api": "http://localhost:9000",
        // }

    }


}