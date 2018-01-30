let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var User = mongoose.model('User');

module.exports = router;
