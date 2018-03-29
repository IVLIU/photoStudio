const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const fs = require('fs');
const { entriesJs, entriesCss } = require('./config/entry');
const { templates } = require('./config/template');

function getIndexPage() {
    let filename = '';
    let files = [];
    try {
        files = fs.readdirSync('./dist');
        files.forEach(file => {
            if(~file.indexOf('index')) {
                filename = file;
            }
        })
    } catch(e) {
        return 'index.html'
    }
    return filename;
}

module.exports = {
    entry: {
        ...entriesJs(), ...entriesCss()
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/[name].[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 图片输出的路径
                        limit: 5 * 1024
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'styles/[name].[hash].css'
        }),
        new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
        new UglifyjsWebpackPlugin(),
        ...templates()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        host: 'localhost',
        overlay: true,
        compress: true,
        hot: true,
        inline: true,
        openPage: getIndexPage()
    },
}