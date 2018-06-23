import React, { Component } from 'react';

class UsersList extends Component {
  state = {
    displayGameQty: false
  };

  toggleGameQtyDisplay = () => {
    this.setState(currentState => ({
      displayGameQty: !currentState.displayGameQty
    }));
  };

  render() {
    return (
      <div>
        {!!this.props.users.length && (
          <button onClick={this.toggleGameQtyDisplay}>Show games</button>
        )}
        <table>
          {!!this.props.users.length && (
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Games Played</th>
              </tr>
            </thead>
          )}
          <tbody>
            {this.props.users.map(user => {
              return (
                <tr key={user.userName}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.userName}</td>
                  <td>
                    {`${user.userName} played ${
                      this.state.displayGameQty ? user.gameQty : '*'
                    } games`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
