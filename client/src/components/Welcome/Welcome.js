import React from "react";

const Welcome = props => (
  <h1 key={props.name._id}>
    Welcome {props.name.firstname} {props.name.lastname}
  </h1>
);

export default Welcome;
