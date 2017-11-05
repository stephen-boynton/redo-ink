import React from "react";
import { Link } from "react-router-dom";
import "../styles/LatestBlog.css";

export default function LatestBlog(props) {
  return (
    <div className="LatestBlog col-2-4">
      <img src={props.post.image} alt="blog" />
      <div className="LB-content">
        <h2>{props.post.title}</h2>
        <p>
          {props.truncate(props.post.body)}{" "}
          <Link to={"/blogs/" + props.post.post_id}>Read more...</Link>
        </p>
      </div>
    </div>
  );
}
