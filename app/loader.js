'use strict'

const path = require('path');
const fs = require('fs');

// Dynamic load controllers.
const controller = {};
const controllerDir = path.join(__dirname, './controller');
fs.readdirSync(controllerDir).forEach(file => {
    if (file.endsWith('.js')) {
        let controllerName = file.replace('.js', '');
        let controllerFile = path.join(controllerDir, file);

        const controllerClass = require(controllerFile);

        if (typeof controllerClass === 'function') {
            // 使用 Proxy 对象来拦截控制器方法的调用。
            // 当访问控制器方法时，返回一个新的异步函数，该函数在调用时会实例化控制器并传递 ctx，然后调用相应的方法并传递 next。

            // 直接将 controllerClass 实例化后作为 target 传入 Proxy 构造函数
            // controller[controllerName] = new Proxy(new controllerClass(), {
            //     get: (target, prop) => {
            //         if (typeof target[prop] === 'function') {
            //             return async (ctx, next) => {
            //                 const controllerInstance = new controllerClass(ctx); // 实例化 Controller 时传递 ctx
            //                 await controllerInstance[prop](next); // 调用控制器方法并传递 next
            //             };
            //         }
            //         return target[prop];
            //     }
            // });

            // 从性能和内存使用的角度来看，只代理 controllerClass.prototype 上的方法，因此只有一个代理对象
            controller[controllerName] = new Proxy({}, {
                get: (target, prop) => {
                    if (typeof controllerClass.prototype[prop] === 'function') {
                        return async (ctx, next) => {
                            const controllerInstance = new controllerClass(ctx); // 实例化 Controller 时传递 ctx
                            await controllerInstance[prop](next); // 调用控制器方法并传递 next
                        };
                    }
                    return target[prop];
                }
            });
        } else {
            console.error(`Invalid controller class: ${controllerFile}`);
        }

    }
});

// load more service.

module.exports = {
    controller,
}