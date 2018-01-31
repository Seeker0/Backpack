import React, { PureComponent } from "react";
import img404 from "../images/404.jpg";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.css";
import DragDrop from "./DragDrop";

import { WelcomeContainer, LearnContainer } from "../Containers";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/learn" component={LearnContainer} />
          <Route exact path="/dragDrop" component={DragDrop} />
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
