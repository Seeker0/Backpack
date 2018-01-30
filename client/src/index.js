import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import App from "./Components/App";
// import registerServiceWorker from "./registerServiceWorker";
// import "bootstrap/dist/css/bootstrap.css";
// import "./CSS/index.css";
//
// import logger from "redux-logger";
// import thunk from "redux-thunk";
//
// import { djello } from "./reducers";
//
// let store = createStore(djello, applyMiddleware(logger, thunk));
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();
