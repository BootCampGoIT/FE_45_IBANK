import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 60px;
  background-color: #242323;
  border-bottom: 1px solid cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .iconMenu {
    width: 40px;
    height: 40px;
    fill: cornflowerblue;
    &:hover {
      cursor: pointer;
      fill: #2d4570;
    }
  }
`;
