import styled from "styled-components";

export const BurgerMenuIcon = styled.div`
  background: url("/images/ion-icons/burgerMenu.svg") no-repeat;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  padding: 0;
  filter: invert(80%);
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    filter: invert(90%);
  }
`;
