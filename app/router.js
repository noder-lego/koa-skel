'use strict'

const Router = require('@koa/router');
const router = new Router();

// Dynamic load controllers
const { controller } = require('./loader');
const autoBindCtx = require('./middleware/autobindctx');

// Your routes here. New style with auto bind ctx.
const routes = [
    { method: 'get', path: '/info/index', controller: controller.info, action: 'index' },
    { method: 'get', path: '/site/index', controller: controller.site, action: 'index' },
];
routes.forEach(route => {
    router[route.method](route.path, autoBindCtx(route.controller, route.action));
});

// Your routes here. Old style without auto bind ctx.
// router.get('/site/index', controller.site.index);
// router.get('/info/index', controller.info.index);

module.exports = router
