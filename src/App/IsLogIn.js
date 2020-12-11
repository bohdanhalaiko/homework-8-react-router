import React from 'react';
import dataUsers from './DataStorage.js';

class IsLogIn extends React.Component {
  render() {
    const user = dataUsers({ email: this.props.isLogIn }, 'get')
    return this.props.isLogIn
      ? <p>Hello! {user.firstName || user.email}</p>
      : <p>You are not logged in.</p>;
  }
}

export default IsLogIn;