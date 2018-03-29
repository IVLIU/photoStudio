const fs = require('fs');
const path = require('path');

// module.exports = function() {
//     let entries = {};
//     let files = fs.readdirSync('./src/scripts');
//     files.forEach(file => {
//         entries[path.basename(file, '.js')] = `./src/scripts/${file}`
//     })
//     return entries;
// }

module.exports = {
    entriesJs: function() {
        let entriesJs = {};
        let files = fs.readdirSync('./src/scripts');
        files.forEach(file => {
            entriesJs[path.basename(file, '.js')] = `./src/scripts/${file}`
        })
        return entriesJs;
    },
    entriesCss: function() {
        let entriesCss = {};
        let files = fs.readdirSync('./src/styles');
        files.forEach(file => {
            entriesCss[path.basename(file, '.css')] = `./src/styles/${file}`;
        })
        return entriesCss;
    }
}