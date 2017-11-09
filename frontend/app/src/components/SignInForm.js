import React from "react";
import "../styles/SignInForm.css";

export default function SignInForm(props) {
  return (
    <div className="SignInForm col-3-4">
      <h2>Sign In to The Ink</h2>
      <form onSubmit={props.submit}>
        <input autoFocus required placeholder="Username..." />
        <input type="password" required placeholder="Password..." />
        <p>{props.error}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
