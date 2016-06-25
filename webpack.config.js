var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/dev-server",
        "./src/app.js"
    ],
    output: {
        path: __dirname + "/lib",
        filename: "app.js",
        publicPath: "/assets"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}