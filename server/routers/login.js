let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let models = require("./../models");
let User = mongoose.model("User");

// ----------------------------------------
// Passport
// ----------------------------------------

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// ----------------------------------------
// Routes for /login
// ----------------------------------------

router.post("/", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  return res.json(req.user);
});

module.exports = router;
