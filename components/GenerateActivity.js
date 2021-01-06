import React from "react";
import { connect } from "react-redux";

const GenerateList = (props) => (
  <div className="ActivityBox">
    {props.activities.map(
      (activity, index) =>
        (activity[0] === "CREATE" && (
          <li key={index} activityid={index}>
            User created<span style={{ color: "aqua" }}> {activity[1]} </span>{" "}
            list
          </li>
        )) ||
        (activity[0] === "UPDATE" && (
          <li key={index} activityid={index}>
            User updated from{" "}
            <span style={{ color: "green" }}> {activity[2]} </span>
            list to <span style={{ color: "yellow" }}> {activity[1]} </span>list
          </li>
        )) ||
        (activity[0] === "DELETE" && (
          <li key={index} activityid={index}>
            User deleted<span style={{ color: "red" }}> {activity[1]} </span>{" "}
            list
          </li>
        ))
    )}
  </div>
);

export default connect()(GenerateList);
