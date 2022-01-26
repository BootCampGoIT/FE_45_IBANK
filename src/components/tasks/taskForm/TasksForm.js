import React, { useState, useContext } from "react";
import { LanguageContext, MessageContext } from "../../App";

const initialState = {
  name: "",
  description: "",
};

const TasksForm = ({ addTask }) => {
  const message = useContext(MessageContext);
  const [state, setState] = useState(initialState);
  const { language } = useContext(LanguageContext);
  const {
    tasks: { tasksForm },
  } = language;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(state);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2>{message}</h2>
      <form onSubmit={onHandleSubmit}>
        <label>
          {tasksForm.name}:
          <input
            type='text'
            value={state.name}
            name='name'
            onChange={onHandleChange}
          />
        </label>
        <label>
          {tasksForm.description}:
          <textarea
            value={state.description}
            name='description'
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>{tasksForm.addTask}</button>
      </form>
    </>
  );
};

export default TasksForm;
