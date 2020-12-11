import React from 'react';
import Todo from './Todo.js';

class Info extends React.Component {
  render() {
    let content = <p>Pleace log-in</p>;
    if (this.props.isLogIn) {
      content = <Todo isLogIn={this.props.isLogIn} />;
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Info;