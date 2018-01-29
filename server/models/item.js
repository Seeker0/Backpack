const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pocket = require('./pocket');

let ItemSchema = new Schema({
  itemName: String,
  link: String
});

ItemSchema.statics.findOrCreate = async function(query, itemName) {
  try {
    let item = await Item.findOne(query);
    if (!item) {
      item = new Item(query);
      item.itemName = itemName;
      await item.save();
    }
    return item;
  } catch (e) {
    console.log(e);
  }
};

var Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
