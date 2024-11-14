'use strict'

class Controller {
    constructor(ctx) {
      this.ctx = ctx;
    }

    get service() {
      return this.ctx.service;
    }

    get helper() {
      return this.ctx.helper;
    }
}

module.exports = {
    Controller
}
