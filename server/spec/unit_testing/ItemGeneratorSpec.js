let itemGenerator = require("../../lib/itemGenerator");
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
      //console.log("This is our item:", item);
      let isItem = item instanceof Item;
      expect(isItem).toBe(true);
    }catch(err){
      console.log(err);
    }
  });
  it("returns item with meta's ogType as string if link is string", async()=>{
    try{
      let item = await itemGenerator("Sam", "Puppy", this.user._id);
      expect(item.meta.data.ogType).toBe("string");
    }catch(err){
      console.error(err);
    }
  });
  it("returns item with meta's ogType as pic if link is an image", async()=>{
    try{
      let item = await itemGenerator("Sam", "http://www.guoguiyan.com/data/out/110/68445755-kite-wallpapers.jpg", this.user._id);
      expect(item.meta.data.ogType).toBe("pic");
    }catch(err){
      console.error(err);
    }
  });
  it("returns item with meta data", async()=>{
    try{
      let item = await itemGenerator("Sam", "samlangenfeld.com", this.user._id);
      //console.log("This is our item:", item);
      expect(Object.keys(item.meta.data).length).toBeTruthy();
    }catch(err){
      console.error(err);
    }
  });
  it("does not return item when fake link(url) is passed", async()=>{
    try{
      let item = await itemGenerator("Sam", "samlangen.com", this.user._id);
      //console.log("This is our item:", item);
      expect(item).toBe(undefined);
    }catch(err){
      console.error(err);
    }
  });

  afterAll(async () =>
  {
    try{
      await User.find().remove();
      await Item.find().remove();
    }catch(err){
      console.log(err);
      }
  });
});
