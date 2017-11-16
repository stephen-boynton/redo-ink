import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { signUpService } from "../services";
import SignUpForm from "../components/SignUpForm";
import "../styles/SignUpView.css";

class SignUpView extends Component {
  state = {
    errorMessage: "",
    success: false
  };
  _handleSignUp = e => {
    e.preventDefault();
    e.persist();
    const newMember = {
      name: e.target[0].value,
      email: e.target[1].value,
      username: e.target[2].value,
      pass: e.target[3].value,
      avatar: e.target[5].value,
      bio: e.target[6].value
    };
    this.props.signUp(newMember);
  };
  _showForm() {
    if (this.props.isSignedUp) {
      return <h2 className="SignUpForm">Account created, please log in</h2>;
    } else {
      return (
        <SignUpForm
          error={this.state.errorMessage}
          submit={this._handleSignUp}
        />
      );
    }
  }
  render() {
    return <div className="SignUpView col-4-4">{this._showForm()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedUp: state.signedUp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUpService(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
