import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' }
    ]
  };

  addMessage = message => {
    this.setState(currentState => ({
      messages: [...this.state.messages, message]
    }));
  };

  render() {
    const { users, messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => {
            return (
              <ChatWindow
                key={user.username}
                user={user}
                messages={messages}
                addMessage={this.addMessage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
