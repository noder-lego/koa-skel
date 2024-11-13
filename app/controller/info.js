'use strict'

const { Controller } = require('../controller.js')

class InfoController extends Controller {
    async index() {
        let { ctx } = this
        ctx.body = 'this is info index'
    }

}

module.exports = InfoController
