import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppContainer from "./Containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./CSS/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { currentUser } from "./reducers";

let store = createStore(currentUser, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
