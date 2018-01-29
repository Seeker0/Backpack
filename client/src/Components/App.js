import React, { PureComponent } from "react";
import img404 from "../images/404.jpg";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.css";

import Welcome from "./Welcome";
import WelcomeContainer from "../Containers/WelcomeContainer";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route render={() => <img src={img404} alt="404 page not found" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
