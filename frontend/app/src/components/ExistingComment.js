import React from "react";
import "../styles/ExistingComment.css";

export default function ExistingComment(props) {
  return (
    <div className="ExistingComment">
      <img src={props.comment.avatar} />
      <div>
        <h2>{props.comment.username}</h2>
        <p>
          <strong>{props.comment.title}</strong>
        </p>
        <p>{props.comment.comment}</p>
      </div>
    </div>
  );
}
