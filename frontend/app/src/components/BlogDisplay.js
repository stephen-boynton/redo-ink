import React from "react";

export default function BlogDisplay(props) {
	return (
		<article className="preview-modal blog-display">
			<h2>{props.post.title}</h2>
			<img src={props.post.image} />
			<p>{props.post.body}</p>
		</article>
	);
}
