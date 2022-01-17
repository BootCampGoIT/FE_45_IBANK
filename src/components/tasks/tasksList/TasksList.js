import React from "react";

const TasksListItem = ({ task, removeTask }) => {
  const removeItem = () => removeTask(task.id);
  return (
    <li>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button type='button' onClick={removeItem}>
        Delete
      </button>
    </li>
  );
};

const TasksList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TasksListItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TasksList;
