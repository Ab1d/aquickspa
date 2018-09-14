import React from "react";
import ListView from "./ListView";
import UserForm from "./userForm";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      users: []
    };
  }
  formSubmit(user) {
    var users = this.state.users;
    users.push(user);
    this.setState({
      users
    });
  }
  deleteUser(index) {
    var users = this.state.users;
    delete users[index];
    this.setState({
      users
    });
  }
  render() {
    return (
      <div>
        <UserForm formSubmit={this.formSubmit} />
        <ListView users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

module.exports = MainPage;
