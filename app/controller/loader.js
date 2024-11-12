'use strict'

const path = require('path');
const fs = require('fs');

// Dynamic load controllers
const controllers = {};
const controllersDir = path.join(__dirname, './');
fs.readdirSync(controllersDir).forEach(file => {
    if (file.endsWith('.js')) {
        let controllerName = file.replace('.js', '');
        let controllerFile = path.join(controllersDir, file);
        controllers[controllerName] = require(controllerFile);
    }
});

module.exports = controllers