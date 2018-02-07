const express = require('express');
const app = express();

// ----------------------------------------
//Mongoose connection
// ----------------------------------------
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;
const mongo = require('./mongo')();

// ----------------------------------------
// Model Schemas
// ----------------------------------------

const { User } = require('./models');

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieSession = require('cookie-session');

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'secret']
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// ----------------------------------------
// Flash Messages
// ----------------------------------------
const flash = require('express-flash-messages');
app.use(flash());

// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require('method-override');
const getPostSupport = require('express-method-override-get-post-support');

app.use(
  methodOverride(
    getPostSupport.callback,
    getPostSupport.options // { methods: ['POST', 'GET'] }
  )
);

// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header('Referer') || '/';
  next();
});

// ----------------------------------------
// Public
// ----------------------------------------
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);

app.use(morganToolkit());

// ----------------------------------------
// Cors
// ----------------------------------------
const cors = require('cors');
app.use(cors());

// ----------------------------------------
// Passport
// ----------------------------------------
const passport = require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// ----------------------------------------
// login/logout Middlewares
// ----------------------------------------

const loggedInOnly = (req, res, next) => {
  return req.session.passport && req.session.passport.user
    ? next()
    : res.status(401).send();
};

const loggedOutOnly = (req, res, next) => {
  return !req.user ? next() : res.status(403).send();
};

// ----------------------------------------
// Routes
// ----------------------------------------

const { users, pouches, items, login, logout, register } = require('./routers');

app.use('/users', loggedInOnly, users);
app.use('/pouches', loggedInOnly, pouches);
app.use('/items', loggedInOnly, items);
app.use('/login', loggedOutOnly, login);
app.use('/logout', loggedInOnly, logout);
app.use('/register', loggedOutOnly, register);

app.get('/googleafe78dace4ca2ebf.html', (req, res) => {
  res.render('/welcome/googleafe78dace4ca2ebf.html');
});

app.get('/currentUser', loggedInOnly, async (req, res, next) => {
  try {
    let currentUser = await User.findById(req.session.passport.user);
    res.json(currentUser);
  } catch (err) {
    next(err);
  }
});

// app.get('/', (req, res, next) => {
//   res.sendFile('/client/build/index.html', { root: './' });
// });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// ----------------------------------------
// Template Engine
// ----------------------------------------
const expressHandlebars = require('express-handlebars');
const helpers = require('./helpers');

const hbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: 'views/',
  defaultLayout: 'application'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT || process.argv[2] || 3001;
const host = 'localhost';

let args;
process.env.NODE_ENV === 'production' ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }
  res.status(500).render('errors/500', { error: err });
});

module.exports = app;
