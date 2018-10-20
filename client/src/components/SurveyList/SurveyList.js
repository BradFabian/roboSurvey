import React from "react";

const SurveyList = props => (
  <ul className="list-group">
    {props.survey.map(result => (
      <li className="list-group-item" key={result._id}>
        <h2>
          Test:
          {result.surveyName} Survey:
          {result.points}
        </h2>
      </li>
    ))}
  </ul>
);

export default SurveyList;
