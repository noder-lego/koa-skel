'use strict'

// Dynamic bind ctx to controller
const autoBindCtx = (ControllerClass, action) => {
    return async (ctx, next) => {
        const controllerInstance = new ControllerClass(ctx); // 实例化 Controller
        await controllerInstance[action](next);
    };
};

module.exports = autoBindCtx