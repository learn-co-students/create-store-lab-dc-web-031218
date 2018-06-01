import React, { Component } from "react";

class UserInput extends Component {
  constructor() {
    super();
    this.state = { username: "", hometown: "" };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            name="hometown"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
