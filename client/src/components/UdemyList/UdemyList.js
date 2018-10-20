import React from "react";

const UdemyList = props => (
  <ul className="list-group">
    {props.udemy.map(result => (
      <li className="list-group-item" key={result.id}>
        <h2>
          Course Name
          {result.title} Link:
          {result.url}
        </h2>
      </li>
    ))}
  </ul>
);

export default UdemyList;
