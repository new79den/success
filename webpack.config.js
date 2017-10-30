/**
 * Created by denis.korniychuk on 10/30/17.
 */
var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
}