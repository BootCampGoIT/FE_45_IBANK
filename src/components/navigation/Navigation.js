import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavigationWrapper } from "./NavigationStyled";
const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <li className='navigationListItem' key={route.path}>
            {route.name}
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
