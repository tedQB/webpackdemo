var path = require("path");
module.exports = {
    entry: './index2.js',
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'index2.compiled.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["env"]
            }
        }]
    }
} 