var request = require("request");
var app = require("../../app.js");
const fetch = require("node-fetch");
var server = app.listen(3005, "localhost");

let baseURI = "http://localhost:3005";

let loggedInOnlyMessage = "Logged In Only";
let loggedOutOnlyMessage = "Already logged in";
let validUser = { username: "hooligan0", password: "password0" };

const fetchRequest = (url, options) => {
  return fetch(url, options).then(response => {
    console.log(response.headers);
    return response.json();
  });
};

describe("server", () => {
  it("returns logged in only message for logged in only routes", async done => {
    let response = await fetchRequest(baseURI + "/logout");
    expect(response.message).toBe(loggedInOnlyMessage);
    response = await fetchRequest(baseURI + "/users");
    expect(response.message).toBe(loggedInOnlyMessage);
    response = await fetchRequest(baseURI + "/items");
    expect(response.message).toBe(loggedInOnlyMessage);
    response = await fetchRequest(baseURI + "/pouches");
    expect(response.message).toBe(loggedInOnlyMessage);
    done();
  });

  describe("POST /login", () => {
    it("logs in and returns a valid user", async done => {
      let response = await fetchRequest(baseURI + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validUser)
      });
      expect(response._id).toBeTruthy();
      expect(response.username).toBeTruthy();
      expect(response.email).toBeTruthy();

      //need to find a way to simulate having cookies for future
      //server calls that require a logged in user
      // let Cookies = response.headers["set-cookie"]
      //   .map(function(r) {
      //     return r.replace("; path=/; httponly", "");
      //   })
      //   .join("; ");
      console.log(response);
      done();
    });
  });

  // it("returns logged out only message for logged out only routes", async done => {
  //   let response = await fetch(baseURI + "/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(validUser)
  //   });
  //   expect(response.message).toBe(loggedInOnlyMessage);
  //   response = await fetchRequest(baseURI + "/register");
  //   expect(response.message).toBe(loggedInOnlyMessage);
  //   done();
  // });
});

server.close();
