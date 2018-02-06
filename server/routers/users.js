let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");

router.get("/", async (req, res, next) => {
  try {
    let user = await User.findById({ _id: req.session.passport.user });
    if (!user) {
      res.send(404);
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let user = await User.findOne({ _id: req.params.id });
    if (!user) {
      res.send(404);
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  console.log("+++++++++++++++");
  console.log(req.params);
  console.log("+++++++++++++++");
  try {
    let user = await User.findById(req.params.id);
    if (req.params.password) {
      user.password = req.params.password
    } else {
      user.username = req.body.name;
      user.email = req.body.email;
      user.privacy = req.body.privacy;
    }
    user = await user.save();
    res.json(user);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    let pouches = await Pouch.find()
      .where("_id")
      .in(user.pouches)
      .remove();
    if (pouches) {
      res.send(500);
    }
    user = await User.findByIdAndRemove(req.params.id);
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
