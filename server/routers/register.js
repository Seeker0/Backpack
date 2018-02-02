let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");

// ----------------------------------------
// Routes for /register
// ----------------------------------------

router.post("/", async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    let user = await new User({
      username,
      email,
      password,
      pouches: [],
      unsortedItems: []
    });

    await user.save();
    if (!user) {
      res.send(500);
    }
    res.json(user);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

module.exports = router;
