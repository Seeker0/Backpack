let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var User = mongoose.model('User');

router.get('/', async (req, res, next) => {
  try {
    let user = await User.findOne({ _id: req.session.user._id });
    if (!user) {
      res.send(404);
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
