import React from 'react';
import dataUsers from './DataStorage.js';
import Info from './Info.js';
import IsLogIn from './IsLogIn.js';
import Login from './Login.js';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

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
          <Link to="/login">
            <MenuItem>
              <Typography variant="inherit">Log in</Typography>
            </MenuItem>
          </Link>
          <Link to="/to-do">
            <MenuItem>
              <Typography variant="inherit">Info</Typography>
            </MenuItem>
          </Link>
          <hr/>

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
      </Router >
    );
  }
}

export default App;
