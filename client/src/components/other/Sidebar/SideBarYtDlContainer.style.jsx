import styled from "styled-components";
import {toggleMainMenu} from "../Header/BurgerMenu.component";

export const SideBarYtDl = styled.div`
    div {
      margin: 0 10px 10px 10px;
      display:flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-evenly;
    }

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 420px) {
    display: block;
  }

`;