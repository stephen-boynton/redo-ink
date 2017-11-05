import React from "react";
import "../styles/ProfileIndividual.css";

export default function ProfileIndividual(props) {
  return (
    <div className="ProfileIndividual col-3-4">
      <img src={props.profile.avatar} />
      <div>
        <h3>{props.profile.name}</h3>
        <h2>{props.profile.username}</h2>
        <p> {props.profile.bio}</p>
      </div>
    </div>
  );
}
