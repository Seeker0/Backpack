const models = require('./../models');
const mongoose = require('mongoose');
const Item = require('../models/item');
const ogs = require('open-graph-scraper');

const picTester = link => {
  let images = ['.img', '.png', '.gif', '.jpeg', '.jpg', '.pdf'];
  let pic = false;
  for (let i = 0; i < images.length; i++) {
    if (RegExp(images[i]).test(link)) {
      pic = true;
    }
    return pic;
  }
};

const itemGenerator = async (name, link, userId) => {
  let item;
  if (picTester(link)) {
    item = await new Item({ name, link, ownerId: userId, meta: {} });
    item = await item.save();
  } else {
    item = await new Promise((resolve, reject) => {
      ogs({ url: link }, (err, meta) => {
        if (err) {
          console.log('rejecting');
          reject(err);
        }
        console.log('resolving');
        resolve(meta);
      });
    })
      .then(async meta => {
        console.log(name, link, userId, meta);
        let newItem = await new Item({ name, link, ownerId: userId, meta });
        console.log(newItem);
        newItem = await newItem.save();
        return newItem;
      })
      .catch(e => console.error(e));
  }
  return item;
};

module.exports = itemGenerator;
