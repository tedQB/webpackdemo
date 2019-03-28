const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={ 
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
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo',
        })
    ]
}