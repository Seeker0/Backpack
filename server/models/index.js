'use strict';

var models = {};

// Load models and attach to models here
models.User = require('./user');
models.Pocket = require('./pocket');
models.Item = require('./item');

module.exports = models;
