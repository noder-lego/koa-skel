'use strict'

class InfoController {
    async index(ctx, next) {
        ctx.body = 'this is info index'
    }

}

module.exports = new InfoController