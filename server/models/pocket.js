'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = require('./user');
let Item = require('./item');

var PocketSchema = new Schema({
  pocketName: String,
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
  itemIds: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

var Pocket = mongoose.model('Pocket', PocketSchema);
module.exports = Pocket;
