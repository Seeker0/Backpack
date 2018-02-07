import React, { PureComponent } from "react";
import img404 from "../images/404.jpg";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  WelcomeContainer,
  LearnContainer,
  DashboardContainer,
  SettingsContainer
} from "../Containers";

import { Route, Switch, Redirect } from "react-router-dom";

class App extends PureComponent {
  componentDidMount() {
    this.props.getUser();
    this.url = this.props.location.pathname;
  }

  render() {
    let authenticated = this.props.authenticated;
    let authorized = this.props.authorized;
    let unprotectRoutes = ["/", "/learn"];

    if (!authenticated) {
      return <h2>Loading</h2>;
    }

    let redirect = this.props.redirect;
    if (redirect) {
      redirect = <Redirect to={redirect} />;
    } else {
      redirect = null;
    }
    if (
      !authorized &&
      !unprotectRoutes.includes(this.props.location.pathname)
    ) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div>
        {redirect}
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/learn" component={LearnContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/settings" component={SettingsContainer} />
          <Route
            render={() => (
              <img id="not-found" src={img404} alt="404 page not found" />
            )}
          />: <LearnContainer />
        </Switch>
      </div>
    );
  }
}

export default App;
