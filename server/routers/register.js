let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");
var Pouch = mongoose.model("Pouch");

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
      pouches: []
    });

    let unsortedItems = await new Pouch({
      name: "Unsorted Items",
      itemIds: [],
      ownerId: user._id
    });

    unsortedItems = await unsortedItems.save();
    user.pouches.push(unsortedItems);
    user = await user.save();

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
