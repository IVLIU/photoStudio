const fs = require('fs');
const { getRoute, getFile } = require('../util/formate');

function routes(router) {
    for(let [i, v] of getRoute(getFile('./dist'))) {
        router.get(`/${i}`, async ctx => {
            ctx.type = 'html';
            ctx.body = fs.createReadStream(`./dist/${v}`);
        })
    }
}

module.exports = routes;