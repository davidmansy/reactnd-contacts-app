import React, { Component } from 'react';

class AddMessageForm extends Component {
  state = {
    messageText: ''
  };

  updateMessageText = text => {
    this.setState(currentState => ({
      messageText: text
    }));
  };
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  addTextMessage = event => {
    event.preventDefault();
    const message = {};
    message.text = this.state.messageText;
    this.props.addUserMessage(message);
  };

  render() {
    return (
      <form
        className="input-group"
        onSubmit={event => this.addTextMessage(event)}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={this.state.messageText}
          onChange={event => this.updateMessageText(event.target.value)}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    );
  }
}

export default AddMessageForm;
