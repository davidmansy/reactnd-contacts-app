import React, { Component } from 'react';
import AddUserForm from './AddUserForm';
import UsersList from './exercice-all-1/UsersList';

class VideoGame extends Component {
  state = {
    users: [],
    addError: false
  };

  addUser = (event, user) => {
    event.preventDefault();
    var found = this.state.users.find(u => {
      return u.userName === user.userName;
    });
    if (found) {
      this.setState(currentState => ({
        addError: true
      }));
    } else {
      this.setState(currentState => ({
        users: [...currentState.users, user],
        addError: false
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Video Game</h2>
        <AddUserForm add={this.addUser} error={this.state.addError} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default VideoGame;
