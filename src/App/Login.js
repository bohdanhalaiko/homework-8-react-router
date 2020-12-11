import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // if (/.+@.+\..+/i.test(this.state.input)) {
    if (this.state.input) {
      this.props.logIn(this.state.input);
      this.setState({ input: '' });
    } else {
      return alert(this.state.input + ': incorrectly email')
    }
  }
  handleInput = (event) => {
    this.setState({ input: event.target.value });
  }
  render() {
    let content =
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          label="Required"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          placeholder="email"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <Button variant="outlined" type="submit" size="large">log-in</Button>
      </form>
    if (this.props.isLogIn) {
      content =
        <Button
          size="large"
          variant="outlined"
          onClick={() => this.props.logOff()}
        >
          log-off
        </Button>;
    }
    return (
      <div>{content}</div>
    );
  }
}

export default Login