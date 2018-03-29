const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const { entriesJs, entriesCss } = require('./config/entry');

module.exports = {
    entry: {
        ...entriesJs(), ...entriesCss()
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'styles/[name].[hash].css' //放到dist/css/下
        }),
    ]
}