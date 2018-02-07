const models = require('./../models');
const mongoose = require('mongoose');
const Item = require('../models/item');
const ogs = require('open-graph-scraper');
const urlRegex = require('url-regex');

const picTester = link => {
  let images = ['.img', '.png', '.gif', '.jpeg', '.jpg', '.pdf'];
  let pic = false;
  for (let i = 0; i < images.length; i++) {
    if (RegExp(images[i]).test(link)) {
      pic = true;
    }
  }
  return pic;
};

const itemGenerator = async (name, link, userId) => {
  let item;
  if (!urlRegex({ exact: true, strict: false }).test(link)) {
    console.log('is a string');
    item = await new Item({
      name,
      link,
      ownerId: userId,
      meta: { data: { ogType: 'string', string: link } }
    });
    item = await item.save();
    console.log(item);
  } else if (picTester(link)) {
    item = await new Item({
      name,
      link,
      ownerId: userId,
      meta: { data: { ogType: 'pic' } }
    });
    item = await item.save();
  } else {
    item = await new Promise((resolve, reject) => {
      ogs({ url: link }, (err, meta) => {
        if (err) {
          console.log('rejecting');
          reject(err);
        } else {
          console.log('resolving');
          resolve(meta);
        }
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
