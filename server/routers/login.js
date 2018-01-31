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

// router.post('/', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     return res.json({ success: true, message: 'User found', user, info });
//   })(req, res, next);
// });

router.post('/', passport.authenticate('local'), function(req, res) {
  console.log('callback called');
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  return res.json(req.user);
});

module.exports = router;
