import styled from "styled-components";

export const BurgerMenuWrapper = styled.div`
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const BurgerMenuIcon = styled.div`
  background: url("/images/icons/burgerMenu.svg") no-repeat;
  width: 3em;
  height: 3em;
  margin: 0 0.5em 0 0;
  padding: 0;
  filter: invert(80%);
  cursor: pointer;
  display: none;
  
  :hover {
    filter: invert(90%);
  }

  @media screen and (max-width: 420px) {
    display: block;
  }

`;
