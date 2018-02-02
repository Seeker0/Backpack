let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var Item = mongoose.model("Item");
var Pouch = mongoose.model("Pouch");
var User = mongoose.model("User");

router.get("/list/:pouchId", async (req, res, next) => {
  try {
    let pouchId = req.params.pouchId;
    let pouch = await Pouch.findById({ _id: pouchId });
    let items = await Item.find({})
      .where("_id")
      .in(pouch.itemIds);
    if (!items) {
      res.send(404);
    }
    res.json(items);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let pouch = await Pouch.findOne({ _id: req.params.id });
    if (!pouch) {
      res.send(404);
    }
    res.json(pouch);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { name, link } = req.body;
    let userId = req.session.passport.user;
    let item = await new Item({ name, link, ownerId: userId });
    item = await item.save();
    if (req.body.pouchId) {
      let pouch = await Pouch.findById(req.body.pouchId);
      pouch.itemIds.push(item._id);
      await pouch.save();
    } else {
      let user = await User.findById(userId);
      let unsortedItems = await Pouch.findById(user.pouches[0]);
      unsortedItems.itemIds.push(item._id);
      await unsortedItems.save();
      user = await user.save();
    }
    res.json(item);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let pouch = await Pouch.findById(req.body.pouchId);
    pouch.itemIds = pouch.itemIds.filter(id => {
      return id.toString() !== req.params.id;
    });

    pouch = await pouch.save();
    let item = await Item.findById(req.params.id);
    await item.remove();
    res.json(pouch);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

module.exports = router;
