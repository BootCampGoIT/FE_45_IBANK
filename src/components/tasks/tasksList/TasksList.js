import React, { useContext } from "react";
import { LanguageContext } from "../../App";

const TasksListItem = ({ task, removeTask }) => {
  const {
    language: {
      tasks: { tasksListItem },
    },
  } = useContext(LanguageContext);
  const removeItem = () => removeTask(task.id);
  return (
    <li>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button type='button' onClick={removeTask}>
        {tasksListItem.delete}
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
