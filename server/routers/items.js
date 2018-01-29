let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var Item = mongoose.model('Item');

router.get('/list/:pocketId', async (req, res, next) => {
  try {
    let pocketId = req.params.pocketId;
    let pocket = await Pocket.find({ _id: pocketId });
    let items = await Item.find({})
      .where('_id')
      .in(pocket.itemIds);
    if (!items) {
      res.send('Add Items!');
    }
    res.json(items);
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
