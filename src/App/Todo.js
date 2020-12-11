import React from 'react';
import dataUsers from './DataStorage.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.startState();
  }
  startState = () => {
    let state = dataUsers({ email: this.props.isLogIn }, 'get');
    delete state.email;
    state.edit = false;
    state.firstName = state.firstName || '';
    state.lastName = state.lastName || '';
    state.country = state.country || '';
    state.about = state.about || '';
    return state;
  }
  handleEditProfile = () => {
    const {edit} = this.state;
    if (edit) {
      let userUpdate = {...this.state};
      userUpdate.email = this.props.isLogIn;
      userUpdate.edit = false;
      for(const prop in userUpdate){
        if(!userUpdate[prop]) delete userUpdate[prop];
      }
      dataUsers(userUpdate, 'set');
    }
    this.setState({ edit: !edit });
  }
  handleCancel = () => {
    this.setState(this.startState());
  }
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const user = dataUsers({ email: this.props.isLogIn }, 'get');
    let li = Object.keys(user).map(el => {
      return <li key={el}>Your {el}: {user[el]}</li>
    });
    const editProfile =
      <div>
        <label>First name
          <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleInput} />
        </label><br />
        <label>Last name
          <input type="text" name='lastName' value={this.state.lastName} onChange={this.handleInput} />
        </label><br />
        <label>Country
          <input type="text" name='country' value={this.state.country} onChange={this.handleInput} />
        </label><br />
        <label>About
          <textarea name='about' value={this.state.about} onChange={this.handleInput} />
        </label><br />
        <button onClick={this.handleCancel}>Cancel</button>
      </div>;
    return (
      <div>
        <ul>
          {li}
        </ul>
        <br />
        {this.state.edit && editProfile}
        <button onClick={this.handleEditProfile}>Edit profile</button>
      </div>
    )
  }
}

export default Todo;