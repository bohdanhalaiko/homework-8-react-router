import React from 'react';

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
        <input
          type="text"
          placeholder="email"
          value={this.state.input}
          onChange={this.handleInput}
          required
        />
        <button type="submit">log-in</button>
      </form>
    if (this.props.isLogIn) {
      content = <button onClick={() => this.props.logOff()}>log-off</button>;
    }
    return (
      <div>{content}</div>
    );
  }
}

export default Login