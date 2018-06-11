import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home'
import Fine from './components/Fine'
import MyVehicle from './components/MyVehicle'
import NearByParking from './components/NearByParking'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                <img src="https://www.dinardirham.com/img/blockchain-icon.png" style={{ marginTop: "-5px", height: "35px" }} /> Blockchain Solution
              </Link>
            </nav>

            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
              <Route
                exact
                path="/fine"
                component={Fine}
              />
              <Route
                exact
                path="/myvehicle"
                component={MyVehicle}
              />
              <Route
                exact
                path="/parking"
                component={NearByParking}
              />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
