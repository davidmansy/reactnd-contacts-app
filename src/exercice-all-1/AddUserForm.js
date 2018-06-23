import React, { Component } from 'react';

class AddUserForm extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      gameQty: 0
    }
  };

  updateUser = event => {
    const user = this.state.user;
    const prop = event.target.name;
    user[prop] = event.target.value;
    this.setState(currentState => ({
      user: user
    }));
  };

  addUser = event => {
    this.props.add(event, this.state.user);
    this.resetUser();
  };

  resetUser = () => {
    this.setState(currentState => ({
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        gameQty: 0
      }
    }));
  };

  oneEmptyField = () => {
    const { firstName, lastName, userName } = this.state.user;
    if (firstName === '' || lastName === '' || userName === '') {
      return true;
    }
    return false;
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={this.state.user.firstName}
          onChange={this.updateUser}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={this.state.user.lastName}
          onChange={this.updateUser}
        />
        <input
          type="text"
          name="userName"
          placeholder="Enter user name"
          value={this.state.user.userName}
          onChange={this.updateUser}
        />
        <button disabled={this.oneEmptyField()}>Add</button>
        {this.props.error && (
          <div>Error: you cannot add a user with the same user name!</div>
        )}
      </form>
    );
  }
}

export default AddUserForm;
