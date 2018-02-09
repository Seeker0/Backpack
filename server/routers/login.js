let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let models = require("./../models");
let User = mongoose.model("User");

// ----------------------------------------
// Passport
// ----------------------------------------

const passport = require("./../config/passport");

// ----------------------------------------
// Routes for /login
// ----------------------------------------

router.get(
  "/facebook",
  passport.authenticate("facebook-token", {
    scope: ["user_friends", "email", "public_profile"]
  }),
  (req, res) => {
    res.json(req.user);
  }
);

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", { failureRedirect: "/login" }),
//   function(req, res) {
//     res.json(req.user);
//   }
// );

router.get(
  "/google",
  passport.authenticate("google-token", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      ,
      "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  }),
  function(req, res) {
    res.json(req.user);
  }
);

// router.get("/google/callback", passport.authenticate("google-token"), function(
//   req,
//   res
// ) {
//   res.json(req.user);
// });

router.post("/", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.json(req.user);
});

module.exports = router;
