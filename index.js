const Koa = require('koa');
const router = require('./app/router')
const corsMiddleware = require('./app/middleware/cors')
const ratelimitMiddleware = require('./app/middleware/ratelimit')
const app = new Koa();

app.use(corsMiddleware)
app.use(ratelimitMiddleware)

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(7100, () => {
  console.log('Server is running on http://localhost:7100');
});
