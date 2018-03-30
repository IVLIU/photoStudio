const Koa = require('koa');
const Router = require('koa-router');
const staticServer = require('koa-static');

const router = require('./routers/route');

const path = require('path');
const fs = require('fs');

const app = new Koa();
const router = new Router();
const PORT = 3000;

app.use(staticServer(path.join(__dirname, 'dist')));

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => console.log(`the server is running at ${PORT}`));