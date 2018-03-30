const fs = require('fs');

module.exports = {
    getIndexPage: function() {
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
}