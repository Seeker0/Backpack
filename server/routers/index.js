"use strict";

const users = require("./users");
const pouches = require("./pouches");
const items = require("./items");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");

const Routes = { users, pouches, items, login, logout, register };

module.exports = Routes;
