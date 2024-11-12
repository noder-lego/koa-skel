const cors = require('@koa/cors');

module.exports = cors({
    origin: function (ctx) {
        let allows = [
        ];
        if (ctx.request.header.origin) {
            if (allows.includes(ctx.request.header.origin)) {
                return ctx.request.header.origin;
            }
        } else {
            return '';
        }
    },
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // headers: ['Content-Type', 'Authorization'],
    // exposedHeaders: ['X-Total-Count'],
    // credentials: true,
    // maxAge: 3600
});