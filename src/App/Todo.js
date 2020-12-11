import React from 'react';
import dataUsers from './DataStorage.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    const { edit } = this.state;
    if (edit) {
      let userUpdate = { ...this.state };
      userUpdate.email = this.props.isLogIn;
      userUpdate.edit = false;
      for (const prop in userUpdate) {
        if (!userUpdate[prop]) delete userUpdate[prop];
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
      return (
        <li className="li" key={el}>
          <span className="prop">Your {el}:</span>
          <span>{user[el]}</span>
        </li>
      );
    });
    const editProfile =
      <>
        {
          ['firstName', 'lastName', 'country', 'about'].map((el, i) => {
            return (
              <div key={i}>
                <TextField

                  variant="filled"
                  size="small"
                  label={el}
                  name={el}
                  value={this.state[el]}
                  onChange={this.handleInput}
                /><br />
              </div>
            );
          })
        }
        <Button
          key="button"
          size="large"
          variant="outlined"
          onClick={this.handleCancel}
        >
          Cancel
        </Button>
      </>;
    return (
      <div>
        <ul className="ul">
          {li}
        </ul>
        {this.state.edit && editProfile}
        <Button
          size="large"
          variant="outlined"
          onClick={this.handleEditProfile}
        >
          Edit profile
        </Button>
      </div>
    )
  }
}

export default Todo;