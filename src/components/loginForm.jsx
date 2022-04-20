import React from "react";
import Joi from "joi-browser";
import Form from "../commonComponents/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {/* 3 password -> changes adefault type (text) to password */}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
