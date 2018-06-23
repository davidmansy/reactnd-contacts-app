import React, { Component } from 'react';
import AddMessageForm from './AddMessageForm';

class ChatWindow extends Component {
  addUserMessage = message => {
    message.username = this.props.user.username;
    this.props.addMessage(message);
  };

  render() {
    const { user, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === user.username
                  ? 'message sender'
                  : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>

        <div>
          <AddMessageForm addUserMessage={this.addUserMessage} />
        </div>
      </div>
    );
  }
}

export default ChatWindow;
