const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = { 
    entry:{ 
        app:'./src/app.js'
    },
    output:{ 
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{ 
        rules:[
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({ 
                    fallback:{ 
                        loader:'style-loader'
                    },
                    use:[
                        {
                            loader:'css-loader',
                            options:{ 
                                minimize:true
                            }
                        },
                        { 
                            loader:'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('[name].min.css')
    ]
}