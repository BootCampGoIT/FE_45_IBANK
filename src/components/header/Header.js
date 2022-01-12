import React from "react";
import Navigation from "../navigation/Navigation";
import { HeaderWrapper } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderWrapper>
      <h3 style={{ color: "cornflowerblue" }}>IBANK</h3>
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
