const path = require('path')

module.exports = {
    mode: "development",
    entry: ['@babel/polyfill', './client/index.js'],
    devtool: "source-map",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}