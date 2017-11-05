import React from "react";
import { Link } from "react-router-dom";
import "../styles/FeaturedBlog.css";

export default function FeaturedBlog(props) {
  return (
    <div className="FeaturedBlog col-4-4">
      <img src={props.post.image} alt="blog" />
      <div className="FB-content">
        <h3>
          <span>FEATURED: </span>
          <Link to={"/blogs/" + props.post.post_id}>{props.post.title}</Link>
        </h3>
        <h3>
          <span>author: </span>
          <Link to={"/authors/" + props.post.username}>{props.post.name}</Link>
        </h3>
        <p>
          {props.truncate(props.post.body)}
          <Link id="readMore" to={"/blogs/" + props.post.post_id}>
            Read more...
          </Link>
        </p>
      </div>
    </div>
  );
}
