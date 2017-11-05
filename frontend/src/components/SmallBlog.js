import React from "react";
import { Link } from "react-router-dom";
import "../styles/SmallBlog.css";

export default function SmallBlog(props) {
  return (
    <div className="SmallBlog col-1-4">
      <h3>{props.post.title}</h3>
      <img src={props.post.image} alt="blog" />
      <div>
        <p>
          {props.truncate(props.post.body)}
          <Link to={"/blogs/" + props.post.post_id}>Read more...</Link>
        </p>
      </div>
    </div>
  );
}
