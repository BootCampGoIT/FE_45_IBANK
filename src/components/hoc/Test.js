import React from "react";
import wrapper from "./Hoc";
import { MyContext } from "../App";

const Test = () => {
  return <MyContext.Consumer>{(value) => <h2>{value}</h2>}</MyContext.Consumer>;
};

export default wrapper({ name: "Test" })(Test);
