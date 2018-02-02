const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let Pouch = require("./pouch");
// let User = require("./user");

let ItemSchema = new Schema({
  name: String,
  link: String,
  ownerId: { type: Schema.Types.ObjectId, ref: "User" }
});

ItemSchema.statics.findOrCreate = async function(query, name) {
  try {
    let item = await Item.findOne(query);
    if (!item) {
      item = new Item(query);
      item.name = name;
      await item.save();
    }
    return item;
  } catch (e) {
    console.log(e);
  }
};

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
