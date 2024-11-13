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
        controller[controllerName] = require(controllerFile);
    }
});

// load more service.

module.exports = {
    controller,
}