import React, { Component } from "react";
import "../styles/NewBlogForm.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

export default class NewBlogForm extends Component {
  constructor() {
    super();
    this.state = {
      body: "",
      errorMessage: "",
      submitted: false
    };
  }

  _getTokeForAuth() {
    return window.localStorage.getItem("token");
  }

  _handleSubmit = event => {
    event.preventDefault();
    event.persist();
    const token = this._getTokeForAuth();
    if (token) {
      const post = {
        title: event.target[0].value,
        image: event.target[1].value,
        body: event.target[2].value,
        tags: event.target[3].value,
        token: token
      };
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
      event.target[3].value = "";
      this.props.submit(post);
      this.setState({
        submitted: true
      });
    } else {
      this.setState({
        errorMessage: "Please login before posting."
      });
    }
  };

  render() {
    return (
      <div className="NewBlogForm col-3-4">
        <form onSubmit={this._handleSubmit}>
          <h2>New Blog Post</h2>
          <hr />
          <input required type="text" ref="title" placeholder="Blog Title" />
          <input
            required
            type="text"
            ref="image"
            placeholder="Main Image URL"
          />
          <textarea rows="8" placeholder="Type your thoughts..." />
          <input type="text" ref="tags" placeholder="select, tags, here..." />
          <p>{this.state.errorMessage}</p>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            {/* <button
              id="preview-button"
              onClick={this.props.preview}
              type="button"
            >
              Preview
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}
