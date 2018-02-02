var request = require("request");
var app = require("../../app.js");
var server = app.listen(3005, "localhost");

const fetch = require("node-fetch");

let baseURI = "http://localhost:3005";

let loggedInOnlyMessage = "Logged In Only";
let loggedOutOnlyMessage = "Already logged in";
let validUser = { username: "hooligan0", password: "password0" };

const fetchRequest = async (url, options) => {
  return fetch(url, options).then(response => {
    return response;
  });
};

describe("server", () => {
  it("returns 401 for logged in only routes", async done => {
    try {
      let response = await fetchRequest(baseURI + "/logout", {});
      expect(response.status).toBe(401);
      response = await fetchRequest(baseURI + "/users");
      expect(response.status).toBe(401);
      response = await fetchRequest(baseURI + "/items");
      expect(response.status).toBe(401);
      response = await fetchRequest(baseURI + "/pouches");
      expect(response.status).toBe(401);
      done();
    } catch (e) {
      console.error(e);
      done();
    }
  });

  describe("POST /login", () => {
    it("logs in and returns a valid user", async done => {
      let response = await fetchRequest(baseURI + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validUser)
      });
      response = await response.json();
      console.log(response);
      expect(response.username).toBeTruthy();
      expect(response.email).toBeTruthy();
      expect(response._id).toBeTruthy();

      //need to find a way to simulate having cookies for future
      //server calls that require a logged in user
      // let Cookies = response.headers["set-cookie"]
      //   .map(function(r) {
      //     return r.replace("; path=/; httponly", "");
      //   })
      //   .join("; ");
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
