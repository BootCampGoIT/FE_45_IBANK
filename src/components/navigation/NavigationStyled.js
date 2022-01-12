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
    color: #6495ed;
    text-transform: uppercase;
    cursor: pointer;
  }
  .navigationListItem:hover {
    color: #324566;
  }
`;
