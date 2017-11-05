import React from "react";
import "../styles/BlogComment.css";

export default function BlogComment(props) {
  return (
    <div className="BlogComment">
      <form onSubmit={props.submit}>
        <h3>Leave a Comment</h3>

        <div className="BlogCommentTop">
          <img src={props.currentUser.avatar} />
          <div>
            <p>{props.currentUser.name}</p>
            <p>{props.currentUser.username}</p>
          </div>
        </div>

        <input placeholder="Comment Title..." />
        <textarea rows="8" placeholder="Comment..." />
        <div>
          <button className="btn">Submit</button>
          <button onClick={props.close} className="btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
