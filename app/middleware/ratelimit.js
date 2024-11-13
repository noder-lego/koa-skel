'use strict'

const ratelimit = require('koa-ratelimit');

// apply rate limit
const db = new Map();

module.exports = ratelimit({
    driver: 'memory',
    db: db,
    duration: 60000,
    errorMessage: 'Visits are too frequent, take a break.',
    id: (ctx) => ctx.ip,
    headers: {
        remaining: 'Rate-Limit-Remaining',
        reset: 'Rate-Limit-Reset',
        total: 'Rate-Limit-Total'
    },
    max: 60,
    disableHeader: false,
    whitelist: (ctx) => {
        // some logic that returns a boolean
    },
    blacklist: (ctx) => {
        // some logic that returns a boolean
    }
})
