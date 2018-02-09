const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var GoogleTokenStrategy = require('passport-google-token').Strategy;
var FacebookTokenStrategy = require('passport-facebook-token');

const User = require('../models/user');

let server =
  process.env.NODE_ENV === 'production'
    ? 'https://appbackpack.herokuapp.com'
    : 'http://localhost:3001';

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      let user = await User.findOne({ username: username });
      console.log(user);
      if (!user) {
        return done(null, false, { message: 'Invalid Username!' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Invalid Password!' });
      }
      user = await User.findOne({ username: username }).select('-passwordHash');
      return done(null, user);
    } catch (e) {
      return done(null, false, e);
    }
  })
);

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET
      // callbackURL: `${server}/login/facebook/callback`,
      // profileFields: ["id", "displayName", "email"]
    },
    async function(accessToken, refreshToken, profile, cb) {
      try {
        console.log('====================Facebook Profile');
        console.log(profile);
        let user = await User.findOrCreate({ email: profile.emails[0].value });
        if (!user.facebookId) {
          user.facebookId = profile.id;
        }
        if (!user.username) {
          user.username = profile.displayName;
        }
        user = await user.save();
        user = await User.findById(user._id).select('-passwordHash');
        return cb(null, user);
      } catch (e) {
        console.error(e);
        cb(e);
      }
    }
  )
);

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      // callbackURL: `${server}/login/google/callback`,
      // passReqToCallback: true
    },
    async function(accessToken, refreshToken, profile, done) {
      console.log('=====================Google Profile');
      console.log(profile);
      try {
        let user = await User.findOrCreate({
          email: profile.emails[0].value
        });
        if (!user.googleId) {
          user.googleId = profile.id;
        }
        if (!user.username) {
          user.username = profile.displayName;
        }
        user = await user.save();
        user = await User.findById(user._id).select('-passwordHash');

        return done(null, user);
      } catch (e) {
        return done(e, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
