import React, { Component } from "react";

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({ type: "ADD_USER", user: this.state });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="hometown"
            name="hometown"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
