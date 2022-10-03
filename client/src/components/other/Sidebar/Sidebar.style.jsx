import styled, { css } from "styled-components";
import style from '../../../settings/style.json';
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  background-color: ${style.color["dark-3"]};
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: ${props => props.headerHeight}px;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  
  @media screen and (max-width: 420px) {
    right: 0;
  }
`;

export const MainMenu = styled.div`
  margin: 10px 0;
  padding: 0;
  display: flex;
  flex-flow:column;
`;

const menuIconMini = css`
  height: 25px;
  width: 25px;
  margin: 5px 0 10px;
`;

const menuIcon = css`
  display: inline-block;
  content: "";
  background: url(images/ion-icons/${props => props.icon}.svg) no-repeat;
  background-size: contain;
  height: 1em;
  width: 1em;
  padding: 0;
  margin: 0 15px 0 0;
  filter: invert(80%);
`;

const menuItemMini = css`
  padding: 0.5em 1.5em 0.5em 1.5em;
  flex-direction: column;
  font-size: 10px;
  &:hover {
    padding: 0.5em 1.4em 0.5em 1.6em;
  }

  &::before {
    ${menuIconMini}
  }
`;

const menuItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  position: relative;
  border-bottom: 1px dotted ${style.color["dark-5"]};
  margin: 0;
  padding: 0.5em 2.5em 0.5em 1.5em;
  color: ${style.color["light-2"]};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-color: ${style.color["dark-5"]};
    padding: 0.5em 2.4em 0.5em 1.6em;
  }
`;

export const MenuItem = styled(Link)`
  ${menuItem}

  &::before {
    ${menuIcon}
  }

  ${props => props.$minimised ? menuItemMini : ""};

  @media (max-width: 820px) {
    ${menuItemMini}
  }
  @media (max-width: 420px) {
    ${menuItem}
    &::before {
      ${menuIcon}
    }
  }
`;
