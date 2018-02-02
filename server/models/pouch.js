"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let User = require("./user");
// let Item = require("./item");

var PouchSchema = new Schema({
  name: String,
  ownerId: { type: Schema.Types.ObjectId, ref: "User" },
  itemIds: [{ type: Schema.Types.ObjectId, ref: "Item" }]
});

var Pouch = mongoose.model("Pouch", PouchSchema);
module.exports = Pouch;
