import React, { Component } from "react";
import TodoList from "../components/TodoList";
import ActivityList from "../components/ActivityList";
import CenterPanel from "../components/CenterPanel";
import { connect } from "react-redux";
import { storeJSON } from "../store/actions/actionCreator";
import "../components/Style.css";

class Container extends Component {
  componentDidMount() {
    // Get first five objects from the website
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      // json() method of the Body mixin takes a Response stream and
      // reads it to completion. It returns a promise that resolves
      // with the result of parsing the body text as JSON
      .then((response) => response.json())
      .then((todoList) => {
        // Select title property from array of objects
        const todos = todoList.map((todoList) => todoList.title);
        this.props.dispatch(storeJSON(todos));
      });
  }

  render() {
    return (
      <div>
        <TodoList />
        <CenterPanel />
        <ActivityList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps)(Container);
