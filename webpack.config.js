var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: [
        "babel-polyfill",
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"],
                include: __dirname + "/src"
            },
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]}
        ]
    }
};