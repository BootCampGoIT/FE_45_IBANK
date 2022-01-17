import React, { Component } from "react";

const initialState = { name: "", description: "" };

class TasksForm extends Component {
  state = initialState;

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.props.toggleModal();
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            value={this.state.description}
            name='description'
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add task</button>
      </form>
    );
  }
}

export default TasksForm;
