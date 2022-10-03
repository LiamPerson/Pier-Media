import styled from "styled-components";
import style from '../../../settings/style.json';

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
