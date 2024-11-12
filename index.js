const Koa = require('koa');
const router = require('./app/router')
const corsMiddleware = require('./app/middleware/cors')
const app = new Koa();

app.use(corsMiddleware)

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(7100, () => {
  console.log('Server is running on http://localhost:7100');
});
