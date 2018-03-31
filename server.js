const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const path = require('path');
const fs = require('fs');

const routes = require('./server/router/router');

const app = new Koa();
const router = new Router();

const PORT = 3000;
const DIST = 'dist'

app.use(static(path.resolve(__dirname, DIST)));

routes(router);

router.get('/*', async ctx => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./error.html');
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`the server ran at PORT ${PORT}`));