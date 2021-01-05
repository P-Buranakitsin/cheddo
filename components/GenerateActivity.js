import React from "react";
import { connect } from "react-redux";

const GenerateList = (props) => (
  <div className="ActivityBox">
    {props.activities.map((activity, index) => (
      <li key={index} activityid={index}>
        {activity}
      </li>
    ))}
  </div>
);

export default connect()(GenerateList);
