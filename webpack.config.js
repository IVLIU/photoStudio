const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const entries = require('./config/entry');

module.exports = {
    entry: {
        ...entries()
    },
    output: {
        path: path.join(__dirname, 'dist/scripts'),
        filename: '[name].[hash].js'
    }
}