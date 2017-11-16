import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import SignInForm from "../components/SignInForm";
import { loginService } from "../services";
import "../styles/SignInView.css";

class SignInView extends Component {
  //ERROR:  This component rerenders so that it will not display the successful login correctly

  state = {
    errorMessage: ""
  };
  _handleLogIn = e => {
    e.preventDefault();
    e.persist();
    const loginInfo = {
      username: e.target[0].value,
      pass: e.target[1].value
    };
    this.props.login(loginInfo);
  };

  _successLogin = () => {
    if (this.props.user) {
      return <h1 className="SignUpForm">You have been logged in.</h1>;
    } else if (!this.props.user) {
      return (
        <SignInForm
          error={this.state.errorMessage}
          submit={this._handleLogIn}
        />
      );
    }
  };
  render() {
    return <div className="SignInView">{this._successLogin()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: loginInfo => dispatch(loginService(loginInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);
