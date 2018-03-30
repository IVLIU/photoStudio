const fs = require('fs');
const path = require('path');

// module.exports = {
//     entriesJs: function() {
//         let entriesJs = {};
//         let files = fs.readdirSync('./src/scripts');
//         files.forEach(file => {
//             entriesJs[path.basename(file, '.js')] = `./src/scripts/${file}`
//         })
//         return entriesJs;
//     },
//     entriesCss: function() {
//         let entriesCss = {};
//         let files = fs.readdirSync('./src/styles');
//         files.forEach(file => {
//             entriesCss[path.basename(file, '.css')] = `./src/styles/${file}`;
//         })
//         return entriesCss;
//     }
// }

module.exports = {
    entries: function() {
        let entries = {};
        let filesJs = fs.readdirSync('./src/scripts');
        let filesCss = fs.readdirSync('./src/styles');
        filesJs.forEach(file => {
            entries[path.basename(file, '.js')] = [`./src/scripts/${file}`]
        })
        filesCss.forEach(file => {
            entries[path.basename(file, '.css')].push(`./src/styles/${file}`)
        })
        return entries;
    },
}