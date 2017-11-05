import React from "react";
import { Link } from "react-router-dom";
import "../styles/Comment.css";

export default function Comment(props) {
  return (
    <div className="ExistingComment">
      <img src={props.comment.avatar} />
      <div className="C-content">
        <Link to={"/authors/" + props.comment.username}>
          <h4>{props.comment.username}</h4>
        </Link>
        <p>
          <strong>{props.comment.title}</strong>
        </p>
        <p>Comment: {props.comment.comment}</p>
        <Link to={"/blogs/" + props.comment.post_id}>Read entire post... </Link>
      </div>
    </div>
  );
}
