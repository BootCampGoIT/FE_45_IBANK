import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  .navigationList {
    display: flex;
    align-items: center;
  }
  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationListItem {
    color: cornflowerblue;
    text-transform: uppercase;
  }
`;
