'use strict'

const { Controller } = require('../controller.js')

class SiteController extends Controller {
    async index() {
        let { ctx } = this
        ctx.body = 'this is site index'
    }

}

module.exports = SiteController
