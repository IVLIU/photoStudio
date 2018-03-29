const fs = require('fs');
const path = require('path');

module.exports = function() {
    let entries = {};
    let files = fs.readdirSync('./src/scripts');
    files.forEach(file => {
        entries[path.basename(file, '.js')] = `./src/scripts/${file}`
    })
    return entries;
}