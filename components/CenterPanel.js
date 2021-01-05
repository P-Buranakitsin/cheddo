import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleThunk,
  storeText,
  submitButtonThunk,
  deleteItemThunk,
} from "../store/actions/actionCreator";

class CenterPanel extends Component {
  inputTextHandler = (event) => {
    this.props.dispatch(storeText(event));
    this.props.dispatch(handleThunk());
  };

  buttonHandler = () => {
    if (this.props.term !== "") {
      this.props.dispatch(submitButtonThunk());
    }
  };

  deleteHandler = () => {
    this.props.dispatch(deleteItemThunk());
  };

  render() {
    return (
      <div className="CenterPanel">
        <h1 id="2">Task Name</h1>
        <h2 className="is-user-editing">
          {(!this.props.isEditing && "Create new list") ||
            (this.props.isEditing && "Update/Delete existing lists")}
        </h2>
        <input
          type="text"
          onChange={this.inputTextHandler}
          value={this.props.term}
        />
        <p className="user-typing">{this.props.isTyping && "Typing....."}</p>
        <input
          className="submit-button"
          type="button"
          value={
            (this.props.isEditing && "UPDATE") ||
            (!this.props.isEditing && "BUTTON")
          }
          size="50"
          onClick={this.buttonHandler}
        />
        <input type="button" value="DELETE" onClick={this.deleteHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isTyping: state.list.isTyping,
    isEditing: state.list.isEditing,
    term: state.list.term,
    items: state.list.items,
    selectedListID: state.list.selectedListID,
  };
};

export default connect(mapStateToProps)(CenterPanel);
