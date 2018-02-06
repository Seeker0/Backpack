let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let models = require("./../models");
let User = mongoose.model("User");

// ----------------------------------------
// Passport
// ----------------------------------------

const passport = require("../config/passport");

// ----------------------------------------
// Routes for /login
// ----------------------------------------

router.post("/facebook", async function(req, res) {
  try {
    let user = await User.findOrCreate({
      email: req.body.email,
      facebookId: req.body.id
    });
    user.username = req.body.name;
    user = await user.save();
    req.login(user, function(err) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(req.user);
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

router.post("/google", async function(req, res) {
  try {
    let user = await User.findOrCreate({
      email: req.body.profileObj.email,
      googleId: req.body.profileObj.googleId
    });
    user.username = req.body.profileObj.name;
    user = await user.save();
    req.login(user, function(err) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(req.user);
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

router.post("/", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  return res.json(req.user);
});

module.exports = router;
