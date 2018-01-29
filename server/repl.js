const repl = require('repl').start({});
const lodash = require('lodash');
const helpers = require('./helpers');
const mongoose = require('mongoose');
const models = require('./models');

require('./mongo')().then(() => {
  // Set `models` to be available in
  // the REPL by name
  repl.context.models = models;
  // Set each model to be available in the REPL
  // by name
  Object.keys(models).forEach(modelName => {
    repl.context[modelName] = mongoose.model(modelName);
  });
  // Helper function to output the result of
  // a query
  repl.context._lg = name => {
    return results => {
      console.log('*****************');
      console.log(name);
      console.log('********************');
      console.log(results);
      console.log('********************');
      console.log();
      return results;
    };
  };
  repl.context.lg = data => {
    let newData;
    newData = data;
    console.log(newData);
    console.log(data);
  };
});

// ----------------------------------------
// Libs
// ----------------------------------------
repl.context.lodash = lodash;

// ----------------------------------------
// Helpers
// ----------------------------------------
repl.context.helpers = helpers;
Object.keys(helpers).forEach(key => {
  repl.context[key] = helpers[key];
});

// ----------------------------------------
// Logging
// ----------------------------------------
repl.context.lg = console.log;
