const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('../models');

const mongodbUrl = 'mongodb://localhost/pockets_development';

const { User, Pouch, Item } = require('../models');

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const users = [];
    const pouches = [];
    const items = [];

    for (let i = 0; i < 10; i++) {
      const user = new User({
        username: `hooligan${i}`,
        email: `${i}is@nobodycares.com`,
        passwordHash: '',
        pouches: []
      });
      user.set('password', `password${i}`);
      users.push(user);
    }

    for (let i = 0; i < 20; i++) {
      let user = users[i % users.length];
      const pouch = new Pouch({
        ownerId: user._id,
        pouchName: `pouch${i}`,
        itemIds: []
      });
      user.pouches.push(pouch._id);
      pouches.push(pouch);
    }

    for (let i = 0; i < 40; i++) {
      let user = users[i % users.length];
      let pouch = pouches[i % pouches.length];
      const item = new Item({
        itemName: `item${i}`,
        link: `http://www.item${i}.com`
      });
      pouch.itemIds.push(item._id);
      items.push(item);
    }

    const promises = [];
    const collections = [users, pouches, items];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);
  }
});
