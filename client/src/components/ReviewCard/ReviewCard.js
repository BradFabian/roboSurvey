import React from "react";
import "./ReviewCard.css";

const ReviewCard = props => (
  <div className="card" style={props.style}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Review:</strong> {props.review}
        </li>
      </ul>
    </div>
  </div>
);

export default ReviewCard;
