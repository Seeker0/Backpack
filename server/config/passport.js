const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: 'Invalid Username!' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Invalid Password!' });
      }

      return done(null, user);
    });
  })
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_APP_ID,
//       clientSecret: process.env.FACEBOOK_APP_SECRET,
//       callbackURL: "http://localhost:3000/login/facebook/callback",
//       profileFields: ["id", "displayName", "email"]
//     },
//     async function(accessToken, refreshToken, profile, cb) {
//       try {
//         let user = await User.findOrCreate({ email: profile.emails[0].value });
//         user.facebookId = profile.id;
//         user.username = profile.displayName;
//         user = await user.save();
//         return cb(null, user);
//       } catch (e) {
//         console.error(e);
//         cb(e);
//       }
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
