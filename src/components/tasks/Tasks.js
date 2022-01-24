import React, { Component } from "react";
import TasksForm from "./taskForm/TasksForm";
import TasksList from "./tasksList/TasksList";
import Modal from "../modal/Modal";
import { addNewTask, getAllTasks, removeTaskItem } from "../../services/tasks";

import withLog from "../hoc/WithLog";

class Tasks extends Component {
  state = {
    tasks: [],
    isTaskFormOpen: false,
    isLoading: false,
    error: "",
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const tasks = await getAllTasks();
      this.setState({ tasks });
    } catch {
      this.setState({ error: "Something went wrong!" });
    } finally {
      await this.setState({ isLoading: false });
    }
  }

  addTask = async (task) => {
    try {
      const id = await addNewTask(task);
      this.setState((prev) => ({ tasks: [...prev.tasks, { id, ...task }] }));
    } catch (error) {
      this.setState({ error: "Something went wrong!" });
    }
  };

  removeTask = async (id) => {
    try {
      await removeTaskItem(id);
      this.setState((prev) => ({
        tasks: prev.tasks.filter((task) => task.id !== id),
      }));
    } catch (error) {
      this.setState({ error: "Something went wrong!" });
    }
  };
  onTaskFormOpen = () =>
    this.setState((prev) => ({ isTaskFormOpen: !prev.isTaskFormOpen }));
  render() {
    return (
      <div>
        {this.state.isLoading && (
          <Modal>
            <h2>...loading</h2>
          </Modal>
        )}
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

export default withLog(Tasks);

// const getData = (callback) => {
//   callback();
// };

// const getData = (init) => {
//   return (value) => {
//     init += value;
//     console.log(init);
//   };
// };

// const getResult = (init) => (value) => () => {
//   init += value;
//   console.log(init);
// };

// const res = getData(20);
// res(5);
// res(5);
// res(5);
// res(5);
// res(5);
// res(5);
