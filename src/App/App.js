import React from 'react';
import dataUsers from './DataStorage.js';
import Info from './Info.js';
import IsLogIn from './IsLogIn.js';
import Login from './Login.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogIn: false };
  }
  logIn = (email) => {
    dataUsers({ email: email }, 'check');
    this.setState({ isLogIn: email });
  }
  logOff = () => {
    const { isLogIn } = this.state;
    this.setState({ isLogIn: !isLogIn });
  }
  render() {
    return (
      <Router>
        <div>
          <IsLogIn isLogIn={this.state.isLogIn} />
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/to-do">Info</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/login">
              <Login
                isLogIn={this.state.isLogIn}
                logOff={this.logOff}
                logIn={this.logIn}
              />
            </Route>
            <Route path="/to-do">
              <Info isLogIn={this.state.isLogIn} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
