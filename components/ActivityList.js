import React, { Component } from "react";
import { connect } from "react-redux";
import GenerateActivity from "./GenerateActivity";

class ActivityList extends Component {
  render() {
    return (
      <div className="ActivityList">
        <h1 id="1">Activity List</h1>
        <GenerateActivity activities={this.props.activities} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.list.activities,
    list: state.list,
  };
};

export default connect(mapStateToProps)(ActivityList);
