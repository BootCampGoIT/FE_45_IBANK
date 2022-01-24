import React, { createContext } from "react";
import Header from "./header/Header";
import modalHOC from "./hoc/ModalHOC";
import Toggler from "./hoc/RenderProp";
import Test from "./hoc/Test";
import Main from "./main/Main";

export const MyContext = createContext();
console.log(MyContext); //Provider , Consumer

const App = () => {
  return (
    <MyContext.Provider value='Message'>
      <Test />
      <hr />
      <Header />
      <Main />
    </MyContext.Provider>
  );
};

export default App;
