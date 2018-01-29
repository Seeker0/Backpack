let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var Pocket = mongoose.model('Pocket');

router.get('/list', async (req, res, next) => {
  try {
    let pockets = await Pocket.find({ ownerId: req.session.user._id });
    if (!user) {
      res.send(404);
    }
    pockets = pockets.map(pocket => ({
      _id: pocket._id,
      name: pocket.pocketName
    }));
    res.json(pockets);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let pocket = await Pocket.findOne({ _id: req.params.id });
    if (!pocket) {
      res.send(404);
    }
    res.json(pocket);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
