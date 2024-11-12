'use strict'

const Router = require('@koa/router');
const router = new Router();
const controller = require('./controller/loader');

// Your routes here
router.get('/site/index', controller.site.index);
router.get('/info/index', controller.info.index);

module.exports = router
