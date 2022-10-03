import styled from "styled-components";
import style from '../../../settings/style.json';

export const HeaderContainer = styled.div`
  background-color: ${style.color["dark-3"]};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const BurgerMenuWrapper = styled.div`
  height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const PierLogo = styled.img.attrs({
    src: "/logo192.png"
})`
  width: 36px;
  height: 36px;
  margin: 7px;
`;

