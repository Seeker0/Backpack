const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('../models');

const mongodbUrl = 'mongodb://localhost/pockets_development';

const { User, Pocket, Item } = require('../models');

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const users = [];
    const pockets = [];
    const items = [];

    for (let i = 0; i < 10; i++) {
      const user = new User({
        userName: `hooligan${i}`,
        email: `${i}is@nobodycares.com`,
        passwordHash: `password${i}`,
        pockets: []
      });
      users.push(user);
    }

    for (let i = 0; i < 20; i++) {
      let user = users[i % users.length];
      const pocket = new Pocket({
        ownerId: user._id,
        pocketName: `pocket${i}`,
        itemIds: []
      });
      user.pockets.push(pocket._id);
      pockets.push(pocket);
    }

    for (let i = 0; i < 40; i++) {
      let user = users[i % users.length];
      let pocket = pockets[i % pockets.length];
      const item = new Item({
        itemName: `item${i}`,
        link: `http://www.item${i}.com`
      });
      pocket.itemIds.push(item._id);
      items.push(item);
    }

    const promises = [];
    const collections = [users, pockets, items];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);
  }
});
