const fs = require('fs');
const path = require('path');

const STATIC = './dist';

function getFile(dirName) {
    let files = fs.readdirSync(dirName);
    files = files.filter(file => {
        let stat = fs.statSync(`${STATIC}/${file}`);
        if(stat.isFile()) {
            return file;
        }
    })
    return files;
}

function getRoute(routes) {
    let routeMap = new Map();
    routes.forEach(route => {
        routeMap.set(route.split('.')[0], route);
    })
    return routeMap;
}

module.exports = {
    getFile: getFile,
    getRoute: getRoute
};