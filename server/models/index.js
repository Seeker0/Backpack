"use strict";

var models = {};

// Load models and attach to models here
models.User = require("./user");
models.Pouch = require("./pouch");
models.Item = require("./item");

module.exports = models;
