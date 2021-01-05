import React, { Component } from "react";
import { connect } from "react-redux";
import GenerateList from "./GenerateList";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h1 id="1">Todo List</h1>
        <GenerateList items={this.props.items} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.list.items,
  };
};

export default connect(mapStateToProps)(TodoList);
