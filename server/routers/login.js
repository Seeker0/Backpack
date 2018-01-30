let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let models = require('./../models');
let User = mongoose.model('User');

// ----------------------------------------
// Passport
// ----------------------------------------

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// ----------------------------------------
// Routes for /login
// ----------------------------------------

router.post(
  '/',
  passport.authenticate('local', (req, res, next) => {
    try {
      res.json(req.user);
    } catch (e) {
      next(e);
    }
  })
);

module.exports = router;
