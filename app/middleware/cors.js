'use strict'

const cors = require('@koa/cors');

module.exports = cors({
    origin: function (ctx) {
        let allows = [
        ];
        if (ctx.request.header.origin) {
            if (allows.includes(ctx.request.header.origin)) {
                return ctx.request.header.origin;
            }
        }
        return '';
    },
    // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    // exposeHeaders: ['Content-Type', 'Authorization'],
    // allowHeaders: ['X-Total-Count'],
    // maxAge: 3600,
    // credentials: true,
    // keepHeadersOnError: false,
    // secureContext: false,
    // privateNetworkAccess: false
});