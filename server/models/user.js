const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

let UserSchema = new Schema({
  username: String,
  email: String,
  passwordHash: { type: String },
  pouches: [{ type: Schema.Types.ObjectId, ref: "Pouch" }],
  privacy: { type: Number }
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password")
  .get(function() {
    return this._password;
  })
  .set(function(value) {
    this._password = value;
    this.passwordHash = bcrypt.hashSync(value, 8);
  });

UserSchema.statics.findOrCreate = async function(query, username) {
  try {
    let user = await User.findOne(query);
    if (!user) {
      user = new User(query);
      user.username = username;
      await user.save();
    }
    return user;
  } catch (e) {
    console.log(e);
  }
};

var User = mongoose.model("User", UserSchema);
module.exports = User;
