import React from "react";
import Comment from "./Comment";
import "../styles/FeaturedComments.css";

export default function FeaturedComments(props) {
  return (
    <div className="FeaturedComments col-2-4">
      <h3>Featured Comments</h3>
      {props.comments.map(comment => {
        return <Comment key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
}
