'use strict'

class SiteController {
    async index(ctx, next) {
        ctx.body = 'this is site index'
    }
    
}

module.exports = new SiteController