import React from "react";

const SurveyList = props => (
  <ul className="list-group">
    {props.survey.map(result => (
      <li className="list-group-item" key={result._id}>
        <h2>
          Test:
          {result.name} Survey:
          {result.survey.question}
          {result.survey.answers}
          {result.survey.correctanswer}
        </h2>
      </li>
    ))}
  </ul>
);

export default SurveyList;
