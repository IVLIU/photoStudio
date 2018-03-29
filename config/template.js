const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    templates: function() {
        let templates = [];
        let files = fs.readdirSync('./src');
        files.forEach(file => {
            let stat = fs.statSync(`./src/${file}`);
            stat.isFile() && templates.push(new HtmlWebpackPlugin({
                title: path.basename(file, '.html'),
                filename: `${path.basename(file, '.html')}.[hash].html`,
                template: `./src/${file}`,
                chunks: [`${path.basename(file, '.html')}`]
            }))
        })
        return templates;
    }
}