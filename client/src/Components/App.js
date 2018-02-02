import React, { PureComponent } from "react";
import img404 from "../images/404.jpg";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  WelcomeContainer,
  LearnContainer,
  DashboardContainer
} from "../Containers";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/learn" component={LearnContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route
            render={() => (
              <img id="not-found" src={img404} alt="404 page not found" />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
