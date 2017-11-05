import React from "react";
import "../styles/SignUpForm.css";

export default function SignUpForm(props) {
  return (
    <div className="SignUpForm col-3-4">
      <h2>Sign Up for The Ink</h2>
      <p>{props.error}</p>
      <form onSubmit={props.submit} className="col-2-4">
        <input required autoFocus placeholder="Name..." />
        <input required placeholder="Email..." />
        <input required placeholder="Username..." />
        <input required type="password" placeholder="Password..." />
        <input required type="password" placeholder="Confirm password..." />
        <input placeholder="Avatar URL" />
        <textarea rows="5" placeholder="Short biogrophy" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
