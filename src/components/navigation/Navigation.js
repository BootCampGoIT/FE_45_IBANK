import React, { useContext } from "react";

import { mainRoutes } from "../../routes/mainRoutes";
import { LanguageContext } from "../App";
import { NavigationWrapper } from "./NavigationStyled";
const Navigation = () => {
  const { language } = useContext(LanguageContext);
  return (
    <NavigationWrapper>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <li className='navigationListItem' key={route.path}>
            {language.navigation[route.name]}
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
