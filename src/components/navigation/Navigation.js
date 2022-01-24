import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { MyContext } from "../App";
import { NavigationWrapper } from "./NavigationStyled";
const Navigation = () => {
  return (
    <MyContext.Consumer>
      {(message) => (
        <NavigationWrapper>
          <ul className='navigationList'>
            {mainRoutes.map((route) => (
              <li className='navigationListItem' key={route.path}>
                {route.name}
              </li>
            ))}
            <li style={{ color: "red" }}>{message}</li>
          </ul>
        </NavigationWrapper>
      )}
    </MyContext.Consumer>
  );
};

export default Navigation;
