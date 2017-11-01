
var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/Article.component.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},


            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
}