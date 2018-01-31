import * as pouchActions from "./pouchActions";
import * as itemActions from "./itemActions";
import * as userActions from "./userActions";

let actions = {};

Object.keys(pouchActions).forEach(actionName => {
  actions[actionName] = pouchActions[actionName];
});

Object.keys(itemActions).forEach(actionName => {
  actions[actionName] = itemActions[actionName];
});

Object.keys(userActions).forEach(actionName => {
  actions[actionName] = userActions[actionName];
});

export default actions;
