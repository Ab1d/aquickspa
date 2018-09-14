import React from "react";
import ReactDOM from "react-dom";

class ListView extends React.Component {
  constructor(props) {
    super(...props);
    this.renderList = this.renderList.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.state = {
      searchTerm: "",
      filteredUsers: []
    };
  }
  deleteUser(index) {
    this.props.deleteUser(index);
  }
  renderList(user, index) {
    return (
      <div key={index}>
        <span>Name: {user.name}</span>
        <span>Email: {user.email}</span>
        <span>Flight: {user.flight}</span>
        <span>Luggage: {user.luggage}</span>
        <span>
          <button onClick={this.deleteUser.bind(this, index)}>delete</button>
        </span>
      </div>
    );
  }
  searchUsers(e) {
    this.setState({
      searchTerm: e.target.value
    });

    var filteredUsers = this.props.users.filter(user =>
      user.name.includes(e.target.value)
    );
    this.setState({
      filteredUsers: filteredUsers
    });
  }
  render() {
    return (
      <div>
        {this.props.users.length > 0 && (
          <div>
            <label> search users </label>
            <input type="text" onChange={this.searchUsers} />
          </div>
        )}
        {this.state.filteredUsers.length > 0
          ? this.state.filteredUsers.map(this.renderList)
          : this.props.users.map(this.renderList)}
      </div>
    );
  }
}

module.exports = ListView;
