import React from "react";

const ResultList = props => (
  <ul className="list-group">
    {props.result.map(result => (
      <li className="list-group-item" key={result._id}>
        <p>
          Skill:
          {result.surveyName} points:
          {result.points}
        </p>
      </li>
    ))}
  </ul>
);

export default ResultList;
