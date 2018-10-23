import React from "react";

const SurveyList = props => (
  <ul className="list-group">
    {props.survey.map(result => (
      <li className="list-group-item" key={result._id}>
        <h2>
          You took the
          {""}
          <span> {result.surveyName} </span> {""} test and got {""}
          <span> {result.points} </span>
          {""}
          points
        </h2>
      </li>
    ))}
  </ul>
);

export default SurveyList;
