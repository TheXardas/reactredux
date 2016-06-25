var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var config = require("./webpack.config.js");

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: false
});
server.listen(8080, 'localhost', function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Open: http://localhost:8080")
});