module.exports = {
    entry: [
        "./utils",
        "./app.js"
    ],
    output: {
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:'jshint-loader',
                enforce:'pre',
                exclude:/node_modules/
            },
            {
                test: /\.es6$/,
                use: "babel-loader",
                exclude:/node_modeules/
            }
        ]
    },
    resolve:{
        extensions: ['.js','.es6']
    }
}