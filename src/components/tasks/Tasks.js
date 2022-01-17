import React, { Component } from "react";
import TasksForm from "./taskForm/TasksForm";
import TasksList from "./tasksList/TasksList";
import Modal from "../modal/Modal";
import { v4 as uuidv4 } from "uuid";

class Tasks extends Component {
  state = {
    tasks: [],
    isTaskFormOpen: false,
    tasks2: [],
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isTaskFormOpen !== this.state.isTaskFormOpen) {
      return true;
    }
    if (nextState.tasks !== this.state.tasks) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tasks !== prevState.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      this.setState((prev) => ({
        tasks2: prev.tasks,
      }));
    }
  }

  addTask = (task) => {
    this.setState((prev) => ({
      tasks: [...prev.tasks, { ...task, id: uuidv4() }],
    }));
  };
  removeTask = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };
  onTaskFormOpen = () =>
    this.setState((prev) => ({ isTaskFormOpen: !prev.isTaskFormOpen }));
  render() {
    return (
      <div>
        <button type='button' onClick={this.onTaskFormOpen}>
          Open
        </button>
        {this.state.isTaskFormOpen && (
          <Modal toggleModal={this.onTaskFormOpen}>
            <TasksForm
              addTask={this.addTask}
              toggleModal={this.onTaskFormOpen}
            />
          </Modal>
        )}

        <hr />
        <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default Tasks;
