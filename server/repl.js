const repl = require('repl').start({});
const lodash = require('lodash');
const helpers = require('./helpers');




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




