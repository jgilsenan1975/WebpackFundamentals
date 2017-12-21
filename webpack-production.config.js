var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    use: WebpackStrip.loader('console.log'),
    exclude: /node_modules/
}

devConfig.module.rules.push(stripLoader);
module.exports = devConfig;