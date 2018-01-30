let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var Pouch = mongoose.model("Pouch");

router.get("/currentUser", async (req, res, next) => {
  try {
    let pouches = await Pouch.find({ ownerId: req.session.user._id });
    if (!user) {
      res.send(404);
    }
    pouches = pouches.map(pouch => ({
      _id: pouch._id,
      name: pouch.pouchName
    }));
    res.json(pouches);
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
    let { name, userId } = req.body;
    let pouch = await Pouch.create({
      ownerId: userId,
      pouchName: name,
      itemIds: []
    });
    if (!pouch) {
      res.send(500);
    }
    res.json(pouch);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    var pouchParams = {
      pouchName: req.body.name,
      ownerId: req.body.userId,
      itemIds: req.body.itemIds
    };

    let pouch = await Pouch.findByIdAndUpdate(req.params.id, pouchParams);
    res.json(pouch);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let pouch = await Pouch.findByIdAndRemove(req.params.id);
    if (!pouch) {
      res.send(500);
    }
    res.json(pouch);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

module.exports = router;
