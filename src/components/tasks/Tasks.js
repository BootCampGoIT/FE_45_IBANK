import React, { useState, useEffect } from "react";
import { addNewTask, getAllTasks } from "../../services/tasks";
import Modal from "../modal/Modal";
import TasksForm from "./taskForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const initialState = {
  tasks: [],
  isTaskFormOpen: false,
  isLoading: false,
  error: "",
};

const Tasks = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getAllTasks().then((tasks) => setState((prev) => ({ ...prev, tasks })));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    console.log("updated");
  }, [state.tasks]);

  const onToggle = () => {
    setState((prev) => ({ ...prev, isTaskFormOpen: !prev.isTaskFormOpen }));
  };

  const addTask = async (task) => {
    try {
      const id = await addNewTask(task);
      // console.log(id);
      setState((prev) => ({
        ...prev,
        tasks: [...prev.tasks, { id, ...task }],
      }));
    } catch (error) {
      // setState({ error: "Something went wrong!" });
    }
  };

  return (
    <>
      <button type='button' onClick={onToggle}>
        Toggle
      </button>
      {state.isTaskFormOpen && (
        <Modal toggleModal={onToggle}>
          <TasksForm addTask={addTask} />
        </Modal>
      )}
      <TasksList tasks={state.tasks} />
    </>
  );
};

export default Tasks;

// import React, { Component } from "react";
// import TasksForm from "./taskForm/TasksForm";
// import TasksList from "./tasksList/TasksList";
// import Modal from "../modal/Modal";
// import { addNewTask, getAllTasks, removeTaskItem } from "../../services/tasks";
// class Tasks extends Component {
// state = {
//   tasks: [],
//   isTaskFormOpen: false,
//   isLoading: false,
//   error: "",
// };

//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     try {
//       const tasks = await getAllTasks();
//       this.setState({ tasks });
//     } catch {
//       this.setState({ error: "Something went wrong!" });
//     } finally {
//       await this.setState({ isLoading: false });
//     }
//   }

//   addTask = async (task) => {
//     try {
//       const id = await addNewTask(task);
//       this.setState((prev) => ({ tasks: [...prev.tasks, { id, ...task }] }));
//     } catch (error) {
//       this.setState({ error: "Something went wrong!" });
//     }
//   };

//   removeTask = async (id) => {
//     try {
//       await removeTaskItem(id);
//       this.setState((prev) => ({
//         tasks: prev.tasks.filter((task) => task.id !== id),
//       }));
//     } catch (error) {
//       this.setState({ error: "Something went wrong!" });
//     }
//   };
//   onTaskFormOpen = () =>
//     this.setState((prev) => ({ isTaskFormOpen: !prev.isTaskFormOpen }));
//   render() {
//     return (
//       <div>
//         {this.state.isLoading && (
//           <Modal>
//             <h2>...loading</h2>
//           </Modal>
//         )}
//         <button type='button' onClick={this.onTaskFormOpen}>
//           Open
//         </button>
//         {this.state.isTaskFormOpen && (
//           <Modal toggleModal={this.onTaskFormOpen}>
//             <TasksForm
//               addTask={this.addTask}
//               toggleModal={this.onTaskFormOpen}
//             />
//           </Modal>
//         )}
//         <hr />
//         <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
//       </div>
//     );
//   }
// }

// export default Tasks;
