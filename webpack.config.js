module.exports = {
    entry: [
        "./utils",
        "./app.js"
    ],
    output: {
        filename:"bundle.js"
    },
    module:{
        preLoaders:[
            {
                test: /\.js$/,
                exclude:'node_modules',
                loader:'jshint-loader'

            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude:'node_modules',
                loader:'jshint-loader'

            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    resolve:{
        extensions: ['','.js','.es6']
    }

}