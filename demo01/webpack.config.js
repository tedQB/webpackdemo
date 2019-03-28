const path = require('path')

module.exports = { 
    entry:{ 
        app:"./src/index.js"
    },
    output:{ 
        path:path.resolve(__dirname,"dist"),
        filename:"[name].[chunkhash:8]-bundle.js",
        publicPath:"//static.app.com/app/"
    }
}