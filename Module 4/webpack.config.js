var path = require('path'); //CommonJs syntax
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared');

module.exports = {
    context: path.resolve('js'), //Path of js files
    // entry: ["./utils", "./app"], //Entry point, needs to be both utils and app.
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
    },

    plugins: [commonsPlugin],
    devServer: {
        contentBase: 'public'
    },
    module: {
        rules: [
            /* {
                 test: /\.js$/,
                 use: 'jshint-loader',
                 enforce: 'pre',
                 exclude: /node_modules/
             },*/ //This will make suggestions for coding practices
            {
                //Loads es6 files...
                test: /\.es6$/,
                use: "babel-loader",
                exclude: /node_modeules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}