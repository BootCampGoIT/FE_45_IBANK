import React from "react";
import TasksForm from "../tasks/taskForm/TasksForm";
import Tasks from "../tasks/Tasks";

import { MainWrapper } from "./MainStyled";
const Main = () => {
  return (
    <MainWrapper>
      {/* <TasksForm /> */}
      <Tasks />
    </MainWrapper>
  );
};

export default Main;
