import styled from "styled-components";
import style from '../../../settings/style.json';

export const SideBar = styled.div`
  background-color: ${style.color["dark-3"]};
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  
  @media screen and (max-width: 420px) {
    //display: none;
    right: 0;
  }
`;

export const MainMenu = styled.div`
  margin: 10px 0;
  padding: 0;
  display: flex;
  flex-flow:column;
`;


