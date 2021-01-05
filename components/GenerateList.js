import React from "react";
import { connect } from "react-redux";
import { showText } from "../store/actions/actionCreator";

const GenerateList = (props) => (
  <div className="TodoBox">
    {props.items.map((item, index) => (
      <li
        key={index}
        onClick={(event) => props.dispatch(showText(event))}
        listid={index}
      >
        {item}
      </li>
    ))}
  </div>
);

export default connect()(GenerateList);
