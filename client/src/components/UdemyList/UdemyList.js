import React from "react";

const UdemyList = props => (
  <ul className="list-group">
    {props.udemy.map(result => (
      <li className="list-group-item" key={result.results.id}>
        <h2>
          Course Name
          {result.results.title} Link:
          {result.results.url}
        </h2>
      </li>
    ))}
  </ul>
);

export default UdemyList;
