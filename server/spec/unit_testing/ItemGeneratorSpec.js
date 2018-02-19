let itemGenerator = require("../../lib/newItems");
//connecting to mongoose
var mongoose = require("mongoose");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;
const mongo = require("../../mongo")();
//
let Item = require("../../models/item");
let User = require("../../models/user");

describe("itemGenerator", () => {
  beforeAll(async () => {
    try {
      this.user = await User.create({
        username: "testUser",
        email: "testUser@gmail.com",
        password: "testUser@gmail.com"
      });
    } catch (err) {
      console.log(err);
    }
  });
  it("returns an item", async () => {
    try{
      let item = await itemGenerator("Sam", "www.google.com", this.user._id);
      console.log("This is our item:", item);
      let isItem = item instanceof Item;
      expect(isItem).toBe(true);
    });
  }catch(err){
    console.log(err);
  }
  afterAll(async () => {
    try{
      await User.find().remove();
      await Item.find().remove();
    });
});
}catch(err){
  console.log(err);
}
