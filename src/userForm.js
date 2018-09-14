import React from "react";

const INITIAL_STATE = {
  userName: "",
  userEmail: "",
  userFlight: "",
  userLuggage: ""
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFlight = this.handleFlight.bind(this);
    this.handleLuggage = this.handleLuggage.bind(this);

    this.state = INITIAL_STATE;
  }
  submitForm(event) {
    event.preventDefault();
    this.props.formSubmit({
      name: this.state.userName,
      email: this.state.userEmail,
      flight: this.state.userFlight,
      luggage: this.state.userLuggage
    });
    this.setState(INITIAL_STATE);
  }

  handleName(e) {
    this.setState({ userName: e.target.value });
  }
  handleEmail(e) {
    this.setState({ userEmail: e.target.value });
  }
  handleFlight(e) {
    this.setState({ userFlight: e.target.value });
  }
  handleLuggage(e) {
    this.setState({ userLuggage: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="formItem">
          <label>Name: </label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleName}
          />
        </div>
        <div className="formItem">
          <label>Email : </label>
          <input
            type="text"
            value={this.state.userEmail}
            onChange={this.handleEmail}
          />
        </div>
        <div className="formItem">
          <label>Flight: </label>
          <input
            type="text"
            value={this.state.userFlight}
            onChange={this.handleFlight}
          />
        </div>
        <div className="formItem">
          <label>Luggage: </label>
          <input
            type="text"
            value={this.state.userLuggage}
            onChange={this.handleLuggage}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

module.exports = UserForm;
