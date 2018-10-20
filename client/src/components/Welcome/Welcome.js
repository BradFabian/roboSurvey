import React from "react";

const Welcome = props => (
  <div
    style={{
      textAlign: "center",
      color: "white",
      textShadow: "white 0.1em 0.1em 0.2em"
    }}
  >
    <h1 key={props.name._id}>
      Welcome {props.name.firstname} {props.name.lastname}
    </h1>
  </div>
);

export default Welcome;
