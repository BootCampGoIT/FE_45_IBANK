import React from "react";
import AuthForm from "../auth/AuthForm";
import LoanForm from "../creditForm/LoanForm";

import { MainWrapper } from "./MainStyled";
const Main = () => {
  return (
    <MainWrapper>
      {/* <AuthForm /> */}
      <LoanForm />
    </MainWrapper>
  );
};

export default Main;
