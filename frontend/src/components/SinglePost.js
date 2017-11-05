import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePost.css";

export default class SinglePost extends Component {
  _truncateText() {
    const blogPost = this.props.post.body;
    const truncatedPost = blogPost.substring(0, 150);
    return truncatedPost + "...";
  }
  render() {
    return (
      <div className="SinglePost">
        <h3>{this.props.post.title}</h3>
        <img src={this.props.post.image} />
        <p>
          {this._truncateText()}{" "}
          <Link to={"/blogs/" + this.props.post.post_id}>Read more.</Link>
        </p>
      </div>
    );
  }
}
